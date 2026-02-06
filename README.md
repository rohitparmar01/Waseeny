# Waseeny Food Delivery Application

A pixel-perfect implementation of the Waseeny food delivery platform built with React.

## Features

- **Authentication**: Login page with email/password and Google sign-in options
- **Home Page**: Browse food categories and discover restaurants
- **Restaurant Listings**: Browse restaurants by category (Pizza, etc.)
- **Restaurant Details**: View menu items and add to cart
- **Checkout Flow**: Address selection and order summary
- **Payment Options**: Multiple payment methods including UPI, cards, wallets, and COD
- **Order Tracking**: Real-time order status updates
- **Order Details**: Complete order information and history

## Tech Stack

- React 18.2.0
- React Router DOM 6.20.0
- CSS Modules (Vanilla CSS)
- Functional Components with Hooks

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Application Structure

```
src/
├── components/
│   ├── Login/
│   │   ├── Login.js
│   │   └── Login.css
│   ├── Home/
│   │   ├── Home.js
│   │   └── Home.css
│   ├── PizzaListing/
│   │   ├── PizzaListing.js
│   │   └── PizzaListing.css
│   ├── RestaurantDetail/
│   │   ├── RestaurantDetail.js
│   │   └── RestaurantDetail.css
│   ├── Checkout/
│   │   ├── Checkout.js
│   │   └── Checkout.css
│   ├── Payment/
│   │   ├── Payment.js
│   │   └── Payment.css
│   ├── OrderTracking/
│   │   ├── OrderTracking.js
│   │   └── OrderTracking.css
│   └── OrderDetails/
│       ├── OrderDetails.js
│       └── OrderDetails.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Routes

- `/` - Redirects to login
- `/login` - Login page
- `/home` - Home page with restaurant discovery
- `/pizza` - Pizza restaurant listings
- `/restaurant/:id` - Restaurant detail and menu
- `/checkout` - Checkout with address and order summary
- `/payment` - Payment method selection
- `/order-tracking` - Order tracking with status
- `/order-details/:id` - Detailed order information

## Design Implementation

This application is a pixel-perfect implementation of the provided Figma designs with:

- Exact color matching (#EF4444 for primary red, #48C479 for success green, etc.)
- Precise spacing and layout using Flexbox and CSS Grid
- Consistent typography and font weights
- Responsive design for desktop and mobile viewports
- Smooth transitions and hover effects
- SVG icons for consistent cross-browser rendering

## Usage

1. Start at the login page (`/login`)
2. Click "Get Started" or "Continue with Google" to authenticate
3. Browse restaurants on the home page
4. Click on a category (e.g., Pizza) to see filtered restaurants
5. Select a restaurant to view the menu
6. Add items to cart and click "View Cart"
7. Select delivery address in checkout
8. Choose payment method
9. Track your order status
10. View order details

## Color Palette

- Primary Red: #EF4444
- Success Green: #48C479
- Warning Orange: #FF9800
- Text Dark: #1a1a1a
- Text Medium: #666
- Text Light: #999
- Background: #fff
- Background Light: #f8f8f8
- Border: #e5e5e5

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images are represented with gradient placeholders
- Backend integration is not included (frontend only)
- Authentication is simulated (any credentials work)
- Order data is static for demonstration purposes
