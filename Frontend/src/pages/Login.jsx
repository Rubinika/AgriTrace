import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="login-page">

      {/* LEFT SECTION */}
      <div className="login-left">

        <div className="login-brand">
          <div className="login-brand-icon">🌾</div>

          <div>
            <h2>AgriTrace</h2>
            <p>SMART • SECURE • TRANSPARENT</p>
          </div>
        </div>

        <div className="login-left-content">

          <div className="login-badge">
            🌱 Supply Chain Transparency
          </div>

          <h1>
            Welcome to
            <br />
            <span>AgriTrace</span>
          </h1>

          <p>
            Track every step of your agricultural product
            journey from farm to consumer with transparency,
            security and trust.
          </p>

          <div className="login-stats">

            <div>
              <strong>100%</strong>
              <span>Traceable</span>
            </div>

            <div>
              <strong>🔗</strong>
              <span>Blockchain</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Verified</span>
            </div>

          </div>

        </div>

        <div className="login-farm">
          <span className="login-sun">☀️</span>
          <span className="login-cloud cloud-1">☁️</span>
          <span className="login-cloud cloud-2">☁️</span>

          <div className="login-hill hill-1"></div>
          <div className="login-hill hill-2"></div>

          <span className="login-crop crop-1">🌾</span>
          <span className="login-crop crop-2">🌾</span>
          <span className="login-crop crop-3">🌾</span>

          <span className="login-farmer">👨‍🌾</span>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">

        <div className="login-form-container">

          <div className="login-heading">

            <div className="login-lock">
              🔐
            </div>

            <div>
              <small>WELCOME BACK</small>
              <h2>Login</h2>
            </div>

          </div>

          <p className="login-subtitle">
            Sign in to access your AgriTrace dashboard.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="login-field">

              <label>Email Address</label>

              <div className="login-input-box">

                <span>✉️</span>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="login-field">

              <label>Password</label>

              <div className="login-input-box">

                <span>🔒</span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* OPTIONS */}
            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-button"
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-submit-button"
            >
              Login
              <span>→</span>
            </button>

          </form>

          <div className="login-or">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="create-account">
            Don't have an account?
            <button type="button">
              Create Account
            </button>
          </div>

          <div className="login-security">
            🛡️
            <div>
              <strong>Secure Access</strong>
              <p>
                Your information is securely protected.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;