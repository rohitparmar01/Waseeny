import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PizzaListing.css';
import logo from '../../assets/waseeny-logo.png';

const PizzaListing = () => {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: 'Pizza Hut',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Pizzas',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
    },
    {
      id: 2,
      name: 'Theobroma',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Bakery, Desserts, Beverages',
      location: 'xyz Nagar',
      tag: '50% OFF',
    },
    {
      id: 3,
      name: 'Veg Darbar by Behrouz Biryani',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Biryani, North Indian,kebab...',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
    },
    {
      id: 4,
      name: 'Subway',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Sandwich, Salads, wrap',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
    },
  ];

  return (
    <div className="pizza-listing-container">
      <header className="pizza-header">
        <div className="header-left">
          <img src={logo} alt="Waseeny" className="logo-image" />
          <div className="header-other">
            <span className="other-text">Other</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <nav className="header-nav-pizza" aria-label="Pizza navigation">
          <button type="button" className="nav-item-pizza" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#333" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Search
          </button>
          <button type="button" className="nav-item-pizza" aria-label="Offers">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L10.5 6.5L15 6.5L11.5 9.5L13 14L9 11L5 14L6.5 9.5L3 6.5L7.5 6.5L9 2Z" stroke="#333" strokeWidth="1.5"/>
            </svg>
            Offers
          </button>
          <button type="button" className="nav-item-pizza" aria-label="Help">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#333" strokeWidth="1.5"/>
              <path d="M9 6V9L11 11" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Help
          </button>
          <button type="button" className="nav-item-pizza" aria-label="Sign in">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3" stroke="#333" strokeWidth="1.5"/>
              <path d="M3 16C3 13 5.5 11 9 11C12.5 11 15 13 15 16" stroke="#333" strokeWidth="1.5"/>
            </svg>
            Sign In
          </button>
          <button type="button" className="nav-item-pizza" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3L6 3L8 13L14 13" stroke="#333" strokeWidth="1.5"/>
              <circle cx="9" cy="15.5" r="1" fill="#333"/>
              <circle cx="13" cy="15.5" r="1" fill="#333"/>
            </svg>
            Cart
          </button>
        </nav>
      </header>

      <main className="pizza-main">
        <div className="pizza-title-section">
          <h1 className="pizza-title">Pizza</h1>
          <p className="pizza-subtitle">Cheesilicious pizzas to make every day extraordinary.</p>
        </div>

        <div className="pizza-filters">
          <button className="filter-btn">
            Filter
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M4 8H12M6 12H10" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="filter-btn">
            Sort By
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="filter-btn">10 Mins Delivery</button>
        </div>

        <div className="pizza-count">
          <h2>162 Restaurants to explore</h2>
        </div>

        <div className="pizza-restaurants-grid">
          {Array(4).fill(restaurants).flat().map((restaurant, index) => (
            <div key={index} className="pizza-restaurant-card" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
              <div className="pizza-restaurant-image">
                <div className="pizza-restaurant-tag">{restaurant.tag}</div>
              </div>
              <div className="pizza-restaurant-info">
                <h3 className="pizza-restaurant-name">{restaurant.name}</h3>
                <div className="pizza-restaurant-meta">
                  <span className="pizza-rating">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="5" fill="#48C479"/>
                    </svg>
                    {restaurant.rating}
                  </span>
                  <span className="pizza-separator">•</span>
                  <span className="pizza-time">{restaurant.time}</span>
                </div>
                <p className="pizza-restaurant-category">{restaurant.category}</p>
                <p className="pizza-restaurant-location">{restaurant.location}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PizzaListing;
