import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import API_URL from "../api";
import { QRCodeSVG } from "qrcode.react";

function Farmer() {
  const { t } = useLanguage();

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
      setMessage(t.fillRequired);
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setBatchId("");

      const response = await fetch(`${API_URL}/api/batches`, {
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
      });

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
        setMessage(data.message || t.somethingWrong);
      }
    } catch (error) {
      console.error("Backend Error:", error);
      setMessage(t.backendError);
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
            🌿 {t.farmerPortal}
          </div>

          <h1>
            {t.registerYour} <span>{t.produce}</span>
          </h1>

          <p>
            {t.farmerDescription}
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

            <h2>{t.whyRegister}</h2>

          </div>

          <p className="why-description">
            {t.registerDescription}
          </p>


          {/* TRACEABLE */}
          <div className="benefit">

            <div className="benefit-icon green">
              🛡️
            </div>

            <div>
              <h3>{t.traceableTitle}</h3>

              <p>
                {t.traceableDescription}
              </p>
            </div>

          </div>


          {/* SECURE */}
          <div className="benefit">

            <div className="benefit-icon orange">
              🔒
            </div>

            <div>
              <h3>{t.secureTitle}</h3>

              <p>
                {t.secureDescription}
              </p>
            </div>

          </div>


          {/* EASY TRACKING */}
          <div className="benefit">

            <div className="benefit-icon blue">
              📱
            </div>

            <div>
              <h3>{t.easyTracking}</h3>

              <p>
                {t.easyTrackingDescription}
              </p>
            </div>

          </div>


          <div className="farm-message">
            🌾 {t.fromFarmToFuture}
          </div>

        </div>


        {/* FORM CARD */}
        <div className="produce-card">

          <div className="produce-heading">

            <div className="produce-icon">
              🌱
            </div>

            <div>
              <h2>{t.produceDetails}</h2>
              <p>{t.enterCropInformation}</p>
            </div>

          </div>


          {/* FARMER NAME */}
          <div className="input-group">

            <label>
              👨‍🌾 {t.farmerName} <span>*</span>
            </label>

            <input
              type="text"
              placeholder={t.farmerNamePlaceholder}
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
                🌱 {t.productName} <span>*</span>
              </label>

              <input
                type="text"
                placeholder={t.productPlaceholder}
                value={crop}
                onChange={(e) =>
                  setCrop(e.target.value)
                }
              />

            </div>


            <div className="input-group">

              <label>
                ⚖️ {t.quantityKg} <span>*</span>
              </label>

              <div className="quantity-input">

                <input
                  type="number"
                  placeholder={t.quantityPlaceholder}
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
              📍 {t.farmLocation} <span>*</span>
            </label>

            <input
              type="text"
              placeholder={t.locationPlaceholder}
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
                📅 {t.harvestDate} <span>*</span>
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
                🏅 {t.qualityGrade} <span>*</span>
              </label>

              <select
                value={qualityGrade}
                onChange={(e) =>
                  setQualityGrade(e.target.value)
                }
              >

                <option value="">
                  {t.selectGrade}
                </option>

                <option value="Grade A - Premium">
                  {t.gradeA}
                </option>

                <option value="Grade B - Good">
                  {t.gradeB}
                </option>

                <option value="Grade C - Standard">
                  {t.gradeC}
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
              ? t.registering
              : `🌿 ${t.registerProduce}`}

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


          {/* BATCH ID + QR CODE */}
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
                🌾 {t.batchCreated}
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
                {t.saveBatchId}
              </p>


              {/* QR CODE */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >

                <QRCodeSVG
                  value={`${window.location.origin}/consumer?batchId=${batchId}`}
                  size={180}
                  level="H"
                  includeMargin={true}
                />

                <p
                  style={{
                    margin: "5px 0 0",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  Scan QR to Track This Batch
                </p>

              </div>

            </div>
          )}


          {/* SECURITY MESSAGE */}
          <div className="security-message">

            🔒

            <span>
              {t.secureInformation}
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Farmer;