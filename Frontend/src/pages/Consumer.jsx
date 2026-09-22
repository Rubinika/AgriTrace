import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useLanguage } from "../LanguageContext";
import API_URL from "../api";

function Consumer() {
  const { t } = useLanguage();

  const [batchId, setBatchId] = useState("");
  const [searchId, setSearchId] = useState("");
  const [batch, setBatch] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // =====================================================
  // GET BATCH ID FROM QR URL
  // =====================================================

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const qrBatchId = params.get("batchId");

    if (qrBatchId) {
      setBatchId(qrBatchId);
      setSearchId(qrBatchId);

      getBatch(qrBatchId);
    }
  }, []);


  // =====================================================
  // GET BATCH FROM DEPLOYED BACKEND
  // =====================================================

  const getBatch = async (id) => {
    if (!id) {
      setMessage(t.fillRequired);
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setBatch(null);

      const response = await fetch(
        `${API_URL}/api/batches/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setBatch(data.batch);
        setBatchId(data.batch.batchId);
      } else {
        setMessage(
          data.message || t.batchNotFound
        );
      }

    } catch (error) {

      console.error("Backend Error:", error);

      setMessage(t.backendError);

    } finally {

      setLoading(false);

    }
  };


  // =====================================================
  // MANUAL SEARCH
  // =====================================================

  const handleSearch = () => {

    const id = searchId.trim();

    if (!id) {
      setMessage(t.fillRequired);
      return;
    }

    setBatchId(id);

    getBatch(id);
  };


  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {

    if (!date) {
      return t.notRecorded;
    }

    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };


  return (

    <div className="consumer-page">


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="consumer-hero">

        <div>

          <div className="hero-badge">
            🌿 {t.consumerPortal}
          </div>

          <h1>
            {t.trackYour} <span>{t.product}</span>
          </h1>

          <p>
            {t.consumerDescription}
          </p>

        </div>

        <div className="consumer-hero-icon">
          🛒
        </div>

      </section>



      {/* =====================================================
          SEARCH SECTION
      ===================================================== */}

      <section className="consumer-search">

        <div className="search-card">

          <h2>
            📷 {t.scanQrTrackBatch}
          </h2>

          <p>
            {t.enterBatchToView}
          </p>


          <div className="search-box">

            <input
              type="text"
              placeholder={
                t.batchIdPlaceholderConsumer
              }
              value={searchId}
              onChange={(e) =>
                setSearchId(e.target.value)
              }
            />


            <button onClick={handleSearch}>
              🔍 {t.searchBatch}
            </button>

          </div>

        </div>

      </section>



      {/* =====================================================
          LOADING MESSAGE
      ===================================================== */}

      {loading && (

        <div className="consumer-message">

          {t.loadingBatch}

        </div>

      )}



      {/* =====================================================
          ERROR MESSAGE
      ===================================================== */}

      {message && !loading && (

        <div className="consumer-error">

          ❌ {message}

        </div>

      )}



      {/* =====================================================
          BATCH RESULT
      ===================================================== */}

      {batch && !loading && (

        <section className="consumer-result">


          {/* =================================================
              QR + PRODUCT HEADER
          ================================================= */}

          <div className="product-header">


            {/* =================================================
                QR CARD
            ================================================= */}

            <div className="qr-card">

              <h3>
                📷 {t.scanQrCode}
              </h3>


              <div className="qr-code-box">

                <QRCodeCanvas
                  value={`${window.location.origin}/consumer?batchId=${batch.batchId}`}
                  size={180}
                  level="H"
                  includeMargin={true}
                />

              </div>


              <p>
                {t.scanToTrack}
              </p>

            </div>



            {/* =================================================
                PRODUCT INFORMATION
            ================================================= */}

            <div className="product-info">

              <div className="verified-badge">

                ✓ {t.verifiedProduct}

              </div>


              <h1>

                {batch.crop ||
                  t.agriculturalProduce}

              </h1>


              <p className="batch-number">

                {t.batchId}:{" "}

                <strong>
                  {batch.batchId}
                </strong>

              </p>


              <div className="grade-badge">

                {batch.qualityGrade ||
                  t.qualityNotRecorded}

              </div>

            </div>

          </div>



          {/* =================================================
              PRODUCT DETAILS
          ================================================= */}

          <div className="details-card">

            <h2>
              🌾 {t.productDetails}
            </h2>


            <div className="details-grid">


              {/* PRODUCT */}

              <div className="detail-item">

                <span>
                  🌱
                </span>

                <div>

                  <small>
                    {t.product}
                  </small>

                  <strong>
                    {batch.crop}
                  </strong>

                </div>

              </div>



              {/* QUANTITY */}

              <div className="detail-item">

                <span>
                  ⚖️
                </span>

                <div>

                  <small>
                    {t.quantity}
                  </small>

                  <strong>

                    {batch.quantity}{" "}

                    {batch.unit || "KG"}

                  </strong>

                </div>

              </div>



              {/* FARM LOCATION */}

              <div className="detail-item">

                <span>
                  📍
                </span>

                <div>

                  <small>
                    {t.farmLocation}
                  </small>

                  <strong>

                    {batch.farmLocation ||
                      t.notRecorded}

                  </strong>

                </div>

              </div>



              {/* HARVEST DATE */}

              <div className="detail-item">

                <span>
                  📅
                </span>

                <div>

                  <small>
                    {t.harvestDate}
                  </small>

                  <strong>

                    {formatDate(
                      batch.harvestDate
                    )}

                  </strong>

                </div>

              </div>

            </div>

          </div>



          {/* =================================================
              PRODUCT JOURNEY
          ================================================= */}

          <div className="journey-card">


            <div className="journey-heading">

              <h2>
                🌱 {t.productJourney}
              </h2>

              <p>
                {t.completeSupplyChainHistory}
              </p>

            </div>



            <div className="timeline">


              {/* =================================================
                  FARMER
              ================================================= */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  👨‍🌾
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.farmer}
                    </h3>


                    <span className="verified">

                      ✓ {t.verified}

                    </span>

                  </div>


                  <p>
                    {t.produceHarvestedRegistered}
                  </p>


                  <span className="location">

                    📍{" "}

                    {batch.farmLocation ||
                      t.farmLocationNotRecorded}

                  </span>


                  <span className="date">

                    📅{" "}

                    {formatDate(
                      batch.harvestDate
                    )}

                  </span>


                  <span className="farmer-name">

                    👨‍🌾{" "}

                    {batch.farmerName}

                  </span>

                </div>

              </div>



              {/* =================================================
                  COLLECTION CENTER
              ================================================= */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  📦
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.collectionCenter}
                    </h3>


                    <span className="verified">

                      ✓ {t.verified}

                    </span>

                  </div>


                  <p>

                    {batch.collectionCenter?.name
                      ? t.produceReceivedVerified
                      : t.waitingCollectionUpdate}

                  </p>


                  {batch.collectionCenter?.location && (

                    <span className="location">

                      📍{" "}

                      {batch.collectionCenter.location}

                    </span>

                  )}


                  {batch.collectionCenter?.quality && (

                    <span className="date">

                      🏅 {t.quality}:{" "}

                      {batch.collectionCenter.quality}

                    </span>

                  )}

                </div>

              </div>



              {/* =================================================
                  TRANSPORT
              ================================================= */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  🚚
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.transportation}
                    </h3>


                    <span className="tracked">

                      ✓ {t.tracked}

                    </span>

                  </div>


                  <p>

                    {batch.transport?.vehicleNumber
                      ? t.productTransported
                      : t.waitingTransportUpdate}

                  </p>


                  {batch.transport?.source &&
                    batch.transport?.destination && (

                      <span className="location">

                        📍{" "}

                        {batch.transport.source}

                        {" → "}

                        {batch.transport.destination}

                      </span>

                    )}


                  {batch.transport?.vehicleNumber && (

                    <span className="date">

                      🚛 {t.vehicle}:{" "}

                      {batch.transport.vehicleNumber}

                    </span>

                  )}

                </div>

              </div>



              {/* =================================================
                  WAREHOUSE
              ================================================= */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  🏭
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.warehouse}
                    </h3>


                    <span className="verified">

                      ✓ {t.verified}

                    </span>

                  </div>


                  <p>

                    {batch.warehouse?.name
                      ? t.productStored
                      : t.waitingWarehouseUpdate}

                  </p>


                  {batch.warehouse?.location && (

                    <span className="location">

                      📍{" "}

                      {batch.warehouse.location}

                    </span>

                  )}


                  {(batch.warehouse?.temperature !==
                    undefined ||
                    batch.warehouse?.humidity !==
                    undefined) && (

                    <span className="date">

                      🌡️{" "}

                      {batch.warehouse?.temperature ??
                        "--"}

                      °C

                      {" | "}

                      💧{" "}

                      {batch.warehouse?.humidity ??
                        "--"}

                      %

                      {" "}

                      {t.humidity}

                    </span>

                  )}

                </div>

              </div>



              {/* =================================================
                  RETAILER
              ================================================= */}

              <div className="timeline-item">

                <div className="timeline-icon">
                  🏪
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.retailer}
                    </h3>


                    <span className="received">

                      ✓ {t.received}

                    </span>

                  </div>


                  <p>

                    {batch.retailer?.name
                      ? t.productDelivered
                      : t.waitingRetailerUpdate}

                  </p>


                  {batch.retailer?.location && (

                    <span className="location">

                      📍{" "}

                      {batch.retailer.location}

                    </span>

                  )}

                </div>

              </div>



              {/* =================================================
                  CONSUMER
              ================================================= */}

              <div className="timeline-item last">

                <div className="timeline-icon">
                  🛒
                </div>


                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>
                      {t.you}
                    </h3>


                    <span className="traceable">

                      ✓ {t.traceable}

                    </span>

                  </div>


                  <p>
                    {t.productReachedConsumer}
                  </p>

                </div>

              </div>

            </div>

          </div>



          {/* =================================================
              SUPPLY CHAIN VERIFIED
          ================================================= */}

          <div className="trust-card">

            <div className="trust-icon">
              🔗
            </div>


            <div>

              <h2>
                {t.supplyChainVerified}
              </h2>


              <p>
                {t.productJourneyRecorded}
              </p>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

export default Consumer;