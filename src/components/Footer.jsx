import { useState } from "react";
import { TEAL, DARK_NAVY } from "../styles/theme";

function Footer() {
  const [email, setEmail] = useState("");
  const [signed, setSigned] = useState(false);

  const quickLinks = ["About Us", "Contact Us", "Privacy Policy", "Terms & Condition", "FAQs & Help"];

  const galleryImgs = [
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=100&q=70",
    "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=100&q=70",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&q=70",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&q=70",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=70",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&q=70",
  ];

  return (
    <footer style={{ background: DARK_NAVY, color: "#ccc", padding: "60px 60px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Quick Link</h4>
          {quickLinks.map((link, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ color: TEAL }}>›</span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.color = TEAL}
                onMouseLeave={e => e.currentTarget.style.color = "#ccc"}
              >{link}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Contact</h4>
          {[["📍", "123 Street, New York, USA"], ["📞", "+012 345 67890"], ["✉️", "info@elearning.com"]].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, fontFamily: "'Lato', sans-serif", fontSize: 14 }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {["𝕏", "f", "▶", "in"].map((s, i) => (
              <div key={i}
                style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "#ccc" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.color = TEAL; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#ccc"; }}
              >{s}</div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Gallery</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            {galleryImgs.map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: "100%", height: 64, objectFit: "cover", borderRadius: 2 }} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Newsletter</h4>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          {signed ? (
            <p style={{ color: TEAL, fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>✓ You&apos;re signed up!</p>
          ) : (
            <div style={{ display: "flex" }}>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                style={{ flex: 1, padding: "12px 14px", border: "none", outline: "none", fontFamily: "'Lato', sans-serif", fontSize: 14 }} />
              <button onClick={() => { if (email) setSigned(true); }}
                style={{ background: TEAL, color: "#fff", border: "none", padding: "0 18px", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13 }}>
                SignUp
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#888" }}>© eLEARNING, All Right Reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Home", "Cookies", "Help", "FQAs"].map((item, i) => (
            <span key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#888", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.color = TEAL}
              onMouseLeave={e => e.currentTarget.style.color = "#888"}
            >{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
