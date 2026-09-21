function Warehouse() {
  return (
    <div className="page">

      <h1>🏭 Warehouse</h1>

      <p className="page-description">
        Manage storage and product conditions
      </p>

      <div className="form-card">

        <div className="form-group">
          <label>Batch ID</label>
          <input placeholder="AGR-TOM-001" />
        </div>

        <div className="form-group">
          <label>Temperature (°C)</label>
          <input type="number" placeholder="8" />
        </div>

        <div className="form-group">
          <label>Humidity (%)</label>
          <input type="number" placeholder="65" />
        </div>

        <button className="button">
          Save Storage Details
        </button>

      </div>

    </div>
  );
}

export default Warehouse;