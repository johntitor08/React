# 🛒 E-Commerce Store

A modern, responsive e-commerce application built with React, Redux, and Material-UI featuring dark mode, advanced search, and seamless shopping experience.

<https://img.shields.io/badge/React-18.2.0-blue>
<https://img.shields.io/badge/Redux-Toolkit-purple>
<https://img.shields.io/badge/React_Router-6.0+-orange>
<https://img.shields.io/badge/Material_UI-5.0+-green>

## ✨ Features

### 🛍️ Core Shopping Features

Product Catalog - Browse products with images, descriptions, and prices

Shopping Cart - Add/remove items, quantity management

Order Management - Complete order history with persistence

Search & Filter - Real-time search with category and price filters

Sorting - Sort by name, price (low-high, high-low), and rating

### 🎨 User Experience

Dark/Light Mode - Toggle between themes with persistent preference

Responsive Design - Mobile-first design that works on all devices

Popup Cart - Quick cart access from header

Order History - View complete purchase history

Loading States - Smooth loading experience with skeletons

### 🔧 Technical Features

State Management - Redux Toolkit for predictable state management

Routing - React Router for seamless navigation

Local Storage - Persist cart and order history

Modern UI - Material-UI components with custom CSS

API Integration - Fake Store API for product data

### 🚀 Live Demo

[Will add your live demo link here]

### 📸 Screenshots

Home Page Product Catalog Shopping Cart
<https://via.placeholder.com/300x200?text=Home+Page> <https://via.placeholder.com/300x200?text=Product+Catalog> <https://via.placeholder.com/300x200?text=Shopping+Cart>

Order History Dark Mode Mobile View
<https://via.placeholder.com/300x200?text=Order+History> <https://via.placeholder.com/300x200?text=Dark+Mode> <https://via.placeholder.com/300x200?text=Mobile+View>

## 🛠️ Installation

Prerequisites
Node.js (version 14 or higher)

npm or yarn

### Steps

Clone the repository

bash
git clone <https://github.com/your-username/ecommerce-store.git>
cd ecommerce-store
Install dependencies

bash
npm install

or

yarn install
Start the development server

bash
npm run dev

or

yarn dev
Open your browser
Navigate to <http://localhost:5173> (or the port shown in your terminal)

### 📁 Project Structure

text
src/
├── components/          # Reusable components
│   ├── Cart.js         # Shopping cart component
│   ├── Header.js       # Navigation header
│   ├── ProductList.js  # Product grid
│   └── SearchAndFilter.js # Search & filter controls
├── pages/              # Page components
│   ├── Home.js         # Homepage with products
│   └── OrderPage.js    # Order summary & history
├── redux/              # State management
│   ├── slices/         # Redux slices
│   │   ├── cartSlice.js
│   │   ├── productSlice.js
│   │   └── filterSlice.js
│   └── store.js        # Store configuration
├── css/                # Stylesheets
│   ├── Cart.css
│   ├── Header.css
│   ├── Home.css
│   ├── OrderPage.css
│   ├── Product.css
│   └── SearchAndFilter.css
├── config/             # Configuration files
│   └── RouterConfig.js # Routing setup
└── container/          # Layout components
    └── PageContainer.js

## 🎯 Key Components

### 🛒 Cart System

Add/remove products with quantity controls

Popup cart for quick access

Persistent cart state across sessions

Order summary and checkout flow

### 🔍 Search & Filters

Real-time search in product titles and descriptions

Category filtering (electronics, jewelry, clothing, etc.)

Price range slider

Multiple sorting options

### 📦 Order Management

Complete order history

Order details with timestamps

Persistent order storage

Clear history functionality

### 🌙 Dark Mode

Toggle between light and dark themes

Persistent theme preference

Consistent styling across all components

### 🏗️ Technology Stack

Frontend Framework: React 18

State Management: Redux Toolkit

Routing: React Router DOM

UI Components: Material-UI (MUI)

Styling: CSS3 with CSS Modules

Icons: React Icons

API: Fake Store API

Build Tool: Vite

### 📦 Available Scripts

bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
🔧 Configuration
Environment Variables
Create a .env file in the root directory:

env
VITE_API_URL=<https://fakestoreapi.com/products>
VITE_APP_NAME=My E-Commerce Store
Redux Store Structure
javascript
{
  app: { loading, error },
  product: { products, loading, error },
  cart: { cartItems },
  filters: {
    searchQuery,
    categoryFilter,
    priceRange,
    sortBy,
    categories
  }
}

### 🎨 Customization

Adding New Products

The app uses the Fake Store API. To customize products, modify the API endpoint or create a mock data file.

### Styling

Modify CSS files in the src/css/ directory

Theme variables can be adjusted in component CSS files

Dark mode colors are defined in each component's CSS

### Adding New Features

Create new components in src/components/

Add Redux slices in src/redux/slices/ if needed

Update routing in src/config/RouterConfig.js

Add corresponding CSS files

### 🚀 Deployment

Build for Production
bash
npm run build
Deploy to Netlify
Build the project: npm run build

Drag and drop the dist folder to Netlify

Deploy to Vercel
bash
npm install -g vercel
vercel

### 🤝 Contributing

We welcome contributions! Please follow these steps:

Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a pull request

### Development Guidelines

Follow React best practices

Use meaningful component and variable names

Ensure responsive design

Maintain dark mode compatibility

Test across different browsers

### 🙏 Acknowledgments

Fake Store API for providing product data

Material-UI for beautiful components

React Icons for icon library

### 📞 Support

If you have any questions or need help, please:

Check the Issues page

Create a new issue with detailed description

Contact us at: <your-email@example.com>

Happy Shopping! 🎉

Made with ❤️ using React & Redux
