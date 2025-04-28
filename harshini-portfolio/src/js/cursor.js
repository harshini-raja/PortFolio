document.addEventListener("DOMContentLoaded", () => {
  const stylus = document.querySelector(".stylus");
  let lastX = 0;
  let isMovingLeft = false;

  // Update stylus position
  document.addEventListener("mousemove", (e) => {
    if (!stylus) return;

    // Update position
    stylus.style.left = `${e.clientX}px`;
    stylus.style.top = `${e.clientY}px`;

    // Determine direction
    isMovingLeft = e.clientX < lastX;
    lastX = e.clientX;

    // Update class based on direction
    stylus.classList.remove("left", "right");
    stylus.classList.add(isMovingLeft ? "left" : "right");
  });

  // Handle click effects
  document.addEventListener("mousedown", () => {
    if (!stylus) return;
    stylus.style.transform = "translate(-50%, -50%) scale(0.9)";
  });

  document.addEventListener("mouseup", () => {
    if (!stylus) return;
    stylus.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
