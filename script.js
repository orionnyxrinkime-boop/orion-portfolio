// Attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {

  // ====== 1. ONGLETS COMPETENCES ======
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Enlever "active" de tous les boutons et contenus
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // 2. Ajouter "active" au bouton cliqué
      btn.classList.add('active');

      // 3. Afficher le contenu qui correspond au data-tab
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // ====== 2. FILTRE DES PROJETS ======
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Enlever "active" de tous les boutons filtre
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 2. Récupérer le filtre
      const filter = btn.getAttribute('data-filter');

      // 3. Montrer/Cacher les projets
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block'; // Montre
        } else {
          card.style.display = 'none'; // Cache
        }
      });
    });
  });

  // ====== 3. SCROLL DOUX ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
