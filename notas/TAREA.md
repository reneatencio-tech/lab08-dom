# Tarea: Mi componente interactivo

## Componente elegido

SeguriTec - Registro interactivo de peligros en el trabajo.

Esta aplicacion permite registrar peligros, asignar un nivel
de riesgo, marcarlos como controlados y eliminar los registros
mediante una interfaz interactiva desarrollada con HTML,
CSS y JavaScript.

## Codigo principal

```js
// Aqui se colocara la clase Peligro y sus eventos.
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