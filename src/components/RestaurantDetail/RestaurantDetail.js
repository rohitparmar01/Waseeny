import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantDetail.css';
import logo from '../../assets/waseeny-logo.png';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Chicken wings',
      price: '₹23',
      description: 'Signature chocsochip brownias topped with \'For You\' and \'For Me\' messages, the perfect pair to share with someone you love! Allergens - Milk, Soy.',
      image: 'chicken-wings'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: '₹299',
      description: 'Classic delight with 100% real mozzarella cheese on a signature pan base. Perfect for pizza lovers!',
      image: 'pizza'
    },
    {
      id: 3,
      name: 'Burger Combo',
      price: '₹189',
      description: 'Juicy chicken burger served with crispy fries and a refreshing beverage. Great value combo!',
      image: 'burger'
    },
    {
      id: 4,
      name: 'Pasta Alfredo',
      price: '₹249',
      description: 'Creamy Alfredo sauce with perfectly cooked pasta, topped with parmesan cheese and herbs.',
      image: 'pasta'
    },
    {
      id: 5,
      name: 'Grilled Sandwich',
      price: '₹139',
      description: 'Toasted sandwich with fresh vegetables and cheese, served hot with tangy dipping sauce.',
      image: 'sandwich'
    },
    {
      id: 6,
      name: 'Chocolate Brownie',
      price: '₹99',
      description: 'Warm, gooey chocolate brownie served with vanilla ice cream. Perfect dessert choice!',
      image: 'brownie'
    },
    {
      id: 7,
      name: 'Caesar Salad',
      price: '₹199',
      description: 'Fresh romaine lettuce with caesar dressing, croutons, and parmesan cheese. Healthy and tasty!',
      image: 'salad'
    },
    {
      id: 8,
      name: 'French Fries',
      price: '₹89',
      description: 'Crispy golden fries seasoned to perfection. Great as a side or snack!',
      image: 'fries'
    },
    {
      id: 9,
      name: 'Garlic Bread',
      price: '₹119',
      description: 'Freshly baked bread with garlic butter and herbs. Perfect appetizer or side dish!',
      image: 'garlic-bread'
    },
    {
      id: 10,
      name: 'Cold Coffee',
      price: '₹149',
      description: 'Rich and creamy iced coffee topped with whipped cream. Perfect refreshment for coffee lovers!',
      image: 'coffee'
    }
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    setCartVisible(true);
  };

  const handleViewCart = () => {
    navigate('/checkout');
  };

  return (
    <div className="restaurant-detail-container">
      <header className="restaurant-header">
        <div className="header-left-detail">
          <img src={logo} alt="Waseeny" className="logo-image" />
          <div className="header-location-detail">
            <span className="location-text">Other</span>
            <span className="location-address">123, indra Nagar, loknayak, nagar</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <nav className="header-nav-detail" aria-label="Restaurant navigation">
          <button type="button" className="nav-item-detail" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#333" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Search
          </button>
          <button type="button" className="nav-item-detail" aria-label="Offers">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L10.5 6.5L15 6.5L11.5 9.5L13 14L9 11L5 14L6.5 9.5L3 6.5L7.5 6.5L9 2Z" stroke="#333" strokeWidth="1.5"/>
            </svg>
            Offers
          </button>
          <button type="button" className="nav-item-detail" aria-label="Help">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#333" strokeWidth="1.5"/>
              <path d="M9 6V9L11 11" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Help
          </button>
          <button type="button" className="nav-item-detail" aria-label="Sign in">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3" stroke="#333" strokeWidth="1.5"/>
              <path d="M3 16C3 13 5.5 11 9 11C12.5 11 15 13 15 16" stroke="#333" strokeWidth="1.5"/>
            </svg>
            Sign In
          </button>
          <button type="button" className="nav-item-detail" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3L6 3L8 13L14 13" stroke="#333" strokeWidth="1.5"/>
              <circle cx="9" cy="15.5" r="1" fill="#333"/>
              <circle cx="13" cy="15.5" r="1" fill="#333"/>
            </svg>
            Cart
          </button>
        </nav>
      </header>

      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator"> / </span>
          <span>City name</span>
          <span className="breadcrumb-separator"> / </span>
          <span className="breadcrumb-current">Pizza Hut</span>
        </div>
      </div>

      <div className="restaurant-content">
        <div className="restaurant-banner"></div>
        
        <div className="restaurant-hero">
          <h1 className="restaurant-name-title">Pizza Hut</h1>
          
          <div className="restaurant-tabs">
            <button className="restaurant-tab active">Order Online</button>
            <button className="restaurant-tab">Dineout</button>
          </div>

          <div className="restaurant-info-card">
            <div className="delivery-info">
              <h3 className="delivery-time">Delivery 25 - 40 min</h3>
              <p className="delivery-promo">Free delivery for first order</p>
              <p className="minimum-order">Min order - ₹119.00</p>
            </div>
            <button className="change-btn">Change</button>
          </div>
        </div>

        <div className="restaurant-main">
          <div className="menu-section">
            <div className="deals-section">
              <h2 className="section-heading">Deals For You</h2>
              <div className="deal-card">
                <div className="deal-icon">%</div>
                <div className="deal-info">
                  <h3 className="deal-title">Extra ₹20 Off</h3>
                  <p className="deal-subtitle">No Code Required | Above ₹99</p>
                </div>
              </div>
            </div>

            <div className="search-section">
              <input 
                type="text" 
                className="search-dishes" 
                placeholder="Search For Dishes"
              />
            </div>

            <div className="menu-items-section">
              <h2 className="section-heading">Popular</h2>
              <p className="section-subtitle">Most Order right now</p>

              <div className="menu-items-list">
                {menuItems.map((item) => (
                  <div key={item.id} className="menu-item-card">
                    <div className="menu-item-info">
                      <h3 className="menu-item-name">{item.name}</h3>
                      <p className="menu-item-price">{item.price}</p>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                    <div className="menu-item-image-container">
                      <div className="menu-item-image">
                        <div className="favorite-btn">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 14L7 13C3.5 9.8 1 7.5 1 4.8C1 2.6 2.6 1 4.8 1C6.1 1 7.4 1.6 8 2.6C8.6 1.6 9.9 1 11.2 1C13.4 1 15 2.6 15 4.8C15 7.5 12.5 9.8 9 13L8 14Z" stroke="#666" strokeWidth="1.5" fill="none"/>
                          </svg>
                        </div>
                        {/* ADD button positioned relative to image */}
                        <button className="add-btn" onClick={handleAddToCart}>ADD</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartVisible && (
        <div className="cart-footer">
          <div className="cart-footer-content">
            <div className="cart-info">
              <span className="cart-count">{cartCount} Added</span>
            </div>
            <button className="view-cart-btn" onClick={handleViewCart}>
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
