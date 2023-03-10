const codificador = document.querySelector(".msjEncriptar");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const texto = document.querySelector(".contenidoMsj__texto");
copiar.style.display = "none";

function encriptador() {
  const valor = codificador.value;
  let value = valor
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return value;
}

function desencriptador() {
  const valor = codificador.value;
  let value = valor
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return value;
}

function encriptar() {
  if (codificador.value !== "") {
    if (/^[a-z0-9\s]+$/u.test(codificador.value)) {
      mensaje.style.backgroundImage = "none";
      copiar.style.display = "block";
      texto.style.display = "none";
      mensaje.textContent = encriptador();
    } else {
      alert("Solo se permite minusculas y sin acento");
    }
  } else {
    alert("Nesesita escribir algo para poder codificarlo ");
  }
}
function desencriptar() {
  if (codificador.value !== "") {
    mensaje.style.backgroundImage = "none";
    copiar.style.display = "block";
    texto.style.display = "none";
    mensaje.textContent = desencriptador();
  } else {
    alert("Nesesita escribir algo para poder desencriptar ");
  }
}

function copy() {
  let copyText = mensaje;
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado con exito");
}
