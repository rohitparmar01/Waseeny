import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import PizzaListing from './components/PizzaListing/PizzaListing';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import OrderTracking from './components/OrderTracking/OrderTracking';
import OrderDetails from './components/OrderDetails/OrderDetails';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isAuthenticated, setIsAuthenticatedState] = useState(() => {
    try {
      return localStorage.getItem('waseeny_isAuthenticated') === 'true';
    } catch (e) {
      return false;
    }
  });

  // wrapper to persist auth state
  const setIsAuthenticated = (value) => {
    try {
      localStorage.setItem('waseeny_isAuthenticated', value ? 'true' : 'false');
    } catch (e) {
      // ignore storage errors
    }
    setIsAuthenticatedState(value);
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ErrorBoundary>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/pizza" element={isAuthenticated ? <PizzaListing /> : <Navigate to="/login" />} />
          <Route path="/restaurant/:id" element={isAuthenticated ? <RestaurantDetail /> : <Navigate to="/login" />} />
          <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
          <Route path="/payment" element={isAuthenticated ? <Payment /> : <Navigate to="/login" />} />
          <Route path="/order-tracking" element={isAuthenticated ? <OrderTracking /> : <Navigate to="/login" />} />
          <Route path="/order-details/:id" element={isAuthenticated ? <OrderDetails /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
