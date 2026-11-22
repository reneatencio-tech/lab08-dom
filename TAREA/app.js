// Laboratorio 08 - Tarea individual
// SeguriTec: Registro de peligros

console.log("SeguriTec iniciado");

// 1. Clase propia

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

// 2. Objetos de prueba

const peligro1 = new Peligro("Trabajos en altura", "Alto");
const peligro2 = new Peligro("Piso resbaladizo", "Medio");

console.log(peligro1.descripcion());
console.log(peligro2.descripcion());

// 3. Seleccionar elementos del DOM

const listaPeligros = document.querySelector("#listaPeligros");
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const nivel = document.querySelector("#nivel");
const mensaje = document.querySelector("#mensaje");

// 4. Funcion para mostrar los peligros

function mostrarPeligro(peligro) {

    const li = document.createElement("li");

    const texto = document.createElement("span");

    texto.textContent = peligro.descripcion();

    // Colores segun el nivel de riesgo

    if (peligro.nivel === "Alto") {
        li.classList.add("alto");
    } else if (peligro.nivel === "Medio") {
        li.classList.add("medio");
    } else {
        li.classList.add("bajo");
    }

    // 5. Boton controlar

    const btnControlar = document.createElement("button");

    btnControlar.textContent = "Controlar";

    btnControlar.addEventListener("click", () => {

        peligro.controlar();

        texto.textContent = peligro.descripcion()
            + " - CONTROLADO";

        li.classList.add("controlado");

        btnControlar.disabled = true;
        btnControlar.textContent = "Controlado";

    });

    // 6. Boton eliminar

    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";

    btnEliminar.classList.add("eliminar");

    btnEliminar.addEventListener("click", () => {

        li.remove();

    });

    // Agregar elementos al DOM

    li.appendChild(texto);
    li.appendChild(btnControlar);
    li.appendChild(btnEliminar);

    listaPeligros.appendChild(li);
}

// 7. Mostrar los objetos de prueba

mostrarPeligro(peligro1);
mostrarPeligro(peligro2);

// 8. Evento submit para registrar peligros

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    // Validar campo vacio

    if (nombre.value.trim() === "") {

        mensaje.textContent = "Ingrese la descripcion del peligro";
        mensaje.classList.add("error");

    } else {

        // Crear un nuevo objeto

        const nuevoPeligro = new Peligro(
            nombre.value.trim(),
            nivel.value
        );

        // Mostrar el nuevo peligro

        mostrarPeligro(nuevoPeligro);

        mensaje.textContent = "Peligro registrado correctamente";
        mensaje.classList.remove("error");

        // Limpiar el campo

        nombre.value = "";

        console.log(nuevoPeligro.descripcion());

    }

});