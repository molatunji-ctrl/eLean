import { useState } from "react";
import { TEAL, DARK_NAVY, LIGHT_TEAL_BG } from "../styles/theme";

// ── Section Label ──────────────────────────────────────────────────────────────
export function SectionLabel({ text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
      <span style={{ width: 50, height: 2, background: TEAL, display: "block" }} />
      <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: 2, fontFamily: "'Poppins', sans-serif" }}>{text}</span>
      <span style={{ width: 50, height: 2, background: TEAL, display: "block" }} />
    </div>
  );
}

// ── Feature Card ───────────────────────────────────────────────────────────────
export function FeatureCard({ icon, title, desc, highlighted }) {
  return (
    <div
      style={{ background: highlighted ? TEAL : LIGHT_TEAL_BG, color: highlighted ? "#fff" : DARK_NAVY, borderRadius: 4, padding: "40px 24px", textAlign: "center", flex: "1 1 200px", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,188,212,0.18)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ fontSize: 48, marginBottom: 16, color: highlighted ? "#fff" : TEAL }}>{icon}</div>
      <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, lineHeight: 1.7, opacity: 0.85 }}>{desc}</p>
    </div>
  );
}

// ── Course Card ────────────────────────────────────────────────────────────────
export function CourseCard({ img, title, price, reviews, instructor, duration, students }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ background: "#fff", borderRadius: 4, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", flex: "1 1 280px", maxWidth: 380, transition: "transform 0.2s", transform: hovered ? "translateY(-6px)" : "" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={img} alt={title} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
        {hovered && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 16, gap: 8 }}>
            <button style={{ padding: "8px 18px", background: TEAL, color: "#fff", border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>Read More</button>
            <button style={{ padding: "8px 18px", background: "transparent", color: "#fff", border: "2px solid #fff", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>Join Now</button>
          </div>
        )}
      </div>
      <div style={{ background: LIGHT_TEAL_BG, padding: "16px 20px 8px" }}>
        <div style={{ color: TEAL, fontWeight: 800, fontSize: 22, fontFamily: "'Poppins', sans-serif" }}>${price}</div>
        <div style={{ color: TEAL, fontSize: 14 }}>{"★".repeat(5)} <span style={{ color: "#555" }}>({reviews})</span></div>
      </div>
      <div style={{ padding: "12px 20px 16px" }}>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: DARK_NAVY, marginBottom: 12 }}>{title}</h3>
        <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#666", fontFamily: "'Lato', sans-serif", flexWrap: "wrap" }}>
          <span>👤 {instructor}</span>
          <span>⏱ {duration}</span>
          <span>👥 {students}</span>
        </div>
      </div>
    </div>
  );
}

// ── Instructor Card ────────────────────────────────────────────────────────────
export function InstructorCard({ name, designation, color }) {
  return (
    <div
      style={{ background: LIGHT_TEAL_BG, borderRadius: 4, overflow: "hidden", flex: "1 1 200px", maxWidth: 280, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "transform 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = ""}
    >
      <div style={{ width: "100%", height: 200, background: color || "#ccc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>👤</div>
      <div style={{ padding: "16px 16px 8px", borderTop: `3px solid ${TEAL}` }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 10 }}>
          {["f", "𝕏", "📷"].map((s, i) => (
            <span key={i} style={{ width: 32, height: 32, background: TEAL, color: "#fff", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
        <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: DARK_NAVY, marginBottom: 4 }}>{name}</h4>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#777" }}>{designation}</p>
      </div>
    </div>
  );
}

// ── Testimonial Card ───────────────────────────────────────────────────────────
export function TestimonialCard({ name, profession, text, active }) {
  return (
    <div style={{ textAlign: "center", flex: "0 0 300px", padding: "0 10px" }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#ccc", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, border: `3px solid ${TEAL}` }}>👤</div>
      <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: DARK_NAVY }}>{name}</h4>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#888", marginBottom: 16 }}>{profession}</p>
      <div style={{ background: active ? TEAL : LIGHT_TEAL_BG, color: active ? "#fff" : "#555", padding: "20px 24px", borderRadius: 2, fontFamily: "'Lato', sans-serif", fontSize: 14, lineHeight: 1.7, transition: "background 0.3s, color 0.3s" }}>
        {text}
      </div>
    </div>
  );
}

// ── Back To Top ────────────────────────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useState(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ position: "fixed", bottom: 32, right: 32, background: TEAL, color: "#fff", border: "none", borderRadius: 4, width: 44, height: 44, fontSize: 20, cursor: "pointer", zIndex: 9999, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
    >↑</button>
  );
}

// ── Page Header Banner ─────────────────────────────────────────────────────────
export function PageHeader({ title, breadcrumb, imgSrc }) {
  return (
    <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
      <img src={imgSrc} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45)", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 48, margin: 0 }}>{title}</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", marginTop: 8 }}>{breadcrumb}</p>
      </div>
    </div>
  );
}
