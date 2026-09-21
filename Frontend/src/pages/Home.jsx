function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="home-hero-content">

          <div className="home-badge">
            🌾 BLOCKCHAIN-BASED AGRICULTURAL SUPPLY CHAIN
          </div>

          <h1>
            From <span>Farm</span> to <span>Consumer</span>
            <br />
            With Complete Transparency
          </h1>

          <p>
            AgriTrace helps farmers, transporters, warehouses,
            retailers and consumers track agricultural products
            throughout the entire supply chain.
          </p>

          <div className="home-buttons">

            <button className="primary-home-btn">
              🌱 Register Produce
            </button>

            <button className="secondary-home-btn">
              📱 Track Product
            </button>

          </div>

        </div>


        <div className="home-hero-visual">

          <div className="farm-circle">
            🌾
          </div>

          <div className="floating-card card-one">
            📦
            <div>
              <strong>125+</strong>
              <small>Active Batches</small>
            </div>
          </div>

          <div className="floating-card card-two">
            🔗
            <div>
              <strong>100%</strong>
              <small>Traceable</small>
            </div>
          </div>

        </div>

      </section>


      {/* STATISTICS */}
      <section className="home-stats">

        <div className="home-stat-card">

          <div className="stat-icon green-icon">
            👨‍🌾
          </div>

          <div>
            <h2>35+</h2>
            <p>Registered Farmers</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon orange-icon">
            📦
          </div>

          <div>
            <h2>125+</h2>
            <p>Total Batches</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon blue-icon">
            🚚
          </div>

          <div>
            <h2>42</h2>
            <p>In Transit</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon purple-icon">
            ✓
          </div>

          <div>
            <h2>68</h2>
            <p>Verified Products</p>
          </div>

        </div>

      </section>


      {/* SUPPLY CHAIN */}
      <section className="supply-section">

        <div className="section-heading">

          <p>HOW AGRITRACE WORKS</p>

          <h2>
            Complete Supply Chain Visibility
          </h2>

          <span>
            Every stage of your agricultural product is recorded
            and traceable.
          </span>

        </div>


        <div className="supply-chain">

          <div className="chain-item">

            <div className="chain-icon">
              👨‍🌾
            </div>

            <h3>Farmer</h3>

            <p>
              Register produce
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              📦
            </div>

            <h3>Collection</h3>

            <p>
              Verify batch
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🚚
            </div>

            <h3>Transport</h3>

            <p>
              Track movement
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🏭
            </div>

            <h3>Warehouse</h3>

            <p>
              Monitor storage
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🏪
            </div>

            <h3>Retailer</h3>

            <p>
              Sell product
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">

          <p>WHY AGRITRACE?</p>

          <h2>
            Building Trust in Agriculture
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🔗
            </div>

            <h3>Blockchain Security</h3>

            <p>
              Supply chain records are securely stored
              and protected from unauthorized changes.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>QR Code Tracking</h3>

            <p>
              Consumers can scan a QR code and view
              the complete product journey.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🌱
            </div>

            <h3>Farmer Friendly</h3>

            <p>
              Simple tools allow farmers to register
              and manage their agricultural produce.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>Complete Transparency</h3>

            <p>
              Every participant can verify important
              information at each supply chain stage.
            </p>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="home-cta">

        <div>

          <h2>
            Make Every Product Traceable
          </h2>

          <p>
            From the farmer's field to the consumer's hands.
          </p>

        </div>

        <button>
          🚀 Get Started
        </button>

      </section>

    </div>
  );
}

export default Home;