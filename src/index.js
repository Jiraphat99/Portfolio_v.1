const buttons = document.querySelectorAll(".btn-pink");
const interactiveArea = document.getElementById("interactive-area");

// Function to create a floating heart
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  const size = 8 + Math.random() * 5; // smaller hearts
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${x - size / 2}px`;
  heart.style.top = `${y - size / 2}px`;
  heart.style.opacity = "1";
  interactiveArea.appendChild(heart);

  const moveX = (Math.random() - 0.5) * 30;
  const moveY = -40 - Math.random() * 30;

  requestAnimationFrame(() => {
    heart.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
    heart.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${
      Math.random() * 360
    }deg)`;
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 1500);
}

// Attach hover interval to each button
buttons.forEach((btn) => {
  let intervalId;

  btn.addEventListener("mouseenter", (e) => {
    intervalId = setInterval(() => {
      const rect = btn.getBoundingClientRect();
      // Spawn hearts randomly around the mouse position within the button
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      createHeart(x, y);
    }, 150); // every 200ms
  });

  btn.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
  });
});
