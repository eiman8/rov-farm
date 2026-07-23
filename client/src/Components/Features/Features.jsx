import "./Features.css";
import { HeartHandshake, Leaf, Milk, Beef } from "lucide-react";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-heading">
          <span className="section-tag">Why Choose Us</span>
          <h2>
            <span>Fresh Dairy Starts</span>
            <span>
              With{" "}
              <span className="features-heading-highlight">
                Healthy Animals
              </span>
            </span>
          </h2>
          <p className="section-description">
            At R.O. Valerio Dairy Farm, we are committed to raising healthy
            livestock, producing quality dairy products, and practicing
            sustainable farming for our community.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">
              <Beef size={34} />
            </div>
            <h4>Healthy Livestock</h4>
            <p>
              Our cattle and goats are raised with proper nutrition, clean
              facilities, and attentive care to ensure their health and
              well-being.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <Milk size={34} />
            </div>

            <h4>Fresh Dairy Products</h4>
            <p>
              We produce fresh, high-quality dairy products using clean,
              responsible farming practices and a commitment to quality.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <Leaf size={34} />
            </div>

            <h4>Sustainable Farming</h4>
            <p>
              We embrace sustainable farming practices that care for our
              animals, protect the environment, and support future generations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
