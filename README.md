# 🧵 Nova Stitch — Clothing Brand Website

> **Wear Your Passion** — A fandom clothing brand for Sports, Kollywood & MiniMates fans.

---

## 📁 Repository Structure

```
novastitch/
├── index.html        ← Home / Landing page
├── login.html        ← Login & Register page
├── shop.html         ← Shop / Products page
├── cart.html         ← Shopping cart page
├── css/
│   └── style.css     ← All styles (shared across pages)
├── js/
│   └── main.js       ← All JavaScript (shared across pages)
└── README.md
```

---

## 🚀 How to Run Locally

1. **Download / Clone** this repo
2. Open `index.html` in any browser — **no server needed**
3. All pages work with file:// protocol

> For best results, use **VS Code + Live Server** extension

---

## 🌐 Deploy on GitHub Pages (Free Hosting)

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site goes live at `https://yourusername.github.io/novastitch/`

---

## 🛍️ Features

| Feature | Details |
|---|---|
| 🏠 Home Page | Hero section, category showcase, featured products |
| 🔐 Login / Register | LocalStorage-based auth with validation |
| 🛒 Shop Page | Filter by category, sidebar navigation |
| 🛍️ Cart | Add/remove items, coupon code, checkout |
| 📱 Responsive | Works on mobile, tablet, desktop |
| ✨ Animations | Scroll-triggered fade-ins, hover effects |

---

## 🗂️ Categories

### 🏏 Sports
- **Cricket** — Jerseys, Tees, Hoodies, Caps (Team themes: CSK, RCB, MI, India)
- **Football** — Jerseys, Graphic Tees, Hoodies (Chennai FC, Clubs, India)

### 🎬 Kollywood
- Fan Tees, Hoodies, Jackets — Thalaivar, Vijay, Ajith, Dhanush

### 🔑 MiniMates (Key Chains)
- Cricket bat, Football boots, Kollywood stars, Custom name keychains

---

## 🎨 Design

- **Brand Name:** Nova Stitch
- **Color Palette:** Deep Black `#080808` | Gold `#D4A017` | White `#F5F5F0`
- **Fonts:** Bebas Neue (headings) + Outfit (body)
- **Theme:** Dark luxury streetwear

---

## 🔐 Login System

Uses **browser LocalStorage** (no backend needed):

- Users register → stored in `localStorage['ns_users']`
- Login validates email + password
- Session stored in `localStorage['ns_user']`
- Cart persists across sessions via `localStorage['ns_cart']`

> ⚠️ For production, replace with a real backend (Node.js, Firebase, Supabase, etc.)

---

## 🛠️ Customization Guide

### Change Brand Name
Search-replace `Nova Stitch` / `NOVA STITCH` in all HTML files.

### Add Products
In `shop.html`, copy any `.product-card` block and update:
- `data-category` → `cricket` | `football` | `kollywood` | `minimates`
- Emoji, name, price fields

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --gold: #D4A017;      /* Primary accent */
  --black: #080808;     /* Background */
  --white: #F5F5F0;     /* Text */
}
```

### Add Real Images
Replace emoji divs with `<img>` tags:
```html
<img src="images/your-product.jpg" alt="Product Name" />
```

---

## 📦 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, Animations
- **Vanilla JS** — No frameworks, no build tools
- **Google Fonts** — Bebas Neue + Outfit
- **LocalStorage** — Cart & Auth persistence

---

## 💡 Upgrade Ideas

- [ ] Add Firebase / Supabase backend for real auth & database
- [ ] Integrate Razorpay / UPI payment gateway
- [ ] Add product detail pages
- [ ] Add search functionality
- [ ] Add WhatsApp order button
- [ ] Add Instagram feed section

---

## 📞 Contact

Made with ❤️ in Tamil Nadu  
Brand: **Nova Stitch** — *Wear Your Passion*
