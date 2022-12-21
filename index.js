const nombreUsuario = prompt("Escriba su nombre");
const anoNacimiento = prompt(
  "Usando cuatro dígitos escriba su año de nacimiento"
);
const y = new Date();
let year = y.getFullYear();
const edad = year - anoNacimiento;

if (edad >= 18) {
  document.getElementById(
    "demo"
  ).innerHTML = `${nombreUsuario} tienes ${edad} años lo que implica que eres mayor de edad: Felicidades ya puedes irte a trabajar.`;

  //   alert(
  //     `${nombreUsuario} tienes ${edad} años lo que implica que eres mayor de edad: Felicidades ya puedes irte a trabajar.`
  //   );
} else {
  document.getElementById(
    "demo"
  ).innerHTML = `${nombreUsuario} eres un párvulo solo tienes ${edad} años. Aprovecha tu tiempo, has una carrera en el área TEC`;
  //   alert(
  //     `${nombreUsuario} eres un párvulo solo tienes ${edad} años. Aprovecha tu tiempo, has una carrera en el área TEC`
  //   );
}

console.log(year);
