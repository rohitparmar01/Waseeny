import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderDetails.css';
import logo from '../../assets/waseeny-logo.png';

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="order-details-container">
      <header className="details-header">
        <div className="details-header-left">
          <img src={logo} alt="Waseeny" className="logo-image-small" />
          <h1 className="details-title">Secure Checkout</h1>
        </div>
        <div className="details-header-right">
          <button className="help-btn-details">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#666" strokeWidth="2"/>
            </svg>
            Help
          </button>
          <button className="profile-btn-details">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="4" stroke="#666" strokeWidth="2"/>
              <path d="M3 18C3 14 6 12 10 12C14 12 17 14 17 18" stroke="#666" strokeWidth="2"/>
            </svg>
            Name...
          </button>
        </div>
      </header>

      <div className="details-content">
        <div className="details-card">
          <div className="restaurant-header-details">
            <div className="back-button" onClick={() => navigate(-1)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16L6 10L12 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="restaurant-info-details">
              <h2 className="restaurant-name-details">Cellar Door Restaurant</h2>
              <p className="restaurant-category-details">Pizza, Italian,Fast Food</p>
              <button className="call-now-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3C2 2.4 2.4 2 3 2H5.5L6.5 5L5 6C6 8 8 10 10 11L11 9.5L14 10.5V13C14 13.6 13.6 14 13 14C7.5 14 2 8.5 2 3Z" fill="#EF4444"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>

          <div className="preparing-alert">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 6V10C3 14 10 18 10 18C10 18 17 14 17 10V6L10 2Z" fill="#FF9800"/>
            </svg>
            <span>Your food is being prepared fresh!</span>
          </div>

          <div className="order-items-section">
            <h3 className="items-title">Items (3)</h3>
            
            <div className="item-entry">
              <div className="item-image-detail"></div>
              <div className="item-info-detail">
                <h4 className="item-name-detail">6 pcs chicken Wings</h4>
                <p className="item-variant">Original</p>
              </div>
              <span className="item-price-detail">₹750.0</span>
            </div>

            <div className="item-entry">
              <div className="item-image-detail"></div>
              <div className="item-info-detail">
                <h4 className="item-name-detail">Margherita Pizza</h4>
                <p className="item-variant">Regular</p>
              </div>
              <span className="item-price-detail">₹750.0</span>
            </div>

            <div className="item-entry">
              <div className="item-image-detail"></div>
              <div className="item-info-detail">
                <h4 className="item-name-detail">Margherita Pizza</h4>
                <p className="item-variant">Regular</p>
              </div>
              <span className="item-price-detail">₹750.0</span>
            </div>
          </div>

          <div className="bill-details-section">
            <h3 className="bill-details-title">Bill Details</h3>
            
            <div className="bill-detail-row">
              <span>Subtotal</span>
              <span>$300.00</span>
            </div>
            
            <div className="bill-detail-row">
              <span>Standard Delivery</span>
              <span className="free-text">Free</span>
            </div>
            
            <div className="bill-detail-row">
              <span>Service Fee</span>
              <span>$5.00</span>
            </div>
            
            <div className="bill-detail-row discount-row">
              <div>
                <div>Grand Total</div>
                <div className="coupon-applied">Coupon Applied - FLAT20</div>
              </div>
              <div className="discount-amount">
                <div>$240.00</div>
                <div className="saved-amount">-$20.00</div>
              </div>
            </div>
            
            <div className="bill-total-row">
              <span>Paid</span>
              <span className="paid-amount">$240.00</span>
            </div>

            <div className="savings-banner">
              <span className="hooray-text">Hooray!</span>
              <span className="savings-text">You saved $20.00 on this order</span>
            </div>
          </div>

          <div className="delivery-address-section">
            <h3 className="delivery-address-title">Delivering Address</h3>
            <p className="address-line">Jetty Point – Gate No. 2, Marina</p>
            <p className="address-line">Bay, New Delhi</p>
            <button className="track-order-btn">Track Order</button>
          </div>

          <div className="order-id-section">
            <h3 className="order-id-title">Order ID</h3>
            <p className="order-id-value">#7892020189</p>
          </div>

          <div className="payment-method-section">
            <h3 className="payment-method-title">Payment Method</h3>
            <p className="payment-method-value">Via Credit Card</p>
          </div>

          <div className="payment-time-section">
            <h3 className="payment-time-title">Payment Time & Date</h3>
            <p className="payment-time-value">On 24, May asat 11:59 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
