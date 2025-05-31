function addNota() {
  let nombre = document.getElementById("nombre").value;
  let asignatura = document.getElementById("asignatura").value;
  let nota = document.getElementById("nota").value;

  if (!nombre || !asignatura || nota === "" || nota < 0 || nota > 10) {
    alert("Rellena bien todos los campos. Nota entre 0 y 10.");
    return;
  }

  let nuevaFila = "<tr><td>" + nombre + "</td><td>" + asignatura + "</td><td>" + nota + "</td></tr>";

  document.getElementById("tablaNotas").innerHTML
document.getElementById("tablaNotas").innerHTML += nuevaFila;

  document.getElementById("formulario").reset();
}
