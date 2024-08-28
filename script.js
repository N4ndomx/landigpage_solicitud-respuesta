// Añade un evento de scroll al objeto window
document.addEventListener("scroll", function () {
  // Selecciona el elemento header
  const header = document.querySelector("header");

  // Cambia la clase del header en función de la posición del scroll
  if (window.scrollY > 0) {
    // Si el scroll es mayor a 50px, quita la clase 'header-transparent' y añade 'header-solid'
    header.classList.remove("header-transparent");
    header.classList.add("header-solid");
  } else {
    // Si el scroll es menor o igual a 50px, quita la clase 'header-solid' y añade 'header-transparent'
    header.classList.remove("header-solid");
    header.classList.add("header-transparent");
  }
});
