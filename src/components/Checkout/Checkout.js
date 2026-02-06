import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import logo from '../../assets/waseeny-logo.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [addressSelected, setAddressSelected] = useState(false);

  const handleProceed = () => {
    navigate('/payment');
  };

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <div className="checkout-header-left">
          <img src={logo} alt="Waseeny" className="logo-image-small" />
          <h1 className="checkout-title">Secure Checkout</h1>
        </div>
        <div className="checkout-header-right">
          <button className="help-btn-checkout">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#666" strokeWidth="2"/>
              <text x="10" y="14" textAnchor="middle" fill="#666" fontSize="12" fontWeight="700">?</text>
            </svg>
            Help
          </button>
          <button className="profile-btn-checkout">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="#666" strokeWidth="2"/>
              <path d="M3 18C3 14 6 12 10 12C14 12 17 14 17 18" stroke="#666" strokeWidth="2"/>
            </svg>
            Name...
          </button>
        </div>
      </header>

      <div className="checkout-content">
        <div className="checkout-main">
          {!addressSelected ? (
            <div className="address-selection-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#000"/>
                  </svg>
                </div>
                <div className="section-info">
                  <h2 className="section-title-checkout">Select delivery address</h2>
                  <p className="section-subtitle-checkout">You have a saved address in this location</p>
                </div>
              </div>

              <div className="add-address-card">
                <div className="add-address-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/>
                  </svg>
                  <h3 className="add-address-title">Add New Address</h3>
                </div>
                <p className="add-address-text">123 LIG load near 12dwsa</p>
                <button className="add-address-btn" onClick={() => setAddressSelected(true)}>Add</button>
              </div>
            </div>
          ) : (
            <>
              <div className="address-confirmed-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#000"/>
                    </svg>
                  </div>
                  <h2 className="section-title-confirmed">delivery address</h2>
                  <div className="check-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#48C479"/>
                      <path d="M6 10L9 13L14 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="address-details">
                  <h3 className="address-type">Other</h3>
                  <p className="address-text">123 indra Nagar, loknayak Nagar,</p>
                  <p className="address-text">Madhya Pradesh 452002</p>
                  <p className="delivery-time-text">30 mint.</p>
                </div>

                <button className="change-address-btn">CHANGE</button>
              </div>

              <div className="payment-section">
                <div className="section-header">
                  <div className="section-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#000" strokeWidth="2"/>
                      <path d="M2 10H22" stroke="#000" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h2 className="section-title-payment">Choose payment methed</h2>
                </div>

                <button className="proceed-to-pay-btn" onClick={handleProceed}>
                  Proceed to Pay
                </button>
              </div>
            </>
          )}
        </div>

        <div className="checkout-sidebar">
          <div className="order-summary-card">
            <div className="restaurant-info-checkout">
              <div className="restaurant-image-checkout"></div>
              <div className="restaurant-details-checkout">
                <h3 className="restaurant-name-checkout">Pizza Hut</h3>
                <p className="restaurant-location-checkout">Lig road</p>
              </div>
            </div>

            <div className="order-item">
              <div className="item-details">
                <span className="item-name">Pizza Hute Cheese 200g</span>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <span className="item-price">$240.00</span>
            </div>

            <div className="bill-details">
              <h3 className="bill-title">Bill Details</h3>
              
              <div className="bill-row">
                <span className="bill-label">Subtotal</span>
                <span className="bill-value">$300.00</span>
              </div>
              
              <div className="bill-row">
                <span className="bill-label">Standard Delivery</span>
                <span className="bill-value free">Free</span>
              </div>
              
              <div className="bill-row">
                <span className="bill-label">Service Fee</span>
                <span className="bill-value">$5.00</span>
              </div>
              
              <div className="bill-row discount">
                <span className="bill-label">Offer Applied<br/><span className="discount-percent">10% Off</span></span>
                <span className="bill-value discount-value">-$20.00</span>
              </div>
              
              <div className="bill-total">
                <span className="total-label">Grand Total</span>
                <span className="total-value">$240.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
