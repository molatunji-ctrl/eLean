import { Link } from "react-router-dom";
import { TEAL, DARK_NAVY } from "../styles/theme";
import { instructors } from "../data/data";
import { FeatureCard, InstructorCard, PageHeader } from "../components/UI";

const stats = [
  { number: "5000+", label: "Students Enrolled" },
  { number: "200+", label: "Online Courses" },
  { number: "50+", label: "Expert Instructors" },
  { number: "15+", label: "Years Experience" },
];

function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="About Us"
        breadcrumb="Home / Pages / About"
        imgSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
      />

      {/* Feature Cards */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FeatureCard icon="🎓" title="Skilled Instructors" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
        <FeatureCard icon="🌐" title="Online Classes" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
        <FeatureCard icon="🏠" title="Home Projects" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
        <FeatureCard icon="📖" title="Book Library" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
      </div>

      {/* About Content */}
      <div style={{ display: "flex", alignItems: "center", gap: 60, padding: "80px 60px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px" }}>
          <img
            src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=700&q=80"
            alt="about"
            style={{ width: "100%", borderRadius: 4, objectFit: "cover", height: 420 }}
          />
        </div>
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: 2, fontFamily: "'Poppins', sans-serif" }}>ABOUT US</span>
            <span style={{ height: 2, width: 50, background: TEAL, display: "block" }} />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 36, color: DARK_NAVY, marginBottom: 20 }}>Welcome to eLEARNING</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
            We are a passionate team of educators and technologists committed to making quality education accessible to everyone. Our platform offers expertly crafted courses taught by industry professionals.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>
            From beginner to advanced, our learning paths are designed to help you grow at your own pace, earn internationally recognized certificates, and connect with a global community of learners.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 32 }}>
            {["Skilled Instructors", "Online Classes", "International Certificate", "Home Projects", "Book Library", "24/7 Support"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#444" }}>
                <span style={{ color: TEAL }}>→</span> {item}
              </div>
            ))}
          </div>
          <Link to="/services" style={{ background: TEAL, color: "#fff", padding: "14px 30px", textDecoration: "none", fontFamily: "'Poppins', sans-serif", fontWeight: 600, borderRadius: 2, display: "inline-block" }}>
            Our Courses
          </Link>
        </div>
      </div>

      {/* Stats Banner */}
      <div style={{ background: TEAL, padding: "60px 60px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 48 }}>{stat.number}</div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Lato', sans-serif", fontSize: 16 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Instructors */}
      <div style={{ padding: "60px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 50, height: 2, background: TEAL, display: "block" }} />
            <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: 2, fontFamily: "'Poppins', sans-serif" }}>INSTRUCTORS</span>
            <span style={{ width: 50, height: 2, background: TEAL, display: "block" }} />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY }}>Expert Instructors</h2>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {instructors.map((inst, i) => (
            <InstructorCard key={i} {...inst} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
