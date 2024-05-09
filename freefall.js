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
video3.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3YwYml4OTVhOTdma3pobWFoZHhtMGJ2MHR4dWIxN2NnMWd2ZDhkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Kl9PXUhsuwzF4HmIGs/giphy.mp4';
video3.oncanplaythrough = function() {
s3.init({ src: video3, dynamic: true });
src(s3).out(o3)
}

 video4 = document.createElement('video');
video4.loop = true;
video4.crossOrigin = "anonymous";
video4.autoplay = true;
video4.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWRwajlzNDQwbWk3b2JzeDVydGllY3Z4amxqZWxsaHg3anYyM2FyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NKhmHP0wvkMzcQajoA/giphy.mp4';
video4.oncanplaythrough = function() {
s4.init({ src: video4, dynamic: true });
src(s4).out(o4)
}

video5 = document.createElement('video');
video5.loop = true;
video5.crossOrigin = "anonymous";
video5.autoplay = true;
video5.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWs2ZTZwOHRxMTk4YWp4Mmc0NWhjZnY2cXMwYnlyNjBvcWNzejVtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8UOS7bFfRDrCkODtyd/giphy.mp4';
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
