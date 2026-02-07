import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/waseeny-logo.png';
import qrCode from '../../assets/qr-download.png';
import footerPlaceholder from '../../assets/footer-placeholder.png';

const Home = () => {
  const navigate = useNavigate();
  const categoryScrollRef = useRef(null);
  const langContainerRef = useRef(null);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('En');

  const categories = [
    { name: 'Salad', image: 'salad' },
    { name: 'chhole bhature', image: 'chole' },
    { name: 'Shake', image: 'shake' },
    { name: 'omelette', image: 'omelette' },
    { name: 'Rolls', image: 'rolls' },
    { name: 'Pizza', image: 'pizza' },
    { name: 'Burger', image: 'burger' },
    { name: 'Biryani', image: 'biryani' },
    { name: 'Pasta', image: 'pasta' },
    { name: 'Sandwich', image: 'sandwich' },
    { name: 'Dessert', image: 'dessert' },
    { name: 'Noodles', image: 'noodles' }
  ];

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = 400;
      categoryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const restaurants = [
    {
      id: 1,
      name: 'Pizza Hut',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Pizzas',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
      image: 'pizza-hut'
    },
    {
      id: 2,
      name: 'Theobroma',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Bakery, Desserts, Beverages',
      location: 'xyz Nagar',
      tag: '50% OFF',
      image: 'theobroma'
    },
    {
      id: 3,
      name: 'Veg Darbar by Behrouz Biryani',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Biryani, North Indian,kebab...',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
      image: 'veg-darbar'
    },
    {
      id: 4,
      name: 'Subway',
      rating: '4.1',
      time: '20-25 min.',
      category: 'Sandwich, Salads, wrap',
      location: 'xyz Nagar',
      tag: 'ITEMS AT ₹59',
      image: 'subway'
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-logo">
          <img src={logo} alt="Waseeny" className="logo-image" />
        </div>

        <div className="header-location">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2C6.067 2 4.5 3.567 4.5 5.5C4.5 8.5 8 14 8 14C8 14 11.5 8.5 11.5 5.5C11.5 3.567 9.933 2 8 2ZM8 7C7.172 7 6.5 6.328 6.5 5.5C6.5 4.672 7.172 4 8 4C8.828 4 9.5 4.672 9.5 5.5C9.5 6.328 8.828 7 8 7Z" fill="#EF4444"/>
          </svg>
          <span className="location-label">Setup your precise location</span>
          <button className="location-dropdown">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="header-search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5"/>
            <path d="M12.5 12.5L16 16" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search for restaurant and food" />
        </div>

        <div className="header-lang" ref={langContainerRef}>
          <span className="lang-button" onClick={() => setLangOpen(v => !v)}>{selectedLang}</span>
          {langOpen && (
            <div className="lang-dropdown">
              <button className="lang-option" onClick={() => { setSelectedLang('German'); setLangOpen(false); }}>German</button>
              <button className="lang-option" onClick={() => { setSelectedLang('Arabic'); setLangOpen(false); }}>Arabic</button>
            </div>
          )}
          <button className="profile-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="#333" strokeWidth="1.5"/>
              <path d="M4 20C4 16 7.5 14 12 14C16.5 14 20 16 20 20" stroke="#333" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-cards-container">
          <div className="hero-card-main">
            <div className="hero-content">
              <div className="hero-icon-wrapper">
                <div className="hero-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M8 12C8 12 8 4 20 4C32 4 32 12 32 12L30 20H10L8 12Z" fill="white"/>
                    <rect x="10" y="20" width="20" height="8" rx="1" fill="white"/>
                    <path d="M15 2C15 2 15 6 20 6C25 6 25 2 25 2" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="1.5" fill="white"/>
                    <circle cx="28" cy="10" r="1.5" fill="white"/>
                  </svg>
                </div>
                <h1 className="hero-title">Food</h1>
              </div>
              <p className="hero-subtitle">Order food from your favourite restaurants</p>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <section className="category-section">
          <h2 className="section-title">What's on your mind ?</h2>
          <div className="category-wrapper">
            <button className="category-scroll-btn left" onClick={() => scrollCategories('left')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="category-grid" ref={categoryScrollRef}>
              {categories.map((category, index) => (
                <div key={index} className="category-card" onClick={() => index === 5 && navigate('/pizza')}>
                  <div className="category-image">
                    <div className="category-placeholder"></div>
                  </div>
                  <p className="category-name">{category.name}</p>
                </div>
              ))}
            </div>
            <button className="category-scroll-btn right" onClick={() => scrollCategories('right')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>

        <section className="best-outlets-section">
          <h2 className="section-title">Best Food Outlets Near</h2>
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                <div className="restaurant-image">
                  <div className="restaurant-tag">{restaurant.tag}</div>
                </div>
                <div className="restaurant-info">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <div className="restaurant-meta">
                    <span className="rating">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="#48C479"/>
                      </svg>
                      {restaurant.rating}
                    </span>
                    <span className="separator">•</span>
                    <span className="time">{restaurant.time}</span>
                  </div>
                  <p className="restaurant-category">{restaurant.category}</p>
                  <p className="restaurant-location">{restaurant.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="popular-section">
          <div className="tabs">
            <button className="tab active">Order Online</button>
            <button className="tab">Dineout</button>
          </div>
          
          <h2 className="section-title">Popular Order Food Online Restaurants Near me</h2>
          
          <div className="sort-filter">
            <button className="sort-button">
              Sort By
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="restaurant-grid">
            {[...restaurants, ...restaurants].map((restaurant, index) => (
              <div key={index} className="restaurant-card" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                <div className="restaurant-image">
                  <div className="restaurant-tag">{restaurant.tag}</div>
                </div>
                <div className="restaurant-info">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <div className="restaurant-meta">
                    <span className="rating">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="6" fill="#48C479"/>
                      </svg>
                      {restaurant.rating}
                    </span>
                    <span className="separator">•</span>
                    <span className="time">{restaurant.time}</span>
                  </div>
                  <p className="restaurant-category">{restaurant.category}</p>
                  <p className="restaurant-location">{restaurant.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="show-more">
            <button className="btn-show-more">
              SHOW MORE
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>

        <section className="info-section">
          <h2 className="info-title">Discover Delicious Food Delights Online Near You</h2>
          <p className="info-text">
            Craving something delicious? Discover a world of culinary delights right at your fingertips with food delivery near me! 
            Whether you're in the mood for a hearty burger, fresh sushi, or a comforting bowl of pasta, there's no shortage of options to 
            satisfy your cravings. The convenience of online food delivery near me allows you to explore various restaurants and cuisines 
            without leaving the comfort of your home...
          </p>
          <button className="btn-see-more">
            See More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3.5 5.5L7 9L10.5 5.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerPlaceholder} alt="Waseeny" className="footer-logo-image" />
            </div>
            <h3 className="footer-cta-title">Get the Waseeny App now!</h3>
            <p className="footer-cta-text">For best offers and discounts curated specially for you.</p>
          </div>

          <div className="footer-right">
            <img src={qrCode} alt="Scan to Download" className="qr-code-image" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
