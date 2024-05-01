let video = document.createElement('video');
video.loop = true;
video.crossOrigin = "anonymous";
video.autoplay = true;
video.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWtqenppZ25jYzRoN3NqcWNoYnZtODIwN2o1OW1oZW5pOTc1dGxzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tbFxYBSeujsqlyLw6E/giphy.mp4';
video.oncanplaythrough = function() {
s0.init({ src: video, dynamic: true });
src(s0).out()
}

osc(50,0.1,5).out(o1)

render(o3)

src(o1).layer(src(o0).luma(0.3)).out(o3)

hush()

render(o1)


osc(20, 0.2, 0)
.color(() => cc[0]*3, 0, 0)
.modulateKaleid(osc(() => 10, 0.02), 10)
.kaleid(5)
.out(o1)

osc(200, 0.2, 0)
// .color(() => cc[0]*3, 0, 0)
// .modulateKaleid(osc(() => 10, 0.02), 10)
// .kaleid(5)
.out(o1)

src(o1).layer(src(o0).luma(0.3)).out(o3)
