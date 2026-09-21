
import { useState } from "react";

function Transport() {

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
      alert("Please fill all required fields");
      return;
    }

    setShowStatus(true);
  };


  return (
    <div className="transport-page">

      {/* HERO SECTION */}

      <section className="transport-hero">

        <div className="transport-hero-content">

          <div className="transport-badge">
            🚚 AGRITRACE • TRANSPORT PORTAL
          </div>

          <h1>
            Track <span>Product</span> Transportation
          </h1>

          <p>
            Record transportation details and track agricultural
            products as they move from one stage to another.
          </p>

        </div>


        <div className="transport-hero-icon">
          🚚
        </div>

      </section>


      {/* MAIN SECTION */}

      <section className="transport-main">


        {/* INFORMATION CARD */}

        <div className="transport-info-card">

          <div className="transport-info-title">

            <div className="transport-info-icon">
              📍
            </div>

            <h2>
              Transportation Tracking
            </h2>

          </div>


          <p>
            Transportation records help maintain visibility
            of the agricultural product while it is moving
            through the supply chain.
          </p>


          <div className="transport-step">

            <div className="transport-step-number">
              01
            </div>

            <div>
              <h3>
                Identify Batch
              </h3>

              <p>
                Enter the batch ID of the product being transported.
              </p>
            </div>

          </div>


          <div className="transport-step">

            <div className="transport-step-number">
              02
            </div>

            <div>
              <h3>
                Enter Route
              </h3>

              <p>
                Record the source and destination locations.
              </p>
            </div>

          </div>


          <div className="transport-step">

            <div className="transport-step-number">
              03
            </div>

            <div>
              <h3>
                Start Transportation
              </h3>

              <p>
                Save the transportation record in AgriTrace.
              </p>
            </div>

          </div>


          <div className="transport-secure-box">
            🔗 Transportation record will be traceable
          </div>

        </div>


        {/* FORM CARD */}

        <div className="transport-form-card">

          <div className="transport-form-heading">

            <div className="transport-form-icon">
              🚚
            </div>

            <div>

              <h2>
                Transportation Details
              </h2>

              <p>
                Enter the vehicle and route information
              </p>

            </div>

          </div>


          {/* BATCH ID */}

          <div className="transport-input">

            <label>
              🆔 Batch ID <span>*</span>
            </label>

            <input
              type="text"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              placeholder="e.g. AGR-TOM-001"
            />

          </div>


          {/* SOURCE + DESTINATION */}

          <div className="transport-input-row">

            <div className="transport-input">

              <label>
                📍 Source <span>*</span>
              </label>

              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g. Krishnagiri"
              />

            </div>


            <div className="transport-input">

              <label>
                📍 Destination <span>*</span>
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Chennai"
              />

            </div>

          </div>


          {/* VEHICLE + DRIVER */}

          <div className="transport-input-row">

            <div className="transport-input">

              <label>
                🚛 Vehicle Number <span>*</span>
              </label>

              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="e.g. TN 01 AB 1234"
              />

            </div>


            <div className="transport-input">

              <label>
                👨‍✈️ Driver Name
              </label>

              <input
                type="text"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                placeholder="Enter driver name"
              />

            </div>

          </div>


          {/* DATE */}

          <div className="transport-input">

            <label>
              📅 Transportation Date
            </label>

            <input
              type="date"
              value={transportDate}
              onChange={(e) => setTransportDate(e.target.value)}
            />

          </div>


          {/* BUTTON */}

          <button
            className="transport-button"
            onClick={startTransport}
          >
            🚚 Start Transportation
            <span>→</span>
          </button>


          <div className="transport-security">

            🔒

            <span>
              Transportation information is securely recorded
              in the AgriTrace system.
            </span>

          </div>


          {/* SUCCESS */}

          {showStatus && (

            <div className="transport-success">

              <div className="success-icon">
                ✓
              </div>

              <div>

                <h3>
                  Transportation Started
                </h3>

                <p>
                  Batch <strong>{batchId}</strong> is now moving
                  from <strong>{source}</strong> to
                  <strong> {destination}</strong>.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* STATUS SECTION */}

      {showStatus && (

        <section className="transport-status">

          <div className="status-heading">

            <p>
              LIVE TRANSPORT STATUS
            </p>

            <h2>
              🚚 Batch In Transit
            </h2>

          </div>


          <div className="transport-route">

            <div className="route-location">

              <div className="route-icon">
                📍
              </div>

              <h3>
                {source}
              </h3>

              <p>
                Source
              </p>

            </div>


            <div className="route-line">

              <span>
                🚚
              </span>

              <div></div>

            </div>


            <div className="route-location">

              <div className="route-icon">
                🏁
              </div>

              <h3>
                {destination}
              </h3>

              <p>
                Destination
              </p>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

export default Transport;