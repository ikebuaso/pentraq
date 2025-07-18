# 🛡️ Pentraq — Automated Web Security Auditor (Frontend MVP)

**Pentraq** is a forward-thinking cybersecurity SaaS platform that allows users to perform automated vulnerability scans on their websites. This repository contains the **frontend-only MVP** implementation, built using **Next.js**, **Tailwind CSS**, and a modern **grayscale UI system**.

This codebase is designed to be modular, scalable, and ready for integration with backend APIs in the future. It’s ideal for freelance developers, agencies, and digital product teams who need fast, actionable insights into their web security posture.

---

## 🌐 Live Demo (Coming Soon)

> 🔗 https://pentraq.vercel.app  
> 🚧 Currently in frontend-only phase. Backend integrations will follow in v1.1.

---

## 📸 Screenshots

| Homepage | Login Page | Dashboard (Coming Soon) |
|----------|-------------|--------------------------|
| ![Homepage](./public/screenshots/home.png) | ![Login](./public/screenshots/login.png) | ![Coming Soon](./public/screenshots/comingsoon.png) |

---

## 📦 Tech Stack

| Tech            | Usage                                |
|-----------------|----------------------------------------|
| **Next.js**     | Core frontend framework               |
| **React**       | Component-based UI                    |
| **Tailwind CSS**| Utility-first styling                 |
| **Framer Motion** | Page/element transitions            |
| **Dark/Light Theme** | Built using Tailwind’s `dark:` mode |
| **TypeScript (Optional)** | Ready to enable if needed         |

---

## 🧱 Project Structure

pentraq/
│
├── components/ # Reusable UI components (navbar, cards, inputs)
│ ├── ui/ # Core building blocks (Button, Input, etc.)
│ └── layout/ # Navbar, Footer, Section wrappers
│
├── pages/ # Static pages and routes (Next.js)
│ ├── index.tsx # Landing Page
│ ├── auth/ # Login and Signup UI
│ ├── pricing.tsx # Pricing tiers
│ ├── blog.tsx # Blog previews
│ ├── contact.tsx # Contact form
│ └── 404.tsx # Custom error page
│
├── public/ # Static assets (logos, icons, screenshots)
├── styles/ # Tailwind config and global styles
├── lib/ # (Future) API helpers and business logic
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Beautiful, responsive **landing page** for marketing
- 🌗 Fully functional **dark/light mode** toggle
- 🔐 Auth pages (Login / Signup) with clean UX
- 🧠 Feature sections and pricing grid
- 📄 Blog and contact pages
- ⚙️ Built with **frontend-backend separation** in mind
- 📱 Optimized for all screen sizes
- 🧩 Easily extendable with backend APIs

---

## 🔮 Roadmap

| Milestone                 | Status     | Description                                                  |
|---------------------------|------------|--------------------------------------------------------------|
| 🔹 Frontend MVP            | ✅ Done     | Public UI for homepage and auth                              |
| 🔹 Backend Integration     | ⏳ Planned  | API to process and return security scans                     |
| 🔹 Dashboard UI            | 🔜 Next     | Logged-in user dashboard, history, and account management    |
| 🔹 Real-time Notifications | 🔜 Next     | Email or UI notifications when scans complete                |
| 🔹 Payment Integration     | 🔜 Later    | Stripe + tiered pricing for Pro/Agency plans                 |
| 🔹 CMS for Blog            | 🔜 Later    | Sanity or Notion-based blog backend  
