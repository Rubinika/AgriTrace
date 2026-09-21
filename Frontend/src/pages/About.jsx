function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <div className="about-badge">
            🌾 ABOUT AGRITRACE
          </div>

          <h1>
            Building a <span>Transparent</span>
            <br />
            Agricultural Future
          </h1>

          <p>
            AgriTrace is a blockchain-based agricultural supply
            chain platform designed to make every stage of a
            product journey transparent, secure and traceable.
          </p>

        </div>

        <div className="about-hero-icon">
          🌱
        </div>

      </section>


      {/* ABOUT INTRO */}
      <section className="about-intro">

        <div className="about-intro-card">

          <div className="about-big-icon">
            🔗
          </div>

          <div>

            <p className="about-label">
              OUR MISSION
            </p>

            <h2>
              From Farm to Consumer,
              <br />
              Every Step Matters
            </h2>

            <p className="about-text">
              Agricultural products pass through several stages
              before reaching consumers. AgriTrace records these
              stages digitally so participants can verify where
              a product came from, how it was handled and where
              it is going.
            </p>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="about-values">

        <div className="about-section-heading">

          <p>WHAT WE PROVIDE</p>

          <h2>
            One Platform. Complete Transparency.
          </h2>

        </div>


        <div className="about-value-grid">

          <div className="about-value-card">

            <div className="about-value-icon green">
              🔗
            </div>

            <h3>
              Blockchain Security
            </h3>

            <p>
              Supply chain information can be recorded
              securely to improve data integrity and
              transparency.
            </p>

          </div>


          <div className="about-value-card">

            <div className="about-value-icon blue">
              📱
            </div>

            <h3>
              Product Tracking
            </h3>

            <p>
              Track an agricultural batch through every
              stage from the farmer to the retailer.
            </p>

          </div>


          <div className="about-value-card">

            <div className="about-value-icon orange">
              👨‍🌾
            </div>

            <h3>
              Farmer Participation
            </h3>

            <p>
              Farmers can register their produce and
              create a traceable digital batch.
            </p>

          </div>


          <div className="about-value-card">

            <div className="about-value-icon purple">
              👁️
            </div>

            <h3>
              Consumer Transparency
            </h3>

            <p>
              Consumers can access product information
              and understand its journey through the
              supply chain.
            </p>

          </div>

        </div>

      </section>


      {/* SUPPLY CHAIN */}
      <section className="about-journey">

        <div className="about-section-heading">

          <p>THE AGRITRACE JOURNEY</p>

          <h2>
            How Agricultural Products Move
          </h2>

        </div>


        <div className="journey-container">

          <div className="journey-item">

            <div className="journey-number">
              01
            </div>

            <div className="journey-icon">
              👨‍🌾
            </div>

            <h3>Farmer</h3>

            <p>
              Produce registered
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-item">

            <div className="journey-number">
              02
            </div>

            <div className="journey-icon">
              📦
            </div>

            <h3>Collection</h3>

            <p>
              Batch verified
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-item">

            <div className="journey-number">
              03
            </div>

            <div className="journey-icon">
              🚚
            </div>

            <h3>Transport</h3>

            <p>
              Product moved
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-item">

            <div className="journey-number">
              04
            </div>

            <div className="journey-icon">
              🏭
            </div>

            <h3>Warehouse</h3>

            <p>
              Product stored
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-item">

            <div className="journey-number">
              05
            </div>

            <div className="journey-icon">
              🏪
            </div>

            <h3>Retailer</h3>

            <p>
              Product delivered
            </p>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section className="technology-section">

        <div className="technology-card">

          <div className="technology-icon">
            ⚙️
          </div>

          <div>

            <p className="about-label">
              TECHNOLOGY
            </p>

            <h2>
              Powered by Modern Technology
            </h2>

            <p>
              AgriTrace combines a web application,
              blockchain technology, QR-based tracking
              and data management to create a transparent
              agricultural supply chain.
            </p>

          </div>

          <div className="technology-tags">

            <span>⚛️ React</span>

            <span>⛓️ Blockchain</span>

            <span>📱 QR Code</span>

            <span>🗄️ Database</span>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="about-cta">

        <h2>
          🌱 Creating Trust From Farm to Consumer
        </h2>

        <p>
          Every batch tells a story. AgriTrace helps make
          that story visible.
        </p>

      </section>

    </div>
  );
}

export default About;