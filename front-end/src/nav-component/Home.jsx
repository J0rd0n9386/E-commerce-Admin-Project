import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../assets/image.jpg";
function Home() {
  const navigate = useNavigate();

  const categories = [
    { icon: "📱", label: "Mobiles", bg: "#e3f2fd" },
    { icon: "👗", label: "Fashion", bg: "#fce4ec" },
    { icon: "💻", label: "Electronics", bg: "#f3e5f5" },
    { icon: "🏠", label: "Home", bg: "#e8f5e9" },
    { icon: "🍳", label: "Kitchen", bg: "#fff8e1" },
    { icon: "📚", label: "Books", bg: "#e0f7fa" },
    { icon: "🎮", label: "Gaming", bg: "#fbe9e7" },
    { icon: "🚴", label: "Sports", bg: "#f1f8e9" },
  ];

  const deals = [
    {
      icon: "📱",
      name: "Redmi Note 13 Pro",
      price: "₹17,999",
      original: "₹24,999",
      discount: "28% off",
      rating: "4.5",
    },
    {
      icon: "🎧",
      name: "Sony WH-1000XM5",
      price: "₹22,990",
      original: "₹34,990",
      discount: "34% off",
      rating: "4.7",
    },
    {
      icon: "👟",
      name: "Nike Air Max",
      price: "₹4,499",
      original: "₹7,995",
      discount: "44% off",
      rating: "4.3",
    },
    {
      icon: "💻",
      name: "HP Laptop 15s",
      price: "₹42,990",
      original: "₹59,999",
      discount: "28% off",
      rating: "4.4",
    },
    {
      icon: "⌚",
      name: "Apple Watch SE",
      price: "₹24,900",
      original: "₹29,900",
      discount: "17% off",
      rating: "4.6",
    },
    {
      icon: "📷",
      name: "Canon EOS M50",
      price: "₹38,995",
      original: "₹52,995",
      discount: "26% off",
      rating: "4.5",
    },
  ];

  return (
    <div className="fk-page">
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-badge">BIG BILLION DAYS</div>
          <h1 className="hero-title">India's Biggest Sale</h1>
          <p className="hero-sub">
            Up to 80% off on Electronics, Fashion & more
          </p>

          <div>
            <button onClick={() => navigate("/productlist")}
              className="button ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="fk-main">
        {/* Offer strip */}
        <div className="offer-strip">
          🔥 Flash Deal ends in 02:14:33
          <span>USE CODE: SAVE200</span>
        </div>

        {/* Categories */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-title">Shop by Category</span>
            <span className="section-link">View All →</span>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <div className="cat-item" key={c.label}>
                <div className="cat-img" style={{ background: c.bg }}>
                  {c.icon}
                </div>
                <div className="cat-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deals */}
        <div className="section-card">
          <div className="section-header">
            <span className="section-title">Deals of the Day</span>
            <span className="section-link">See All →</span>
          </div>
          <div className="deals-grid">
            {deals.map((d) => (
              <div className="deal-card" key={d.name}>
                <div className="deal-img">{d.icon}</div>
                <div className="deal-name">{d.name}</div>
                <div>
                  <span className="deal-price">{d.price}</span>
                  <span className="deal-original">{d.original}</span>
                </div>
                <div className="deal-discount">{d.discount}</div>
                <div className="deal-rating">★ {d.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
