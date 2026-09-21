function CollectionCenter() {
  return (
    <div className="collection-page">

      {/* HERO */}
      <section className="collection-hero">

        <div>
          <div className="collection-badge">
            📦 AGRITRACE • COLLECTION CENTER
          </div>

          <h1>
            Receive & <span>Verify</span> Produce
          </h1>

          <p>
            Verify agricultural batches received from farmers
            and record their quality and quantity.
          </p>
        </div>

        <div className="collection-hero-icon">
          📦
        </div>

      </section>


      {/* MAIN CONTENT */}
      <section className="collection-main">

        {/* LEFT INFORMATION */}
        <div className="collection-info">

          <div className="collection-info-title">
            <div className="collection-info-icon">
              🔍
            </div>

            <h2>Batch Verification</h2>
          </div>

          <p>
            Every agricultural batch is verified at the
            collection center before moving to the next
            stage of the supply chain.
          </p>


          <div className="collection-step">

            <div className="collection-step-number">
              01
            </div>

            <div>
              <h3>Identify Batch</h3>
              <p>
                Enter the unique batch ID received
                from the farmer.
              </p>
            </div>

          </div>


          <div className="collection-step">

            <div className="collection-step-number">
              02
            </div>

            <div>
              <h3>Check Quality</h3>
              <p>
                Verify the quality grade and received
                quantity of the produce.
              </p>
            </div>

          </div>


          <div className="collection-step">

            <div className="collection-step-number">
              03
            </div>

            <div>
              <h3>Confirm Receipt</h3>
              <p>
                Record the verified batch in the
                AgriTrace system.
              </p>
            </div>

          </div>


          <div className="verified-box">
            ✓ Secure batch verification
          </div>

        </div>


        {/* FORM */}
        <div className="collection-form-card">

          <div className="collection-form-heading">

            <div className="collection-form-icon">
              📋
            </div>

            <div>
              <h2>Batch Details</h2>
              <p>
                Enter the received produce information
              </p>
            </div>

          </div>


          {/* BATCH ID */}
          <div className="collection-input">

            <label>
              🆔 Batch ID <span>*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. AGR-TOM-001"
            />

            <small>
              Enter the batch ID provided by the farmer
            </small>

          </div>


          {/* QUANTITY */}
          <div className="collection-input">

            <label>
              ⚖️ Received Quantity <span>*</span>
            </label>

            <div className="collection-quantity">

              <input
                type="number"
                placeholder="e.g. 1000"
              />

              <span>KG</span>

            </div>

          </div>


          {/* QUALITY */}
          <div className="collection-input">

            <label>
              🏅 Quality Grade <span>*</span>
            </label>

            <select>

              <option value="">
                Select Quality Grade
              </option>

              <option>
                Grade A - Premium
              </option>

              <option>
                Grade B - Good
              </option>

              <option>
                Grade C - Standard
              </option>

            </select>

          </div>


          {/* CENTER LOCATION */}
          <div className="collection-input">

            <label>
              📍 Collection Center <span>*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Krishnagiri Collection Center"
            />

          </div>


          {/* BUTTON */}
          <button className="confirm-button">
            ✓ Confirm Batch Receipt
            <span>→</span>
          </button>


          <div className="collection-security">
            🔒
            <span>
              This verification record will be securely
              stored in AgriTrace.
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default CollectionCenter;