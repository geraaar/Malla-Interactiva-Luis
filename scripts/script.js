// Espera a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Resalta el card temporalmente
      card.classList.add("selected");

      // Muestra un mensaje temporal de "info futura"
      const mensaje = document.createElement("div");
      mensaje.textContent = "Aquí podrías ver más info de esta materia ✨";
      mensaje.classList.add("mensaje");

      // Añadir mensaje solo si no existe ya
      if (!card.querySelector(".mensaje")) {
        card.appendChild(mensaje);
        setTimeout(() => {
          mensaje.remove();
          card.classList.remove("selected");
        }, 2500);
      }
    });
  });
});
