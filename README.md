# 🌭 Freakie Dogs - Menú Digital

Plataforma de pedidos online para Freakie Dogs. Los clientes pueden ver el menú, personalizar sus productos, agregar al carrito y enviar el pedido por WhatsApp.

## 🚀 Cómo levantar el proyecto en tu computadora

### Requisitos previos
1. Instalá **Node.js** desde [nodejs.org](https://nodejs.org/) (descargá la versión LTS)
2. Verificá que se instaló correctamente abriendo la terminal y escribiendo:
   ```
   node --version
   npm --version
   ```

### Instalación
1. Abrí la terminal en la carpeta del proyecto
2. Ejecutá:
   ```
   npm install
   ```
3. Esperá a que termine (puede tardar 1-2 minutos)

### Levantar el proyecto
```
npm start
```
Esto abre automáticamente el navegador en `http://localhost:3000` con tu menú funcionando.

## 📁 Estructura del proyecto

```
freakie-dogs-menu/
├── public/
│   └── index.html          ← Página base (no tocar mucho)
├── src/
│   ├── index.js             ← Punto de entrada (no tocar)
│   ├── App.js               ← Componente principal con toda la lógica
│   ├── data.js              ← ⭐ TUS PRODUCTOS, CATEGORÍAS Y PRECIOS
│   ├── Icons.js             ← Íconos SVG
│   ├── utils.js             ← Funciones auxiliares
│   └── styles.css           ← Todos los estilos visuales
├── package.json             ← Configuración del proyecto
├── .gitignore               ← Archivos que Git ignora
└── README.md                ← Este archivo
```

## ✏️ Cómo editar tu menú

El archivo más importante para vos es **`src/data.js`**. Ahí están:

### Datos de tu negocio
```javascript
export const STORE = {
  name: "Freakie Dogs",
  phone: "50360222080",  // ← Tu WhatsApp SIN el +
  hours: "10:00 - 21:00",
  // ...
};
```

### Categorías
Agregá o quitá categorías cambiando el array `CATEGORIES`.

### Productos
Cada producto tiene esta estructura:
```javascript
{
  id: "mi-producto",           // ID único (sin espacios)
  name: "Nombre del Producto",
  description: "Descripción...",
  price: 9.99,
  image: "🍔",                 // Emoji (después se reemplaza por imagen real)
  category: "combos",          // Debe coincidir con un ID de categoría
  badge: "Nuevo",              // Opcional: "Nuevo", "Popular", "Más vendido", "Favorito"
  modifierGroups: [],          // Grupos de opciones (ver abajo)
}
```

### Grupos de modificadores (extras, salsas, etc.)
```javascript
modifierGroups: [
  {
    id: "extras",
    name: "Extras",
    required: false,          // true = el cliente DEBE elegir algo
    maxSelections: 7,         // Máximo de opciones que puede elegir
    options: [
      { id: "jalap", name: "Jalapeños 🌶️", price: 0.50 },
      { id: "bacon", name: "Tocino 🥓", price: 0.75 },
      // ...
    ],
  },
],
```

## 🌐 Cómo publicar en internet (Vercel)

1. Subí este proyecto a GitHub
2. Andá a [vercel.com](https://vercel.com) e iniciá sesión con GitHub
3. Hacé click en "New Project"
4. Seleccioná el repositorio `freakie-dogs-menu`
5. Hacé click en "Deploy"
6. En ~1 minuto tenés tu link: `tu-proyecto.vercel.app`

Cada vez que hagás cambios y los subas a GitHub, Vercel actualiza automáticamente.

## 🛠️ Personalización futura

- **Imágenes reales**: Reemplazá los emojis por URLs de imágenes de tus productos
- **Colores**: Editá las variables CSS en `src/styles.css` (sección `:root`)
- **WhatsApp**: Cambiá el número en `src/data.js` → `STORE.phone`
- **Horarios**: Cambiá en `src/data.js` → `STORE.hours`
