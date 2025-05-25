// gsap.to("#box1", {
//   x: 500,
//   y: 300,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   scale: 1.5,
//   backgroundColor: "purple",
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   stagger: 0.5,
//   y: 100,
// });

// gsap.to("#box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1500,
//   backgroundColor: "purple",
//   rotate: 360,
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   rotate: 360,
//   duration: 1.5,
//   delay: 4,
// });

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });
// tl.to("#box2", {
//   x: 1500,
//   backgroundColor: "purple",
//   rotate: 360,
//   duration: 1.5,
// });
// tl.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   rotate: 360,
//   duration: 1.5,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.5,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
