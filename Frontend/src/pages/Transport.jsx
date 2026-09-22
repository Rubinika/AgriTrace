import { useState } from "react";
import { useLanguage } from "../LanguageContext";

function Transport() {
  const { t } = useLanguage();

  const [batchId, setBatchId] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [transportDate, setTransportDate] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const startTransport = () => {
    if (
      batchId === "" ||
      source === "" ||
      destination === "" ||
      vehicleNumber === ""
    ) {
      alert(t.fillRequired);
      return;
    }

    setShowStatus(true);
  };

  return (
    <div className="transport-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="transport-hero">

        <div className="transport-hero-content">

          <div className="transport-badge">
            🚚 {t.transportPortal}
          </div>

          <h1>
            {t.track} <span>{t.product}</span> {t.transportation}
          </h1>

          <p>
            {t.transportDescription}
          </p>

        </div>

        <div className="transport-hero-icon">
          🚚
        </div>

      </section>


      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="transport-main">

        {/* =====================================================
            INFORMATION CARD
        ===================================================== */}

        <div className="transport-info-card">

          <div className="transport-info-title">

            <div className="transport-info-icon">
              📍
            </div>

            <h2>
              {t.transportTracking}
            </h2>

          </div>

          <p>
            {t.transportTrackingDescription}
          </p>


          {/* STEP 01 */}

          <div className="transport-step">

            <div className="transport-step-number">
              01
            </div>

            <div>
              <h3>
                {t.identifyBatch}
              </h3>

              <p>
                {t.identifyBatchTransportDescription}
              </p>
            </div>

          </div>


          {/* STEP 02 */}

          <div className="transport-step">

            <div className="transport-step-number">
              02
            </div>

            <div>
              <h3>
                {t.enterRoute}
              </h3>

              <p>
                {t.enterRouteDescription}
              </p>
            </div>

          </div>


          {/* STEP 03 */}

          <div className="transport-step">

            <div className="transport-step-number">
              03
            </div>

            <div>
              <h3>
                {t.startTransportation}
              </h3>

              <p>
                {t.startTransportationDescription}
              </p>
            </div>

          </div>


          <div className="transport-secure-box">
            🔗 {t.transportTraceable}
          </div>

        </div>


        {/* =====================================================
            FORM CARD
        ===================================================== */}

        <div className="transport-form-card">

          <div className="transport-form-heading">

            <div className="transport-form-icon">
              🚚
            </div>

            <div>

              <h2>
                {t.transportDetails}
              </h2>

              <p>
                {t.transportDetailsDescription}
              </p>

            </div>

          </div>


          {/* =================================================
              BATCH ID
          ================================================= */}

          <div className="transport-input">

            <label>
              🆔 {t.batchId} <span>*</span>
            </label>

            <input
              type="text"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              placeholder={t.transportBatchPlaceholder}
            />

          </div>


          {/* =================================================
              SOURCE + DESTINATION
          ================================================= */}

          <div className="transport-input-row">

            <div className="transport-input">

              <label>
                📍 {t.source} <span>*</span>
              </label>

              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder={t.sourcePlaceholder}
              />

            </div>


            <div className="transport-input">

              <label>
                📍 {t.destination} <span>*</span>
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={t.destinationPlaceholder}
              />

            </div>

          </div>


          {/* =================================================
              VEHICLE + DRIVER
          ================================================= */}

          <div className="transport-input-row">

            <div className="transport-input">

              <label>
                🚛 {t.vehicleNumber} <span>*</span>
              </label>

              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder={t.vehiclePlaceholder}
              />

            </div>


            <div className="transport-input">

              <label>
                👨‍✈️ {t.driverName}
              </label>

              <input
                type="text"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder={t.driverPlaceholder}
              />

            </div>

          </div>


          {/* =================================================
              DATE
          ================================================= */}

          <div className="transport-input">

            <label>
              📅 {t.transportDate}
            </label>

            <input
              type="date"
              value={transportDate}
              onChange={(e) => setTransportDate(e.target.value)}
            />

          </div>


          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            className="transport-button"
            onClick={startTransport}
          >
            🚚 {t.startTransport}
            <span>→</span>
          </button>


          {/* =================================================
              SECURITY MESSAGE
          ================================================= */}

          <div className="transport-security">

            🔒

            <span>
              {t.transportSecurity}
            </span>

          </div>


          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {showStatus && (

            <div className="transport-success">

              <div className="success-icon">
                ✓
              </div>

              <div>

                <h3>
                  {t.transportStarted}
                </h3>

                <p>
                  {t.batch} <strong>{batchId}</strong>{" "}
                  {t.movingFrom}{" "}
                  <strong>{source}</strong>{" "}
                  {t.toText}{" "}
                  <strong>{destination}</strong>.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          STATUS SECTION
      ===================================================== */}

      {showStatus && (

        <section className="transport-status">

          <div className="status-heading">

            <p>
              {t.liveTransportStatus}
            </p>

            <h2>
              🚚 {t.batchInTransit}
            </h2>

          </div>


          {/* ROUTE */}

          <div className="transport-route">

            {/* SOURCE */}

            <div className="route-location">

              <div className="route-icon">
                📍
              </div>

              <h3>
                {source}
              </h3>

              <p>
                {t.source}
              </p>

            </div>


            {/* ROUTE LINE */}

            <div className="route-line">

              <span>
                🚚
              </span>

              <div></div>

            </div>


            {/* DESTINATION */}

            <div className="route-location">

              <div className="route-icon">
                🏁
              </div>

              <h3>
                {destination}
              </h3>

              <p>
                {t.destination}
              </p>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

export default Transport;