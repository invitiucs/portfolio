

(function () {
  'use strict';

  // -------- Year in footer --------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Nav: scroll shadow + mobile burger --------
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  });
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav__mobile-open');
      burger.classList.toggle('is-open');
    });
    // close menu after clicking a link
    document.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('nav__mobile-open');
        burger.classList.remove('is-open');
      });
    });
  }

  // -------- Filter system --------
  const filterBtns = document.querySelectorAll('.filter');
  const cards = Array.from(document.querySelectorAll('.gallery .card'));

  // Populate count badges
  const counts = { all: cards.length };
  cards.forEach(c => {
    const cat = c.dataset.cat;
    counts[cat] = (counts[cat] || 0) + 1;
  });
  filterBtns.forEach(btn => {
    const key = btn.dataset.filter;
    const sup = btn.querySelector('sup');
    if (sup) sup.textContent = counts[key] ?? 0;
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter;

      cards.forEach(card => {
        const match = (f === 'all') || (card.dataset.cat === f);
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  // -------- Lightbox --------
  const lb       = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbTitle  = document.getElementById('lightbox-title');
  const lbDesc   = document.getElementById('lightbox-desc');
  const lbCount  = document.getElementById('lightbox-counter');
  const lbClose  = lb?.querySelector('.lightbox__close');
  const lbPrev   = lb?.querySelector('.lightbox__nav--prev');
  const lbNext   = lb?.querySelector('.lightbox__nav--next');
  let currentIdx = 0;

  function getVisibleCards() {
    return cards.filter(c => !c.classList.contains('is-hidden'));
  }

  function openLightbox(idx) {
    const visible = getVisibleCards();
    if (!visible.length) return;
    currentIdx = (idx + visible.length) % visible.length;
    const card = visible[currentIdx];
    const img  = card.querySelector('img');
    if (!img) return;
    lbImg.src          = img.src;
    lbImg.alt          = img.alt || '';
    const title = img.dataset.title || card.querySelector('figcaption span')?.textContent || '';
    const desc  = img.dataset.desc || img.alt || '';
    lbTitle.textContent = title;
    lbDesc.textContent  = desc;
    lbCount.textContent = `${currentIdx + 1} / ${visible.length}`;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const visible = getVisibleCards();
      const idx = visible.indexOf(card);
      if (idx >= 0) openLightbox(idx);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => openLightbox(currentIdx - 1));
  lbNext?.addEventListener('click', () => openLightbox(currentIdx + 1));
  lb?.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lb || !lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   openLightbox(currentIdx - 1);
    if (e.key === 'ArrowRight')  openLightbox(currentIdx + 1);
  });

  // -------- Reveal on scroll --------
  const toReveal = document.querySelectorAll('.about, .work, .resume, .contact, .card');
  toReveal.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    toReveal.forEach(el => io.observe(el));
  } else {
    toReveal.forEach(el => el.classList.add('is-in'));
  }
})();

