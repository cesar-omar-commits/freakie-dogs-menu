export const fmt = (n) => `$${n.toFixed(2)}`;

export function calcItemTotal(product, selections, qty) {
  let extra = 0;
  if (selections) {
    Object.values(selections).forEach((opts) => {
      opts.forEach((o) => { extra += o.price; });
    });
  }
  return (product.price + extra) * qty;
}

export function generateOrderId() {
  return "FD-" + String(Date.now()).slice(-8);
}
