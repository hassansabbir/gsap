var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 0.5,
  });
});
