// Based on my shader coded during the revision 2024 shader showdown
// modified during the jam to add more transitions and I tried to fix
// normals on the main saw wave shape (replacing asin(sin(x)) with a
// proper function... sorry for the messy indentation

precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

const float pi = acos(-1.);
#define r2(a) mat2(cos(a),-sin(a),sin(a), cos(a))
vec4 s,t;
float sd_b(vec3 p, vec3 e) {
  p = abs(p) -e ;
  return length(max(p,0.)) + min(max(max(p.x,p.y),p.z),0.);
}

float tri(float a) {
	a/=4.;return min(fract(a),fract(-a))*4.-1.;
}
float map(vec3 p) {
  float d;
  {
    vec3 q = p;
    float m = mix(.2,2.,t.w);
    q.xy *= r2(0.5*q.z*sin(time*0.1));
    q.xy = abs(q.xy);
    q.xy -= 1.5;
    q.x += tri(0.5*q.z+time)*m;
    q.y += tri(0.5*q.z+time+.5)*m;
//    q.x += asin(sin(q.z+time)) * .5;
//    q.y += asin(cos(q.z+time)) * .5;
    d = sd_b(q, vec3(0.2,0.2,111))-.1;
  }
  {
    vec3 q = p;
	q.z+=pow(t.x,5.);
    float id = floor(q.z);
    q.z -= id;
    q.xz *= r2(time+id);
    d = min(d, sd_b(q, vec3(0.1))-0.1);
  }
  return d;
}
vec3 nor(vec3 p) {
  vec3 e = vec3(5e-3,0,0);
  return normalize(vec3(
  map(p+e.xyy)-map(p-e.xyy),
  map(p+e.yxy)-map(p-e.yxy),
  map(p+e.yyx)-map(p-e.yyx)
  ));
}

void main(void)
{
    s = time*(120./60.)/vec4(1,4,8,16);
    t = fract(s);
    vec2 uv = (gl_FragCoord.xy  - .5 * resolution.xy ) / resolution.y;
    vec3 col = vec3(1);
    vec3 ro = vec3(2.*cos(time),1.+2.*sin(time),4.);
    float fv = .5;
    if (t.w > .75)
        ro = vec3(4,0,t.w);
    else if (t.w >.5){
        ro = vec3(0,4,sin(time));
        fv=mix(.4,.5,pow(t.x,2.));
    }
  else if (t.w > .25)
    ro = vec3(4.*sin(time),4.,sin(time));
  vec3 cf = normalize(-ro),
  cu = normalize(cross(cf, vec3(1,0,0))),
  cl = normalize(cross(cf,cu)),
  rd = mat3(cl,cu,cf)*normalize(vec3(uv, fv));
  float r,d,h=0.;
  //i=0.;
  float N = 123.;
  r=0.;
  for (int i=0; i<123; i++) {
    d =  1e9;
    { vec3 p = ro+rd*r;
      d=map(p);
      if (d<1e-4 && h<10.) {
	    p=ro+rd*(r+d);
        vec3 n = nor(p);
        col *= 1.-pow(1.-dot(-rd,n),1.5);
        rd=reflect(rd,n);
        r=1e-3;
        ro=p;
        h++;
        continue;
      }
      {
        vec3 p = ro+rd*r;
        float th = 0.0;
        p.z -= floor(p.z);

        p.xy = abs(p.xy);
	    p.x+=sin((-p.y))*t.y;
        p.xy -= 3.+pow(t.w,2.);
        p.xy *= r2(.25*pi);
        float n = floor(mix(1.,3.,t.x));
	    if (t.w>.5&&t.w<.75)
            p.xy -= clamp(floor(p.xy),-1.,n);
        d=min(d, sd_b(p, vec3(0.5+t.x,.05,.05)));
      }
      {
	      vec3 p = ro+rd*r;
	      p.xy *= r2(.25*pi);
	      float n = floor(mix(1.,4.,t.x));
	      p.xy *= r2(0.01*pow(t.x,2.)*p.z);

	      p.xy = abs(p.xy);
	      p.xy -= 4.;
	      p.x += tri(0.5*(p.z + time*2.))*pow(t.x,2.);

	      d=min(d, sd_b(p, vec3(0.1+.1*pow(t.y,2.),.1+.1*pow(t.y,2.),5.)));
      }

    }
    if (d>0.) r+=d*.9;
    if (d<1e-4||r>1e5) break;
  }
  col *= clamp(1./(r*.1),0.,1.);


  gl_FragColor = vec4(col, 1.);
}
