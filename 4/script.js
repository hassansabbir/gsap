var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
  });
});

imageDiv.addEventListener("mouseenter", function (event) {
  cursor.innerHTML = "Hello World";
  gsap.to(cursor, {
    scale: 4,
    duration: 0.5,
    ease: "power2.out",
    backgroundColor: "#ffffff7b",
  });
});

imageDiv.addEventListener("mouseleave", function (event) {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
    ease: "power2.out",
    backgroundColor: "#fff",
  });
});
