import { useLanguage } from "../LanguageContext";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="home-hero-content">

          <div className="home-badge">
            🌾 {t.homeBadge}
          </div>

          <h1>
            {t.from} <span>{t.farm}</span> {t.to} <span>{t.consumer}</span>
            <br />
            {t.withCompleteTransparency}
          </h1>

          <p>
            {t.homeDescription}
          </p>

          <div className="home-buttons">

            <button className="primary-home-btn">
              🌱 {t.registerProduce}
            </button>

            <button className="secondary-home-btn">
              📱 {t.trackProduct}
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
              <small>{t.activeBatches}</small>
            </div>
          </div>

          <div className="floating-card card-two">
            🔗
            <div>
              <strong>100%</strong>
              <small>{t.traceable}</small>
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
            <p>{t.registeredFarmers}</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon orange-icon">
            📦
          </div>

          <div>
            <h2>125+</h2>
            <p>{t.totalBatches}</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon blue-icon">
            🚚
          </div>

          <div>
            <h2>42</h2>
            <p>{t.inTransit}</p>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon purple-icon">
            ✓
          </div>

          <div>
            <h2>68</h2>
            <p>{t.verifiedProducts}</p>
          </div>

        </div>

      </section>


      {/* SUPPLY CHAIN */}
      <section className="supply-section">

        <div className="section-heading">

          <p>{t.howAgriTraceWorks}</p>

          <h2>
            {t.completeSupplyChainVisibility}
          </h2>

          <span>
            {t.supplyChainDescription}
          </span>

        </div>


        <div className="supply-chain">

          <div className="chain-item">

            <div className="chain-icon">
              👨‍🌾
            </div>

            <h3>{t.farmer}</h3>

            <p>
              {t.registerProduce}
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              📦
            </div>

            <h3>{t.collection}</h3>

            <p>
              {t.verifyBatch}
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🚚
            </div>

            <h3>{t.transport}</h3>

            <p>
              {t.trackMovement}
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🏭
            </div>

            <h3>{t.warehouse}</h3>

            <p>
              {t.monitorStorage}
            </p>

          </div>


          <div className="chain-line">
            →
          </div>


          <div className="chain-item">

            <div className="chain-icon">
              🏪
            </div>

            <h3>{t.retailer}</h3>

            <p>
              {t.sellProduct}
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">

          <p>{t.whyAgriTrace}</p>

          <h2>
            {t.buildingTrustInAgriculture}
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              🔗
            </div>

            <h3>{t.blockchainSecurity}</h3>

            <p>
              {t.blockchainDescription}
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>{t.qrCodeTracking}</h3>

            <p>
              {t.qrDescription}
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🌱
            </div>

            <h3>{t.farmerFriendly}</h3>

            <p>
              {t.farmerFriendlyDescription}
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>{t.completeTransparency}</h3>

            <p>
              {t.transparencyDescription}
            </p>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="home-cta">

        <div>

          <h2>
            {t.makeEveryProductTraceable}
          </h2>

          <p>
            {t.fromFarmerToConsumer}
          </p>

        </div>

        <button>
          🚀 {t.getStarted}
        </button>

      </section>

    </div>
  );
}

export default Home;