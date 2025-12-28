# 🚀 Personal Portfolio – Srajan Shrivastava

Welcome to the repository of my **personal developer portfolio website**, designed to showcase my skills, projects, experience, and online presence. This portfolio is **fully interactive, animated, mobile‑responsive**, and now deployed live.

👉 **Live Website:** _Add your Netlify link here_

---

## 🎯 Overview
This website serves as my professional identity on the web — helping recruiters, engineers, and collaborators explore:
- Who I am
- What skills I bring
- What I’ve built
- Where I’m active online
- How to contact me directly

---

## 🧩 Core Features

| Feature | Description |
|--------|-------------|
| 🎨 Animated Hero Section | Smooth intro animation + CTAs (Projects, Socials, Contact) |
| 🌗 Dark / Light Mode Toggle | Theme switcher with persistent UI behavior |
| 📱 Fully Responsive | Works smoothly across desktop, tablet, and mobile |
| ⚡ Technical Expertise Modal | Click‑based modal popups for skill‑category breakdowns |
| 🧾 Experience Timeline | Animated company‑wise timeline with roles, location, dates |
| 🎓 Education Section | Displays college information post‑experience |
| 🖼️ Project Carousel + Modal | Swipeable card slider + click‑modal showing description + GitHub links |
| 📨 Contact Form + EmailJS | Working send‑message functionality with cartoon success popup |
| 🌐 Online Presence Cards | GitHub, LinkedIn, Instagram, LeetCode, Kaggle – interactive hover cards |

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla)
- EmailJS SDK (for email delivery)

**UI Animations & Effects**
- IntersectionObserver (Scroll Fade‑In)
- GIF‑based success popups
- Modal overlays & transitions

**Hosting**
- Netlify (Production Deploy)

---

## 🧪 Local Setup
If you want to clone and run it locally:
```bash
git clone https://github.com/<your‑repo>.git
cd portfolio
```
Just open the project root and run:
```bash
open index.html   # macOS
# or
start index.html  # Windows
```
No backend server required since it's a static site.

---

## 🔗 EmailJS Setup (Contact Form)
Contact form sends emails using EmailJS. To configure it:
1️⃣ Create account at https://emailjs.com  
2️⃣ Create Service → copy **Service ID**  
3️⃣ Create Email Template → copy **Template ID**  
4️⃣ Copy Public Key from Integration tab  
5️⃣ Add this to HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```
6️⃣ Insert Service + Template inside `script.js`:
```js
emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData)
```

---

## 📸 Screenshots (Add images later)
```
assets/screenshots/home.png
assets/screenshots/projects.png
assets/screenshots/contact.png
```
(Replace with actual hosted screenshots)

---

## 🤝 Contributing
This portfolio is personal — but suggestions and UI feedback are appreciated.  
Fork the repo → create a PR → I’ll review.

---

## 📬 Contact
📧 Email: _add here_  
🌐 LinkedIn: https://www.linkedin.com/in/srajan-shrivastava-16s11s02/  
🐙 GitHub: https://github.com/Srajan-02

---

Thanks for visiting — this portfolio is continuously improving ❤️
