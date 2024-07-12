import "./style.css";

let inicioContador = "0";
let turno = parseInt(inicioContador);

document.getElementById("contador").innerHTML = turno
  .toString()
  .padStart(2, "0");

function sumarTurno(): any {
  if (turno !== null && turno !== undefined) {
    if (turno < 100) {
      return (
        turno++,
        (document.getElementById("contador").innerHTML = turno
          .toString()
          .padStart(2, "0"))
      );
    }
    if (turno >= 100) {
      alert(
        "El turno introducido no es correcto. Debe ser un número del 1 al 100."
      );
    }
  }
}
function restarTurno(): any {
  if (turno !== null && turno !== undefined) {
    if (turno !== 0) {
      return (
        turno--,
        (document.getElementById("contador").innerHTML = turno
          .toString()
          .padStart(2, "0"))
      );
    }
  }
}
function resetTurno(): any {
  if (turno !== null && turno !== undefined) {
    if (turno !== 1) {
      return (
        (turno = parseInt(inicioContador)),
        (document.getElementById("contador").innerHTML = turno
          .toString()
          .padStart(2, "0"))
      );
    }
  }
}

function inputTurnoOperario(): any {
  let turnoOperario = parseInt(
    (document.getElementById("imputTurno") as HTMLInputElement).value
  );
  turno = turnoOperario;
  if (turnoOperario >= 1 && turnoOperario < 10) {
    document.getElementById("contador").innerHTML = turnoOperario
      .toString()
      .padStart(2, "0");
    (document.getElementById("imputTurno") as HTMLInputElement).value = "";
  }
  if (turnoOperario >= 10 && turnoOperario <= 100) {
    document.getElementById("contador").innerHTML = turnoOperario.toString();
    (document.getElementById("imputTurno") as HTMLInputElement).value = "";
  }
  if (turnoOperario < 1 || turnoOperario > 100) {
    alert(
      "El turno introducido no es correcto. Debe ser un número del 1 al 100."
    );
    (document.getElementById("imputTurno") as HTMLInputElement).value = "";
  }
}

const botonSig = document.getElementById("turnoSig") as HTMLButtonElement;
const botonAnt = document.getElementById("turnoAnt") as HTMLButtonElement;
const botonReset = document.getElementById("resetTurno") as HTMLButtonElement;

if (botonSig !== null && botonSig !== undefined) {
  botonSig.addEventListener("click", sumarTurno);
}
if (botonAnt !== null && botonSig !== undefined) {
  botonAnt.addEventListener("click", restarTurno);
}
if (botonReset !== null && botonSig !== undefined) {
  botonReset.addEventListener("click", resetTurno);
}

const botonComprobarTurno = document.getElementById(
  "selectTurno"
) as HTMLButtonElement;

botonComprobarTurno.addEventListener("click", inputTurnoOperario);
