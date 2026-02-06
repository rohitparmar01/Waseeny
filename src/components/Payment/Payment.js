import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import logo from '../../assets/waseeny-logo.png';

const Payment = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePayment = (method) => {
    setShowConfirmation(true);
    setTimeout(() => {
      navigate('/order-tracking');
    }, 2000);
  };

  return (
    <div className="payment-container">
      <header className="payment-header">
        <div className="payment-header-left">
          <img src={logo} alt="Waseeny" className="logo-image-small" />
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div>
            <h1 className="payment-title">Payment Options</h1>
            <p className="payment-subtitle">1 Items Total ₹831</p>
          </div>
        </div>
        <div className="payment-header-right">
          <button className="help-btn-payment">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#666" strokeWidth="2"/>
            </svg>
            Help
          </button>
          <button className="profile-btn-payment">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="#666" strokeWidth="2"/>
              <path d="M3 18C3 14 6 12 10 12C14 12 17 14 17 18" stroke="#666" strokeWidth="2"/>
            </svg>
            Name...
          </button>
        </div>
      </header>

      <div className="payment-content">
        <div className="delivery-summary">
          <h2 className="delivery-restaurant">Pizza Hut | <span className="delivery-label">Delivery In : 30 mint.</span></h2>
          <p className="delivery-address">Other | 123 indra Nagar, loknayak Nagar, Madhya Pradesh 452002.</p>
        </div>

        <div className="payment-methods">
          <div className="payment-section-group">
            <div className="payment-method-card">
              <div className="payment-method-icon upi">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="6" fill="#097939"/>
                  <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">UPI</text>
                </svg>
              </div>
              <div className="payment-method-info">
                <h3 className="payment-method-title">Pay by UPI App</h3>
              </div>
            </div>

            <div className="payment-option-detail">
              <button className="add-upi-btn">
                <span className="plus-icon">+</span>
                <div>
                  <h4 className="add-upi-title">Add New UPI ID</h4>
                  <p className="add-upi-subtitle">You need to have a registered UPI ID</p>
                </div>
              </button>
            </div>
          </div>

          <div className="payment-section-group">
            <div className="payment-method-card">
              <div className="payment-method-icon card">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="#000" strokeWidth="2"/>
                  <path d="M4 13H28" stroke="#000" strokeWidth="2"/>
                </svg>
              </div>
              <div className="payment-method-info">
                <h3 className="payment-method-title">Credit & Debit Card</h3>
              </div>
            </div>

            <div className="payment-option-detail">
              <button className="add-card-btn">
                <span className="plus-icon">+</span>
                <div>
                  <h4 className="add-card-title">Add New UPI ID</h4>
                  <p className="add-card-subtitle">Save & Pay via Cards</p>
                </div>
              </button>
            </div>
          </div>

          <div className="payment-section-group">
            <h3 className="section-group-title">More Payment Options</h3>

            <button className="payment-option-btn" onClick={() => handlePayment('wallet')}>
              <div className="option-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="6" width="20" height="16" rx="2" stroke="#000" strokeWidth="2"/>
                  <circle cx="18" cy="14" r="2" fill="#000"/>
                </svg>
              </div>
              <div className="option-info">
                <h4 className="option-title">Wallet</h4>
                <p className="option-subtitle">PhonePe, G Pay & More</p>
              </div>
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className="payment-option-btn" onClick={() => handlePayment('netbanking')}>
              <div className="option-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 12L14 4L24 12V22C24 23.1 23.1 24 22 24H6C4.9 24 4 23.1 4 22V12Z" stroke="#000" strokeWidth="2"/>
                </svg>
              </div>
              <div className="option-info">
                <h4 className="option-title">Net Banking</h4>
                <p className="option-subtitle">Select From a list Banks</p>
              </div>
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="payment-section-group">
            <h3 className="section-group-title">Pay on delivery</h3>

            <button className="payment-option-btn" onClick={() => handlePayment('cod')}>
              <div className="option-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <text x="14" y="18" textAnchor="middle" fill="#000" fontSize="18" fontWeight="700">₹</text>
                </svg>
              </div>
              <div className="option-info">
                <h4 className="option-title">Payh on Delivery ( Case / UPI)</h4>
                <p className="option-subtitle">Case on delivery is</p>
              </div>
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-modal-overlay">
          <div className="confirmation-modal">
            <div className="confirmation-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M30 50L25 55L20 50L15 55L20 60L25 55L30 50Z" fill="#EF4444"/>
                <path d="M40 45L35 50L30 45" fill="#EF4444"/>
                <path d="M50 50L45 55L40 50L35 55L40 60L45 55L50 50Z" fill="#EF4444"/>
                <circle cx="25" cy="35" r="2" fill="#EF4444"/>
                <circle cx="45" cy="30" r="2" fill="#EF4444"/>
                <circle cx="55" cy="45" r="2" fill="#EF4444"/>
                <path d="M40 25L35 35L30 28L25 35L30 45L40 40L45 35L40 25Z" fill="#EF4444"/>
                <path d="M45 35L50 40L55 35L50 28L45 35Z" fill="#EF4444"/>
              </svg>
            </div>
            <h2 className="confirmation-title">Order Confirmed</h2>
            <p className="confirmation-message">
              Your order has been successfully confirmed! We are currently processing it and will provide updates on the status shortly. Thank you for choosing us. We're committed to delivering your order with the utmost care and efficiency.
            </p>
            <div className="confirmation-id">ID : #7892020189</div>
            <button className="view-booking-btn" onClick={() => navigate('/order-tracking')}>
              View Booking Details
            </button>
            <button className="explore-menu-btn" onClick={() => navigate('/home')}>
              Explore Other Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
