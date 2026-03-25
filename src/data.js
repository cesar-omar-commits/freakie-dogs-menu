// ═══════════════════════════════════════════
// FREAKIE DOGS - Menú Digital | src/data.js
// Datos actualizados desde API BuhoPay
// Última actualización: 2026-03-25
// ═══════════════════════════════════════════

export const STORE = {
  name: "Freakie Dogs",
  tagline: "Ese extra extraordinario 🌭🔥🌭",
  address: "casa 2, 7 Calle oriente block 2, Santa Tecla CP 1501, El Salvador",
  hours: "10:00 - 21:00",
  phone: "50375653770",
  currency: "USD",
  minOrder: 0,
  isOpen: true,
};

// ═══════════════════════════════════════════
// CATEGORÍAS DEL MENÚ
// ═══════════════════════════════════════════
export const CATEGORIES = [
  { id: "combos_temporada", name: "COMBOS 🔥", emoji: "🔥" },
  { id: "burgers", name: "FREAKIE BURGER 🍔", emoji: "🍔" },
  { id: "hotdogs", name: "HOT DOGS 🌭", emoji: "🌭" },
  { id: "combos", name: "COMBOS 🌭🍟🥤", emoji: "🌭" },
  { id: "drinks", name: "BEBIDAS 🥤", emoji: "🥤" },
];

// ═══════════════════════════════════════════
// PRODUCTOS (43 items)
// ═══════════════════════════════════════════
export const PRODUCTS = [
  {
    "id": 12269,
    "name": "MENU UNICAMENTE A DOMICILIO",
    "description": "Este menu esta unicamente disponible para servicio a domicilio!",
    "price": 0,
    "image": "https://admin.buhopay.com/media/6691930355070155413396.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 15179,
    "name": "Sticker Sorpresa",
    "description": "Un Sticker sorpresa de nuestros mas de 15 estilos diferentes 🔥😏",
    "price": 0.5,
    "image": "https://admin.buhopay.com/media/699ce08434b6e761543850.png",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 16240,
    "name": "Adivina la Marca🔥🔥",
    "description": "Un paquete de nuestras 4 Ediciones con 20 tarjetitas cada una, 2 Stickers y te enviamos las coronitas de cortesia🙉",
    "price": 3.99,
    "image": "https://admin.buhopay.com/media/69a78b849e242912426003.png",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 16289,
    "name": "Gomita Hamburguesa",
    "description": "Hamburguesa divida en capitas de dulce delicosas",
    "price": 1.5,
    "image": "https://admin.buhopay.com/media/69bc5acf35188095777340.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 13998,
    "name": "Combpleto",
    "description": "2 Freakie Burgers 🍔🍔, 2 Freakie Dogs🌭🌭 (1 con costra de queso), 2 Papas fritas, 1 Queso Frito, 1 Dip de Queso, 1 Sweet Freak (cheesecake de nutella), 3 sodas",
    "price": 31.99,
    "image": "https://admin.buhopay.com/media/690fb4f9c3116629878330.jpg",
    "category": "combos_temporada",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 5815,
        "title": "Hot dog 1",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Cebolla",
          "Pepinillos",
          "Jalapeños 🌶️",
          "Tocino🥓",
          "Peperonccinis 🌶️",
          "Costra de Queso 🧀",
          "Sin complementos"
        ]
      },
      {
        "id": 5816,
        "title": "Hot Dog 2",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Cebolla",
          "Pepinillo",
          "Jalapeños 🌶️",
          "Tocino 🥓",
          "Costra de queso 🧀",
          "Peperonccinis 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 5817,
        "title": "Burger 1",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Jalapeño🌶️",
          "Peperonccinis 🌶️",
          "Tocino 🥓",
          "Golden cheese 🧀",
          "Aros de cebolla 🧅",
          "Queso Frito🧀",
          "Crane y Queso extra 🥩",
          "Mermelada de tocino 🥓🧅",
          "Sin complementos"
        ]
      },
      {
        "id": 5818,
        "title": "Burger 2",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Jalapeños 🌶️",
          "Peperonccinis 🌶️",
          "Tocino 🥓",
          "Golden Cheese 🧀",
          "Aros de cebolla 🧅",
          "Queso Frito 🧀",
          "Mermelada de tocino 🥓🧅",
          "Carne y queso extra 🥩",
          "Sin complementos"
        ]
      },
      {
        "id": 5819,
        "title": "Papas",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Agrandado 🔥 (2 papas y 2 bebidas)",
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Jalapeños 🌶️ (2 papas)",
          "Tocino 🥓 (2 papas)",
          "Fancy Fries 🥓🧅 (2 papas)",
          "Chili con carne 🫘 (2 papas)",
          "Sin complementos"
        ]
      },
      {
        "id": 5820,
        "title": "Sodas",
        "type": "select_one",
        "maxSelections": 3,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Zero",
          "Fanta",
          "Te Frambuesa",
          "Te Lipton",
          "Te Duranzo",
          "Fresa",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6291,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      }
    ]
  },
  {
    "id": 12552,
    "name": "Burger Box",
    "description": "Ese combo le trae dos Smashburgers 🍔🍔, dos hot dogs con 8 complementos 🌭🌭(uno lleva costra de queso 🧀), dos papas 🍟🍟, una orden de jalapeños 🌶️ y dos bebidas 🥤🥤",
    "price": 19.5,
    "image": "https://admin.buhopay.com/media/690fb55cc2ac0756101394.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": true,
    "soldOut": false,
    "addons": [
      {
        "id": 6282,
        "title": "Burger 1",
        "type": "option",
        "maxSelections": 7,
        "options": [
          "Jalapeños 🌶️",
          "Tocino 🥓",
          "Peperroncinis 🌶️",
          "Mermelada de tocino 🥓🧅",
          "Carne y Queso extra 🥩",
          "Aros de Cebolla 🧅",
          "Golden Cheese🧀✨",
          "Sin complementos"
        ]
      },
      {
        "id": 6283,
        "title": "Burger 2",
        "type": "option",
        "maxSelections": 9,
        "options": [
          "Jalapeños 🌶️",
          "Tocino 🥓",
          "Peperroncinis 🌶️",
          "Mermelada de tocino🧅🥓",
          "Carne y Queso extra🥩",
          "Aros de cebolla🧅",
          "Golden Cheese 🧀✨",
          "Sin complementos"
        ]
      },
      {
        "id": 6284,
        "title": "Hot dog 1",
        "type": "select_one",
        "maxSelections": 16,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Cebolla",
          "Pepinillos",
          "Peperroncinis 🌶️",
          "Tocino🥓",
          "Costra de queso 🧀",
          "Jalapeños🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 6285,
        "title": "Hot dog 2",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Peperroncinis 🌶️",
          "Costra de queso🧀",
          "Jalapeños 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 6286,
        "title": "Papas 1",
        "type": "select_one",
        "maxSelections": 20,
        "options": [
          "Agrandado papas y bebida 🔥",
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Tocino 🥓",
          "Jalapeños🌶️",
          "Peperroncinis 🌶️",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Cambio por aros de Cebolla 🧅",
          "Cambio por Queso frito🧀",
          "Truffle Fries 🍄‍🟫",
          "Sin complementos"
        ]
      },
      {
        "id": 6287,
        "title": "Papas 2",
        "type": "select_one",
        "maxSelections": 20,
        "options": [
          "Agrandado papas y bebida 🔥",
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Tocino🥓",
          "Jalapeños🌶️",
          "Fancy fries🥓🧅",
          "Chilli fries🥩",
          "Cambio por Aros de cebolla 🧅",
          "Cambio por queso frito 🧀",
          "Truffle Fries 🍄‍🟫",
          "Peperonccinis 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 6391,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6392,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6288,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      }
    ]
  },
  {
    "id": 3284,
    "name": "Freakie Burger Dúo",
    "description": "Dos Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 2 Freakie Fries + 2 Sodas",
    "price": 14.99,
    "image": "https://admin.buhopay.com/media/690fb5aab171e253383289.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 951,
        "title": "Deseas agregar extras a tu Burger 1?",
        "type": "option",
        "maxSelections": 10,
        "options": [
          "Jalapeño 🌶",
          "Mermelada de tocino🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Golden Cheese 🧀✨",
          "Tocino 🥓",
          "Sin complementos"
        ]
      },
      {
        "id": 952,
        "title": "Elige tus salsas para papas 1",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Agrandado de papas y bebida 🔥",
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Sin Complementos",
          "Truffle Fries 🍄‍🟫"
        ]
      },
      {
        "id": 953,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 954,
        "title": "Deseas agregar extras a tu burger 2?",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Jalapeño 🌶",
          "Mermelada de tocino 🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Golden Cheese 🧀✨",
          "Tocino 🥓",
          "Sin complementos"
        ]
      },
      {
        "id": 955,
        "title": "Elige tus salsas para papas 2",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Agrandado de papas y bebida 🔥",
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Truffle Fries🍄‍🟫",
          "Sin Complementos"
        ]
      },
      {
        "id": 956,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6293,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      }
    ]
  },
  {
    "id": 5256,
    "name": "El ComBig",
    "description": "2 Freakie Burgers + 2 Frekie Dogs + 1 Queso Frito + 2 Papas Sazonadas + 1 Papa Wafle + 1 Papa Blanca + 4 Bebidas",
    "price": 25.99,
    "image": "https://admin.buhopay.com/media/690fb630e9836428909887.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 2423,
        "title": "Deseas agregar extras a tu Burger 1?",
        "type": "select_one",
        "maxSelections": 10,
        "options": [
          "Golden Cheese 🧀",
          "Peperonccinis 🌶️",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Mermelada de tocino 🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Sin complementos"
        ]
      },
      {
        "id": 2424,
        "title": "Deseas agregar extras a tu Burger 2?",
        "type": "select_one",
        "maxSelections": 10,
        "options": [
          "Golden Cheese 🧀",
          "Peperonccinis 🌶️",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Mermelada de tocino 🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Sin complementos"
        ]
      },
      {
        "id": 2425,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Peperonccinis 🌶️",
          "Sin Complementos"
        ]
      },
      {
        "id": 2426,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Peperonccinis 🌶️",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 2427,
        "title": "Elige salsas para las 4 papas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓 (4 papas)",
          "Jalapeños 🌶 (4 papas)",
          "Peperonccinis (4)",
          "Fancy Fries 🥓🧅 (4 papas)",
          "Sin Complementos"
        ]
      },
      {
        "id": 6298,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      },
      {
        "id": 6395,
        "title": "Elige tus 4 sodas",
        "type": "select_one",
        "maxSelections": 4,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3053,
    "name": "Combo Individual",
    "description": "1 Freakie Dog + 1 Freakie Fries + 1 Soda en lata",
    "price": 3.99,
    "image": "https://admin.buhopay.com/media/690fac058a596040745956.jpeg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 758,
        "title": "Elige tus complementos",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Peperonccinis 🌶",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 759,
        "title": "Elige tus salsas para papas",
        "type": "select_one",
        "maxSelections": 20,
        "options": [
          "Agrandado papa y soda 🔥",
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Sin Complementos",
          "Truffle Fries 🍄‍🟫"
        ]
      },
      {
        "id": 6396,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6294,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      }
    ]
  },
  {
    "id": 15234,
    "name": "Duo Picossini",
    "description": "Dos Freakie Burgers (con 4 pepperonccinis), dos ordenes de papas fritas medianas, una orden de queso frito y dos bebidas",
    "price": 17.99,
    "image": "https://admin.buhopay.com/media/690fb4e378a1c210250486.jpg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 6397,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6398,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 9747,
    "name": "Combo Chilli Dog",
    "description": "Delicioso Hot Dog con pan Brioche, Chilli a base del corte New York Gold, Queso Cheddar, salchicha polaca y su orden de papas fritas sazonadas",
    "price": 5.99,
    "image": "https://admin.buhopay.com/media/65fe0bacbc365790065063.jpg",
    "category": "combos_temporada",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 4540,
        "title": "Complementos Chilli Dog",
        "type": "select_one",
        "maxSelections": 3,
        "options": [
          "Jalapeño🌶️",
          "Costra de Queso🧀",
          "Peperonccinis 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 4541,
        "title": "Salsa para Papas",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Agrandado papa y soda 🔥",
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Jalapeño",
          "Tocino🥓",
          "Peperonccinis 🌶️",
          "Fancy Fries🥓🧅",
          "Chilli Fries 🥩",
          "Truffle Fries 🍄‍🟫",
          "Sin complementos"
        ]
      },
      {
        "id": 6399,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6295,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      }
    ]
  },
  {
    "id": 11304,
    "name": "Royal Truffle Combo",
    "description": "Dos Smashburgers a base de puyazo, nuestra bandeja de papas con parmesano, su aderezo a base de trufa y dos bebidas",
    "price": 19.99,
    "image": "https://admin.buhopay.com/media/690fab0e08ee6088149935.jpeg",
    "category": "combos_temporada",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 6302,
        "title": "Burger 1",
        "type": "option",
        "maxSelections": 10,
        "options": [
          "Jalapeños 🌶️",
          "Tocino 🥓",
          "Aros de cebolla 🧅",
          "Queso Frito 🧀",
          "Golden Cheese 🧀",
          "Peperonccinis 🌶️"
        ]
      },
      {
        "id": 6303,
        "title": "Burger 2",
        "type": "option",
        "maxSelections": 10,
        "options": [
          "Jalapeños🌶️",
          "Tocino🥓",
          "Aros de Cebolla 🧅",
          "Queso Frito 🧀",
          "Golden Cheese 🧀",
          "Peperonccinis 🌶️"
        ]
      },
      {
        "id": 6301,
        "title": "Extras",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Dip de Queso🧀",
          "Queso Frito🧀",
          "Aros de Cebolla 🧅",
          "Sweet Freak 🍰"
        ]
      },
      {
        "id": 6408,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6409,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 15175,
    "name": "Sweet Burger duo",
    "description": "Dos Smashburgers, con dos ordenes de papas fritas medianas, dos sodas y nuestro delicioso postre de cheesecake de nutella",
    "price": 17.99,
    "image": "https://admin.buhopay.com/media/690faa5931aaa212744773.jpeg",
    "category": "combos_temporada",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 6308,
        "title": "Burger 1",
        "type": "option",
        "maxSelections": 10,
        "options": [
          "Golden Cheese 🌟",
          "Tocino 🥓",
          "Jalapeños 🌶️",
          "Mermelada de tocino 🥓🥩",
          "Queso Frito 🧀",
          "Aros de Cebolla 🧅",
          "Peperonccinis 🌶️"
        ]
      },
      {
        "id": 6309,
        "title": "Burger 2",
        "type": "option",
        "maxSelections": 10,
        "options": [
          "Golden Cheese 🌟",
          "Tocino 🥓",
          "Mermelada de tocino 🥓🧅",
          "Queso Frito 🧀",
          "Aros de cebolla 🧅",
          "Peperonccinis 🌶️",
          "Jalapeños 🌶️"
        ]
      },
      {
        "id": 6310,
        "title": "Papas 1",
        "type": "select_one",
        "maxSelections": 17,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Jalapeños 🌶️",
          "Peperonccinis 🌶️",
          "Tocino 🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries🥩🫘",
          "Truffle Fries🍄‍🟫",
          "Sin complementos"
        ]
      },
      {
        "id": 6311,
        "title": "Papas 2",
        "type": "select_one",
        "maxSelections": 18,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "BBQ",
          "Jalapeños 🌶️",
          "Peperonccinis 🌶️",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩🫘",
          "Truffle Fries 🍄‍🟫",
          "Sin complementos"
        ]
      },
      {
        "id": 6410,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Duranzo",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 6411,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola Zero",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite",
          "Coca Cola (Lata)"
        ]
      }
    ]
  },
  {
    "id": 3283,
    "name": "La Freakie Burger",
    "description": "Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 1 Freakie Fries + 1 Soda",
    "price": 7.99,
    "image": "https://admin.buhopay.com/media/690fae9468c38798132032.jpeg",
    "category": "burgers",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 6304,
        "title": "Burger",
        "type": "select_one",
        "maxSelections": 10,
        "options": [
          "Jalapeños 🌶️",
          "Tocino 🥓",
          "Aros de Cebolla 🧅",
          "Queso Frito 🧀",
          "Golden Cheese 🧀",
          "Peperonccinis 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 948,
        "title": "Elige tus salsas para papas",
        "type": "select_one",
        "maxSelections": 12,
        "options": [
          "Agrandado de papa y soda 🔥",
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Truffle Fries 🍄‍🟫",
          "Sin Complementos"
        ]
      },
      {
        "id": 949,
        "title": "Elige tu soda",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Sprite",
          "Fresca"
        ]
      }
    ]
  },
  {
    "id": 3284,
    "name": "Freakie Burger Dúo",
    "description": "Dos Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 2 Freakie Fries + 2 Sodas",
    "price": 14.99,
    "image": "https://admin.buhopay.com/media/690fb5aab171e253383289.jpg",
    "category": "burgers",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 1284,
        "title": "Deseas agregar extras a tu Burger 1?",
        "type": "option",
        "maxSelections": 9,
        "options": [
          "Golden Cheese 🧀",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Mermelada de tocino 🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Peperonccinis 🌶",
          "Sin complementos"
        ]
      },
      {
        "id": 1285,
        "title": "Elige tus salsas para papas 1",
        "type": "select_one",
        "maxSelections": 15,
        "options": [
          "Agrandado de papa y soda 🔥",
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries🥩",
          "Sin Complementos",
          "Truffle Fries🍄‍🟫"
        ]
      },
      {
        "id": 1286,
        "title": "Elige tu soda 1",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashampan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      },
      {
        "id": 1287,
        "title": "Deseas agregar extras a tu burger 2?",
        "type": "select_one",
        "maxSelections": 7,
        "options": [
          "Golden Cheese 🧀",
          "Jalapeño 🌶",
          "Tocino 🥓",
          "Mermelada de tocino 🥓🧅",
          "Carne extra y Queso extra",
          "Aros de Cebolla 🧅",
          "Peperonccinis 🌶",
          "Sin complementos"
        ]
      },
      {
        "id": 1288,
        "title": "Elige tus salsas para papas 2",
        "type": "select_one",
        "maxSelections": 12,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Jalapeño🌶",
          "Tocino🥓",
          "Fancy Fries 🥓🧅",
          "Chilli Fries 🥩",
          "Truffle Fries 🍄‍🟫",
          "Sin Complementos",
          "Agrandado de papa y soda 🔥"
        ]
      },
      {
        "id": 6412,
        "title": "Elige tu soda 2",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca Cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Sprite",
          "Fresca"
        ]
      }
    ]
  },
  {
    "id": 9727,
    "name": "Freakie Chilli",
    "description": "Delicioso Chilli a base del famoso corte New York, con una mezcla de Frijoles negros, frijoles pinto, con unos toques ahumados de chiles chipotles, chile ciruela y caldo de carne.",
    "price": 4.99,
    "image": "https://admin.buhopay.com/media/65f09b1a9b88b849258326.jpg",
    "category": "hotdogs",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 4526,
        "title": "¿Deseas agregar papas Waffles?",
        "type": "option",
        "maxSelections": 1,
        "options": [
          "Papas Waffle 🍟"
        ]
      }
    ]
  },
  {
    "id": 3085,
    "name": "Freakie Fries",
    "description": "",
    "price": 1.99,
    "image": "https://admin.buhopay.com/media/62316010c5c02786154265.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 805,
        "title": "Elige tus salsas",
        "type": "select_one",
        "maxSelections": 7,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      }
    ]
  },
  {
    "id": 3110,
    "name": "Mini Fancy's",
    "description": "Tus ya favoritas \"Fancy Fries\" ahora en un nuevo tamaño más pequeño pero siempre delicioso.",
    "price": 4.99,
    "image": "https://admin.buhopay.com/media/646d5721d9874633844774.jpg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 2066,
    "name": "Freakie Dog",
    "description": "1 Hot Dog individual preparado con ingredientes frescos, pan artesanal y el embutido de la mejor calidad.",
    "price": 1.99,
    "image": "https://admin.buhopay.com/media/622b9f1c24346446680972.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 64,
        "title": "Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      }
    ]
  },
  {
    "id": 3108,
    "name": "Super Freak",
    "description": "Un delicioso pan Brioche a base de mantequilla, acompañado de una salchicha polaca, cubierta por una capa de Papas Fritas, salsa de Queso cheddar, Salsa mil islas a base pepinillos y cebolla caramelizada y un toque final de Tocino ahumado.",
    "price": 2.99,
    "image": "https://admin.buhopay.com/media/646d56f617367376832992.jpg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 3056,
    "name": "Fancy Fries",
    "description": "Cuatro tipos de papitas, una capa de queso cheddar, seguida de una salsa mil islas versión Freakie y mermelada de tocino para finalizar.",
    "price": 8.99,
    "image": "https://admin.buhopay.com/media/622ba06fa0a3c307390661.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 3057,
    "name": "Aros de Cebolla",
    "description": "Orden de Aros de cebolla acompañada de cualquiera de nuestras 5 deliciosas Salsas!",
    "price": 3.99,
    "image": "https://admin.buhopay.com/media/622ba0ac79908227430507.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 811,
        "title": "Elige tus salsas",
        "type": "select_one",
        "maxSelections": 7,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      }
    ]
  },
  {
    "id": 3635,
    "name": "Queso Frito",
    "description": "",
    "price": 3.99,
    "image": "https://admin.buhopay.com/media/63c9a5dfe183c359725756.jpeg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 1348,
        "title": "Extras",
        "type": "option",
        "maxSelections": 1,
        "options": [
          "Jalapeños"
        ]
      }
    ]
  },
  {
    "id": 9855,
    "name": "ChiliDúo",
    "description": "2 ChiliDogs (1 de ellos con cebolla y jalapeños) + 2 Freakie Fries + 1 Orden de Aros de Cebolla",
    "price": 14.99,
    "image": "https://admin.buhopay.com/media/663686bf08364667568248.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 4616,
        "title": "¿Deseas extras para Hot Dog 2?",
        "type": "option",
        "maxSelections": 5,
        "options": [
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶️",
          "Peperonccinis 🌶️",
          "Sin complementos"
        ]
      },
      {
        "id": 4617,
        "title": "Elige tus salsas para Papas 1",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶️",
          "Fancy Fries 🥓🧅",
          "Sin complementos"
        ]
      },
      {
        "id": 4618,
        "title": "Elige tus salsas para Papas 2",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶️",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 6413,
        "title": "Elige tus 2 sodas",
        "type": "select_one",
        "maxSelections": 2,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3086,
    "name": "Fancy Fries Combo",
    "description": "4 Hot Dogs + Bandeja de 4 tipos de Papas fritas (para 4 personas) + 4 sodas",
    "price": 18.99,
    "image": "https://admin.buhopay.com/media/690fb66a902ef268171841.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 806,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Peperonccinis 🌶️",
          "Sin Complementos"
        ]
      },
      {
        "id": 807,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos",
          "Peperonccinis 🌶️"
        ]
      },
      {
        "id": 808,
        "title": "Hot Dog 3 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos",
          "Peperonccinis 🌶️"
        ]
      },
      {
        "id": 809,
        "title": "Hot Dog 4 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Peperonccinis 🌶️",
          "Sin Complementos"
        ]
      },
      {
        "id": 810,
        "title": "Elige tus 4 sodas",
        "type": "select_one",
        "maxSelections": 4,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 2068,
    "name": "Freakie Family",
    "description": "4 Freakie Dogs + 4 Freakie Fries + 4 Sodas en lata",
    "price": 15.99,
    "image": "https://admin.buhopay.com/media/690fab3b8ae31420196853.jpeg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 66,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 776,
        "title": "Papas 1 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 67,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 781,
        "title": "Papas 2 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 68,
        "title": "Hot Dog 3 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 782,
        "title": "Papas 3 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 69,
        "title": "Hot Dog 4 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 783,
        "title": "Papas 4 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 6414,
        "title": "Elige tus 4 sodas",
        "type": "select_one",
        "maxSelections": 4,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3059,
    "name": "Freakie Box",
    "description": "3 Freakie Dogs + 3 Ordenes de Papas fritas + 1 Orden de aros de cebolla",
    "price": 14.99,
    "image": "https://admin.buhopay.com/media/622ba40981ef5551764078.PNG",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 794,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 795,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 796,
        "title": "Hot Dog 3 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 798,
        "title": "Elige tus salsas para Papitas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Sin Complementos",
          "Fancy Fries 🥓🧅"
        ]
      }
    ]
  },
  {
    "id": 3058,
    "name": "ComBROS! 🔥",
    "description": "4 Freakie Dogs + 2 Freakie Fries + 1 Aros de Cebolla + 2 Sodas",
    "price": 14.99,
    "image": "https://admin.buhopay.com/media/690fb68a5e4ea189216463.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 787,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 788,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 789,
        "title": "Hot Dog 3 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 790,
        "title": "Hot Dog 4 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 791,
        "title": "Papas 1 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 792,
        "title": "Papas 2 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 6415,
        "title": "Elige tus 2 sodas",
        "type": "select_one",
        "maxSelections": 2,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3055,
    "name": "Combo Trío",
    "description": "3 Freakie Dogs + 3 Freakie Fries + 3 Sodas en lata",
    "price": 11.99,
    "image": "https://admin.buhopay.com/media/690fb69a66289682705720.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 767,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 768,
        "title": "Papas 1 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 770,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 771,
        "title": "Papas 2 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 773,
        "title": "Hot Dog 3 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 774,
        "title": "Papas 3 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 6416,
        "title": "Elige tus 3 sodas",
        "type": "select_one",
        "maxSelections": 3,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3111,
    "name": "Combo Fancy Dúo",
    "description": "2 FreakieDogs + 2 Bebidas + 1 bandeja de Fancys Mini",
    "price": 10.99,
    "image": "https://admin.buhopay.com/media/690fb6eb14027065273719.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 846,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin complementos"
        ]
      },
      {
        "id": 847,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin complementos"
        ]
      },
      {
        "id": 6417,
        "title": "Elige tus 2 sodas",
        "type": "select_one",
        "maxSelections": 2,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3054,
    "name": "Combo Dúo",
    "description": "2 Freakie Dogs + 2 Freakie Fries + 2 Sodas",
    "price": 7.99,
    "image": "https://admin.buhopay.com/media/690fb6a625bd5463986536.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 761,
        "title": "Hot Dog 1 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 762,
        "title": "Papas 1 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 764,
        "title": "Hot Dog 2 - Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin Complementos"
        ]
      },
      {
        "id": 765,
        "title": "Papas 2 - Elige tus salsas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Sin Complementos",
          "Fancy Fries 🥓🧅"
        ]
      },
      {
        "id": 6419,
        "title": "Elige tus 2 sodas",
        "type": "select_one",
        "maxSelections": 2,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3060,
    "name": "Combo Individual",
    "description": "1 Freakie Dog + 1 Freakie Fries + 1 Soda en lata",
    "price": 3.99,
    "image": "https://admin.buhopay.com/media/690fabcc47938019040179.jpeg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 784,
        "title": "Elige tus complementos",
        "type": "select_one",
        "maxSelections": 11,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Escabeche",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Cebolla",
          "Pepinillos",
          "Tocino 🥓",
          "Costra de Queso 🧀",
          "Jalapeños 🌶",
          "Sin complementos"
        ]
      },
      {
        "id": 785,
        "title": "Elige tus salsas para papas",
        "type": "select_one",
        "maxSelections": 8,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Chipotle",
          "Cheddar",
          "Barbacoa",
          "Nutella (Complemento único)",
          "Tocino 🥓",
          "Jalapeños 🌶",
          "Fancy Fries 🥓🧅",
          "Sin Complementos"
        ]
      },
      {
        "id": 6420,
        "title": "Elige tu soda",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3109,
    "name": "Combo Super Freak",
    "description": "1 Súper Freak + 1 Freakie Fries + 1 Soda",
    "price": 5.99,
    "image": "https://admin.buhopay.com/media/690fb701ddfaf018221731.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": [
      {
        "id": 843,
        "title": "Escoge las salsas de tus papas",
        "type": "select_one",
        "maxSelections": 6,
        "options": [
          "Ketchup",
          "Mayonesa",
          "Cheddar",
          "Chipotle",
          "BBQ",
          "Fancy Fries 🥓🧅",
          "Sin complementos"
        ]
      },
      {
        "id": 6421,
        "title": "Elige tu soda",
        "type": "select_one",
        "maxSelections": 1,
        "options": [
          "Coca cola",
          "Kolashanpan",
          "Agua",
          "Coca Cola (Lata)",
          "Te Limon",
          "Te Frambuesa",
          "Te Durazno",
          "Fanta",
          "Fresca",
          "Sprite"
        ]
      }
    ]
  },
  {
    "id": 3088,
    "name": "Coca Cola",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 3094,
    "name": "Coca Cola Zero",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 15463,
    "name": "Uva",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 15464,
    "name": "Fresca",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 3096,
    "name": "Fanta",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 15465,
    "name": "Sprite",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 4433,
    "name": "Té de Limón",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 4435,
    "name": "Té de Frambuesa",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 15466,
    "name": "Té de Durazno",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  },
  {
    "id": 3093,
    "name": "Botella con agua",
    "description": "",
    "price": 1.5,
    "image": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "addons": []
  }
];
