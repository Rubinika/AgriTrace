function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-title">
        <h1>Agricultural Supply Chain</h1>
        <p>
          Track agricultural products from farm to consumer
        </p>
      </div>

      <div className="stats">

        <div className="stat-card">
          <div className="icon">📦</div>
          <h3>125</h3>
          <p>Total Batches</p>
        </div>

        <div className="stat-card">
          <div className="icon">🚚</div>
          <h3>42</h3>
          <p>In Transit</p>
        </div>

        <div className="stat-card">
          <div className="icon">✓</div>
          <h3>68</h3>
          <p>Verified</p>
        </div>

        <div className="stat-card">
          <div className="icon">👨‍🌾</div>
          <h3>35</h3>
          <p>Farmers</p>
        </div>

      </div>

      <div className="table-container">

        <h2>Recent Batches</h2>

        <table>

          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>AGR-TOM-001</td>
              <td>🍅 Tomato</td>
              <td>1000 KG</td>
              <td>Krishnagiri</td>
              <td>
                <span className="status verified">
                  ✓ Verified
                </span>
              </td>
            </tr>

            <tr>
              <td>AGR-RIC-002</td>
              <td>🌾 Rice</td>
              <td>2000 KG</td>
              <td>Thanjavur</td>
              <td>
                <span className="status transit">
                  🚚 In Transit
                </span>
              </td>
            </tr>

            <tr>
              <td>AGR-ONI-003</td>
              <td>🧅 Onion</td>
              <td>750 KG</td>
              <td>Salem</td>
              <td>
                <span className="status verified">
                  ✓ Verified
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;