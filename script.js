const modelViewer = document.querySelector("#visorEscudo");

const btnWoo = document.getElementById("btn-woo");
const btnPatria = document.getElementById("btn-patria");
const btnMetal = document.getElementById("btn-metal");
const btnOro = document.getElementById("btn-oro");

// Estado actual seleccionado por el usuario
let estampadoActual = "Woo";
let bordeActual = "Metal";

function actualizarMaterialEscudo() {
  // Combina el nombre tal como lo guardamos en glTF Variants (ej. "Patria_Oro")
  const nombreVariante = `${estampadoActual}_${bordeActual}`;
  modelViewer.variantName = nombreVariante;
}

// Comprobar en consola qué variantes detectó el modelo al cargar
modelViewer.addEventListener("load", () => {
  console.log("Variantes disponibles en el GLB:", modelViewer.availableVariants);
  actualizarMaterialEscudo();
});

// Botones de Estampado (Madera frontal)
btnWoo.addEventListener("click", () => {
  estampadoActual = "Woo";
  btnWoo.classList.add("active");
  btnPatria.classList.remove("active");
  actualizarMaterialEscudo();
});

btnPatria.addEventListener("click", () => {
  estampadoActual = "Patria";
  btnPatria.classList.add("active");
  btnWoo.classList.remove("active");
  actualizarMaterialEscudo();
});

// Botones de Borde
btnMetal.addEventListener("click", () => {
  bordeActual = "Metal";
  btnMetal.classList.add("active");
  btnOro.classList.remove("active");
  actualizarMaterialEscudo();
});

btnOro.addEventListener("click", () => {
  bordeActual = "Oro";
  btnOro.classList.add("active");
  btnMetal.classList.remove("active");
  actualizarMaterialEscudo();
});