import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Consumer() {
  const [batchId, setBatchId] = useState("");
  const [searchId, setSearchId] = useState("");
  const [batch, setBatch] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Get Batch ID from QR URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qrBatchId = params.get("batchId");

    if (qrBatchId) {
      setBatchId(qrBatchId);
      setSearchId(qrBatchId);
      getBatch(qrBatchId);
    }
  }, []);

  // Get batch from backend
  const getBatch = async (id) => {
    if (!id) {
      setMessage("Please enter a Batch ID.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setBatch(null);

      const response = await fetch(
        `http://localhost:5000/api/batches/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setBatch(data.batch);
        setBatchId(data.batch.batchId);
      } else {
        setMessage(data.message || "Batch not found.");
      }
    } catch (error) {
      console.error(error);

      setMessage(
        "Unable to connect to the backend. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // Manual search
  const handleSearch = () => {
    const id = searchId.trim();

    if (!id) {
      setMessage("Please enter a Batch ID.");
      return;
    }

    setBatchId(id);
    getBatch(id);
  };

  // Format date
  const formatDate = (date) => {
    if (!date) {
      return "Not recorded";
    }

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="consumer-page">

      {/* HERO */}
      <section className="consumer-hero">

        <div>
          <div className="hero-badge">
            🌿 AGRITRACE • CONSUMER PORTAL
          </div>

          <h1>
            Track Your <span>Product</span>
          </h1>

          <p>
            Scan the QR code or enter your Batch ID to
            verify the complete product journey.
          </p>
        </div>

        <div className="consumer-hero-icon">
          🛒
        </div>

      </section>


      {/* SEARCH SECTION */}
      <section className="consumer-search">

        <div className="search-card">

          <h2>📷 Scan QR Code / Track Batch</h2>

          <p>
            Enter your Batch ID to view the complete
            supply chain history.
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="e.g. AGRI-1790008850813"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />

            <button onClick={handleSearch}>
              🔍 Track Batch
            </button>

          </div>

        </div>

      </section>


      {/* LOADING */}
      {loading && (
        <div className="consumer-message">
          Loading batch information...
        </div>
      )}


      {/* ERROR */}
      {message && !loading && (
        <div className="consumer-error">
          ❌ {message}
        </div>
      )}


      {/* BATCH RESULT */}
      {batch && !loading && (

        <section className="consumer-result">

          {/* QR + PRODUCT HEADER */}
          <div className="product-header">

            <div className="qr-card">

              <h3>📷 Scan QR Code</h3>

              <div className="qr-code-box">

                <QRCodeCanvas
                  value={`http://localhost:5173/consumer?batchId=${batch.batchId}`}
                  size={180}
                  level="H"
                />

              </div>

              <p>
                Scan to track this product
              </p>

            </div>


            <div className="product-info">

              <div className="verified-badge">
                ✓ VERIFIED PRODUCT
              </div>

              <h1>
                {batch.crop || "Agricultural Produce"}
              </h1>

              <p className="batch-number">
                Batch ID: <strong>{batch.batchId}</strong>
              </p>

              <div className="grade-badge">
                {batch.qualityGrade || "Quality Not Recorded"}
              </div>

            </div>

          </div>


          {/* PRODUCT DETAILS */}
          <div className="details-card">

            <h2>🌾 Product Details</h2>

            <div className="details-grid">

              <div className="detail-item">
                <span>🌱</span>
                <div>
                  <small>Product</small>
                  <strong>{batch.crop}</strong>
                </div>
              </div>


              <div className="detail-item">
                <span>⚖️</span>
                <div>
                  <small>Quantity</small>
                  <strong>
                    {batch.quantity} {batch.unit || "KG"}
                  </strong>
                </div>
              </div>


              <div className="detail-item">
                <span>📍</span>
                <div>
                  <small>Farm Location</small>
                  <strong>
                    {batch.farmLocation || "Not recorded"}
                  </strong>
                </div>
              </div>


              <div className="detail-item">
                <span>📅</span>
                <div>
                  <small>Harvest Date</small>
                  <strong>
                    {formatDate(batch.harvestDate)}
                  </strong>
                </div>
              </div>

            </div>

          </div>


          {/* PRODUCT JOURNEY */}
          <div className="journey-card">

            <div className="journey-heading">

              <h2>🌱 Product Journey</h2>

              <p>
                Complete supply chain history
              </p>

            </div>


            <div className="timeline">


              {/* FARMER */}
              <div className="timeline-item">

                <div className="timeline-icon">
                  👨‍🌾
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>Farmer</h3>

                    <span className="verified">
                      ✓ Verified
                    </span>

                  </div>

                  <p>
                    Produce harvested and registered
                  </p>

                  <span className="location">
                    📍 {batch.farmLocation || "Farm location not recorded"}
                  </span>

                  <span className="date">
                    📅 {formatDate(batch.harvestDate)}
                  </span>

                  <span className="farmer-name">
                    👨‍🌾 {batch.farmerName}
                  </span>

                </div>

              </div>


              {/* COLLECTION CENTER */}
              <div className="timeline-item">

                <div className="timeline-icon">
                  📦
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>Collection Center</h3>

                    <span className="verified">
                      ✓ Verified
                    </span>

                  </div>

                  <p>
                    {batch.collectionCenter?.name
                      ? "Produce received and quality verified"
                      : "Waiting for collection center update"}
                  </p>

                  {batch.collectionCenter?.location && (
                    <span className="location">
                      📍 {batch.collectionCenter.location}
                    </span>
                  )}

                  {batch.collectionCenter?.quality && (
                    <span className="date">
                      🏅 Quality: {batch.collectionCenter.quality}
                    </span>
                  )}

                </div>

              </div>


              {/* TRANSPORT */}
              <div className="timeline-item">

                <div className="timeline-icon">
                  🚚
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>Transportation</h3>

                    <span className="tracked">
                      ✓ Tracked
                    </span>

                  </div>

                  <p>
                    {batch.transport?.vehicleNumber
                      ? "Product transported to warehouse"
                      : "Waiting for transportation update"}
                  </p>

                  {batch.transport?.source &&
                    batch.transport?.destination && (
                      <span className="location">
                        📍 {batch.transport.source} →{" "}
                        {batch.transport.destination}
                      </span>
                    )}

                  {batch.transport?.vehicleNumber && (
                    <span className="date">
                      🚛 Vehicle:{" "}
                      {batch.transport.vehicleNumber}
                    </span>
                  )}

                </div>

              </div>


              {/* WAREHOUSE */}
              <div className="timeline-item">

                <div className="timeline-icon">
                  🏭
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>Warehouse</h3>

                    <span className="verified">
                      ✓ Verified
                    </span>

                  </div>

                  <p>
                    {batch.warehouse?.name
                      ? "Product stored under monitored conditions"
                      : "Waiting for warehouse update"}
                  </p>

                  {batch.warehouse?.location && (
                    <span className="location">
                      📍 {batch.warehouse.location}
                    </span>
                  )}

                  {(batch.warehouse?.temperature !== undefined ||
                    batch.warehouse?.humidity !== undefined) && (
                    <span className="date">
                      🌡️{" "}
                      {batch.warehouse?.temperature ?? "--"}°C
                      {" | "}
                      💧{" "}
                      {batch.warehouse?.humidity ?? "--"}%
                      {" "}Humidity
                    </span>
                  )}

                </div>

              </div>


              {/* RETAILER */}
              <div className="timeline-item">

                <div className="timeline-icon">
                  🏪
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>Retailer</h3>

                    <span className="received">
                      ✓ Received
                    </span>

                  </div>

                  <p>
                    {batch.retailer?.name
                      ? "Product delivered to retail store"
                      : "Waiting for retailer update"}
                  </p>

                  {batch.retailer?.location && (
                    <span className="location">
                      📍 {batch.retailer.location}
                    </span>
                  )}

                </div>

              </div>


              {/* CONSUMER */}
              <div className="timeline-item last">

                <div className="timeline-icon">
                  🛒
                </div>

                <div className="timeline-content">

                  <div className="timeline-title">

                    <h3>You</h3>

                    <span className="traceable">
                      ✓ Traceable
                    </span>

                  </div>

                  <p>
                    Product reached the consumer
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* SUPPLY CHAIN VERIFIED */}
          <div className="trust-card">

            <div className="trust-icon">
              🔗
            </div>

            <div>

              <h2>
                Supply Chain Verified
              </h2>

              <p>
                This product's journey has been
                recorded through the AgriTrace system.
              </p>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default Consumer;
