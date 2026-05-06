# Project Shopping Cart

A learning project focused on **React Router** and **custom hooks**, built with React + Vite. This project implements a minimal shopping cart application to explore nested routing, outlet context, and data-fetching hooks.

## Tech Stack

- **React 19** — UI library with React Compiler enabled
- **React Router DOM v7** — Client-side routing with `createBrowserRouter`, nested routes, `<Outlet>`, and `useOutletContext`
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon library
- **Framer Motion** — Animation library

## Features

- Nested routes with a layout shell (`App.jsx`) and child pages (`Home`, `Products`)
- Route outlet context for sharing `cartItems` state across components without prop drilling
- Custom hook (`useProductData`) that encapsulates async data fetching with loading and error states
- Product listing fetched from the [Fake Store API](https://fakestoreapi.com/)
- Add-to-cart with quantity selection
- Slide-over cart panel with item removal

## Project Structure

```
src/
├── main.jsx                  # Router setup with createBrowserRouter
├── App.jsx                   # Layout shell — renders Navbar + Outlet with context
├── components/
│   ├── home.jsx              # Landing page with hero and CTA
│   ├── products.jsx          # Product grid using useProductData + useOutletContext
│   ├── Navbar.jsx            # Navigation bar with cart button and item count
│   └── Cart.jsx              # Full-screen cart overlay with remove functionality
├── hooks/
│   └── useProductData.jsx    # Custom hook: fetches products with loading/error states
└── index.css                 # Global styles + Tailwind setup
```

## Learning Objectives

This project demonstrates the following React concepts:

| Concept                                   | Where                      |
| ----------------------------------------- | -------------------------- |
| `createBrowserRouter` & `RouterProvider`  | `main.jsx`                 |
| Nested routes & `<Outlet>`                | `App.jsx`                  |
| `useOutletContext` for shared state       | `products.jsx`             |
| Custom hook with `useEffect` + `useState` | `hooks/useProductData.jsx` |
| Lifted state pattern                      | `App.jsx` → Navbar + Cart  |
