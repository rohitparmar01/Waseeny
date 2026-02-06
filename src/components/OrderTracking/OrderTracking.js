import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderTracking.css';
import logo from '../../assets/waseeny-logo.png';

const OrderTracking = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: '7892020189',
      restaurant: 'Cellar Door Restaurant',
      category: 'Pizza, Italian,Fast Food',
      items: ['6 pcs chicken ...', 'Margherita Pizza'],
      moreItems: 2,
      date: '24, May,',
      time: '11:59PM',
      status: 'Preparing',
      statusColor: 'orange',
      total: '$240.00'
    },
    {
      id: '7892020189',
      restaurant: 'Cellar Door Restaurant',
      category: 'Pizza, Italian,Fast Food',
      items: ['6 pcs chicken ...', 'Margherita Pizza'],
      moreItems: 2,
      date: '24, May,',
      time: '11:59PM',
      status: 'Ongoing',
      statusColor: 'red',
      total: '$240.00'
    }
  ];

  return (
    <div className="order-tracking-container">
      <header className="tracking-header">
        <div className="tracking-header-left">
          <img src={logo} alt="Waseeny" className="logo-image-small" />
          <h1 className="tracking-title">Secure Checkout</h1>
        </div>
        <div className="tracking-header-right">
          <button className="help-btn-tracking">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#666" strokeWidth="2"/>
            </svg>
            Help
          </button>
          <button className="profile-btn-tracking">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="#666" strokeWidth="2"/>
              <path d="M3 18C3 14 6 12 10 12C14 12 17 14 17 18" stroke="#666" strokeWidth="2"/>
            </svg>
            Name...
          </button>
        </div>
      </header>

      <div className="tracking-content">
        <div className="progress-stepper">
          <div className="step completed">
            <div className="step-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="6" y="8" width="16" height="14" rx="1" stroke="#fff" strokeWidth="2"/>
                <path d="M8 12H20" stroke="#fff" strokeWidth="2"/>
                <circle cx="12" cy="16" r="1" fill="#fff"/>
              </svg>
            </div>
          </div>
          <div className="step-line completed"></div>
          <div className="step active">
            <div className="step-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 6L18 10H16V18H12V10H10L14 6Z" fill="#fff"/>
                <rect x="8" y="20" width="12" height="2" rx="1" fill="#fff"/>
              </svg>
            </div>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="11" r="3" stroke="#999" strokeWidth="2"/>
                <path d="M14 14L11 22L14 20L17 22L14 14Z" stroke="#999" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="8" y="10" width="12" height="10" rx="1" stroke="#999" strokeWidth="2"/>
                <path d="M10 13H18M10 16H15" stroke="#999" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card" onClick={() => navigate(`/order-details/${order.id}`)}>
              <div className="order-header-item">
                <div>
                  <h3 className="order-restaurant">{order.restaurant}</h3>
                  <p className="order-category">{order.category}</p>
                </div>
                <button className="order-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L13 10L7 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="order-items">
                {order.items.map((item, i) => (
                  <div key={i} className="order-item-row">
                    <div className="item-image-small"></div>
                    <span className="item-name-small">{item}</span>
                  </div>
                ))}
                {order.moreItems > 0 && (
                  <span className="more-items">+{order.moreItems} More</span>
                )}
              </div>

              <div className="order-footer-item">
                <div className="order-datetime">
                  <span>Order placed on {order.date}</span>
                  <span className="order-time">{order.time}</span>
                </div>
                <div className="order-total">{order.total}</div>
              </div>

              <div className={`order-status ${order.statusColor}`}>
                {order.status}
              </div>
            </div>
          ))}
        </div>

        <button className="reorder-btn">Reorder</button>
      </div>
    </div>
  );
};

export default OrderTracking;
