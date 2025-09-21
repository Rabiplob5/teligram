
async function loadProducts() {
  const container = document.getElementById('productContainer');
  try {
    const files = ['products/example.json']; // add more if needed
    for (let file of files) {
      const res = await fetch(file);
      const data = await res.json();

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.desc}</p>
        <p><b>${data.price}</b></p>
        <a href="${data.payment}" target="_blank">
          <button>Buy Now</button>
        </a>
      `;
      container.appendChild(card);
    }
  } catch (err) {
    console.error("Error loading products:", err);
  }
}
loadProducts();
