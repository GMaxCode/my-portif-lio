const floatingTags = document.querySelectorAll('.floating-asset');

floatingTags.forEach((tag, index) => {
  const offsetX = (Math.random() * 18 - 9).toFixed(2);
  const offsetY = (Math.random() * 22 - 11).toFixed(2);
  tag.style.setProperty('--float-x', `${offsetX}px`);
  tag.style.setProperty('--float-y', `${offsetY}px`);
  tag.style.animationDelay = `${index * 0.25}s`;
});

const cards = document.querySelectorAll('.tech-card, .project-card');

cards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.value-card, .tech-card, .project-card, .about-copy, .photo-spot').forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

const portraitFrame = document.querySelector('.portrait-frame');
const portraitImg = document.querySelector('.portrait-frame img');

if (portraitImg) {
  portraitImg.addEventListener('error', () => {
    portraitFrame.classList.add('fallback');
  });
}
