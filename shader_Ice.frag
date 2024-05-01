precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

#define STEPS 100
#define EPS 0.02
#define FAR 100.0
#define PI 3.14159265359

// smin by iq
float smin( float a, float b, float k )
{
    float h = clamp(0.5+0.5*(b-a)/k, 0.0, 1.0 );
    return mix(b, a, h) - k*h*(1.0-h);
}

float map(vec3 p) {
    p = mod(p, 10.0) - 5.0;
    return smin(length(p)-1.25, min(length(p.yz), 
                min(length(p.xz), length(p.xy))), 0.5)-1.0;
}

vec3 grad(vec3 p) {
    vec2 q = vec2(0.0, EPS);
    return vec3(map(p + q.yxx) - map(p - q.yxx),
                map(p + q.xyx) - map(p - q.xyx),
                map(p + q.xxy) - map(p - q.xxy));
}

// Cube and bump mapping by iq
vec3 cubeMap(vec3 p, vec3 n) {
    vec3 a = texture(iChannel0, 0.1*p.yz).rgb;
    vec3 b = texture(iChannel0, 0.1*p.xz).rgb;
    vec3 c = texture(iChannel0, 0.1*p.xy).rgb;
    n = abs(n);
    return (a*n.x + b*n.y + c*n.z)/(n.x+n.y+n.z);   
}

vec3 bumpMap(vec3 p, vec3 n, float c) {
    vec2 q = vec2(0.0, 0.25);
	vec3 grad = -(vec3(cubeMap(p+q.yxx, n).r, cubeMap(p+q.xyx, n).r, cubeMap(p+q.xxy, n).r)-c)/q.y;
    vec3 t = grad - n*dot(grad, n);
    return normalize(n - t);
}

vec3 shade(vec3 ro, vec3 rd, float t) {
    vec3 p = ro + t*rd;
    vec3 n = normalize(grad(p));
    vec3 tex = cubeMap(p, n);
    n = bumpMap(p, n, tex.r);
    
    vec3 col = 3.0*vec3(0.3, 0.5, 0.7)*tex*(pow(1.0-dot(-rd, n), 4.0)*.6 + .4*dot(-rd, n));
    float fog = 1.0 - exp(-0.01*t);
    return mix(col, vec3(1.0), fog);
}

void main( void ) {
    
	vec2 uv = (-resolution.xy + 2.0*gl_FragCoord.xy) / resolution.y;
    vec2 vi = gl_FragCoord.xy/resolution.xy;
    
    vec3 ro = vec3(0.0, 0.0, 2.5+time);
    vec3 rd = normalize(vec3(uv, -1.0));
    
    float t = 0.0, d = 0.0;
    for (int i = 0; i < STEPS; ++i) {
        d = .55*map(ro + t*rd);
        if (d < EPS || t > FAR) break;
        t += d;
        rd.xy = cos(0.05*d)*rd.xy + sin(0.05*d)*vec2(-rd.y, rd.x);
    }
	
    vec3 col = d < EPS ? shade(ro, rd, t) : vec3(1.0);
	col += 1.0-vec3(1.0)*pow(vi.x*vi.y*(1.0-vi.x)*(1.0-vi.y), 0.03);
    
    col = max(col-0.26, 0.0);
	col = (col*(6.2*col+.5))/(col*(6.2*col+1.7)+0.06);
    
    col = pow(col, vec3(1.0/2.2));    
	gl_FragColor = vec4(col,1.0);
}
