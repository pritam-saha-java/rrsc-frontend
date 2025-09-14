import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="glow-text">Welcome to Red Riders Universe</h1>
        <p>Choose your domain — manage, play, or organize.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/club")}>🏆 Sports Club</button>
          <button onClick={() => navigate("/managements")}>📊 Managements</button>
          <button onClick={() => navigate("/complex")}>🏟️ Sports Complex</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
