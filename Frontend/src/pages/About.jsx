import { useLanguage } from "../LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <div className="about-badge">
            🌾 {t.aboutBadge}
          </div>

          <h1>
            {t.buildingA} <span>{t.transparent}</span>
            <br />
            {t.agriculturalFuture}
          </h1>

          <p>
            {t.aboutHeroDescription}
          </p>

        </div>

        <div className="about-hero-icon">
          🌱
        </div>

      </section>


      {/* =========================
          ABOUT INTRO
      ========================= */}

      <section className="about-intro">

        <div className="about-intro-card">

          <div className="about-big-icon">
            🔗
          </div>

          <div>

            <p className="about-label">
              {t.ourMission}
            </p>

            <h2>
              {t.fromFarmConsumer}
              <br />
              {t.everyStepMatters}
            </h2>

            <p className="about-text">
              {t.aboutMissionDescription}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT WE PROVIDE
      ========================= */}

      <section className="about-values">

        <div className="about-section-heading">

          <p>
            {t.whatWeProvide}
          </p>

          <h2>
            {t.onePlatformTransparency}
          </h2>

        </div>


        <div className="about-value-grid">

          {/* CARD 1 */}

          <div className="about-value-card">

            <div className="about-value-icon green">
              🔗
            </div>

            <h3>
              {t.blockchainSecurity}
            </h3>

            <p>
              {t.aboutBlockchainDescription}
            </p>

          </div>


          {/* CARD 2 */}

          <div className="about-value-card">

            <div className="about-value-icon blue">
              📱
            </div>

            <h3>
              {t.productTracking}
            </h3>

            <p>
              {t.aboutTrackingDescription}
            </p>

          </div>


          {/* CARD 3 */}

          <div className="about-value-card">

            <div className="about-value-icon orange">
              👨‍🌾
            </div>

            <h3>
              {t.farmerParticipation}
            </h3>

            <p>
              {t.aboutFarmerDescription}
            </p>

          </div>


          {/* CARD 4 */}

          <div className="about-value-card">

            <div className="about-value-icon purple">
              👁️
            </div>

            <h3>
              {t.consumerTransparency}
            </h3>

            <p>
              {t.aboutConsumerDescription}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          AGRITRACE JOURNEY
      ========================= */}

      <section className="about-journey">

        <div className="about-section-heading">

          <p>
            {t.agritraceJourney}
          </p>

          <h2>
            {t.howProductsMove}
          </h2>

        </div>


        <div className="journey-container">

          {/* FARMER */}

          <div className="journey-item">

            <div className="journey-number">
              01
            </div>

            <div className="journey-icon">
              👨‍🌾
            </div>

            <h3>
              {t.farmer}
            </h3>

            <p>
              {t.produceRegistered}
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          {/* COLLECTION */}

          <div className="journey-item">

            <div className="journey-number">
              02
            </div>

            <div className="journey-icon">
              📦
            </div>

            <h3>
              {t.collection}
            </h3>

            <p>
              {t.batchVerified}
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          {/* TRANSPORT */}

          <div className="journey-item">

            <div className="journey-number">
              03
            </div>

            <div className="journey-icon">
              🚚
            </div>

            <h3>
              {t.transport}
            </h3>

            <p>
              {t.productMoved}
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          {/* WAREHOUSE */}

          <div className="journey-item">

            <div className="journey-number">
              04
            </div>

            <div className="journey-icon">
              🏭
            </div>

            <h3>
              {t.warehouse}
            </h3>

            <p>
              {t.productStored}
            </p>

          </div>


          <div className="journey-arrow">
            →
          </div>


          {/* RETAILER */}

          <div className="journey-item">

            <div className="journey-number">
              05
            </div>

            <div className="journey-icon">
              🏪
            </div>

            <h3>
              {t.retailer}
            </h3>

            <p>
              {t.productDelivered}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          TECHNOLOGY
      ========================= */}

      <section className="technology-section">

        <div className="technology-card">

          <div className="technology-icon">
            ⚙️
          </div>

          <div>

            <p className="about-label">
              {t.technology}
            </p>

            <h2>
              {t.poweredByModernTechnology}
            </h2>

            <p>
              {t.technologyDescription}
            </p>

          </div>


          <div className="technology-tags">

            <span>
              ⚛️ {t.react}
            </span>

            <span>
              ⛓️ {t.blockchain}
            </span>

            <span>
              📱 {t.qrCode}
            </span>

            <span>
              🗄️ {t.database}
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="about-cta">

        <h2>
          🌱 {t.creatingTrust}
        </h2>

        <p>
          {t.everyBatchStory}
        </p>

      </section>

    </div>
  );
}

export default About;