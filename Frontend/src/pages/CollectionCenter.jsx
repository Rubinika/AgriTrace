import { useLanguage } from "../LanguageContext";

function CollectionCenter() {
  const { t } = useLanguage();

  return (
    <div className="collection-page">

      {/* HERO */}
      <section className="collection-hero">

        <div>
          <div className="collection-badge">
            📦 {t.collectionPortal}
          </div>

          <h1>
            {t.receiveAnd} <span>{t.verify}</span> {t.produce}
          </h1>

          <p>
            {t.collectionDescription}
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

            <h2>{t.batchVerification}</h2>

          </div>

          <p>
            {t.batchVerificationDescription}
          </p>


          {/* STEP 01 */}
          <div className="collection-step">

            <div className="collection-step-number">
              01
            </div>

            <div>
              <h3>{t.identifyBatch}</h3>

              <p>
                {t.identifyBatchDescription}
              </p>
            </div>

          </div>


          {/* STEP 02 */}
          <div className="collection-step">

            <div className="collection-step-number">
              02
            </div>

            <div>
              <h3>{t.checkQuality}</h3>

              <p>
                {t.checkQualityDescription}
              </p>
            </div>

          </div>


          {/* STEP 03 */}
          <div className="collection-step">

            <div className="collection-step-number">
              03
            </div>

            <div>
              <h3>{t.confirmReceipt}</h3>

              <p>
                {t.confirmReceiptDescription}
              </p>
            </div>

          </div>


          <div className="verified-box">
            ✓ {t.secureBatchVerification}
          </div>

        </div>


        {/* FORM */}
        <div className="collection-form-card">

          <div className="collection-form-heading">

            <div className="collection-form-icon">
              📋
            </div>

            <div>
              <h2>{t.batchDetails}</h2>

              <p>
                {t.receivedProduceInformation}
              </p>
            </div>

          </div>


          {/* BATCH ID */}
          <div className="collection-input">

            <label>
              🆔 {t.batchId} <span>*</span>
            </label>

            <input
              type="text"
              placeholder={t.batchIdPlaceholder}
            />

            <small>
              {t.batchIdHelp}
            </small>

          </div>


          {/* QUANTITY */}
          <div className="collection-input">

            <label>
              ⚖️ {t.receivedQuantity} <span>*</span>
            </label>

            <div className="collection-quantity">

              <input
                type="number"
                placeholder={t.receivedQuantityPlaceholder}
              />

              <span>KG</span>

            </div>

          </div>


          {/* QUALITY */}
          <div className="collection-input">

            <label>
              🏅 {t.qualityGrade} <span>*</span>
            </label>

            <select>

              <option value="">
                {t.selectQualityGrade}
              </option>

              <option>
                {t.gradeA}
              </option>

              <option>
                {t.gradeB}
              </option>

              <option>
                {t.gradeC}
              </option>

            </select>

          </div>


          {/* CENTER LOCATION */}
          <div className="collection-input">

            <label>
              📍 {t.collectionCenter} <span>*</span>
            </label>

            <input
              type="text"
              placeholder={t.collectionCenterPlaceholder}
            />

          </div>


          {/* BUTTON */}
          <button className="confirm-button">

            ✓ {t.confirmBatchReceipt}

            <span>→</span>

          </button>


          <div className="collection-security">

            🔒

            <span>
              {t.collectionSecurity}
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CollectionCenter;