import { useState, useRef, useEffect, useCallback } from "react";
import { STORE, CATEGORIES, PRODUCTS } from "./data";
import { Icons } from "./Icons";
import { fmt, calcItemTotal, generateOrderId } from "./utils";
import "./styles.css";

export default function FreakieDogsApp() {
  const [screen, setScreen] = useState("menu"); // menu | cart | checkout | success
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.id || "combos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Checkout state
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState(null); // { lat, lng }
  const [houseNum, setHouseNum] = useState("");
  const [city, setCity] = useState("San Salvador");
  const [reference, setReference] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [orderId, setOrderId] = useState("");
  const [errors, setErrors] = useState({});

  const cartTotal = cart.reduce((sum, item) => sum + calcItemTotal(
    PRODUCTS.find(p => p.id === item.productId),
    item.selections,
    item.qty
  ), 0);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  function addToCart(productId, selections, qty) {
    if (editingIndex !== null) {
      setCart(prev => prev.map((item, i) => i === editingIndex ? { productId, selections, qty } : item));
      setEditingIndex(null);
    } else {
      setCart(prev => [...prev, { productId, selections, qty }]);
    }
    setSelectedProduct(null);
  }

  function removeFromCart(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  function editCartItem(index) {
    const item = cart[index];
    const product = PRODUCTS.find(p => p.id === item.productId);
    setEditingIndex(index);
    setSelectedProduct({ ...product, prefill: item.selections, prefillQty: item.qty });
  }

  function validateCheckout() {
    const errs = {};
    if (!contactName.trim()) errs.name = true;
    if (!contactPhone.trim()) errs.phone = true;
    if (!paymentMethod) errs.payment = true;
    if (deliveryType === "delivery") {
      if (!address.trim()) errs.address = true;
      if (!houseNum.trim()) errs.house = true;
      if (!reference.trim()) errs.reference = true;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function buildWhatsAppMessage() {
    let msg = `🔥 *¡Nuevo pedido de Freakie Dogs!*\n\n`;
    cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      msg += `*${item.qty}x ${product.name}*\n`;
      if (item.selections) {
        Object.entries(item.selections).forEach(([groupId, opts]) => {
          const group = product.modifierGroups.find(g => g.id === groupId);
          if (group && opts.length > 0) {
            msg += `  _${group.name}:_\n`;
            opts.forEach(o => {
              msg += `    x${1} ${o.name}${o.price > 0 ? ` (+${fmt(o.price)})` : ""}\n`;
            });
          }
        });
      }
      msg += `  ${fmt(calcItemTotal(product, item.selections, item.qty))}\n\n`;
    });
    msg += `════════════════\n`;
    msg += `💰 *Total: ${fmt(cartTotal)}*\n`;
    msg += `🔖 *N° Referencia:* ${orderId}\n\n`;
    msg += `🚀 *Tipo de entrega:* ${deliveryType === "delivery" ? "Envío a domicilio" : "Recogida en el comercio"}\n`;
    if (deliveryType === "delivery") {
      msg += `📌 *Dirección:* ${address}\n`;
      msg += `🏠 *N° casa/oficina:* ${houseNum}\n`;
      msg += `🏙️ *Ciudad:* ${city}\n`;
      msg += `📍 *Punto de referencia:* ${reference}\n`;
      if (coords) {
        msg += `🗺️ *Ver en mapa:* https://www.google.com/maps?q=${coords.lat},${coords.lng}\n`;
      } else {
        const mapQuery = encodeURIComponent(`${address}, ${houseNum}, ${city}, El Salvador`);
        msg += `🗺️ *Ver en mapa:* https://www.google.com/maps/search/?api=1&query=${mapQuery}\n`;
      }
    }
    msg += `\n💳 *Método de pago:* ${paymentMethod === "cash" ? "Efectivo" : paymentMethod === "transfer" ? "Transferencia bancaria" : "Tarjeta de crédito/débito"}\n`;
    msg += `\n👤 *Contacto:* ${contactName} - ${contactPhone}\n`;
    if (orderNote.trim()) {
      msg += `\n⚠️ *Nota del pedido:* ${orderNote}\n`;
    }
    return msg;
  }

  function handleSubmitOrder() {
    if (!validateCheckout()) return;
    const id = generateOrderId();
    setOrderId(id);
    setScreen("success");
  }

  function openWhatsApp() {
    const msg = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${STORE.phone}?text=${msg}`, "_blank");
  }

  function resetOrder() {
    setCart([]);
    setOrderNote("");
    setDeliveryType("delivery");
    setPaymentMethod("");
    setContactName("");
    setContactPhone("");
    setAddress("");
    setCoords(null);
    setHouseNum("");
    setCity("San Salvador");
    setReference("");
    setPromoCode("");
    setOrderId("");
    setErrors({});
    setScreen("menu");
  }

  return (
    <>
      <div className="app">
        {screen === "menu" && (
          <MenuScreen
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onSelectProduct={(p) => { setEditingIndex(null); setSelectedProduct(p); }}
          />
        )}

        {screen === "cart" && (
          <CartScreen
            cart={cart}
            orderNote={orderNote}
            setOrderNote={setOrderNote}
            onBack={() => setScreen("menu")}
            onEdit={editCartItem}
            onRemove={removeFromCart}
            onCheckout={() => setScreen("checkout")}
            cartTotal={cartTotal}
          />
        )}

        {screen === "checkout" && (
          <CheckoutScreen
            cart={cart}
            cartTotal={cartTotal}
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            contactName={contactName}
            setContactName={setContactName}
            contactPhone={contactPhone}
            setContactPhone={setContactPhone}
            address={address}
            setAddress={setAddress}
            coords={coords}
            setCoords={setCoords}
            houseNum={houseNum}
            setHouseNum={setHouseNum}
            city={city}
            setCity={setCity}
            reference={reference}
            setReference={setReference}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            orderNote={orderNote}
            errors={errors}
            onBack={() => setScreen("cart")}
            onSubmit={handleSubmitOrder}
          />
        )}

        {screen === "success" && (
          <SuccessScreen
            orderId={orderId}
            onSendWhatsApp={openWhatsApp}
            onNewOrder={resetOrder}
          />
        )}

        {selectedProduct && (
          <ProductConfigurator
            product={selectedProduct}
            onClose={() => { setSelectedProduct(null); setEditingIndex(null); }}
            onAdd={addToCart}
          />
        )}

        {screen === "menu" && cartCount > 0 && (
          <button className="cart-fab" onClick={() => setScreen("cart")}>
            {Icons.cart}
            <span>Mi pedido</span>
            <span className="badge">{cartCount}</span>
            <span style={{ fontFamily: "var(--mono)", fontWeight: 800 }}>{fmt(cartTotal)}</span>
          </button>
        )}
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════
// MENU SCREEN — Scroll continuo con todas las categorías
// ═══════════════════════════════════════════════
function MenuScreen({ activeCategory, setActiveCategory, onSelectProduct }) {
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const isScrollingByClick = useRef(false);

  // Scroll to category when tab is clicked
  const scrollToCategory = useCallback((catId) => {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    if (el) {
      isScrollingByClick.current = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { isScrollingByClick.current = false; }, 800);
    }
  }, [setActiveCategory]);

  // Update active tab on scroll using IntersectionObserver
  useEffect(() => {
    const observers = [];
    const handleIntersect = (entries) => {
      if (isScrollingByClick.current) return;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const catId = entry.target.getAttribute("data-category");
          if (catId) setActiveCategory(catId);
          break;
        }
      }
    };

    CATEGORIES.forEach(cat => {
      const el = sectionRefs.current[cat.id];
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "-100px 0px -60% 0px",
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, [setActiveCategory]);

  // Scroll active tab into view horizontally (without affecting page scroll)
  useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector(".cat-tab.active");
      if (activeBtn) {
        const container = tabsRef.current;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollTarget = btnLeft - (containerWidth / 2) + (btnWidth / 2);
        container.scrollTo({ left: scrollTarget, behavior: "smooth" });
      }
    }
  }, [activeCategory]);

  return (
    <>
      <div className="store-header">
        <div className="store-brand">
          <div className="store-logo">FD</div>
          <div className="store-info">
            <h1>{STORE.name}</h1>
            <div className="store-tagline">{STORE.tagline}</div>
          </div>
        </div>
        <div className="store-meta">
          <span className={`status-badge ${STORE.isOpen ? "status-open" : "status-closed"}`}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }}></span>
            {STORE.isOpen ? "Abierto" : "Cerrado"}
          </span>
          <span>{Icons.clock} {STORE.hours}</span>
          <span>{Icons.pin} Santa Tecla</span>
        </div>
      </div>

      <div className="categories-bar" ref={tabsRef}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-tab ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => scrollToCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="products-section">
        {CATEGORIES.map(cat => {
          const catProducts = PRODUCTS.filter(p => p.category === cat.id);
          if (catProducts.length === 0) return null;
          return (
            <div
              key={cat.id}
              ref={el => { sectionRefs.current[cat.id] = el; }}
              data-category={cat.id}
            >
              <div className="section-title">{cat.name}</div>
              {catProducts.map(product => (
                <div key={product.id} className="product-card" onClick={() => onSelectProduct(product)}>
                  <div className="product-emoji">{product.image}</div>
                  <div className="product-details">
                    <div className="product-name">{product.name}</div>
                    <div className="product-desc">{product.description}</div>
                    <div className="product-price">
                      {fmt(product.price)}
                      {product.badge && (
                        <span className={`product-badge ${
                          product.badge === "Nuevo" ? "badge-new" :
                          product.badge === "Más vendido" ? "badge-best" : "badge-popular"
                        }`} style={{ marginLeft: 8 }}>
                          ⭐
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════
// PRODUCT CONFIGURATOR (Modal)
// ═══════════════════════════════════════════════
function ProductConfigurator({ product, onClose, onAdd }) {
  const [selections, setSelections] = useState(() => {
    if (product.prefill) return product.prefill;
    const init = {};
    product.modifierGroups.forEach(g => { init[g.id] = []; });
    return init;
  });
  const [qty, setQty] = useState(product.prefillQty || 1);

  const toggleOption = (groupId, option, maxSel) => {
    setSelections(prev => {
      const current = prev[groupId] || [];
      const exists = current.find(o => o.id === option.id);
      if (exists) {
        return { ...prev, [groupId]: current.filter(o => o.id !== option.id) };
      }
      if (maxSel === 1) {
        return { ...prev, [groupId]: [option] };
      }
      if (current.length >= maxSel) return prev;
      return { ...prev, [groupId]: [...current, option] };
    });
  };

  const isValid = product.modifierGroups.every(g => {
    if (g.required) return (selections[g.id] || []).length > 0;
    return true;
  });

  const totalPrice = calcItemTotal(product, selections, qty);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-back" onClick={onClose}>{Icons.back}</button>
          <div className="modal-title">Personalizar</div>
        </div>

        <div className="modal-product-hero">
          <span className="modal-product-emoji">{product.image}</span>
          <div className="modal-product-name">{product.name}</div>
          <div className="modal-product-desc">{product.description}</div>
          <div className="modal-product-price">{fmt(product.price)}</div>
        </div>

        {product.modifierGroups.length > 0 && (
          <div className="progress-dots">
            {product.modifierGroups.map((g, i) => {
              const filled = (selections[g.id] || []).length > 0;
              return <div key={g.id} className={`progress-dot ${filled ? "filled" : ""}`} />;
            })}
          </div>
        )}

        {product.modifierGroups.map(group => (
          <div key={group.id} className="modifier-section">
            <div className="modifier-header">
              <div className="modifier-name">{group.name}</div>
              <div className="modifier-meta">
                <span className={group.required ? "modifier-required" : "modifier-optional"}>
                  {group.required ? "Requerido" : "Opcional"}
                </span>
                <span>máx. {group.maxSelections}</span>
              </div>
            </div>
            {group.options.map(option => {
              const isSelected = (selections[group.id] || []).find(o => o.id === option.id);
              return (
                <div
                  key={option.id}
                  className={`option-row ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleOption(group.id, option, group.maxSelections)}
                >
                  <div className="option-check">
                    {isSelected && Icons.check}
                  </div>
                  <div className="option-name">{option.name}</div>
                  <div className={`option-price ${option.price === 0 ? "free" : ""}`}>
                    {option.price === 0 ? "Gratis" : `+ ${fmt(option.price)}`}
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        <div className="modal-footer">
          <div className="qty-row">
            <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>{Icons.minus}</button>
            <span className="qty-val">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(q => q + 1)}>{Icons.plus}</button>
          </div>
          <button
            className="add-btn"
            disabled={!isValid}
            onClick={() => onAdd(product.id, selections, qty)}
          >
            {product.prefill ? "Actualizar" : "Añadir"}: {fmt(totalPrice)}
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// CART SCREEN
// ═══════════════════════════════════════════════
function CartScreen({ cart, orderNote, setOrderNote, onBack, onEdit, onRemove, onCheckout, cartTotal }) {
  if (cart.length === 0) {
    return (
      <>
        <div className="modal-header">
          <button className="modal-back" onClick={onBack}>{Icons.back}</button>
          <div className="modal-title">Mi Cesta</div>
        </div>
        <div className="empty-state">
          <div className="empty-state-emoji">🛒</div>
          <div className="empty-state-title">Tu cesta está vacía</div>
          <div className="empty-state-text">Explorá el menú y agregá lo que se te antoje</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="modal-header" style={{ position: "sticky", top: 0, background: "var(--bg)", zIndex: 10, borderBottom: "1px solid var(--border)" }}>
        <button className="modal-back" onClick={onBack}>{Icons.back}</button>
        <div className="modal-title">Mi Cesta ({cart.length})</div>
      </div>
      <div className="cart-page">
        {cart.map((item, index) => {
          const product = PRODUCTS.find(p => p.id === item.productId);
          return (
            <div key={index} className="cart-item">
              <div className="cart-item-header">
                <div className="cart-item-name">
                  <span className="cart-item-qty">{item.qty}x</span>
                  {product.name}
                </div>
                <div className="cart-item-price">
                  {fmt(calcItemTotal(product, item.selections, item.qty))}
                </div>
              </div>
              {item.selections && Object.entries(item.selections).map(([groupId, opts]) => {
                if (opts.length === 0) return null;
                const group = product.modifierGroups.find(g => g.id === groupId);
                return (
                  <div key={groupId} className="cart-item-mods">
                    <span className="cart-item-mod-group">{group?.name}: </span>
                    {opts.map(o => o.name).join(", ")}
                  </div>
                );
              })}
              <div className="cart-item-actions">
                <button className="cart-action-btn" onClick={() => onEdit(index)}>
                  {Icons.edit} Editar
                </button>
                <button className="cart-action-btn delete" onClick={() => onRemove(index)}>
                  {Icons.trash} Quitar
                </button>
              </div>
            </div>
          );
        })}
        <div className="cart-note">
          <label>Nota del pedido <span style={{ fontWeight: 400, color: "var(--text3)" }}>(Opcional)</span></label>
          <textarea
            value={orderNote}
            onChange={e => setOrderNote(e.target.value)}
            placeholder="Ej. Toca el timbre al llegar, alergias, etc..."
          />
        </div>
      </div>
      <div className="cart-total-bar">
        <div className="cart-total-row">
          <span className="cart-total-label">Total</span>
          <span className="cart-total-value">{fmt(cartTotal)}</span>
        </div>
        <button className="add-btn" onClick={onCheckout}>
          Realizar pedido: {fmt(cartTotal)}
        </button>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════
// CHECKOUT SCREEN
// ═══════════════════════════════════════════════
function CheckoutScreen({
  cart, cartTotal, deliveryType, setDeliveryType, paymentMethod, setPaymentMethod,
  contactName, setContactName, contactPhone, setContactPhone,
  address, setAddress, coords, setCoords, houseNum, setHouseNum, city, setCity,
  reference, setReference, promoCode, setPromoCode, orderNote,
  errors, onBack, onSubmit
}) {
  const [showMap, setShowMap] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState("");
  const [mapCenter, setMapCenter] = useState(coords || { lat: 13.6783, lng: -89.2808 }); // Default: Santa Tecla
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const leafletLoaded = useRef(false);

  // Reverse geocode coords to address text
  const reverseGeocode = useCallback(async (lat, lng) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
      const data = await res.json();
      if (data.display_name) {
        setAddress(data.display_name.split(",").slice(0, 3).join(",").trim());
        if (data.address) {
          if (data.address.city || data.address.town || data.address.village) {
            setCity(data.address.city || data.address.town || data.address.village);
          }
        }
      }
    } catch (e) {
      // Silently fail - user can still type address manually
    }
  }, [setAddress, setCity]);

  // Get current GPS location
  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setGeoError("Tu navegador no soporta geolocalización");
      return;
    }
    setGeoLoading(true);
    setGeoError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCoords(newCoords);
        setMapCenter(newCoords);
        reverseGeocode(newCoords.lat, newCoords.lng);
        setGeoLoading(false);
      },
      (err) => {
        setGeoError("No se pudo obtener tu ubicación. Verificá los permisos.");
        setGeoLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Load Leaflet CSS + JS dynamically
  useEffect(() => {
    if (!showMap || leafletLoaded.current) return;
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(cssLink);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => { leafletLoaded.current = true; initMap(); };
    document.head.appendChild(script);
    return;
  }, [showMap]);

  // Initialize or update map
  const initMap = useCallback(() => {
    if (!window.L || !document.getElementById("location-map")) return;
    if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }

    const map = window.L.map("location-map").setView([mapCenter.lat, mapCenter.lng], 16);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    const marker = window.L.marker([mapCenter.lat, mapCenter.lng], { draggable: true }).addTo(map);
    markerRef.current = marker;
    mapRef.current = map;

    marker.on("dragend", () => {
      const pos = marker.getLatLng();
      setCoords({ lat: pos.lat, lng: pos.lng });
      setMapCenter({ lat: pos.lat, lng: pos.lng });
      reverseGeocode(pos.lat, pos.lng);
    });

    map.on("click", (e) => {
      marker.setLatLng(e.latlng);
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
      setMapCenter({ lat: e.latlng.lat, lng: e.latlng.lng });
      reverseGeocode(e.latlng.lat, e.latlng.lng);
    });

    setTimeout(() => map.invalidateSize(), 200);
  }, [mapCenter, reverseGeocode, setCoords]);

  // Re-init map when showMap changes and leaflet is already loaded
  useEffect(() => {
    if (showMap && leafletLoaded.current) {
      setTimeout(initMap, 100);
    }
  }, [showMap, initMap]);

  // Save map location
  const saveMapLocation = () => {
    setShowMap(false);
  };
  return (
    <>
      <div className="modal-header" style={{ position: "sticky", top: 0, background: "var(--bg)", zIndex: 10, borderBottom: "1px solid var(--border)" }}>
        <button className="modal-back" onClick={onBack}>{Icons.back}</button>
        <div className="modal-title">Confirmar pedido</div>
      </div>
      <div className="checkout-page">
        {/* Order summary */}
        <div className="checkout-section">
          <div className="checkout-section-title">📋 Detalles del pedido</div>
          <div className="checkout-summary">
            {cart.map((item, i) => {
              const product = PRODUCTS.find(p => p.id === item.productId);
              return (
                <div key={i} className="checkout-summary-item">
                  <span style={{ color: "var(--text2)" }}>{item.qty}x {product.name}</span>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 700 }}>
                    {fmt(calcItemTotal(product, item.selections, item.qty))}
                  </span>
                </div>
              );
            })}
            <div className="checkout-summary-item" style={{ fontWeight: 700, fontSize: 15 }}>
              <span>Total</span>
              <span style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>{fmt(cartTotal)}</span>
            </div>
          </div>
        </div>

        {/* Delivery type */}
        <div className="checkout-section">
          <div className="checkout-section-title">🚀 Tipo de entrega</div>
          <div className="radio-group">
            <div className={`radio-option ${deliveryType === "delivery" ? "selected" : ""}`} onClick={() => setDeliveryType("delivery")}>
              <div className="radio-dot"><div className="radio-dot-inner" /></div>
              <div>
                <div className="radio-label">Envío a domicilio</div>
                <div className="radio-sublabel">Te lo llevamos a tu puerta</div>
              </div>
            </div>
            <div className={`radio-option ${deliveryType === "pickup" ? "selected" : ""}`} onClick={() => setDeliveryType("pickup")}>
              <div className="radio-dot"><div className="radio-dot-inner" /></div>
              <div>
                <div className="radio-label">Recogida en el comercio</div>
                <div className="radio-sublabel">Pasás a recogerlo a la sucursal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment method */}
        <div className="checkout-section">
          <div className="checkout-section-title">💳 Método de pago</div>
          {errors.payment && <div className="error-text">Seleccioná un método de pago</div>}
          <div className="radio-group">
            {[
              { id: "cash", label: "Efectivo", sub: "Pagás al recibir" },
              { id: "transfer", label: "Transferencia bancaria", sub: "Te enviamos los datos" },
              { id: "card", label: "Tarjeta de crédito/débito", sub: "POS al entregar" },
            ].map(pm => (
              <div key={pm.id} className={`radio-option ${paymentMethod === pm.id ? "selected" : ""}`} onClick={() => setPaymentMethod(pm.id)}>
                <div className="radio-dot"><div className="radio-dot-inner" /></div>
                <div>
                  <div className="radio-label">{pm.label}</div>
                  <div className="radio-sublabel">{pm.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address (only for delivery) */}
        {deliveryType === "delivery" && (
          <div className="checkout-section">
            <div className="checkout-section-title">📌 Dirección de envío</div>
            
            <label className="input-label input-required">Dirección</label>
            {address && coords && (
              <div style={{ padding: "10px 14px", background: "var(--surface)", borderRadius: "var(--radius-sm)", fontSize: 14, color: "var(--text1)", marginBottom: 8, border: "1px solid var(--border)" }}>
                {address}
              </div>
            )}
            {!coords && (
              <input className={`input-field ${errors.address ? "field-error" : ""}`} value={address} onChange={e => setAddress(e.target.value)} placeholder="Ej. 29 Calle Oriente 504" />
            )}

            <button
              type="button"
              onClick={useCurrentLocation}
              disabled={geoLoading}
              style={{
                width: "100%", padding: "14px", marginTop: 8, marginBottom: 6,
                background: "var(--text1, #1a1a1a)", color: "var(--bg, #fff)",
                border: "none", borderRadius: "var(--radius-sm, 8px)",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                opacity: geoLoading ? 0.6 : 1,
              }}
            >
              {geoLoading ? "Obteniendo ubicación..." : "📍 Usar mi ubicación actual"}
            </button>

            <button
              type="button"
              onClick={() => setShowMap(!showMap)}
              style={{
                width: "100%", padding: "14px", marginBottom: 8,
                background: "transparent", color: "var(--text1, #1a1a1a)",
                border: "2px solid var(--text1, #1a1a1a)", borderRadius: "var(--radius-sm, 8px)",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              🗺️ Elegir ubicación usando el mapa
            </button>

            {geoError && (
              <div style={{ color: "#e53e3e", fontSize: 13, marginBottom: 8 }}>{geoError}</div>
            )}

            {coords && (
              <div style={{ fontSize: 12, color: "var(--text3, #888)", marginBottom: 8 }}>
                ✅ Ubicación guardada ({coords.lat.toFixed(5)}, {coords.lng.toFixed(5)})
              </div>
            )}

            {showMap && (
              <div style={{ marginBottom: 12 }}>
                <div id="location-map" style={{ width: "100%", height: 280, borderRadius: "var(--radius-sm, 8px)", border: "1px solid var(--border, #ddd)", marginBottom: 8 }} />
                <div style={{ fontSize: 12, color: "var(--text3, #888)", textAlign: "center", marginBottom: 8 }}>
                  Tocá el mapa o arrastrá el pin para elegir tu ubicación
                </div>
                <button
                  type="button"
                  onClick={saveMapLocation}
                  disabled={!coords}
                  style={{
                    width: "100%", padding: "12px",
                    background: coords ? "var(--text1, #1a1a1a)" : "#ccc",
                    color: "var(--bg, #fff)",
                    border: "none", borderRadius: "var(--radius-sm, 8px)",
                    fontSize: 14, fontWeight: 600, cursor: coords ? "pointer" : "default",
                  }}
                >
                  Guardar ubicación
                </button>
              </div>
            )}

            <label className="input-label input-required">N° casa/apartamento/oficina</label>
            <input className={`input-field ${errors.house ? "field-error" : ""}`} value={houseNum} onChange={e => setHouseNum(e.target.value)} placeholder="Ej. Casa 23, #520" />
            <label className="input-label">Ciudad</label>
            <input className="input-field" value={city} onChange={e => setCity(e.target.value)} placeholder="San Salvador" />
            <label className="input-label input-required">Punto de referencia</label>
            <input className={`input-field ${errors.reference ? "field-error" : ""}`} value={reference} onChange={e => setReference(e.target.value)} placeholder="Ej. Cerca del centro comercial" />
          </div>
        )}

        {/* Contact */}
        <div className="checkout-section">
          <div className="checkout-section-title">👤 Datos de contacto</div>
          <label className="input-label input-required">Nombre y Apellido</label>
          <input className={`input-field ${errors.name ? "field-error" : ""}`} value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Ej. Gabriel Montes" />
          <label className="input-label input-required">Número de WhatsApp</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input className="input-field" style={{ width: 80, textAlign: "center" }} value="+503" readOnly />
            <input className={`input-field ${errors.phone ? "field-error" : ""}`} style={{ flex: 1 }} value={contactPhone} onChange={e => setContactPhone(e.target.value)} placeholder="6012 3456" type="tel" />
          </div>
          <label className="input-label">Código promocional</label>
          <input className="input-field" value={promoCode} onChange={e => setPromoCode(e.target.value)} placeholder="Ej. FREAKIE50OFF" />
        </div>

        {orderNote && (
          <div className="checkout-section">
            <div className="checkout-section-title">📝 Nota del pedido</div>
            <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: "var(--radius-sm)", fontSize: 14, color: "var(--text2)" }}>
              {orderNote}
            </div>
          </div>
        )}
      </div>

      <div className="cart-total-bar">
        <div className="cart-total-row">
          <span className="cart-total-label">Total a pagar</span>
          <span className="cart-total-value">{fmt(cartTotal)}</span>
        </div>
        <button className="add-btn" onClick={onSubmit}>
          Confirmar pedido
        </button>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════
// SUCCESS SCREEN
// ═══════════════════════════════════════════════
function SuccessScreen({ orderId, onSendWhatsApp, onNewOrder }) {
  return (
    <div className="success-page">
      <div className="success-icon">✅</div>
      <div className="success-title">¡Pedido listo!</div>
      <div className="success-order-id">{orderId}</div>
      <div className="success-text">
        Tu pedido ha sido registrado. Enviá el detalle por WhatsApp para que el equipo lo reciba y empiece a prepararlo.
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <button className="wa-send-btn" onClick={onSendWhatsApp}>
          {Icons.whatsapp}
          Enviar por WhatsApp
        </button>
        <button className="new-order-btn" onClick={onNewOrder}>
          Hacer otro pedido
        </button>
      </div>
    </div>
  );
}
