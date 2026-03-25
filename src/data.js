// ═══════════════════════════════════════════
// CONFIGURACIÓN DE TU NEGOCIO
// Editá estos datos para personalizar tu menú
// ═══════════════════════════════════════════

export const STORE = {
  name: "Freakie Dogs",
  tagline: "Ese extra extraordinario 🌭🔥🌭",
  address: "7 Calle Oriente, Santa Tecla, El Salvador",
  hours: "10:00 - 21:00",
  phone: "50360222080", // Tu número de WhatsApp SIN el +
  currency: "USD",
  minOrder: 0,
  isOpen: true,
};

// ═══════════════════════════════════════════
// CATEGORÍAS DEL MENÚ
// ═══════════════════════════════════════════

export const CATEGORIES = [
  { id: "combos", name: "COMBOS 🔥", emoji: "🔥" },
  { id: "burgers", name: "FREAKIE BURGER 🍔", emoji: "🍔" },
  { id: "hotdogs", name: "HOT DOGS 🌭", emoji: "🌭" },
  { id: "fries", name: "PAPAS 🍟", emoji: "🍟" },
  { id: "drinks", name: "BEBIDAS 🥤", emoji: "🥤" },
  { id: "extras", name: "EXTRAS ✨", emoji: "✨" },
];

// ═══════════════════════════════════════════
// GRUPOS DE MODIFICADORES REUTILIZABLES
// Estos se pueden asignar a cualquier producto
// ═══════════════════════════════════════════

export const MODIFIER_TEMPLATES = {
  burgerExtras: {
    name: "Extras",
    required: false,
    maxSelections: 7,
    options: [
      { id: "jalap", name: "Jalapeños 🌶️", price: 0.50 },
      { id: "bacon", name: "Tocino 🥓", price: 0.75 },
      { id: "peperon", name: "Peperroncinis 🌶️", price: 1.00 },
      { id: "mermtoc", name: "Mermelada de tocino 🥓🍯", price: 1.25 },
      { id: "carnequeso", name: "Carne y Queso extra 🧀", price: 1.50 },
      { id: "arosceb", name: "Aros de Cebolla 🧅", price: 1.00 },
      { id: "goldcheese", name: "Golden Cheese 🧀✨", price: 2.99 },
      { id: "sincomp", name: "Sin complementos", price: 0 },
    ],
  },
  salsasPapas: {
    name: "Salsas",
    required: true,
    maxSelections: 4,
    options: [
      { id: "ketchup", name: "Ketchup", price: 0 },
      { id: "mayo", name: "Mayonesa", price: 0 },
      { id: "cheddar", name: "Cheddar", price: 0 },
      { id: "bbq", name: "BBQ", price: 0 },
      { id: "ranch", name: "Ranch", price: 0 },
      { id: "buffalo", name: "Buffalo", price: 0 },
    ],
  },
  sodas: {
    name: "Bebida",
    required: true,
    maxSelections: 1,
    options: [
      { id: "coca", name: "Coca Cola", price: 0 },
      { id: "fanta", name: "Fanta", price: 0 },
      { id: "sprite", name: "Sprite", price: 0 },
      { id: "agua", name: "Agua", price: 0 },
    ],
  },
  hotdogSalsas: {
    name: "Salsas",
    required: true,
    maxSelections: 3,
    options: [
      { id: "ketchup", name: "Ketchup", price: 0 },
      { id: "mustard", name: "Mostaza", price: 0 },
      { id: "mayo", name: "Mayonesa", price: 0 },
      { id: "cheddar", name: "Cheddar", price: 0 },
    ],
  },
};

// ═══════════════════════════════════════════
// PRODUCTOS
// Para agregar un producto nuevo, copiá uno
// existente y cambiá los datos
// ═══════════════════════════════════════════

export const PRODUCTS = [
  {
    id: "burger-box",
    name: "Burger Box",
    description: "Dos Smashburgers 🍔🍔, dos hot dogs con 8 complementos 🌭🌭 (uno lleva costra de queso 🧀), dos papas 🍟🍟, una orden de jalapeños 🌶️ y dos bebidas 🥤🥤",
    price: 19.50,
    image: "🍔📦",
    category: "combos",
    badge: "Más vendido",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Burger 1", id: "b1" },
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Burger 2", id: "b2" },
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Papas 1", id: "p1" },
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Papas 2", id: "p2" },
      { ...MODIFIER_TEMPLATES.sodas, name: "Soda 1", id: "s1" },
      { ...MODIFIER_TEMPLATES.sodas, name: "Soda 2", id: "s2" },
    ],
  },
  {
    id: "freakie-duo",
    name: "Freakie Burger Dúo",
    description: "Dos Smashburgers 🍔🍔 con papas 🍟, salsas y dos bebidas 🥤🥤. Perfecto para compartir.",
    price: 15.49,
    image: "🍔🍔",
    category: "combos",
    badge: "Popular",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Burger 1", id: "b1" },
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Burger 2", id: "b2" },
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Papas 1", id: "p1" },
      { ...MODIFIER_TEMPLATES.sodas, name: "Soda 1", id: "s1" },
      { ...MODIFIER_TEMPLATES.sodas, name: "Soda 2", id: "s2" },
    ],
  },
  {
    id: "combo-big",
    name: "ComBig",
    description: "El nuevo combo grande 🔥 Smashburger doble + hot dog + papas grandes + bebida. Todo lo que necesitás.",
    price: 21.99,
    image: "🍔🌭",
    category: "combos",
    badge: "Nuevo",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Extras Burger", id: "eb" },
      { ...MODIFIER_TEMPLATES.hotdogSalsas, name: "Salsas Hot Dog", id: "shd" },
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Salsas Papas", id: "sp" },
      { ...MODIFIER_TEMPLATES.sodas, name: "Bebida", id: "beb" },
    ],
  },
  {
    id: "smash-single",
    name: "Freakie Smashburger",
    description: "Nuestra clásica Smashburger con carne smash, queso americano, lechuga, tomate y salsas 🍔🔥",
    price: 5.99,
    image: "🍔",
    category: "burgers",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Extras", id: "ext" },
    ],
  },
  {
    id: "smash-double",
    name: "Freakie Smashburger Doble",
    description: "Doble carne smash, doble queso 🧀🧀 Para los que quieren más.",
    price: 8.49,
    image: "🍔🍔",
    category: "burgers",
    badge: "Popular",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Extras", id: "ext" },
    ],
  },
  {
    id: "hotdog-classic",
    name: "Freakie Dog Clásico",
    description: "Hot dog con salchicha premium, salsas a tu gusto 🌭",
    price: 3.99,
    image: "🌭",
    category: "hotdogs",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.hotdogSalsas, name: "Salsas", id: "sal" },
    ],
  },
  {
    id: "hotdog-cheese",
    name: "Freakie Dog con Costra de Queso",
    description: "Hot dog con costra de queso dorado crujiente 🌭🧀✨ El favorito de la casa.",
    price: 4.99,
    image: "🌭🧀",
    category: "hotdogs",
    badge: "Favorito",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.hotdogSalsas, name: "Salsas", id: "sal" },
      { ...MODIFIER_TEMPLATES.burgerExtras, name: "Extras", id: "ext" },
    ],
  },
  {
    id: "papas-reg",
    name: "Papas Freakie",
    description: "Papas fritas crujientes con tus salsas favoritas 🍟",
    price: 2.99,
    image: "🍟",
    category: "fries",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Salsas", id: "sal" },
    ],
  },
  {
    id: "papas-loaded",
    name: "Papas Loaded",
    description: "Papas fritas cargadas con queso cheddar, tocino y jalapeños 🍟🧀🥓",
    price: 5.49,
    image: "🍟🔥",
    category: "fries",
    badge: "Popular",
    modifierGroups: [
      { ...MODIFIER_TEMPLATES.salsasPapas, name: "Salsas extra", id: "sal" },
    ],
  },
  {
    id: "coca-cola",
    name: "Coca Cola",
    description: "Coca Cola bien fría 🥤",
    price: 1.25,
    image: "🥤",
    category: "drinks",
    modifierGroups: [],
  },
  {
    id: "fanta",
    name: "Fanta",
    description: "Fanta naranja 🍊",
    price: 1.25,
    image: "🍊",
    category: "drinks",
    modifierGroups: [],
  },
  {
    id: "agua",
    name: "Agua",
    description: "Agua pura 💧",
    price: 1.00,
    image: "💧",
    category: "drinks",
    modifierGroups: [],
  },
  {
    id: "sticker",
    name: "Sticker Sorpresa",
    description: "Un Sticker sorpresa de nuestros más de 15 estilos diferentes 🔥😎",
    price: 0.50,
    image: "🎨",
    category: "extras",
    modifierGroups: [],
  },
];
