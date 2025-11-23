// Animação de entrada dos elementos
document.addEventListener("DOMContentLoaded", () => {
  const glassBox = document.querySelector(".glass-box");
  const dots = document.querySelectorAll(".dot");

  // Efeito suave de entrada
  glassBox.style.opacity = "0";
  glassBox.style.transform = "translateY(40px)";
  setTimeout(() => {
    glassBox.style.transition = "1s ease";
    glassBox.style.opacity = "1";
    glassBox.style.transform = "translateY(0)";
  }, 300);

  // Animação de pulsar nos pontos
  dots.forEach((dot, i) => {
    dot.style.opacity = "0";
    setTimeout(() => {
      dot.style.transition = "0.5s ease";
      dot.style.opacity = "1";
    }, 500 + i * 150);
  });
});
