//console.log("Sistema de reservas cargado");
const formulario = document.getElementById("formReserva");
const lista = document.getElementById("listaReservas");

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function mostrarReservas(){

if(!lista) return;

lista.innerHTML = "";

reservas.forEach(function(reserva){

const item = document.createElement("li");

item.textContent =
reserva.nombre + " - " +
reserva.servicio + " - " +
reserva.fecha + " - " +
reserva.hora;

lista.appendChild(item);

});

}

if(formulario){

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const servicio = document.getElementById("servicio").value;
const fecha = document.getElementById("fecha").value;
const hora = document.getElementById("hora").value;

const existe = reservas.some(function(reserva){

return reserva.fecha === fecha && reserva.hora === hora;

});

if(existe){

document.getElementById("mensaje").textContent =
"Este horario ya está reservado.";

return;

}

const nuevaReserva = {

nombre,
email,
servicio,
fecha,
hora

};

reservas.push(nuevaReserva);

localStorage.setItem("reservas", JSON.stringify(reservas));

document.getElementById("mensaje").textContent = "Reserva guardada correctamente";

mostrarReservas();

formulario.reset();

});

}

mostrarReservas();