import { useState } from "react";

function Farmer() {
  const [farmerName, setFarmerName] = useState("");
  const [crop, setCrop] = useState("");
  const [quantity, setQuantity] = useState("");

  const [farmLocation, setFarmLocation] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [qualityGrade, setQualityGrade] = useState("");

  const [batchId, setBatchId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const registerProduce = async () => {
    if (
      !farmerName ||
      !crop ||
      !quantity ||
      !farmLocation ||
      !harvestDate ||
      !qualityGrade
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setBatchId("");

      const response = await fetch(
        "http://localhost:5000/api/batches",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            farmerName: farmerName,
            crop: crop,
            quantity: Number(quantity),
            unit: "kg",
            farmLocation: farmLocation,
            harvestDate: harvestDate,
            qualityGrade: qualityGrade,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setBatchId(data.batch.batchId);

        setFarmerName("");
        setCrop("");
        setQuantity("");
        setFarmLocation("");
        setHarvestDate("");
        setQualityGrade("");
      } else {
        setMessage(
          data.message || "Something went wrong."
        );
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

  return (
    <div className="farmer-page">

      {/* HERO SECTION */}
      <section className="farmer-hero">

        <div className="hero-content">

          <div className="hero-badge">
            🌿 AGRITRACE • FARMER PORTAL
          </div>

          <h1>
            Register Your <span>Produce</span>
          </h1>

          <p>
            Add your agricultural produce and create a
            traceable supply chain batch.
          </p>

        </div>

        <div className="hero-farmer">
          👨‍🌾
        </div>

      </section>


      {/* MAIN SECTION */}
      <section className="farmer-main">

        {/* LEFT CARD */}
        <div className="why-card">

          <div className="why-title">

            <div className="title-icon">
              🌱
            </div>

            <h2>Why Register?</h2>

          </div>

          <p className="why-description">
            Registering your produce creates a unique batch
            that can be tracked throughout the supply chain.
          </p>


          {/* TRACEABLE */}
          <div className="benefit">

            <div className="benefit-icon green">
              🛡️
            </div>

            <div>
              <h3>Traceable</h3>

              <p>
                Track your product journey
                from farm to consumer.
              </p>
            </div>

          </div>


          {/* SECURE */}
          <div className="benefit">

            <div className="benefit-icon orange">
              🔒
            </div>

            <div>
              <h3>Secure</h3>

              <p>
                Protected supply chain
                records using blockchain.
              </p>
            </div>

          </div>


          {/* EASY TRACKING */}
          <div className="benefit">

            <div className="benefit-icon blue">
              📱
            </div>

            <div>
              <h3>Easy Tracking</h3>

              <p>
                Generate a unique batch ID
                for your produce.
              </p>
            </div>

          </div>


          <div className="farm-message">
            🌾 From Farm to Future
          </div>

        </div>


        {/* FORM CARD */}
        <div className="produce-card">

          <div className="produce-heading">

            <div className="produce-icon">
              🌱
            </div>

            <div>
              <h2>Produce Details</h2>
              <p>Enter your crop information</p>
            </div>

          </div>


          {/* FARMER NAME */}
          <div className="input-group">

            <label>
              👨‍🌾 Farmer Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Ravi"
              value={farmerName}
              onChange={(e) =>
                setFarmerName(e.target.value)
              }
            />

          </div>


          {/* PRODUCT + QUANTITY */}
          <div className="input-row">

            <div className="input-group">

              <label>
                🌱 Product Name <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Tomato"
                value={crop}
                onChange={(e) =>
                  setCrop(e.target.value)
                }
              />

            </div>


            <div className="input-group">

              <label>
                ⚖️ Quantity (KG) <span>*</span>
              </label>

              <div className="quantity-input">

                <input
                  type="number"
                  placeholder="e.g. 1000"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(e.target.value)
                  }
                />

                <span>KG</span>

              </div>

            </div>

          </div>


          {/* LOCATION */}
          <div className="input-group">

            <label>
              📍 Farm Location <span>*</span>
            </label>

            <input
              type="text"
              placeholder="e.g. Krishnagiri, Tamil Nadu"
              value={farmLocation}
              onChange={(e) =>
                setFarmLocation(e.target.value)
              }
            />

          </div>


          {/* DATE + QUALITY */}
          <div className="input-row">

            <div className="input-group">

              <label>
                📅 Harvest Date <span>*</span>
              </label>

              <input
                type="date"
                value={harvestDate}
                onChange={(e) =>
                  setHarvestDate(e.target.value)
                }
              />

            </div>


            <div className="input-group">

              <label>
                🏅 Quality Grade <span>*</span>
              </label>

              <select
                value={qualityGrade}
                onChange={(e) =>
                  setQualityGrade(e.target.value)
                }
              >

                <option value="">
                  Select Grade
                </option>

                <option value="Grade A - Premium">
                  Grade A - Premium
                </option>

                <option value="Grade B - Good">
                  Grade B - Good
                </option>

                <option value="Grade C - Standard">
                  Grade C - Standard
                </option>

              </select>

            </div>

          </div>


          {/* REGISTER BUTTON */}
          <button
            className="register-button"
            onClick={registerProduce}
            disabled={loading}
          >

            {loading
              ? "Registering..."
              : "🌿 Register Produce"}

            <span>→</span>

          </button>


          {/* MESSAGE */}
          {message && (
            <div className="security-message">

              <span>
                {message}
              </span>

            </div>
          )}


          {/* BATCH ID */}
          {batchId && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "#e8f5e9",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >

              <h3>
                🌾 Batch Created Successfully
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#2e7d32",
                }}
              >
                {batchId}
              </p>

              <p>
                Save this Batch ID to track your produce.
              </p>

            </div>
          )}


          {/* SECURITY MESSAGE */}
          <div className="security-message">

            🔒

            <span>
              Your information is securely recorded in
              the AgriTrace system.
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Farmer;