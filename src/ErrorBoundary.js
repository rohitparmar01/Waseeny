import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production, send error to monitoring service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: 40, textAlign: 'center'}}>
          <h2>Something went wrong.</h2>
          <p>We're working to fix it. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
