# Vite + React + Shadcn/ui + TypeScript Starter

This is a starter template for building modern web applications using a powerful combination of technologies. It's pre-configured to get you up and running quickly.

## ✨ Features

- ⚛️ **React 18** with hooks
- ⚡️ **Vite** for fast development and builds
- 🔷 **TypeScript** for static typing
- 🎨 **shadcn/ui** for beautifully designed, accessible, and customizable components
- tailwind-merge and clsx for utility class management
- eslint and prettier for code quality and formatting

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation) (or npm/yarn)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```
    or
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📦 Available Scripts

-   `pnpm run dev`: Starts the development server with Hot Module Replacement (HMR).
-   `pnpm run build`: Compiles the application for production.
-   `pnpm run lint`: Lints the code using ESLint.
-   `pnpm run preview`: Serves the production build locally for previewing.

## 📁 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (especially shadcn/ui)
│   ├── pages/           # Application pages
│   ├── lib/             # Utility functions
│   ├── assets/          # Images, fonts, etc.
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point of the application
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```
