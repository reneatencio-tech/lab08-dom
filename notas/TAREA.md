# Tarea: Mi componente interactivo

## Componente elegido

SeguriTec - Registro interactivo de peligros en el trabajo.

Esta aplicacion permite registrar peligros, asignar un nivel
de riesgo, marcarlos como controlados y eliminar los registros
mediante una interfaz interactiva desarrollada con HTML,
CSS y JavaScript.

## Codigo principal

El siguiente codigo JavaScript corresponde a la aplicacion
SeguriTec, en la cual se utilizan clases, objetos,
manipulacion del DOM y eventos para registrar, controlar
y eliminar peligros.

```js
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
```

## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Registrar Energia Electrica con nivel Alto | Se agrega un peligro de color rojo | Si |
| Registrar Superficie Irregular con nivel Medio | Se agrega un peligro de color naranja | Si |
| Registrar Desorden de Materiales con nivel Bajo | Se agrega un peligro de color verde | Si |
| Presionar Controlar en Trabajos en altura | Cambia el fondo a verde claro y aparece CONTROLADO | Si |
| Presionar Eliminar en Ruido y Piso resbaladizo | Los elementos desaparecen sin afectar los demas registros | Si |
| Registrar sin ingresar una descripcion | Aparece un mensaje de error y no se crea el objeto | Si |

Todas las pruebas realizadas fueron satisfactorias.
Se verificaron las seis funcionalidades de la aplicacion
mediante pruebas manuales en Google Chrome.

## Por que disene asi mi clase

Decidi disenar la clase Peligro porque esta relacionada
con mi experiencia profesional en seguridad y prevencion
de riesgos laborales. Considere que era una buena oportunidad
para aplicar los conocimientos de programacion a una
situacion de mi entorno laboral.

La clase Peligro permite representar cada peligro como
un objeto independiente, con sus propios atributos y
comportamientos.

### Atributos de la clase

| Atributo | Justificacion |
|----------|---------------|
| nombre | Permite almacenar la descripcion del peligro identificado. |
| nivel | Permite almacenar el nivel de riesgo seleccionado por el usuario: Alto, Medio o Bajo. |
| controlado | Permite identificar si el registro se encuentra pendiente o ha sido marcado como controlado. |

Decidi utilizar un constructor para inicializar los
atributos de cada objeto. El atributo controlado se
inicializa con el valor false, debido a que todo nuevo
registro comienza en estado pendiente.

### Metodos de la clase

| Metodo | Justificacion |
|--------|---------------|
| constructor(nombre, nivel) | Permite inicializar los atributos de cada nuevo objeto. |
| descripcion() | Permite obtener y mostrar la informacion del peligro de manera organizada. |
| controlar() | Permite modificar el estado del objeto, cambiando el atributo controlado de false a true. |

Defini estos metodos porque permiten reutilizar el codigo
y evitar repetir las mismas instrucciones cada vez que
se crea o modifica un objeto.

### Relacion de la clase con el DOM y los eventos

Utilice la funcion mostrarPeligro() para representar
cada objeto de la clase Peligro mediante elementos HTML
creados dinamicamente con createElement().

Mediante los eventos submit y click consegui que el
usuario pueda registrar nuevos peligros, modificar
su estado y eliminar registros de la pagina, sin
necesidad de recargarla.

Tambien utilice classList para diferenciar visualmente
los niveles de riesgo mediante colores y para mostrar
cuando un registro ha sido marcado como controlado.

### Justificacion final

Considero que el diseno de mi clase es sencillo,
organizado y facil de comprender. La separacion entre
los atributos, los metodos y las funciones de
manipulacion del DOM facilita el mantenimiento del codigo.

Ademas, este diseno permite que en el futuro se puedan
incorporar nuevos atributos, como el area de trabajo,
la medida de control, el responsable y la fecha de
identificacion, sin tener que modificar completamente
la estructura de la aplicacion.

Finalmente, mediante el desarrollo de SeguriTec logre
integrar los conocimientos de clases, objetos, DOM y
eventos de JavaScript aprendidos durante el Laboratorio 08
en una aplicacion educativa relacionada con mi actividad
profesional.

Los niveles de riesgo son seleccionados por el usuario.
Por lo tanto, SeguriTec es un prototipo educativo y no
reemplaza una evaluacion IPERC formal.