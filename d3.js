s2.initVideo("https://api-f.streamable.com/api/v1/videos/2htak5/mp4")
s0.initVideo("https://api-f.streamable.com/api/v1/videos/wnvtyf/mp4")
p5 = new P5({width: window.innerWidth, height:window.innerHeight, mode: 'webgl'})
shader = p5.loadShader("https://raw.githubusercontent.com/aaronsherwood/liveCoding/main/Class_Examples/shaders/basic.vert", "https://raw.githubusercontent.com/AakSin/liveCoding-personal/master/shaders/tunnel.frag");

p5.pixelDensity(1);
p5.draw = ()=>{
    shader.setUniform("time", time);
    shader.setUniform("resolution", [width, height]);
    shader.setUniform("tubeDensity", 1);
    shader.setUniform("parallaxFlip", 2);
    shader.setUniform("tubeShaping", 0.2);
    shader.setUniform("colorG", 0.15);
    shader.setUniform("mistDensity",10);
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
p5.hide();

show = 0
update = () => {
  if(show < 1){
    show += 0.01
  }
}
s0.src.playbackRate = 4
s2.src.playbackRate = 4
src(s7).thresh(0.6).layer(
  src(s2)
    .saturate(3)
    // .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
    .brightness(0.25)
, ()=>show)
.out()

memeText = document.createElement('canvas')
memeTextCtx = memeText.getContext('2d')
memeTextCtx.canvas.width  = window.innerWidth;
memeTextCtx.canvas.height = window.innerHeight;
memeTextCtx.font = '3rem impact'
memeTextCtx.fillStyle = "black";
memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, window.innerHeight - 50)   
memeTextCtx.fillText("YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3... YOU WANT TO EAT AT D3...", 0, 75)   
s6.init({ src: memeText, dynamic: true })
s5.initVideo("https://media.tenor.com/UUjijDDQ6Q0AAAPo/hysterical-laughing-hypnosis.mp4")
src(s2)
  .blend(src(s5), 0.25)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .layer(src(s6).scrollX(()=>time/20))
.out()

src(s0)
.blend(src(s5), 0.15)
.saturate(3)
.layer(
  src(s2)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .luma(0.6)
  .mask(shape(2,0.4,1).rotate(Math.PI/2))
)
.pixelate(200,200)
.layer(src(s6).scrollX(()=>time/20))
.out(o0)


// drop here
src(s0)
.blend(src(s5), 0.15)
.saturate(3)
.layer(
  src(s2)
  .saturate(3)
  .diff(src(o0).modulatePixelate(voronoi(2).pixelate(200), 2500))
  .brightness(0.25)
  .luma(0.6)
  .mask(shape(2,0.4,1).rotate(Math.PI/2))
)
.pixelate(200,200)
.layer(src(s6).scrollX(()=>time/20))
.pixelate(100,100)
.out(o0)

p5.draw = ()=>{
  density-=0.5
  curr_density -= 0.01
    shader.setUniform("time", time);
    shader.setUniform("resolution", [width, height]);
  // from 1 to 0.25
    shader.setUniform("tubeDensity", 0.25); // <-- on vocal
    shader.setUniform("parallaxFlip", 2);
    shader.setUniform("tubeShaping", 0.2);
    shader.setUniform("colorG", 0.15);
    shader.setUniform("mistDensity",Math.max(density, 5));
    p5.shader(shader);
    p5.rect(0, 0, width, height);
}
fade = 0
update = () => {
  if(fade < 1){
    fade += 0.01
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s3), ()=>1-fade)
.out()

s2.initVideo("https://media.tenor.com/vnisLXL1C30AAAPo/playboi-carti-smile.mp4")
// 8. carti -> remove tunnel
fade = 0
update = () => {
  if(fade < 1){
    fade += 0.001
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(0.5))
   , ()=>fade)
.out(o0)

fade=1
lum = 0.5
update = () => {
  if (lum < 0.8){
    lum += 0.005
  }
}
src(s3)
  .diff(src(s3).modulate(noise(2)))
  .brightness(0.1)
  .blend(src(s2).scrollX(()=>time/20).saturate(2.5).layer(src(s3).luma(()=>lum))
   , ()=>fade)
.out(o0)
