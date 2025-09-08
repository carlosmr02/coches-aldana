/* Utility: fetch JSON with graceful errors */
async function fetchJson(url) {
  try {
    const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch', url, error);
    return null;
  }
}

/* Home featured vehicles */
async function renderHomeFeatured() {
  const container = document.getElementById('home-featured');
  if (!container) return;
  const data = await fetchJson('/data/vehicles.json');
  if (!data || !Array.isArray(data.vehicles)) return;
  const featured = data.vehicles.filter(v => v.featured).slice(0, 6);
  container.innerHTML = featured.map(cardHtml).join('');
}

function numberFormatEUR(value) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

function cardHtml(v) {
  const href = `/vehiculo.html?id=${encodeURIComponent(v.id)}`;
  return `
  <article class="car-card">
    <a href="${href}" aria-label="${v.brand} ${v.model}">
      <img src="${v.image}" alt="${v.brand} ${v.model}" loading="lazy" />
    </a>
    <div class="meta">
      <h3>${v.brand} ${v.model}</h3>
      <p>${v.year} · ${v.km.toLocaleString('es-ES')} km · ${v.engine}</p>
    </div>
    <div class="cta">
      <strong>${numberFormatEUR(v.price)}</strong>
      <a class="btn btn-ghost" href="${href}">Ver detalle</a>
    </div>
  </article>`;
}

/* Inventory page logic */
async function initInventoryPage() {
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;
  const data = await fetchJson('/data/vehicles.json');
  if (!data) return;

  const selectBrand = document.getElementById('filter-brand');
  const selectEngine = document.getElementById('filter-engine');
  const selectYear = document.getElementById('filter-year');
  const inputPrice = document.getElementById('filter-price');
  const btnReset = document.getElementById('filters-reset');

  // Populate brands/engines/years
  const brands = [...new Set(data.vehicles.map(v => v.brand))].sort();
  brands.forEach(b => selectBrand.append(new Option(b, b)));
  const engines = [...new Set(data.vehicles.map(v => v.engine))].sort();
  engines.forEach(e => selectEngine.append(new Option(e, e)));
  const years = [...new Set(data.vehicles.map(v => v.year))].sort((a,b)=>b-a);
  years.forEach(y => selectYear.append(new Option(y, y)));

  function applyFilters() {
    const brand = selectBrand.value;
    const engine = selectEngine.value;
    const year = selectYear.value;
    const maxPrice = Number(inputPrice.value) || Infinity;
    const filtered = data.vehicles.filter(v =>
      (!brand || v.brand === brand) &&
      (!engine || v.engine === engine) &&
      (!year || String(v.year) === String(year)) &&
      (v.price <= maxPrice)
    );
    grid.innerHTML = filtered.map(cardHtml).join('') || '<p>No se han encontrado vehículos.</p>';
  }

  [selectBrand, selectEngine, selectYear, inputPrice].forEach(el => el.addEventListener('change', applyFilters));
  btnReset.addEventListener('click', () => {
    selectBrand.value = '';
    selectEngine.value = '';
    selectYear.value = '';
    inputPrice.value = '';
    applyFilters();
  });

  applyFilters();
}

/* Vehicle detail */
async function initVehicleDetail() {
  const detail = document.getElementById('vehicle-detail');
  if (!detail) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const data = await fetchJson('/data/vehicles.json');
  if (!data || !id) { detail.innerHTML = '<p>Vehículo no encontrado.</p>'; return; }
  const v = data.vehicles.find(x => String(x.id) === String(id));
  if (!v) { detail.innerHTML = '<p>Vehículo no encontrado.</p>'; return; }

  document.title = `${v.brand} ${v.model} | Concesionario Aldana`;

  detail.innerHTML = `
    <div class="hero" style="grid-template-columns: 1fr;">
      <img src="${v.image}" alt="${v.brand} ${v.model}" style="width:100%; border-radius:14px; border:1px solid var(--line)" />
    </div>
    <div class="container" style="padding: 14px 0 8px;">
      <h1>${v.brand} ${v.model}</h1>
      <p class="muted">${v.year} · ${v.km.toLocaleString('es-ES')} km · ${v.engine}</p>
      <h2>${numberFormatEUR(v.price)}</h2>
      <div class="grid-cars" style="grid-template-columns: 1fr 1fr;">
        <div>
          <h3>Especificaciones</h3>
          <ul>
            <li>Color: ${v.color}</li>
            <li>Cambio: ${v.transmission}</li>
            <li>Potencia: ${v.power} CV</li>
            <li>Puertas: ${v.doors}</li>
          </ul>
        </div>
        <div>
          <h3>¿Te interesa?</h3>
          <p>Solicita una prueba o pide una oferta personalizada.</p>
          <a class="btn btn-primary" href="/contacto.html?vehiculo=${encodeURIComponent(v.brand + ' ' + v.model)}">Contactar</a>
        </div>
      </div>
    </div>
  `;

  // Inject Vehicle structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": `${v.brand} ${v.model}`,
    "brand": v.brand,
    "model": v.model,
    "vehicleTransmission": v.transmission,
    "fuelType": v.engine,
    "vehicleEngine": { "@type": "EngineSpecification", "engineType": v.engine, "enginePower": { "@type": "QuantitativeValue", "value": v.power, "unitCode": "BHP" }},
    "vehicleSeatingCapacity": v.doors,
    "image": v.image,
    "offers": { "@type": "Offer", "price": v.price, "priceCurrency": "EUR", "availability": "https://schema.org/InStock" }
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

/* Footer year */
function updateYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeFeatured();
  initInventoryPage();
  initVehicleDetail();
  updateYear();
});


