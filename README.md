# Evidencias de Desarrollo - Interfaz Dinámica con JavaScript

Este repositorio contiene la solución incremental para la guía de JavaScript para interfaces dinámicas, donde se implementó la manipulación del DOM, manejo de eventos y validaciones en formularios.

---

## 📂 1. Configuración del Entorno

### Estructura de Carpetas del Proyecto
Se organizó el espacio de trabajo separando los archivos de lógica, estilos y estructura según las buenas prácticas.

![Estructura del Proyecto](img_capturas/Formulario_productos/01_estructura_proyecto.png)

---

## 🛒 2. Formulario de Registro de Productos

### Interfaz Estática Inicial
Diseño del formulario y la tabla de datos utilizando HTML5 y CSS Grid de forma responsiva.

![Interfaz Estática](img_capturas/Formulario_productos/02_interfaz_estatica.png)

### Pruebas de Validación y Errores
El sistema valida que los campos cumplan con las reglas de negocio (nombre con longitud mínima, precio mayor a cero y stock no negativo) antes de procesar.

*   **Error en Nombre:**
    ![Error Nombre](img_capturas/Formulario_productos/03_validacion_error_nombre.png)

*   **Error en Precio:**
    ![Error Precio](img_capturas/Formulario_productos/04_validacion_error_precio.png)

*   **Error en Stock:**
    ![Error Stock](img_capturas/Formulario_productos/05_validacion_error_stock.png)

### Registro Exitoso e Inserción en el DOM
Muestra de la inserción dinámica de una nueva fila (`<tr>`) en la tabla tras pasar satisfactoriamente todos los filtros.

![Registro Exitoso](img_capturas/Formulario_productos/06_registro_exitoso.png)

---

## 👤 3. Reto Bajo: Validador de Datos Personales

Se integró un segundo módulo independiente para verificar la información de usuarios bajo tres reglas estrictas: nombre obligatorio, edad mínima de 14 años y correo con formato válido.

### Formulario Base
![Formulario Reto Bajo](img_capturas/Formulario_datos_pers/07_reto_bajo_formulario.png)

### Pruebas de Restricciones
*   **Menor de 14 años:**
    ![Error Edad](img_capturas/Formulario_datos_pers/08_reto_bajo_error_edad.png)

*   **Correo sin '@':**
    ![Error Correo](img_capturas/Formulario_datos_pers/09_reto_bajo_error_correo.png)

### Validación Correcta
![Éxito Reto Bajo](img_capturas/Formulario_datos_pers/10_reto_bajo_exito.png)