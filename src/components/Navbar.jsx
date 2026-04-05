import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { TEAL } from "../styles/theme";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "sticky", top: 0, zIndex: 1000, background: "#fff",
    boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #eee",
    transition: "box-shadow 0.3s",
    display: "flex", alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px", height: 64,
  };

  const getLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? TEAL : "#333",
    fontWeight: isActive ? 700 : 500,
    fontSize: 15,
    fontFamily: "'Poppins', sans-serif",
    padding: "4px 0",
    borderBottom: isActive ? `2px solid ${TEAL}` : "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
  });

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL }}>
        <span style={{ background: TEAL, color: "#fff", borderRadius: 6, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900 }}>
          ≡
        </span>
        eLEARNING
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <NavLink to="/" style={getLinkStyle} end>HOME</NavLink>
        <NavLink to="/about" style={getLinkStyle}>ABOUT</NavLink>
        <NavLink to="/services" style={getLinkStyle}>COURSES</NavLink>
        <NavLink to="/contact" style={getLinkStyle}>CONTACT</NavLink>
      </div>

      {/* CTA */}
      <Link
        to="/contact"
        style={{ background: TEAL, color: "#fff", padding: "12px 28px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.5 }}
        onMouseEnter={e => e.currentTarget.style.background = "#00a5bb"}
        onMouseLeave={e => e.currentTarget.style.background = TEAL}
      >
        Join Now →
      </Link>
    </nav>
  );
}

export default Navbar;
