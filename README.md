# 🧾 Formulario Dinámico de Marcas

Este proyecto es un **formulario dinámico multipaís y multimarca** que permite al usuario seleccionar una **marca de ropa** y desplegar un **formulario personalizado** para cada una.  

Las marcas incluidas actualmente son:  
- 👖 Americanino  
- 🦅 American Eagle  
- 🧥 Chevignon  
- ✨ Esprit  
- 👕 Rifle  

---

## 📂 Estructura del proyecto

/front
│── assets/
│ ├── css/
│ │ └── style.css # Estilos personalizados
│ ├── img/ # Logos e imágenes de marcas
│ └── js/
│ └── main.js # Lógica para cambiar marca y cargar ubicaciones
│
└── index.html # Página principal con formularios dinámicos


---

## ⚙️ Tecnologías usadas

- **HTML5**  
- **CSS3** (Bootstrap 5.3 vía CDN)  
- **JavaScript Vanilla (ES6+)**  

📌 Funcionalidades

✅ Selección de marca con cambio dinámico de estilos y formulario.  
✅ Formularios personalizados por cada marca (imagen + campos).  
✅ Validación visual básica con HTML5.  
✅ Selectores dependientes de ubicación:  

- País → Departamento → Ciudad.  

- Compatible con: Colombia, Chile, México, Ecuador, Panamá, Costa Rica, Perú, USA, Canadá, Argentina y Venezuela.  

✅ Diseño responsive con Bootstrap 5.  
