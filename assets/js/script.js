document.addEventListener("DOMContentLoaded", () => {
  // Ejercicio 1️ Imagen con borde
  const imagen = document.getElementById("imagen"); //selecciona la imagen por su id
  imagen.addEventListener("click", () => { //con addEventListener escucha si alguien hace click en la imagen
    imagen.classList.toggle("con-borde"); //toggle agrega o quita la clase con-borde
  });

  // Ejercicio 2 Verificar stickers
  const botonVerificar = document.getElementById("verificar"); 
  const mensajeStickers = document.getElementById("mensajeStickers");

  botonVerificar.addEventListener("click", () => { //escucha el click en el botón verificar
    const s1 = parseInt(document.getElementById("sticker1").value) || 0; //obtiene el valor del input sticker1 y lo convierte a número con parseInt
    const s2 = parseInt(document.getElementById("sticker2").value) || 0; //obtiene el valor del input sticker2 y lo convierte a número con parseInt
    const s3 = parseInt(document.getElementById("sticker3").value) || 0; //obtiene el valor del input sticker3 y lo convierte a número con parseInt
    const total = s1 + s2 + s3; //suma los stickers

    if (total <= 10) { //verifica si el total es menor o igual a 10
      mensajeStickers.textContent = `Llevas ${total} stickers.`;
      mensajeStickers.style.color = "green"; //cambia el color del texto a verde
    } else {//si el total es mayor a 10
      mensajeStickers.textContent = "Llevas demasiados stickers.";
      mensajeStickers.style.color = "red"; //cambia el color del texto a rojo
    }
  });

  // Ejercicio 3️ Password con selects
  const botonIngresar = document.getElementById("ingresar");
  const resultadoPassword = document.getElementById("resultadoPassword");

  botonIngresar.addEventListener("click", () => { //Cuando haces clic en “Ingresar”, toma los 3 números seleccionados.
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;
    const n3 = document.getElementById("num3").value;
    const password = n1 + n2 + n3; //los junta como texto para formar la contraseña

     //verifica si la contraseña es correcta

    if (password === "911") { //password 1 correcta
      resultadoPassword.textContent = "Password 1 correcto";
      resultadoPassword.style.color = "green";
    } else if (password === "714") { // passwword 2 correcta
      resultadoPassword.textContent = "Password 2 correcto";
      resultadoPassword.style.color = "green";
    } else { //si no es ninguna de las dos contraseñas correctas
      resultadoPassword.textContent = "Password incorrecto";
      resultadoPassword.style.color = "red";
    }
  });
});
