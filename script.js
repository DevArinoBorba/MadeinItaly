/**
 * MADEINITALY OUTLET — INTERACTIVE SCRIPT
 * Quiet Luxury Interactions, Ficha Técnica Modal, Style Assistant & Dual Routing
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. DATA: FICHAS TÉCNICAS DOS BLAZERS
     ========================================================================== */
  const blazersData = {
    'blazer-01': {
      number: '01 · FICHA TÉCNICA',
      title: 'Navy Milano Sartoriale',
      description: 'Blazer clássico italiano confeccionado com as mais finas fibras de lã virgem de Biella. Estrutura de ombro natural e caimento imponente para executivos e ocasiões nobres.',
      mill: 'Vitale Barberis Canonico (Biella, Itália)',
      composition: '100% Lã Virgem Pura Super 130s',
      fit: 'Corte Italiano Slim Sartoriale',
      buttons: '2 Botões em Chifre Natural Italiano',
      lining: '100% Cupro Bemberg Respirável',
      sizes: '46, 48, 50, 52, 54, 56, 58, 60',
      image: 'assets/blazer_navy_milano_1788187526144.jpg',
      whatsappRef: 'Blazer Navy Milano Sartoriale (Ref 01)'
    },
    'blazer-02': {
      number: '02 · FICHA TÉCNICA',
      title: 'Sand Havana Riviera',
      description: 'Estrutura desestruturada em blend nobre de linho e lã tropical. Projetado para eventos diurnos, casamentos ao ar livre e ambientes smart casual requintados.',
      mill: 'Tessitura di Novara (Itália)',
      composition: '65% Linho Nobre Italiano, 35% Lã Virgem Tropical',
      fit: 'Desestruturado Soft Tailoring (Sem Ombreiras Rígidas)',
      buttons: '2 Botões em Madrepérola Fosca',
      lining: 'Meio-forro em Seda & Viscose',
      sizes: '48, 50, 52, 54, 56',
      image: 'assets/blazer_sand_havana_1788187588588.jpg',
      whatsappRef: 'Blazer Sand Havana Riviera (Ref 02)'
    },
    'blazer-03': {
      number: '03 · FICHA TÉCNICA',
      title: 'Charcoal Roma Executive',
      description: 'Paletó de abotoamento duplo (Doppiopetto) em lã chumbo acetinada. Lapela larga em bico e proporções clássicas romanas para máxima autoridade.',
      mill: 'Loro Piana Weave Selection',
      composition: '100% Lã Penteada Super 140s',
      fit: 'Doppiopetto 6x2 Clássico Imponente',
      buttons: '6 Botões Gravados em Chifre Escuro',
      lining: 'Forro Completo em Sarja de Viscose',
      sizes: '48, 50, 52, 54, 56, 58',
      image: 'assets/blazer_charcoal_roma_1788187655812.jpg',
      whatsappRef: 'Blazer Charcoal Roma Executive (Ref 03)'
    },
    'blazer-04': {
      number: '04 · FICHA TÉCNICA',
      title: 'Olive Firenze Espinha',
      description: 'Padronagem espinha de peixe (herringbone) em verde oliva profundo. Uma peça de destaque com sofisticação discreta para o homem contemporâneo.',
      mill: 'Reda 1865 Sartoria',
      composition: '100% Lã Virgem em Trama Herringbone',
      fit: 'Corte Moderno Italiano com Aberturas Duplas',
      buttons: '2 Botões em Resina Fosca e Chifre',
      lining: '100% Viscose Acetinada',
      sizes: '46, 48, 50, 52, 54, 56',
      image: 'assets/blazer_olive_firenze_1788187801813.jpg',
      whatsappRef: 'Blazer Olive Firenze Espinha (Ref 04)'
    }
  };

  /* ==========================================================================
     02. NAVBAR SCROLL EFFECT & MOBILE DRAWER
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  /* ==========================================================================
     03. LOOKBOOK CATEGORY FILTERS
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ==========================================================================
     04. MODAL DE FICHA TÉCNICA
     ========================================================================== */
  const modal = document.getElementById('tech-sheet-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const openSheetBtns = document.querySelectorAll('.btn-open-sheet');

  const modalImg = document.getElementById('modal-img');
  const modalNum = document.getElementById('modal-num');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalMill = document.getElementById('modal-mill');
  const modalComposition = document.getElementById('modal-composition');
  const modalFit = document.getElementById('modal-fit');
  const modalButtons = document.getElementById('modal-buttons');
  const modalLining = document.getElementById('modal-lining');
  const modalSizes = document.getElementById('modal-sizes');
  const modalWhatsappCta = document.getElementById('modal-whatsapp-cta');
  const modalEcomCta = document.getElementById('modal-ecom-cta');

  function openTechModal(blazerId) {
    const item = blazersData[blazerId];
    if (!item) return;

    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalNum.textContent = item.number;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.description;
    modalMill.textContent = item.mill;
    modalComposition.textContent = item.composition;
    modalFit.textContent = item.fit;
    modalButtons.textContent = item.buttons;
    modalLining.textContent = item.lining;
    modalSizes.textContent = item.sizes;

    const encodedMsg = encodeURIComponent(`Olá! Gostaria de consultar disponibilidade e detalhes do ${item.whatsappRef}.`);
    modalWhatsappCta.href = `https://wa.me/5511978365191?text=${encodedMsg}`;
    modalEcomCta.href = `https://madeinitalyoutlet.com.br`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openSheetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      openTechModal(targetId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeTechModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeTechModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeTechModal();
    }
  });

  /* ==========================================================================
     05. INTERACTIVE FIT ASSISTANT QUIZ (GUIDA ALLO STILE)
     ========================================================================== */
  const quizAnswers = {
    occasion: '',
    fit: '',
    color: ''
  };

  const quizOptionBtns = document.querySelectorAll('.quiz-option-btn');
  const quizStep1 = document.getElementById('quiz-step-1');
  const quizStep2 = document.getElementById('quiz-step-2');
  const quizStep3 = document.getElementById('quiz-step-3');
  const quizResult = document.getElementById('quiz-result');
  const quizRestartBtn = document.getElementById('quiz-restart-btn');

  const dot1 = document.getElementById('step-dot-1');
  const dot2 = document.getElementById('step-dot-2');
  const dot3 = document.getElementById('step-dot-3');

  const resultTitle = document.getElementById('quiz-result-title');
  const resultDesc = document.getElementById('quiz-result-desc');
  const resultWhatsappCta = document.getElementById('quiz-whatsapp-cta');

  quizOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.getAttribute('data-step');
      const val = btn.getAttribute('data-val');

      if (step === '1') {
        quizAnswers.occasion = val;
        quizStep1.classList.remove('active');
        quizStep2.classList.add('active');
        dot1.classList.remove('active');
        dot2.classList.add('active');
      } else if (step === '2') {
        quizAnswers.fit = val;
        quizStep2.classList.remove('active');
        quizStep3.classList.add('active');
        dot2.classList.remove('active');
        dot3.classList.add('active');
      } else if (step === '3') {
        quizAnswers.color = val;
        quizStep3.classList.remove('active');
        calculateQuizResult();
      }
    });
  });

  function calculateQuizResult() {
    quizResult.classList.add('active');

    let recommendedBlazer = 'Navy Milano Sartoriale (Super 130s)';
    let justification = 'Excelente versatilidade executiva e presença refinada com corte estruturado clássico.';

    if (quizAnswers.occasion.includes('Smart Casual') || quizAnswers.color.includes('Bege')) {
      recommendedBlazer = 'Sand Havana Riviera em Linho & Lã';
      justification = 'Perfeito para ocasiões contemporâneas, clima tropical e eventos ao ar livre com toque artesanal.';
    } else if (quizAnswers.fit.includes('Doppiopetto') || quizAnswers.color.includes('Chumbo')) {
      recommendedBlazer = 'Charcoal Roma Executive (Doppiopetto)';
      justification = 'Máxima imponência e autoridade com abotoamento duplo italiano e lã pesada Super 140s.';
    } else if (quizAnswers.color.includes('Verde Oliva')) {
      recommendedBlazer = 'Olive Firenze Espinha Herringbone';
      justification = 'Destaque visual discreto e sofisticado com trama espinha de peixe exclusiva de Florença.';
    }

    resultTitle.textContent = recommendedBlazer;
    resultDesc.textContent = `Para sua preferência (${quizAnswers.occasion} · ${quizAnswers.fit} · ${quizAnswers.color}), recomendamos esta curadoria: ${justification}`;

    const textPayload = encodeURIComponent(
      `Olá! Fiz o Guia de Estilo no site institucional. Minha recomendação ideal foi o ${recommendedBlazer} (${quizAnswers.occasion}, ${quizAnswers.fit}). Gostaria de verificar opções e tamanhos disponíveis!`
    );
    resultWhatsappCta.href = `https://wa.me/5511978365191?text=${textPayload}`;
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      quizResult.classList.remove('active');
      quizStep1.classList.add('active');
      quizStep2.classList.remove('active');
      quizStep3.classList.remove('active');
      dot1.classList.add('active');
      dot2.classList.remove('active');
      dot3.classList.remove('active');
    });
  }

  /* ==========================================================================
     06. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* ==========================================================================
     07. HOTSPOT TOOLTIP MICRO-INTERACTIONS
     ========================================================================== */
  const hotspots = document.querySelectorAll('.fabric-hotspot');
  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const tooltip = spot.getAttribute('data-tooltip');
      alert(`[Detalhe Sartorial] ${tooltip}`);
    });
  });

  /* ==========================================================================
     08. PROMO POPUP MODAL (12X SEM JUROS)
     ========================================================================== */
  const promoModal = document.getElementById('promo-modal');
  const promoCloseBtn = document.getElementById('promo-close-btn');
  const promoDismissBtn = document.getElementById('promo-dismiss-btn');

  function openPromoModal() {
    if (!promoModal) return;
    promoModal.classList.add('active');
    promoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePromoModal() {
    if (!promoModal) return;
    promoModal.classList.remove('active');
    promoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (promoModal) {
    // Exibe suavemente 800ms após o carregamento da página
    setTimeout(() => {
      openPromoModal();
    }, 800);

    if (promoCloseBtn) promoCloseBtn.addEventListener('click', closePromoModal);
    if (promoDismissBtn) promoDismissBtn.addEventListener('click', closePromoModal);

    promoModal.addEventListener('click', (e) => {
      if (e.target === promoModal) {
        closePromoModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && promoModal.classList.contains('active')) {
        closePromoModal();
      }
    });
  }

});

