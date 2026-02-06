import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logoFavicon from './assets/waseeny-logo.png';

// create a properly sized favicon from the bundled logo so it fills the icon area
const createSizedFavicon = async (src, size = 64) => {
  try {
    const img = new Image();
    img.src = src;
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
    });

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // fill transparent background
    ctx.clearRect(0, 0, size, size);

    // draw the image covering the canvas while preserving aspect ratio
    const ratio = Math.max(size / img.width, size / img.height);
    const w = img.width * ratio;
    const h = img.height * ratio;
    const x = (size - w) / 2;
    const y = (size - h) / 2;
    ctx.drawImage(img, x, y, w, h);

    const dataUrl = canvas.toDataURL('image/png');

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = dataUrl;
    // also set sizes attribute for clarity
    link.sizes = `${size}x${size}`;
  } catch (e) {
    // fallback to using the imported asset directly
    try {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = src;
    } catch (err) {
      // ignore
    }
  }
};

createSizedFavicon(logoFavicon, 64);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
