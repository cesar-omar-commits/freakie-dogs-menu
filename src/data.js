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

export const CATEGORIES = [
  {
    "id": "combos",
    "name": "COMBOS 🔥",
    "emoji": "🔥"
  },
  {
    "id": "burgers",
    "name": "FREAKIE BURGER 🍔",
    "emoji": "🍔"
  },
  {
    "id": "hotdogs",
    "name": "HOT DOGS 🌭",
    "emoji": "🌭"
  },
  {
    "id": "combos_pack",
    "name": "COMBOS 🌭🍟🥤",
    "emoji": "🌭"
  },
  {
    "id": "drinks",
    "name": "BEBIDAS 🥤",
    "emoji": "🥤"
  }
];

export const PRODUCTS = [
  {
    "id": 12269,
    "name": "MENU UNICAMENTE A DOMICILIO",
    "description": "Este menu esta unicamente disponible para servicio a domicilio!",
    "price": 0,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/6691930355070155413396.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 15179,
    "name": "Sticker Sorpresa",
    "description": "Un Sticker sorpresa de nuestros mas de 15 estilos diferentes 🔥😏",
    "price": 0.5,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/699ce08434b6e761543850.png",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 16240,
    "name": "Adivina la Marca🔥🔥",
    "description": "Un paquete de nuestras 4 Ediciones con 20 tarjetitas cada una, 2 Stickers y te enviamos las coronitas de cortesia🙉",
    "price": 3.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/69a78b849e242912426003.png",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 16289,
    "name": "Gomita Hamburguesa",
    "description": "Hamburguesa divida en capitas de dulce delicosas",
    "price": 1.5,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/69bc5acf35188095777340.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 13998,
    "name": "Combpleto",
    "description": "2 Freakie Burgers 🍔🍔, 2 Freakie Dogs🌭🌭 (1 con costra de queso), 2 Papas fritas, 1 Queso Frito, 1 Dip de Queso, 1 Sweet Freak (cheesecake de nutella), 3 sodas",
    "price": 31.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb4f9c3116629878330.jpg",
    "category": "combos",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "badge": "Popular",
    "modifierGroups": [
      {
        "id": "5815",
        "name": "Hot dog 1",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "5815_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "5815_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "5815_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "5815_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "5815_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "5815_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "5815_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "5815_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "5815_8",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "5815_9",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "5815_10",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "5815_11",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "5815_12",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "5816",
        "name": "Hot Dog 2",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "5816_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "5816_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "5816_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "5816_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "5816_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "5816_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "5816_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "5816_7",
            "name": "Pepinillo",
            "price": 0
          },
          {
            "id": "5816_8",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "5816_9",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "5816_10",
            "name": "Costra de queso 🧀",
            "price": 0
          },
          {
            "id": "5816_11",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "5816_12",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "5817",
        "name": "Burger 1",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "5817_0",
            "name": "Jalapeño🌶️",
            "price": 0
          },
          {
            "id": "5817_1",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "5817_2",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "5817_3",
            "name": "Golden cheese 🧀",
            "price": 0
          },
          {
            "id": "5817_4",
            "name": "Aros de cebolla 🧅",
            "price": 0
          },
          {
            "id": "5817_5",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "5817_6",
            "name": "Crane y Queso extra 🥩",
            "price": 0
          },
          {
            "id": "5817_7",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "5817_8",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "5818",
        "name": "Burger 2",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "5818_0",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "5818_1",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "5818_2",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "5818_3",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "5818_4",
            "name": "Aros de cebolla 🧅",
            "price": 0
          },
          {
            "id": "5818_5",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "5818_6",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "5818_7",
            "name": "Carne y queso extra 🥩",
            "price": 0
          },
          {
            "id": "5818_8",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "5819",
        "name": "Papas",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "5819_0",
            "name": "Agrandado 🔥 (2 papas y 2 bebidas)",
            "price": 0
          },
          {
            "id": "5819_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "5819_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "5819_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "5819_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "5819_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "5819_6",
            "name": "Jalapeños 🌶️ (2 papas)",
            "price": 0
          },
          {
            "id": "5819_7",
            "name": "Tocino 🥓 (2 papas)",
            "price": 0
          },
          {
            "id": "5819_8",
            "name": "Fancy Fries 🥓🧅 (2 papas)",
            "price": 0
          },
          {
            "id": "5819_9",
            "name": "Chili con carne 🫘 (2 papas)",
            "price": 0
          },
          {
            "id": "5819_10",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "5820",
        "name": "Sodas",
        "required": true,
        "maxSelections": 3,
        "options": [
          {
            "id": "5820_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "5820_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "5820_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "5820_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "5820_4",
            "name": "Coca Zero",
            "price": 0
          },
          {
            "id": "5820_5",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "5820_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "5820_7",
            "name": "Te Lipton",
            "price": 0
          },
          {
            "id": "5820_8",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "5820_9",
            "name": "Fresa",
            "price": 0
          },
          {
            "id": "5820_10",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "5820_11",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6291",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6291_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6291_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6291_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6291_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 12552,
    "name": "Burger Box",
    "description": "Ese combo le trae dos Smashburgers 🍔🍔, dos hot dogs con 8 complementos 🌭🌭(uno lleva costra de queso 🧀), dos papas 🍟🍟, una orden de jalapeños 🌶️ y dos bebidas 🥤🥤",
    "price": 19.5,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb55cc2ac0756101394.jpg",
    "category": "combos",
    "popular": false,
    "recommended": true,
    "soldOut": false,
    "badge": "Recomendado",
    "modifierGroups": [
      {
        "id": "6282",
        "name": "Burger 1",
        "required": false,
        "maxSelections": 7,
        "options": [
          {
            "id": "6282_0",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6282_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6282_2",
            "name": "Peperroncinis 🌶️",
            "price": 0
          },
          {
            "id": "6282_3",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "6282_4",
            "name": "Carne y Queso extra 🥩",
            "price": 0
          },
          {
            "id": "6282_5",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6282_6",
            "name": "Golden Cheese🧀✨",
            "price": 0
          },
          {
            "id": "6282_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6283",
        "name": "Burger 2",
        "required": false,
        "maxSelections": 9,
        "options": [
          {
            "id": "6283_0",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6283_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6283_2",
            "name": "Peperroncinis 🌶️",
            "price": 0
          },
          {
            "id": "6283_3",
            "name": "Mermelada de tocino🧅🥓",
            "price": 0
          },
          {
            "id": "6283_4",
            "name": "Carne y Queso extra🥩",
            "price": 0
          },
          {
            "id": "6283_5",
            "name": "Aros de cebolla🧅",
            "price": 0
          },
          {
            "id": "6283_6",
            "name": "Golden Cheese 🧀✨",
            "price": 0
          },
          {
            "id": "6283_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6284",
        "name": "Hot dog 1",
        "required": true,
        "maxSelections": 16,
        "options": [
          {
            "id": "6284_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6284_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6284_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "6284_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6284_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6284_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6284_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "6284_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "6284_8",
            "name": "Peperroncinis 🌶️",
            "price": 0
          },
          {
            "id": "6284_9",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "6284_10",
            "name": "Costra de queso 🧀",
            "price": 0
          },
          {
            "id": "6284_11",
            "name": "Jalapeños🌶️",
            "price": 0
          },
          {
            "id": "6284_12",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6285",
        "name": "Hot dog 2",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "6285_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6285_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6285_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "6285_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6285_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6285_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6285_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "6285_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "6285_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6285_9",
            "name": "Peperroncinis 🌶️",
            "price": 0
          },
          {
            "id": "6285_10",
            "name": "Costra de queso🧀",
            "price": 0
          },
          {
            "id": "6285_11",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6285_12",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6286",
        "name": "Papas 1",
        "required": true,
        "maxSelections": 20,
        "options": [
          {
            "id": "6286_0",
            "name": "Agrandado papas y bebida 🔥",
            "price": 0
          },
          {
            "id": "6286_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6286_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6286_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6286_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6286_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6286_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6286_7",
            "name": "Jalapeños🌶️",
            "price": 0
          },
          {
            "id": "6286_8",
            "name": "Peperroncinis 🌶️",
            "price": 0
          },
          {
            "id": "6286_9",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "6286_10",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "6286_11",
            "name": "Cambio por aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6286_12",
            "name": "Cambio por Queso frito🧀",
            "price": 0
          },
          {
            "id": "6286_13",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "6286_14",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6287",
        "name": "Papas 2",
        "required": true,
        "maxSelections": 20,
        "options": [
          {
            "id": "6287_0",
            "name": "Agrandado papas y bebida 🔥",
            "price": 0
          },
          {
            "id": "6287_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6287_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6287_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6287_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6287_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6287_6",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "6287_7",
            "name": "Jalapeños🌶️",
            "price": 0
          },
          {
            "id": "6287_8",
            "name": "Fancy fries🥓🧅",
            "price": 0
          },
          {
            "id": "6287_9",
            "name": "Chilli fries🥩",
            "price": 0
          },
          {
            "id": "6287_10",
            "name": "Cambio por Aros de cebolla 🧅",
            "price": 0
          },
          {
            "id": "6287_11",
            "name": "Cambio por queso frito 🧀",
            "price": 0
          },
          {
            "id": "6287_12",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "6287_13",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "6287_14",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6391",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6391_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6391_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6391_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6391_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6391_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6391_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6391_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6391_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6391_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6391_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6391_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6392",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6392_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6392_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6392_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6392_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6392_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6392_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6392_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6392_7",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6392_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6392_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6392_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6288",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6288_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6288_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6288_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6288_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3284,
    "name": "Freakie Burger Dúo",
    "description": "Dos Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 2 Freakie Fries + 2 Sodas",
    "price": 14.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb5aab171e253383289.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "951",
        "name": "Deseas agregar extras a tu Burger 1?",
        "required": false,
        "maxSelections": 10,
        "options": [
          {
            "id": "951_0",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "951_1",
            "name": "Mermelada de tocino🥓🧅",
            "price": 0
          },
          {
            "id": "951_2",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "951_3",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "951_4",
            "name": "Golden Cheese 🧀✨",
            "price": 0
          },
          {
            "id": "951_5",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "951_6",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "952",
        "name": "Elige tus salsas para papas 1",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "952_0",
            "name": "Agrandado de papas y bebida 🔥",
            "price": 0
          },
          {
            "id": "952_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "952_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "952_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "952_4",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "952_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "952_6",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "952_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "952_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "952_9",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "952_10",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "952_11",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          }
        ]
      },
      {
        "id": "953",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "953_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "953_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "953_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "953_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "953_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "953_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "953_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "953_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "953_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "953_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "953_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "954",
        "name": "Deseas agregar extras a tu burger 2?",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "954_0",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "954_1",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "954_2",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "954_3",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "954_4",
            "name": "Golden Cheese 🧀✨",
            "price": 0
          },
          {
            "id": "954_5",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "954_6",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "955",
        "name": "Elige tus salsas para papas 2",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "955_0",
            "name": "Agrandado de papas y bebida 🔥",
            "price": 0
          },
          {
            "id": "955_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "955_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "955_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "955_4",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "955_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "955_6",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "955_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "955_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "955_9",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "955_10",
            "name": "Truffle Fries🍄‍🟫",
            "price": 0
          },
          {
            "id": "955_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "956",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "956_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "956_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "956_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "956_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "956_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "956_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "956_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "956_7",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "956_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "956_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "956_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6293",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6293_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6293_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6293_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6293_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 5256,
    "name": "El ComBig",
    "description": "2 Freakie Burgers + 2 Frekie Dogs + 1 Queso Frito + 2 Papas Sazonadas + 1 Papa Wafle + 1 Papa Blanca + 4 Bebidas",
    "price": 25.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb630e9836428909887.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "2423",
        "name": "Deseas agregar extras a tu Burger 1?",
        "required": true,
        "maxSelections": 10,
        "options": [
          {
            "id": "2423_0",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "2423_1",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "2423_2",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "2423_3",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "2423_4",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "2423_5",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "2423_6",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "2423_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "2424",
        "name": "Deseas agregar extras a tu Burger 2?",
        "required": true,
        "maxSelections": 10,
        "options": [
          {
            "id": "2424_0",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "2424_1",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "2424_2",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "2424_3",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "2424_4",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "2424_5",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "2424_6",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "2424_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "2425",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "2425_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "2425_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "2425_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "2425_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "2425_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "2425_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "2425_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "2425_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "2425_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "2425_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "2425_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "2425_11",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "2425_12",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "2426",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "2426_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "2426_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "2426_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "2426_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "2426_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "2426_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "2426_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "2426_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "2426_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "2426_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "2426_10",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "2426_11",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "2426_12",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "2427",
        "name": "Elige salsas para las 4 papas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "2427_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "2427_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "2427_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "2427_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "2427_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "2427_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "2427_6",
            "name": "Tocino 🥓 (4 papas)",
            "price": 0
          },
          {
            "id": "2427_7",
            "name": "Jalapeños 🌶 (4 papas)",
            "price": 0
          },
          {
            "id": "2427_8",
            "name": "Peperonccinis (4)",
            "price": 0
          },
          {
            "id": "2427_9",
            "name": "Fancy Fries 🥓🧅 (4 papas)",
            "price": 0
          },
          {
            "id": "2427_10",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6298",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6298_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6298_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6298_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6298_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      },
      {
        "id": "6395",
        "name": "Elige tus 4 sodas",
        "required": true,
        "maxSelections": 4,
        "options": [
          {
            "id": "6395_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6395_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6395_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6395_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6395_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6395_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6395_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6395_7",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6395_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6395_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6395_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3053,
    "name": "Combo Individual",
    "description": "1 Freakie Dog + 1 Freakie Fries + 1 Soda en lata",
    "price": 3.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fac058a596040745956.jpeg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "758",
        "name": "Elige tus complementos",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "758_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "758_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "758_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "758_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "758_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "758_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "758_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "758_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "758_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "758_9",
            "name": "Peperonccinis 🌶",
            "price": 0
          },
          {
            "id": "758_10",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "758_11",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "758_12",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "759",
        "name": "Elige tus salsas para papas",
        "required": true,
        "maxSelections": 20,
        "options": [
          {
            "id": "759_0",
            "name": "Agrandado papa y soda 🔥",
            "price": 0
          },
          {
            "id": "759_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "759_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "759_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "759_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "759_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "759_6",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "759_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "759_8",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "759_9",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "759_10",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "759_11",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "759_12",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          }
        ]
      },
      {
        "id": "6396",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6396_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6396_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6396_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6396_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6396_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6396_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6396_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6396_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6396_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6396_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6396_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6294",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6294_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6294_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6294_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6294_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 15234,
    "name": "Duo Picossini",
    "description": "Dos Freakie Burgers (con 4 pepperonccinis), dos ordenes de papas fritas medianas, una orden de queso frito y dos bebidas",
    "price": 17.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb4e378a1c210250486.jpg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "6397",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6397_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6397_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6397_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6397_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6397_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6397_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6397_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6397_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6397_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6397_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6397_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6398",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6398_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6398_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6398_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6398_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6398_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6398_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6398_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6398_7",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6398_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6398_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6398_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 9747,
    "name": "Combo Chilli Dog",
    "description": "Delicioso Hot Dog con pan Brioche, Chilli a base del corte New York Gold, Queso Cheddar, salchicha polaca y su orden de papas fritas sazonadas",
    "price": 5.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/65fe0bacbc365790065063.jpg",
    "category": "combos",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "badge": "Popular",
    "modifierGroups": [
      {
        "id": "4540",
        "name": "Complementos Chilli Dog",
        "required": true,
        "maxSelections": 3,
        "options": [
          {
            "id": "4540_0",
            "name": "Jalapeño🌶️",
            "price": 0
          },
          {
            "id": "4540_1",
            "name": "Costra de Queso🧀",
            "price": 0
          },
          {
            "id": "4540_2",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "4540_3",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "4541",
        "name": "Salsa para Papas",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "4541_0",
            "name": "Agrandado papa y soda 🔥",
            "price": 0
          },
          {
            "id": "4541_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "4541_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "4541_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "4541_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "4541_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "4541_6",
            "name": "Jalapeño",
            "price": 0
          },
          {
            "id": "4541_7",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "4541_8",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "4541_9",
            "name": "Fancy Fries🥓🧅",
            "price": 0
          },
          {
            "id": "4541_10",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "4541_11",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "4541_12",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6399",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6399_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6399_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6399_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6399_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6399_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6399_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6399_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6399_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6399_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6399_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6399_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6295",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6295_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6295_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6295_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6295_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 11304,
    "name": "Royal Truffle Combo",
    "description": "Dos Smashburgers a base de puyazo, nuestra bandeja de papas con parmesano, su aderezo a base de trufa y dos bebidas",
    "price": 19.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fab0e08ee6088149935.jpeg",
    "category": "combos",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "6302",
        "name": "Burger 1",
        "required": false,
        "maxSelections": 10,
        "options": [
          {
            "id": "6302_0",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6302_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6302_2",
            "name": "Aros de cebolla 🧅",
            "price": 0
          },
          {
            "id": "6302_3",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "6302_4",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "6302_5",
            "name": "Peperonccinis 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "6303",
        "name": "Burger 2",
        "required": false,
        "maxSelections": 10,
        "options": [
          {
            "id": "6303_0",
            "name": "Jalapeños🌶️",
            "price": 0
          },
          {
            "id": "6303_1",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "6303_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6303_3",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "6303_4",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "6303_5",
            "name": "Peperonccinis 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "6301",
        "name": "Extras",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "6301_0",
            "name": "Dip de Queso🧀",
            "price": 0
          },
          {
            "id": "6301_1",
            "name": "Queso Frito🧀",
            "price": 0
          },
          {
            "id": "6301_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6301_3",
            "name": "Sweet Freak 🍰",
            "price": 0
          }
        ]
      },
      {
        "id": "6408",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6408_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6408_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6408_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6408_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6408_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6408_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6408_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6408_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6408_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6408_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6408_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6409",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6409_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6409_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6409_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6409_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6409_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6409_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6409_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6409_7",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6409_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6409_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6409_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 15175,
    "name": "Sweet Burger duo",
    "description": "Dos Smashburgers, con dos ordenes de papas fritas medianas, dos sodas y nuestro delicioso postre de cheesecake de nutella",
    "price": 17.99,
    "image": "🔥",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690faa5931aaa212744773.jpeg",
    "category": "combos",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "badge": "Popular",
    "modifierGroups": [
      {
        "id": "6308",
        "name": "Burger 1",
        "required": false,
        "maxSelections": 10,
        "options": [
          {
            "id": "6308_0",
            "name": "Golden Cheese 🌟",
            "price": 0
          },
          {
            "id": "6308_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6308_2",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6308_3",
            "name": "Mermelada de tocino 🥓🥩",
            "price": 0
          },
          {
            "id": "6308_4",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "6308_5",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6308_6",
            "name": "Peperonccinis 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "6309",
        "name": "Burger 2",
        "required": false,
        "maxSelections": 10,
        "options": [
          {
            "id": "6309_0",
            "name": "Golden Cheese 🌟",
            "price": 0
          },
          {
            "id": "6309_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6309_2",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "6309_3",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "6309_4",
            "name": "Aros de cebolla 🧅",
            "price": 0
          },
          {
            "id": "6309_5",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "6309_6",
            "name": "Jalapeños 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "6310",
        "name": "Papas 1",
        "required": true,
        "maxSelections": 17,
        "options": [
          {
            "id": "6310_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6310_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6310_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6310_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6310_4",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6310_5",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6310_6",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "6310_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6310_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "6310_9",
            "name": "Chilli Fries🥩🫘",
            "price": 0
          },
          {
            "id": "6310_10",
            "name": "Truffle Fries🍄‍🟫",
            "price": 0
          },
          {
            "id": "6310_11",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6311",
        "name": "Papas 2",
        "required": true,
        "maxSelections": 18,
        "options": [
          {
            "id": "6311_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "6311_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "6311_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "6311_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "6311_4",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "6311_5",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6311_6",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "6311_7",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "6311_8",
            "name": "Chilli Fries 🥩🫘",
            "price": 0
          },
          {
            "id": "6311_9",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "6311_10",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6410",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6410_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6410_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6410_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6410_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6410_4",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6410_5",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6410_6",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6410_7",
            "name": "Te Duranzo",
            "price": 0
          },
          {
            "id": "6410_8",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6410_9",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6410_10",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "6411",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6411_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6411_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "6411_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6411_3",
            "name": "Coca Cola Zero",
            "price": 0
          },
          {
            "id": "6411_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6411_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6411_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6411_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6411_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6411_9",
            "name": "Sprite",
            "price": 0
          },
          {
            "id": "6411_10",
            "name": "Coca Cola (Lata)",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3283,
    "name": "La Freakie Burger",
    "description": "Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 1 Freakie Fries + 1 Soda",
    "price": 7.99,
    "image": "🍔",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fae9468c38798132032.jpeg",
    "category": "burgers",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "6304",
        "name": "Burger",
        "required": true,
        "maxSelections": 10,
        "options": [
          {
            "id": "6304_0",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "6304_1",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "6304_2",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "6304_3",
            "name": "Queso Frito 🧀",
            "price": 0
          },
          {
            "id": "6304_4",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "6304_5",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "6304_6",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "948",
        "name": "Elige tus salsas para papas",
        "required": true,
        "maxSelections": 12,
        "options": [
          {
            "id": "948_0",
            "name": "Agrandado de papa y soda 🔥",
            "price": 0
          },
          {
            "id": "948_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "948_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "948_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "948_4",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "948_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "948_6",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "948_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "948_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "948_9",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "948_10",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "948_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "949",
        "name": "Elige tu soda",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "949_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "949_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "949_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "949_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "949_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "949_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "949_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "949_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "949_8",
            "name": "Sprite",
            "price": 0
          },
          {
            "id": "949_9",
            "name": "Fresca",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3284,
    "name": "Freakie Burger Dúo",
    "description": "Dos Double Cheeseburger; Blend de Puyazo, Queso Americano, pepinillos y nuestra deliciosa Salsa Mil Islas + 2 Freakie Fries + 2 Sodas",
    "price": 14.99,
    "image": "🍔",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb5aab171e253383289.jpg",
    "category": "burgers",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "1284",
        "name": "Deseas agregar extras a tu Burger 1?",
        "required": false,
        "maxSelections": 9,
        "options": [
          {
            "id": "1284_0",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "1284_1",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "1284_2",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "1284_3",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "1284_4",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "1284_5",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "1284_6",
            "name": "Peperonccinis 🌶",
            "price": 0
          },
          {
            "id": "1284_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "1285",
        "name": "Elige tus salsas para papas 1",
        "required": true,
        "maxSelections": 15,
        "options": [
          {
            "id": "1285_0",
            "name": "Agrandado de papa y soda 🔥",
            "price": 0
          },
          {
            "id": "1285_1",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "1285_2",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "1285_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "1285_4",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "1285_5",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "1285_6",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "1285_7",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "1285_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "1285_9",
            "name": "Chilli Fries🥩",
            "price": 0
          },
          {
            "id": "1285_10",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "1285_11",
            "name": "Truffle Fries🍄‍🟫",
            "price": 0
          }
        ]
      },
      {
        "id": "1286",
        "name": "Elige tu soda 1",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "1286_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "1286_1",
            "name": "Kolashampan",
            "price": 0
          },
          {
            "id": "1286_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "1286_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "1286_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "1286_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "1286_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "1286_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "1286_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "1286_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      },
      {
        "id": "1287",
        "name": "Deseas agregar extras a tu burger 2?",
        "required": true,
        "maxSelections": 7,
        "options": [
          {
            "id": "1287_0",
            "name": "Golden Cheese 🧀",
            "price": 0
          },
          {
            "id": "1287_1",
            "name": "Jalapeño 🌶",
            "price": 0
          },
          {
            "id": "1287_2",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "1287_3",
            "name": "Mermelada de tocino 🥓🧅",
            "price": 0
          },
          {
            "id": "1287_4",
            "name": "Carne extra y Queso extra",
            "price": 0
          },
          {
            "id": "1287_5",
            "name": "Aros de Cebolla 🧅",
            "price": 0
          },
          {
            "id": "1287_6",
            "name": "Peperonccinis 🌶",
            "price": 0
          },
          {
            "id": "1287_7",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "1288",
        "name": "Elige tus salsas para papas 2",
        "required": true,
        "maxSelections": 12,
        "options": [
          {
            "id": "1288_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "1288_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "1288_2",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "1288_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "1288_4",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "1288_5",
            "name": "Jalapeño🌶",
            "price": 0
          },
          {
            "id": "1288_6",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "1288_7",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "1288_8",
            "name": "Chilli Fries 🥩",
            "price": 0
          },
          {
            "id": "1288_9",
            "name": "Truffle Fries 🍄‍🟫",
            "price": 0
          },
          {
            "id": "1288_10",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "1288_11",
            "name": "Agrandado de papa y soda 🔥",
            "price": 0
          }
        ]
      },
      {
        "id": "6412",
        "name": "Elige tu soda 2",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6412_0",
            "name": "Coca Cola",
            "price": 0
          },
          {
            "id": "6412_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6412_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6412_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6412_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6412_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6412_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6412_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6412_8",
            "name": "Sprite",
            "price": 0
          },
          {
            "id": "6412_9",
            "name": "Fresca",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 9727,
    "name": "Freakie Chilli",
    "description": "Delicioso Chilli a base del famoso corte New York, con una mezcla de Frijoles negros, frijoles pinto, con unos toques ahumados de chiles chipotles, chile ciruela y caldo de carne.",
    "price": 4.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/65f09b1a9b88b849258326.jpg",
    "category": "hotdogs",
    "popular": true,
    "recommended": false,
    "soldOut": false,
    "badge": "Popular",
    "modifierGroups": [
      {
        "id": "4526",
        "name": "¿Deseas agregar papas Waffles?",
        "required": false,
        "maxSelections": 1,
        "options": [
          {
            "id": "4526_0",
            "name": "Papas Waffle 🍟",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3085,
    "name": "Freakie Fries",
    "description": "",
    "price": 1.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/62316010c5c02786154265.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "805",
        "name": "Elige tus salsas",
        "required": true,
        "maxSelections": 7,
        "options": [
          {
            "id": "805_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "805_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "805_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "805_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "805_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "805_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "805_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "805_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "805_8",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3110,
    "name": "Mini Fancy's",
    "description": "Tus ya favoritas \"Fancy Fries\" ahora en un nuevo tamaño más pequeño pero siempre delicioso.",
    "price": 4.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/646d5721d9874633844774.jpg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 2066,
    "name": "Freakie Dog",
    "description": "1 Hot Dog individual preparado con ingredientes frescos, pan artesanal y el embutido de la mejor calidad.",
    "price": 1.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/622b9f1c24346446680972.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "64",
        "name": "Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "64_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "64_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "64_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "64_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "64_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "64_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "64_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "64_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "64_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "64_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "64_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "64_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3108,
    "name": "Super Freak",
    "description": "Un delicioso pan Brioche a base de mantequilla, acompañado de una salchicha polaca, cubierta por una capa de Papas Fritas, salsa de Queso cheddar, Salsa mil islas a base pepinillos y cebolla caramelizada y un toque final de Tocino ahumado.",
    "price": 2.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/646d56f617367376832992.jpg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 3056,
    "name": "Fancy Fries",
    "description": "Cuatro tipos de papitas, una capa de queso cheddar, seguida de una salsa mil islas versión Freakie y mermelada de tocino para finalizar.",
    "price": 8.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/622ba06fa0a3c307390661.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 3057,
    "name": "Aros de Cebolla",
    "description": "Orden de Aros de cebolla acompañada de cualquiera de nuestras 5 deliciosas Salsas!",
    "price": 3.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/622ba0ac79908227430507.PNG",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "811",
        "name": "Elige tus salsas",
        "required": true,
        "maxSelections": 7,
        "options": [
          {
            "id": "811_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "811_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "811_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "811_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "811_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "811_5",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "811_6",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "811_7",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3635,
    "name": "Queso Frito",
    "description": "",
    "price": 3.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/63c9a5dfe183c359725756.jpeg",
    "category": "hotdogs",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "1348",
        "name": "Extras",
        "required": false,
        "maxSelections": 1,
        "options": [
          {
            "id": "1348_0",
            "name": "Jalapeños",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 9855,
    "name": "ChiliDúo",
    "description": "2 ChiliDogs (1 de ellos con cebolla y jalapeños) + 2 Freakie Fries + 1 Orden de Aros de Cebolla",
    "price": 14.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/663686bf08364667568248.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "4616",
        "name": "¿Deseas extras para Hot Dog 2?",
        "required": false,
        "maxSelections": 5,
        "options": [
          {
            "id": "4616_0",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "4616_1",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "4616_2",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "4616_3",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "4616_4",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "4617",
        "name": "Elige tus salsas para Papas 1",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "4617_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "4617_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "4617_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "4617_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "4617_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "4617_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "4617_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "4617_7",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "4617_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "4617_9",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "4618",
        "name": "Elige tus salsas para Papas 2",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "4618_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "4618_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "4618_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "4618_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "4618_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "4618_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "4618_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "4618_7",
            "name": "Jalapeños 🌶️",
            "price": 0
          },
          {
            "id": "4618_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "4618_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6413",
        "name": "Elige tus 2 sodas",
        "required": true,
        "maxSelections": 2,
        "options": [
          {
            "id": "6413_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6413_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6413_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6413_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6413_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6413_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6413_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6413_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6413_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6413_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3086,
    "name": "Fancy Fries Combo",
    "description": "4 Hot Dogs + Bandeja de 4 tipos de Papas fritas (para 4 personas) + 4 sodas",
    "price": 18.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb66a902ef268171841.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "806",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "806_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "806_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "806_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "806_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "806_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "806_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "806_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "806_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "806_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "806_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "806_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "806_11",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "806_12",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "807",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "807_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "807_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "807_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "807_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "807_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "807_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "807_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "807_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "807_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "807_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "807_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "807_11",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "807_12",
            "name": "Peperonccinis 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "808",
        "name": "Hot Dog 3 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "808_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "808_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "808_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "808_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "808_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "808_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "808_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "808_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "808_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "808_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "808_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "808_11",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "808_12",
            "name": "Peperonccinis 🌶️",
            "price": 0
          }
        ]
      },
      {
        "id": "809",
        "name": "Hot Dog 4 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "809_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "809_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "809_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "809_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "809_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "809_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "809_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "809_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "809_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "809_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "809_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "809_11",
            "name": "Peperonccinis 🌶️",
            "price": 0
          },
          {
            "id": "809_12",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "810",
        "name": "Elige tus 4 sodas",
        "required": true,
        "maxSelections": 4,
        "options": [
          {
            "id": "810_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "810_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "810_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "810_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "810_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "810_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "810_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "810_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "810_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "810_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 2068,
    "name": "Freakie Family",
    "description": "4 Freakie Dogs + 4 Freakie Fries + 4 Sodas en lata",
    "price": 15.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fab3b8ae31420196853.jpeg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "66",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "66_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "66_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "66_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "66_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "66_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "66_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "66_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "66_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "66_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "66_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "66_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "66_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "776",
        "name": "Papas 1 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "776_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "776_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "776_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "776_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "776_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "776_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "776_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "776_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "776_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "776_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "67",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "67_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "67_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "67_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "67_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "67_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "67_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "67_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "67_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "67_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "67_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "67_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "67_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "781",
        "name": "Papas 2 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "781_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "781_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "781_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "781_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "781_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "781_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "781_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "781_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "781_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "781_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "68",
        "name": "Hot Dog 3 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "68_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "68_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "68_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "68_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "68_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "68_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "68_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "68_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "68_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "68_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "68_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "68_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "782",
        "name": "Papas 3 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "782_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "782_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "782_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "782_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "782_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "782_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "782_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "782_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "782_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "782_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "69",
        "name": "Hot Dog 4 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "69_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "69_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "69_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "69_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "69_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "69_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "69_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "69_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "69_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "69_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "69_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "69_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "783",
        "name": "Papas 4 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "783_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "783_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "783_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "783_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "783_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "783_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "783_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "783_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "783_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "783_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6414",
        "name": "Elige tus 4 sodas",
        "required": true,
        "maxSelections": 4,
        "options": [
          {
            "id": "6414_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6414_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6414_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6414_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6414_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6414_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6414_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6414_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6414_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6414_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3059,
    "name": "Freakie Box",
    "description": "3 Freakie Dogs + 3 Ordenes de Papas fritas + 1 Orden de aros de cebolla",
    "price": 14.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/622ba40981ef5551764078.PNG",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "794",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "794_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "794_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "794_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "794_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "794_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "794_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "794_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "794_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "794_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "794_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "794_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "794_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "795",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "795_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "795_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "795_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "795_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "795_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "795_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "795_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "795_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "795_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "795_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "795_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "795_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "796",
        "name": "Hot Dog 3 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "796_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "796_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "796_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "796_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "796_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "796_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "796_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "796_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "796_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "796_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "796_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "796_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "798",
        "name": "Elige tus salsas para Papitas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "798_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "798_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "798_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "798_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "798_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "798_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "798_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "798_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "798_8",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "798_9",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3058,
    "name": "ComBROS! 🔥",
    "description": "4 Freakie Dogs + 2 Freakie Fries + 1 Aros de Cebolla + 2 Sodas",
    "price": 14.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb68a5e4ea189216463.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "787",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "787_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "787_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "787_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "787_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "787_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "787_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "787_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "787_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "787_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "787_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "787_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "787_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "788",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "788_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "788_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "788_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "788_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "788_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "788_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "788_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "788_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "788_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "788_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "788_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "788_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "789",
        "name": "Hot Dog 3 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "789_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "789_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "789_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "789_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "789_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "789_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "789_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "789_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "789_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "789_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "789_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "789_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "790",
        "name": "Hot Dog 4 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "790_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "790_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "790_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "790_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "790_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "790_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "790_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "790_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "790_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "790_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "790_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "790_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "791",
        "name": "Papas 1 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "791_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "791_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "791_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "791_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "791_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "791_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "791_6",
            "name": "Tocino🥓",
            "price": 0
          },
          {
            "id": "791_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "791_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "791_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "792",
        "name": "Papas 2 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "792_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "792_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "792_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "792_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "792_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "792_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "792_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "792_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "792_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "792_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6415",
        "name": "Elige tus 2 sodas",
        "required": true,
        "maxSelections": 2,
        "options": [
          {
            "id": "6415_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6415_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6415_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6415_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6415_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6415_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6415_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6415_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6415_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6415_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3055,
    "name": "Combo Trío",
    "description": "3 Freakie Dogs + 3 Freakie Fries + 3 Sodas en lata",
    "price": 11.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb69a66289682705720.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "767",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "767_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "767_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "767_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "767_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "767_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "767_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "767_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "767_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "767_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "767_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "767_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "767_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "768",
        "name": "Papas 1 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "768_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "768_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "768_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "768_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "768_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "768_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "768_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "768_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "768_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "768_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "770",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "770_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "770_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "770_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "770_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "770_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "770_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "770_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "770_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "770_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "770_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "770_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "770_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "771",
        "name": "Papas 2 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "771_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "771_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "771_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "771_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "771_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "771_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "771_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "771_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "771_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "771_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "773",
        "name": "Hot Dog 3 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "773_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "773_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "773_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "773_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "773_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "773_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "773_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "773_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "773_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "773_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "773_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "773_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "774",
        "name": "Papas 3 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "774_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "774_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "774_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "774_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "774_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "774_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "774_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "774_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "774_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "774_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6416",
        "name": "Elige tus 3 sodas",
        "required": true,
        "maxSelections": 3,
        "options": [
          {
            "id": "6416_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6416_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6416_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6416_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6416_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6416_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6416_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6416_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6416_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6416_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3111,
    "name": "Combo Fancy Dúo",
    "description": "2 FreakieDogs + 2 Bebidas + 1 bandeja de Fancys Mini",
    "price": 10.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb6eb14027065273719.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "846",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "846_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "846_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "846_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "846_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "846_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "846_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "846_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "846_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "846_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "846_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "846_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "846_11",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "847",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "847_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "847_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "847_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "847_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "847_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "847_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "847_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "847_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "847_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "847_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "847_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "847_11",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6417",
        "name": "Elige tus 2 sodas",
        "required": true,
        "maxSelections": 2,
        "options": [
          {
            "id": "6417_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6417_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6417_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6417_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6417_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6417_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6417_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6417_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6417_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6417_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3054,
    "name": "Combo Dúo",
    "description": "2 Freakie Dogs + 2 Freakie Fries + 2 Sodas",
    "price": 7.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb6a625bd5463986536.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "761",
        "name": "Hot Dog 1 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "761_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "761_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "761_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "761_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "761_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "761_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "761_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "761_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "761_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "761_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "761_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "761_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "762",
        "name": "Papas 1 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "762_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "762_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "762_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "762_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "762_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "762_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "762_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "762_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "762_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "762_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "764",
        "name": "Hot Dog 2 - Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "764_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "764_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "764_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "764_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "764_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "764_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "764_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "764_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "764_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "764_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "764_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "764_11",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "765",
        "name": "Papas 2 - Elige tus salsas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "765_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "765_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "765_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "765_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "765_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "765_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "765_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "765_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "765_8",
            "name": "Sin Complementos",
            "price": 0
          },
          {
            "id": "765_9",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          }
        ]
      },
      {
        "id": "6419",
        "name": "Elige tus 2 sodas",
        "required": true,
        "maxSelections": 2,
        "options": [
          {
            "id": "6419_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6419_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6419_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6419_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6419_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6419_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6419_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6419_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6419_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6419_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3060,
    "name": "Combo Individual",
    "description": "1 Freakie Dog + 1 Freakie Fries + 1 Soda en lata",
    "price": 3.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fabcc47938019040179.jpeg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "784",
        "name": "Elige tus complementos",
        "required": true,
        "maxSelections": 11,
        "options": [
          {
            "id": "784_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "784_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "784_2",
            "name": "Escabeche",
            "price": 0
          },
          {
            "id": "784_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "784_4",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "784_5",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "784_6",
            "name": "Cebolla",
            "price": 0
          },
          {
            "id": "784_7",
            "name": "Pepinillos",
            "price": 0
          },
          {
            "id": "784_8",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "784_9",
            "name": "Costra de Queso 🧀",
            "price": 0
          },
          {
            "id": "784_10",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "784_11",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "785",
        "name": "Elige tus salsas para papas",
        "required": true,
        "maxSelections": 8,
        "options": [
          {
            "id": "785_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "785_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "785_2",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "785_3",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "785_4",
            "name": "Barbacoa",
            "price": 0
          },
          {
            "id": "785_5",
            "name": "Nutella (Complemento único)",
            "price": 0
          },
          {
            "id": "785_6",
            "name": "Tocino 🥓",
            "price": 0
          },
          {
            "id": "785_7",
            "name": "Jalapeños 🌶",
            "price": 0
          },
          {
            "id": "785_8",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "785_9",
            "name": "Sin Complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6420",
        "name": "Elige tu soda",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6420_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6420_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6420_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6420_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6420_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6420_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6420_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6420_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6420_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6420_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3109,
    "name": "Combo Super Freak",
    "description": "1 Súper Freak + 1 Freakie Fries + 1 Soda",
    "price": 5.99,
    "image": "🌭",
    "imageUrl": "https://admin.buhopay.com/media/cache/small/media/690fb701ddfaf018221731.jpg",
    "category": "combos_pack",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": [
      {
        "id": "843",
        "name": "Escoge las salsas de tus papas",
        "required": true,
        "maxSelections": 6,
        "options": [
          {
            "id": "843_0",
            "name": "Ketchup",
            "price": 0
          },
          {
            "id": "843_1",
            "name": "Mayonesa",
            "price": 0
          },
          {
            "id": "843_2",
            "name": "Cheddar",
            "price": 0
          },
          {
            "id": "843_3",
            "name": "Chipotle",
            "price": 0
          },
          {
            "id": "843_4",
            "name": "BBQ",
            "price": 0
          },
          {
            "id": "843_5",
            "name": "Fancy Fries 🥓🧅",
            "price": 0
          },
          {
            "id": "843_6",
            "name": "Sin complementos",
            "price": 0
          }
        ]
      },
      {
        "id": "6421",
        "name": "Elige tu soda",
        "required": true,
        "maxSelections": 1,
        "options": [
          {
            "id": "6421_0",
            "name": "Coca cola",
            "price": 0
          },
          {
            "id": "6421_1",
            "name": "Kolashanpan",
            "price": 0
          },
          {
            "id": "6421_2",
            "name": "Agua",
            "price": 0
          },
          {
            "id": "6421_3",
            "name": "Coca Cola (Lata)",
            "price": 0
          },
          {
            "id": "6421_4",
            "name": "Te Limon",
            "price": 0
          },
          {
            "id": "6421_5",
            "name": "Te Frambuesa",
            "price": 0
          },
          {
            "id": "6421_6",
            "name": "Te Durazno",
            "price": 0
          },
          {
            "id": "6421_7",
            "name": "Fanta",
            "price": 0
          },
          {
            "id": "6421_8",
            "name": "Fresca",
            "price": 0
          },
          {
            "id": "6421_9",
            "name": "Sprite",
            "price": 0
          }
        ]
      }
    ]
  },
  {
    "id": 3088,
    "name": "Coca Cola",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 3094,
    "name": "Coca Cola Zero",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 15463,
    "name": "Uva",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 15464,
    "name": "Fresca",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 3096,
    "name": "Fanta",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 15465,
    "name": "Sprite",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 4433,
    "name": "Té de Limón",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 4435,
    "name": "Té de Frambuesa",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 15466,
    "name": "Té de Durazno",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  },
  {
    "id": 3093,
    "name": "Botella con agua",
    "description": "",
    "price": 1.5,
    "image": "🥤",
    "imageUrl": "",
    "category": "drinks",
    "popular": false,
    "recommended": false,
    "soldOut": false,
    "badge": null,
    "modifierGroups": []
  }
];
