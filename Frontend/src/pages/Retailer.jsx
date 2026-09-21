function Retailer() {
  return (
    <div className="page">

      <h1>🏪 Retailer</h1>

      <p className="page-description">
        Receive and verify agricultural products
      </p>

      <div className="form-card">

        <div className="form-group">
          <label>Batch ID</label>
          <input placeholder="AGR-TOM-001" />
        </div>

        <div className="form-group">
          <label>Received Quantity</label>
          <input type="number" placeholder="950 KG" />
        </div>

        <button className="button">
          Receive Product
        </button>

      </div>

    </div>
  );
}

export default Retailer;