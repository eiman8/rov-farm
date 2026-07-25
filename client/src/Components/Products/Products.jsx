// import "./Products.css";

// const Products = () => {
//   return (
//     <section className="products">
//       <div className="container">
//         <div className="products-heading">
//           <span className="section-tag">WHAT WE OFFER</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

import "./Products.css";

const Products = () => {
  return (
    <section className="products section">
      <div className="container">
        {/* Section Heading */}

        <div className="products-header">
          <span className="section-tag">What We Offer</span>

          <h2>
            <span>Fresh Dairy Products, </span>
            <span>Farm Goods & </span>
            <span className="features-heading-highlight">
              Healthy Livestock
            </span>
          </h2>

          <p>
            From nutritious dairy to farm essentials and healthy livestock,
            everything we offer reflects our commitment to quality,
            sustainability, and responsible farming.
          </p>
        </div>

        {/* Showcase */}

        <div className="products-showcase">
          <div className="product-image">
            {/* <img src={goatMilk} alt="" /> */}
          </div>

          {/* Right */}

          <div className="products-sidebar">
            <div className="product-card">
              <h3>Fresh Goat Milk</h3>

              <p>
                Pure, fresh goat milk produced daily from healthy,
                well-cared-for goats.
              </p>

              <ul>
                <li>Rich in Calcium</li>
                <li>High in Protein</li>
                <li>Easy to Digest</li>
              </ul>

              <button className="btn-primary">Inquire Now</button>
            </div>

            <div className="products-menu">
              <button className="active">Fresh Goat Milk</button>

              <button>Fresh Cattle Milk</button>

              <button>Goat Milk Ice Cream</button>

              <button>Organic Milk Soap</button>

              <button>Corn Silage</button>

              <button>Live Goats & Cattle</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
