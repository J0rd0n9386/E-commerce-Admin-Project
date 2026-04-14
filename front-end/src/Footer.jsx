// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">⬡</span> Nexus
          </div>
          <p className="footer-tagline">
            India's smartest shopping destination. Discover, compare & buy — all in one place.
          </p>
          <div className="footer-socials">
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">▶</a>
            <a href="#">f</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <a href="#">Electronics</a>
          <a href="#">Fashion</a>
          <a href="#">Home & Kitchen</a>
          <a href="#">Sports</a>
          <a href="#">Books</a>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <a href="#">My Orders</a>
          <a href="#">Wishlist</a>
          <a href="#">Profile</a>
          <a href="#">Nexus Plus</a>
          <a href="#">Rewards</a>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <a href="#">FAQ</a>
          <a href="#">Returns</a>
          <a href="#">Track Order</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-badges">
          <span>🔒 Secure Payments</span>
          <span>🚚 Free Delivery ₹499+</span>
          <span>🔄 Easy Returns</span>
          <span>⭐ 2M+ Happy Customers</span>
        </div>
        <p className="footer-copy">© 2025 Nexus Shopping Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;