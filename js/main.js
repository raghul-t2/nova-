// ===== NOVA STITCH — MAIN JAVASCRIPT =====

// ---- CART ----
let cart = JSON.parse(localStorage.getItem('ns_cart') || '[]');

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = cart.length;
}

function addToCart(name, price, emoji) {
  cart.push({ name, price, emoji, id: Date.now() });
  localStorage.setItem('ns_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${emoji} ${name} added to cart!`);
}

// ---- TOAST ----
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">✓</span><span id="toast-msg"></span>`;
    document.body.appendChild(toast);
  }
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- AUTH ----
function isLoggedIn() {
  return !!localStorage.getItem('ns_user');
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('ns_user') || 'null');
}

function logout() {
  localStorage.removeItem('ns_user');
  window.location.href = 'index.html';
}

function updateNavForAuth() {
  const user = getCurrentUser();
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;

  if (user) {
    navActions.innerHTML = `
      <div class="cart-icon" onclick="window.location.href='cart.html'">
        🛒 <span class="cart-badge">${cart.length}</span>
      </div>
      <span style="color:var(--gold);font-size:0.85rem;font-weight:600">Hi, ${user.name.split(' ')[0]}</span>
      <button class="btn-login" onclick="logout()">Logout</button>
    `;
  } else {
    navActions.innerHTML = `
      <div class="cart-icon" onclick="window.location.href='cart.html'">
        🛒 <span class="cart-badge">${cart.length}</span>
      </div>
      <a href="login.html" class="btn-login">Login</a>
    `;
  }
}

// ---- FILTER TABS (Shop) ----
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.product-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.category;
        card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
      });
    });
  });
}

// ---- SIDEBAR FILTER ----
function initSidebarFilter() {
  const items = document.querySelectorAll('.sidebar-item');
  const cards = document.querySelectorAll('.product-card');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const filter = item.dataset.filter;
      cards.forEach(card => {
        const cat = card.dataset.category;
        card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
      });
    });
  });
}

// ---- HAMBURGER MENU ----
function initHamburger() {
  const ham = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!ham || !links) return;

  ham.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.width = '100%';
    links.style.background = '#111';
    links.style.padding = '1rem 5%';
    links.style.borderBottom = '1px solid #2a2a2a';
    links.style.gap = '1rem';
  });
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cat-card, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  updateNavForAuth();
  updateCartBadge();
  initFilterTabs();
  initSidebarFilter();
  initHamburger();
  setTimeout(initScrollAnimations, 100);
});
