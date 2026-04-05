import { useState } from "react";
import { TEAL, DARK_NAVY, LIGHT_TEAL_BG } from "../styles/theme";
import { PageHeader } from "../components/UI";

const contactInfoItems = [
  { icon: "📍", label: "Our Office", value: "123 Street, New York, USA" },
  { icon: "📞", label: "Call Us", value: "+012 345 67890" },
  { icon: "✉️", label: "Email Us", value: "info@elearning.com" },
  { icon: "⏰", label: "Open Hours", value: "Mon–Fri: 9AM – 6PM" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #ddd",
    borderRadius: 2,
    fontFamily: "'Lato', sans-serif",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact"
        imgSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1400&q=80"
      />

      {/* Info Cards */}
      <div style={{ display: "flex", gap: 24, padding: "60px 60px 0", flexWrap: "wrap", justifyContent: "center" }}>
        {contactInfoItems.map((item, i) => (
          <div
            key={i}
            style={{ background: LIGHT_TEAL_BG, padding: "32px 24px", borderRadius: 4, textAlign: "center", flex: "1 1 180px", maxWidth: 220, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: DARK_NAVY, marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#666" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Form + Map */}
      <div style={{ padding: "60px 60px", display: "flex", gap: 60, flexWrap: "wrap" }}>
        {/* Form */}
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: 2, fontFamily: "'Poppins', sans-serif" }}>CONTACT US</span>
            <span style={{ height: 2, width: 50, background: TEAL, display: "block" }} />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY, marginBottom: 24 }}>Get In Touch</h2>

          {submitted && (
            <div style={{ background: "#e8f8f9", border: `2px solid ${TEAL}`, color: TEAL, padding: "14px 20px", borderRadius: 4, marginBottom: 20, fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              ✓ Message sent! We will get back to you soon.
            </div>
          )}

          <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={{ ...inputStyle, flex: "1 1 160px" }} />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" style={{ ...inputStyle, flex: "1 1 160px" }} />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" style={{ ...inputStyle, marginBottom: 16 }} />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={6} style={{ ...inputStyle, resize: "vertical", marginBottom: 20 }} />
          <button
            onClick={handleSubmit}
            style={{ background: TEAL, color: "#fff", padding: "14px 36px", border: "none", borderRadius: 2, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.background = "#00a5bb"}
            onMouseLeave={e => e.currentTarget.style.background = TEAL}
          >
            Send Message
          </button>
        </div>

        {/* Map Placeholder */}
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ width: "100%", height: "100%", minHeight: 400, background: LIGHT_TEAL_BG, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `2px dashed ${TEAL}` }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🗺️</div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: TEAL, fontSize: 18 }}>Our Location</p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#777", fontSize: 14 }}>123 Street, New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
