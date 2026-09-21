function TrackBatch() {

  return (
    <div className="page">

      <h1>📱 Track Agricultural Batch</h1>

      <p className="page-description">
        View complete supply chain history
      </p>

      <div className="form-card">

        <div className="form-group">

          <label>Enter Batch ID</label>

          <input
            placeholder="Example: AGR-TOM-001"
          />

        </div>

        <button className="button">
          Track Batch
        </button>

      </div>

      <div className="timeline">

        <div className="timeline-item">

          <h3>👨‍🌾 Harvested</h3>

          <p>
            Farmer: F001
          </p>

          <p>
            Location: Krishnagiri
          </p>

          <p>
            Date: 20 September 2026
          </p>

        </div>

        <div className="timeline-item">

          <h3>📦 Collection Center</h3>

          <p>
            Quantity: 1000 KG
          </p>

          <p>
            Quality: Grade A
          </p>

        </div>

        <div className="timeline-item">

          <h3>🚚 Transportation</h3>

          <p>
            Krishnagiri → Chennai
          </p>

          <p>
            Status: In Transit
          </p>

        </div>

        <div className="timeline-item">

          <h3>🏭 Warehouse</h3>

          <p>
            Temperature: 8°C
          </p>

          <p>
            Humidity: 65%
          </p>

        </div>

        <div className="timeline-item">

          <h3>🏪 Retailer</h3>

          <p>
            Location: Chennai
          </p>

          <p>
            Status: Received
          </p>

        </div>

        <div className="batch-result">

          <h3>
            ✓ Blockchain Verification
          </h3>

          <p>
            Supply chain record verified successfully.
          </p>

        </div>

      </div>

    </div>
  );
}

export default TrackBatch;