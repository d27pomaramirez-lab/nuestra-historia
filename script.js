
const FECHA_INICIO = new Date(2026, 4, 22);

function actualizarContador() {
  const hoy = new Date();
  const msPorDia = 1000 * 60 * 60 * 24;
  const dias = Math.floor((hoy - FECHA_INICIO) / msPorDia);
  const el = document.getElementById('counter-number');
  if (el && dias >= 0) {
    el.textContent = dias;
  }
}
actualizarContador();

function crearPetalos() {
  const contenedor = document.getElementById('petals');
  if (!contenedor) return;

  const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefiereMenosMovimiento) return;

  const cantidad = window.innerWidth < 640 ? 10 : 18;

  for (let i = 0; i < cantidad; i++) {
    const petalo = document.createElement('div');
    petalo.className = 'petal';
    petalo.style.left = Math.random() * 100 + 'vw';
    petalo.style.animationDuration = 4 + Math.random() * 3 + 's';
    petalo.style.animationDelay = Math.random() * 2 + 's';
    petalo.style.opacity = 0.4 + Math.random() * 0.4;
    petalo.style.width = petalo.style.height = 6 + Math.random() * 8 + 'px';
    contenedor.appendChild(petalo);
  }

  setTimeout(() => { contenedor.innerHTML = ''; }, 8000);
}
window.addEventListener('load', crearPetalos);


const itemsTimeline = document.querySelectorAll('.timeline__item');

if ('IntersectionObserver' in window && itemsTimeline.length) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  itemsTimeline.forEach((item) => observador.observe(item));
} else {
  itemsTimeline.forEach((item) => item.classList.add('is-visible'));
}
