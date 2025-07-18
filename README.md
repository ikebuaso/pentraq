# 🛡️ Pentraq – Automated Web Security Auditor (Frontend Only)

**Pentraq** is a modern cybersecurity SaaS platform that allows users to input their website URL and receive an automated security scan (future backend integration planned).  
This repository contains the **frontend-only implementation** built with **Next.js** and **Tailwind CSS**, optimized for performance, scalability, and clean UI/UX using a **grayscale design system**.

---

## 🚀 Live Preview
Coming soon – hosted on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

---

## ✨ Features

- ⚡ Fast-loading, mobile-responsive layout
- 🌗 Dark/Light mode toggle
- 🔐 Login & Signup UI (no backend yet)
- 🧩 Modular components for reusability
- 🗂️ Scalable folder structure
- 🧠 Built with accessibility and SEO in mind
- 🎨 Clean, grayscale minimalist UI
- 🧪 Form-ready scan input (API-ready)

---

## 📁 Folder Structure

pentaq/
│
├── components/ # Reusable UI components
│ ├── ui/ # Buttons, Inputs, Cards
│ └── layout/ # Navbar, Footer, etc.
│
├── pages/ # Static routes (Next.js)
│ ├── index.tsx # Homepage
│ ├── auth/ # Login, Signup
│ ├── blog/ # Blog preview
│ ├── pricing.tsx # Pricing page
│ └── 404.tsx # Error page
│
├── public/ # Assets (logo, icons, etc.)
├── styles/ # Tailwind config, globals
├── lib/ # (Future: API helpers)
└── README.md

yaml
Copy
Edit

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Font:** Inter, system-ui
- **Deployment Target:** Vercel / Netlify
- **Form Handling:** Placeholder-only (ready for future integration)

---

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/pentraq.git

# 2. Navigate into the folder
cd pentraq

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev

# 5. Open in browser
http://localhost:3000
🔮 Planned Upgrades
🔧 Integrate backend vulnerability scanner (/api/scan)

🔐 Connect authentication to Firebase or Supabase

📈 Add user dashboards for saved scans

📬 Newsletter / email collection

🧠 AI-assisted scan report explanations

📄 License
MIT © 2025 Pentraq Security Ltd.

🤝 Contribution
Pull requests, ideas, and issue reports are always welcome. Let’s build a safer web together.

📫 Contact
Have questions, partnerships, or security concerns?

Email: founder@pentraq.com
Twitter: @pentraqSec
LinkedIn: Pentraq Security

