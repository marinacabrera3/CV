//Boton informacion personal

const boton = document.getElementById("contacto");
const panel = document.getElementById("telefono");

boton.addEventListener("click", function() {
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
});
