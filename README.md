🧾 Formulario Dinámico de Marcas

Este proyecto es un formulario dinámico multipaís y multimarca que permite al usuario seleccionar una marca de ropa y desplegar un formulario personalizado para cada una.

Las marcas incluidas actualmente son:

👖 Americanino

🦅 American Eagle

🧥 Chevignon

✨ Esprit

👕 Rifle

📂 Estructura del proyecto

/front
------ssets/
-----------css/
---------------style.css
-----------img/       
-----------js/
---------------main.js    
-----------index.html    


/backend (Spring Boot)
----src/main/java/com/formulario
-------controller/  
-------model/     
-------service/     
-------resources/    


⚙️ Tecnologías usadas
Frontend

HTML5

CSS3 (Bootstrap 5.3 vía CDN)

JavaScript Vanilla (ES6+)

Backend

Java 17+

Spring Boot (Controladores, Modelos, Servicios)

📌 Funcionalidades

✅ Selección de marca con cambio dinámico de estilos y formulario.
✅ Formularios personalizados por cada marca (imagen + campos).
✅ Validación visual básica con HTML5.
✅ Inputs con reconocimiento de datos (conexión al backend).
✅ Botón con “funcionamiento” conectado al backend (aunque con errores en validaciones).
✅ Selectores dependientes de ubicación:

País → Departamento → Ciudad.

Compatible con: Colombia, Chile, México, Ecuador, Panamá, Costa Rica, Perú, USA, Canadá, Argentina y Venezuela.

✅ Diseño responsive con Bootstrap 5.

⚠️ Limitaciones actuales

El backend aún presenta errores en la validación y persistencia de datos.

Los datos de Países, Departamentos y Ciudades están quemados (hardcodeados).

No hay base de datos conectada en esta versión, solo simulación de reconocimiento de datos.

🚀 Próximos pasos

🔹 Integrar persistencia real con base de datos relacional (MySQL / PostgreSQL).
🔹 Mejorar la validación en backend para evitar errores de envío.
🔹 Implementar API para carga dinámica de ubicaciones (en lugar de datos quemados).
🔹 Optimizar la comunicación Frontend ↔ Backend con fetch/axios.
