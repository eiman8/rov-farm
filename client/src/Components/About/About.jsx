import "./About.css";
import { useEffect, useState } from "react";

import farm1 from "../../assets/about/about-img1.jpg";
import farm2 from "../../assets/about/about-img2.jpg";
import farm3 from "../../assets/about/about-img3.jpg";

const slides = [
  {
    image: farm1,
    title: "Caring for Healthy Livestock",
    description:
      "Every healthy animal reflects our commitment to responsible farming and ethical animal care.",
  },
  {
    image: farm2,
    title: "Training Future Dairy Farmers",
    description:
      "Through TESDA NC II training and OJT opportunities, we equip future farmers with practical knowledge and hands-on experience.",
  },
  {
    image: farm3,
    title: "Recognized Farm Excellence",
    description:
      "Recognition that reflects our dedication to quality dairy farming, education, and sustainable agricultural practices.",
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about" id="about">
      <div className="container about-container">
        {/* LEFT */}

        <div className="about-content">
          <span className="section-tag">OUR MISSION</span>

          <h2>
            Nurturing <span>Healthy Livestock.</span>
            <br />
            Empowering Future <span>Dairy Farmers.</span>
          </h2>

          <p>
            At R.O. Valerio Dairy Farm, we believe exceptional dairy begins with
            healthy livestock, responsible farming, and genuine care for every
            animal. Beyond producing fresh, organic dairy, we proudly prepare
            the next generation through TESDA NC II training and hands-on OJT
            opportunities, helping strengthen the future of Philippine
            agriculture.
          </p>
          <a href="#products" className="about-link">
            Learn More →
          </a>
        </div>

        {/* RIGHT */}

        <div className="about-showcase">
          <div className="about-image">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={currentSlide === index ? "active" : ""}
              />
            ))}
          </div>

          <div className="about-story">
            <div className="story-content">
              <h3>{slides[currentSlide].title}</h3>

              <p>{slides[currentSlide].description}</p>
            </div>

            <div className="image-indicators">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={currentSlide === index ? "active" : ""}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
