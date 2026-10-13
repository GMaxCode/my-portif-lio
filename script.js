// ============================================================================
//  Figurinhas decorativas — espalha aleatoriamente pela página
// ============================================================================
const decorImages = [
  'fotos/fotos figuras/Code Logo.jpg',
  'fotos/fotos figuras/download (7).jpg',
  'fotos/fotos figuras/No way out.jpg',
  'fotos/fotos figuras/AESTHETIC BOLD AGENCY BRANDING - @CLARADESIGN_CO.jpg',
];

const tapeVariants = ['', 'tape-mint', 'tape-pink', 'tape-blue'];
const sizeVariants = ['size-s', 'size-m', 'size-l'];

const decorContainer = document.getElementById('floating-decor');

// Quantas cópias de cada imagem espalhar (4 imagens × 4 = 16 figurinhas)
const COPIES_PER_IMAGE = 4;

const stickers = [];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createSticker(src, idx) {
  const el = document.createElement('figure');
  el.className = `deco-sticker ${tapeVariants[idx % tapeVariants.length]} ${sizeVariants[idx % sizeVariants.length]}`;

  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.loading = 'lazy';
  img.onerror = () => el.remove();
  el.appendChild(img);

  // Distribui aleatoriamente. Para ~65% das figurinhas usa as bordas
  // (laterais + topo/rodapé) onde elas ficam bem visíveis; o resto
  // pode cair em qualquer lugar (z-index 0 fica atrás do .page-shell).
  let top, left;
  const r = Math.random();
  if (r < 0.65) {
    // Bordas: ou bem à esquerda/direita, ou bem no topo/rodapé
    const side = Math.random();
    if (side < 0.5) {
      // Lateral esquerda ou direita
      left = Math.random() < 0.5 ? rand(0, 10) : rand(90, 99);
      top = rand(5, 95);
    } else {
      // Topo ou rodapé
      top = Math.random() < 0.5 ? rand(2, 12) : rand(88, 98);
      left = rand(5, 95);
    }
  } else {
    // Posição totalmente aleatória (atrás do conteúdo)
    top = rand(2, 98);
    left = rand(2, 98);
  }

  const tilt = rand(-12, 12);
  el.style.top = `${top.toFixed(1)}%`;
  el.style.left = `${left.toFixed(1)}%`;
  el.style.setProperty('--tilt', `${tilt.toFixed(1)}deg`);

  decorContainer.appendChild(el);
  stickers.push(el);
}

// Cria as figurinhas (replica cada imagem N vezes pra ter mais enfeite)
decorImages.forEach((src, i) => {
  for (let k = 0; k < COPIES_PER_IMAGE; k++) {
    createSticker(src, i + k);
  }
});

// Flutuação suave: cada figurinha "respira" mudando um pouquinho a cada 6s
function floatAround() {
  stickers.forEach((el) => {
    const currentTop = parseFloat(el.style.top);
    const currentLeft = parseFloat(el.style.left);
    const newTop = Math.max(1, Math.min(94, currentTop + rand(-3, 3)));
    const newLeft = Math.max(1, Math.min(94, currentLeft + rand(-3, 3)));
    el.style.top = `${newTop.toFixed(2)}%`;
    el.style.left = `${newLeft.toFixed(2)}%`;
  });
}

setInterval(floatAround, 6000);

// ============================================================================
//  Reveal on scroll
// ============================================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document
  .querySelectorAll('.value-card, .project-card, .about-copy, .polaroid, .robin-name, .hero-line, .btn-contact, .contact-card')
  .forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
