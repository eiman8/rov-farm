import "./Hero.css";
import heroImage from "../../assets/hero.png";
import { CircleCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="R.O. Val Dairy Farm" className="hero-bg" />
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <CircleCheck className="badge-check" size={24} /> 100% Organic Goat
            & Cattle Farm
          </div>
          <h1>
            <span>Pure Organic Dairy</span>
            <span>From Our Farm</span>
            <span>To Your Family</span>
          </h1>
          <p>
            Fresh, nutritious, and 100% organic dairy products from healthy
            cattle and goats raised with sustainable farming practices.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Products</button>
            <button className="btn-secondary">Learn More </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
