# React Server Components from Scratch

A minimal implementation of React Server Components (RSC) built from the ground up using modern web technologies.

## 🚀 Overview

This project demonstrates how to build React Server Components from scratch without using Next.js or other frameworks. It showcases server-side rendering with React 19, fast bundling with esbuild, and a lightweight server using Hono.

## 🛠️ Tech Stack

- **React 19** - Latest React with Server Components support
- **Hono** - Fast, lightweight web framework
- **esbuild** - Extremely fast JavaScript bundler
- **tsx** - TypeScript execution environment
- **@hono/node-server** - Node.js adapter for Hono

## 📁 Project Structure

```
├── app/
│   └── page.jsx          # React Server Component
├── build/                # Built components (generated)
├── server.js            # Server implementation with SSR
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 🔧 How It Works

1. **Server Components**: React components in the `app/` directory are rendered on the server
2. **Build Process**: esbuild compiles JSX components for server-side execution
3. **SSR**: Hono server renders components to HTML strings using `renderToString`
4. **Hot Reload**: tsx watch mode automatically restarts the server on changes

## 📝 Key Features

- ✅ Server-side rendering of React components
- ✅ Automatic build process with esbuild
- ✅ Hot reloading in development
- ✅ Minimal setup without complex frameworks
- ✅ Modern React 19 features

## 🤝 Contributing

Feel free to contribute by:
- Adding new features
- Improving the build process
- Enhancing documentation
- Fixing bugs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
