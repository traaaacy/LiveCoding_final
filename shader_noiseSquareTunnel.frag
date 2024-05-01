precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform vec2 resolution; // This must be defined outside of main()


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 4
float fbm (in vec2 st) {
    st/=2.;
    st+=time/8.;
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value/2000.;
}
mat2 rot(float a)
{
 return mat2(cos(a), -sin(a), sin(a), cos(a));   
}
float shadowCircle(vec2 p, float r, float i)
    {
        p +=vec2(0.02, 0.02)*rot(time/100.);//light direction
        
        float a  =atan( p.y,p.x);
        float shape = fbm(p);//sin(a*i+i/1.*time/10.+time)/10.;
 	float ss = 0.07;
    float k = 1.0-smoothstep(r-ss, r+ss, max(abs(p.x),abs(p.y))-0.2+shape);
    return pow(k,1.1);
}

float rimCircle(vec2 p, float r, float i)
{
    float a  =atan( p.y,p.x);
    float shape = fbm(p);//sin(a*i+i/1.*time/10.+time)/10.;
 	float ss = 0.004;//0.0053
    
    float rim = 0.004;
    float k = smoothstep(r-ss, r+ss, max(abs(p.x),abs(p.y))-0.2+shape);
    float k2 = smoothstep(r-ss+rim, r+ss+rim, max(abs(p.x),abs(p.y))-0.2+shape);
    k =k-k2;
    return clamp(k/2., 0.0, 1.);
}

float Circle(vec2 p, float r, float i)
{
 	float ss = 0.009;
    float a  =atan( p.y,p.x);
    float shape = fbm(p);//sin(a*i+i/1.*time/10.+time)/10.;
    
    float k = smoothstep(r-ss, r+ss, max(abs(p.x),abs(p.y))-0.2+shape);   
    return k+rimCircle(p,r-0.001, i);//shadowCircle(p,r);
}

void main(void)
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy/resolution.xy;
	uv = uv*2.0-1.0;
    uv.x*=resolution.x/resolution.y;
   uv/=1.5;
    
    ///uv.x+=0.5;
   // float t1 = vec3(texture(iChannel0,uv)).x;
   // float t2 = vec3(texture(iChannel1,uv)).x;
    vec3 col = vec3(0.9);
    vec3 col2 = vec3(0.);
    // Time varying pixel color
    float druck = 0.0;
    //uv-=vec2(2.);
    //col = mix(col, vec3(1.), rimCircle(uv, 0.8));

    float num = 20.;
    float minWidth = -0.2;
    for(float i = 0.;i<num;i++){
        uv/= .9+mod(fract(i +time/20.), 0.4);
            
        uv*=rot(i+time/30.*random(vec2(i*8.+1., i+1.))*2.);
       // t1 = vec3(texture(iChannel0,uv/2.)).x;
       // t2 = vec3(texture(iChannel1,uv/1.)).x;

    	col *=shadowCircle(uv, minWidth+i/num, i);  
        
        //color wahle
        col2 = vec3( 0.2+i/num, 0.2+i/num, 1.);
        col2 = vec3( 0.2+i/num*1., 0.2+i/num/2., 0.3)+0.1;
        //col2 = vec3( pow(i/num, 3.), pow(i/num, 2.),pow(i/num, 3.))+0.3;
        col2 = vec3( pow(i/num, 4.), pow(i/num, 2.),pow(i/num, 1.5))+0.65;

    col = mix(col, col2 -t1*step(1.,mod(i,2.))-t2*1.2*(1.0-step(1.,mod(i,2.))), Circle(uv, minWidth+i/num, i));
	col = mix(col, col2, rimCircle(uv, minWidth+i/num, i)*i/num);
    //uv+=vec2(0.4,0.2);
        
    }
col = sin(col+0.05);    
    // Output to screen
    gl_FragColor = vec4(pow(col, vec3(1.)),1.0);
}
