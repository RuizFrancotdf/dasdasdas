let btnEnv = document.getElementById("btnEnviar");
let datos = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese un dato:";
btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es", datos.value);
});
