document.querySelectorAll(".advantage").forEach((advantage) => {
  advantage.addEventListener("mouseenter", () => {
    advantage.classList.add("hovered");
  });

  advantage.addEventListener("mouseleave", () => {
    advantage.classList.remove("hovered");
  });
});
