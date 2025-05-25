// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });v

gsap.to("#page2 h2", {
  transform: "translateX(-20 0%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -500%",
    scrub: 1,
    pin: true,
  },
});
