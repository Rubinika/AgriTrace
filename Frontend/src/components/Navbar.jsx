import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import "./Navbar.css";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        🌾 <span>{t.title}</span>
      </div>

      <div className="navbar-links">
        <Link to="/">{t.home}</Link>
        <Link to="/farmer">{t.farmer}</Link>
        <Link to="/collection">{t.collection}</Link>
        <Link to="/transport">{t.transport}</Link>
        <Link to="/consumer">{t.consumer}</Link>
        <Link to="/about">{t.about}</Link>
      </div>

      <div className="navbar-right">

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
        </select>

        <Link to="/login" className="login-button">
          {t.login}
        </Link>

        <div className="admin">
          👤 {t.admin}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;