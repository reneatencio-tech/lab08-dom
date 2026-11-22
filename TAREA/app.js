// Laboratorio 08 - Tarea individual
// SeguriTec: Registro de peligros

console.log("SeguriTec iniciado");

// Clase propia
class Peligro {

    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.controlado = false;
    }

    descripcion() {
        return this.nombre + " - Riesgo: " + this.nivel;
    }

    controlar() {
        this.controlado = true;
    }
}

// Objetos de prueba
const peligro1 = new Peligro("Trabajos en altura", "Alto");

const peligro2 = new Peligro("Piso resbaladizo", "Medio");

console.log(peligro1.descripcion());
console.log(peligro2.descripcion());


// Seleccionar la lista de peligros
const listaPeligros = document.querySelector("#listaPeligros");

// Funcion para mostrar un peligro en la pagina
function mostrarPeligro(peligro) {

    const li = document.createElement("li");

    li.textContent = peligro.descripcion();

    if (peligro.nivel === "Alto") {
        li.classList.add("alto");
    } else if (peligro.nivel === "Medio") {
        li.classList.add("medio");
    } else {
        li.classList.add("bajo");
    }

    listaPeligros.appendChild(li);
}

// Mostrar los objetos de prueba
mostrarPeligro(peligro1);
mostrarPeligro(peligro2);