video = document.createElement('video');
video.loop = true;
video.crossOrigin = "anonymous";
video.autoplay = true;
video.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamU1cmFjN3M5bDhwMzB3ZDl6am16bjN3dmYzbWxqbXJlOGNyZGJ6cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zHj5xT5WCEtrskfq9l/giphy.mp4';
video.oncanplaythrough = function() {
s0.init({ src: video, dynamic: true });
src(s0).out(o0)
}

 video1 = document.createElement('video');
video1.loop = true;
video1.crossOrigin = "anonymous";
video1.autoplay = true;
video1.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdpcnA1ZGwwOHh1M3VvdHlwdWJrZndxMjE5MDBicjF4N3BnYm0xdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7rgvqNIjeERE6YYuIm/giphy.mp4';
video1.oncanplaythrough = function() {
s1.init({ src: video1, dynamic: true });
src(s1).out(o1)
}


 video2 = document.createElement('video');
video2.loop = true;
video2.crossOrigin = "anonymous";
video2.autoplay = true;
video2.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGo1cGp1cWJ1czl2OTFjeDFrYmVxemNuY2hzdWdzMzh2djIxMzR3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OO6TCSWMap2Xjqiefp/giphy.mp4'
video2.oncanplaythrough = function() {
s2.init({ src: video2, dynamic: true });
src(s2).out(o2)
}

video3 = document.createElement('video');
video3.loop = true;
video3.crossOrigin = "anonymous";
video3.autoplay = true;
video3.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTMycTVrcjVtcHB4ZzQyc2J6c2JzZDQ0Z2J1M3J6bWZ1bGRxNndpeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dOa1aggZxfHbqaHVwk/giphy.mp4';
video3.oncanplaythrough = function() {
s3.init({ src: video3, dynamic: true });
src(s3).out(o3)
}


 video4 = document.createElement('video');
video4.loop = true;
video4.crossOrigin = "anonymous";
video4.autoplay = true;
video4.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXllYnA5ZHV4NzBiejAyemEycHlyNW0yZ29oaGRuN29samEyeGRtaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zp5AIKVxPIsJSjFR2e/giphy.mp4';
video4.oncanplaythrough = function() {
s4.init({ src: video4, dynamic: true });
src(s4).out(o4)
}

video5 = document.createElement('video');
video5.loop = true;
video5.crossOrigin = "anonymous";
video5.autoplay = true;
video5.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZucjdkdG9tcWVsbnF6MHNmcnQ2bGNiYXpiMW5kaG9yZ3NtcDJtZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HKqj34hDeSNRPczQ2o/giphy.mp4';
video5.oncanplaythrough = function() {
s5.init({ src: video5, dynamic: true });
src(s5).out(o5)
}

video6 = document.createElement('video');
video6.loop = true;
video6.crossOrigin = "anonymous";
video6.autoplay = true;
video6.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHUyajhpNm5oNHllZHNudzdhZzY2eGd3Mm8zcHBzcHlqOHFzaTUzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cyHu7cXZOgGraRHyGj/giphy.mp4';
video6.oncanplaythrough = function() {
s6.init({ src: video6, dynamic: true });
src(s6).out(o6)
}

video7 = document.createElement('video');
video7.loop = false;
video7.crossOrigin = "anonymous";
video7.autoplay = true;
video7.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm5saXY5dmUzbjc1MnIzdGlhcjFubWNwaGU5bDVmajExaXk5NnYxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q32UxRozozEsCPrG0Z/giphy.mp4';
video7.oncanplaythrough = function() {
s7.init({ src: video7, dynamic: true });
src(s7).out(o7)
}



p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader1 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader_green.frag");
p5.hide() // green

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader2 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader_structures.frag");
p5.hide()//structures

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader3 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader3.frag");
p5.hide() //shader3

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader4 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader_spheres.frag");
p5.hide() // REMEMBER TO DO HIDE!

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader5 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader_NoiseSquareTunner.frag");
p5.hide() //

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "/Users/nyuad/Documents/GitHub/liveCoding/assignment/shader_iterations.frag");
p5.hide()

p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader6 = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/traaaacy/LiveCoding_final/main/shader_heart.frag");
p5.hide() 

//

let mode =6;
p5.draw = ()=>{
  if (mode==1){
  shader1.loop= true;
  shader1.setUniform("time", time);
  shader1.setUniform("resolution", [width, height]);
  shader1.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader1);
  p5.rect(0, 0, width, height);
} if (mode == 2) {
  shader2.setUniform("time", time);
  shader2.setUniform("resolution", [p5.width, p5.height]);
  shader2.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader2);
}
  if (mode == 3) {
  shader3.setUniform("time", time);
  shader3.setUniform("resolution", [p5.width, p5.height]);
  shader3.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader3);
}
  if (mode == 4) {
  shader4.setUniform("time", time);
  shader4.setUniform("resolution", [p5.width, p5.height]);
  shader4.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader4);
}
  if (mode == 5) {
  shader5.setUniform("time", time);
  shader5.setUniform("resolution", [p5.width, p5.height]);
  shader5.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader5);
}
   if (mode == 6) {
  shader6.setUniform("time", time);
  shader6.setUniform("resolution", [p5.width, p5.height]);
  shader6.setUniform("mouse",[p5.mouseX, p5.mouseY]);
  p5.shader(shader6);
}
  p5.rect(0, 0, width, height);
}
s8.init({src: p5.canvas})
src(s8).out(o8)

//This comes before the character enters the frame
osc(20, 0.2, 0)
.mult(noise(0.5, 1))
.modulatePixelate(voronoi(0.5, 2))
// .color(() => 0.2, 0, 0)
// .modulateKaleid(osc(() => 10, 0.02), 20)
.scrollX(1, 0.2)
.scrollY(1, 0.2)
.kaleid(100)
.out(o8)


src(o8)
  // .colorama(0.1)
  // .layer(src(o7).luma(0.3).colorama(0.3))
  // .modulateKaleid(2,0.5)
  // .colorama(0)
  // .mult(voronoi(1, 0.5))
   // .repeat(2, 2)
  // .blend(shape(7, [0.1, 0.3].smooth()).scrollY(3, 0.3).scrollX(Math.random(-200), -0.1), 0.4)
  // .blend(shape(3, [0.01, 0.2].smooth()).scrollY(10, -0.1).scrollX(Math.random(-200), 0.2), 0.4)
   // .modulate(noise(2, 0.6))
  // .colorama([0, 0.2].smooth())
  // .colorama(0.1) // 5 for o7
   // .scrollX(1, -0.2)
  .out(o9)
video.currentTime=0;
video1.currentTime=0;
video2.currentTime=0;
video3.currentTime=0;
video4.currentTime=0;
video5.currentTime=0;
video6.currentTime=0;
video7.currentTime=0;


render(o9)



