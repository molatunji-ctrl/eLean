import { useState } from "react";
import { Link } from "react-router-dom";
import { TEAL, DARK_NAVY } from "../styles/theme";
import { heroSlides, courses, instructors, testimonials } from "../data/data";
import { FeatureCard, CourseCard, InstructorCard, TestimonialCard, SectionLabel } from "../components/UI";

function HomePage() {
  const [slide, setSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const prevSlide = () => setSlide((slide - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((slide + 1) % heroSlides.length);

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <div style={{ position: "relative", height: "85vh", minHeight: 480, overflow: "hidden" }}>
        <img
          src={heroSlides[slide].bg}
          alt="hero"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px" }}>
          <p style={{ color: TEAL, fontWeight: 700, fontSize: 14, letterSpacing: 2, fontFamily: "'Poppins', sans-serif", marginBottom: 12 }}>
            {heroSlides[slide].label}
          </p>
          <h1 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.2, maxWidth: 700, marginBottom: 20 }}>
            {heroSlides[slide].title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Lato', sans-serif", fontSize: 16, maxWidth: 580, marginBottom: 32, lineHeight: 1.8 }}>
            {heroSlides[slide].sub}
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link to="/services" style={{ background: TEAL, color: "#fff", padding: "14px 30px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, textDecoration: "none", borderRadius: 2 }}>
              Read More
            </Link>
            <Link to="/contact" style={{ background: "transparent", color: "#fff", padding: "14px 30px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, textDecoration: "none", border: "2px solid #fff", borderRadius: 2 }}>
              Join Now
            </Link>
          </div>
        </div>
        {/* Slider Buttons */}
        <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 8 }}>
          <button onClick={prevSlide} style={{ background: "transparent", border: "2px solid #fff", color: "#fff", width: 44, height: 44, fontSize: 22, cursor: "pointer" }}>‹</button>
          <button onClick={nextSlide} style={{ background: "transparent", border: "2px solid #fff", color: "#fff", width: 44, height: 44, fontSize: 22, cursor: "pointer" }}>›</button>
        </div>
      </div>

      {/* ── FEATURE CARDS ── */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FeatureCard icon="🎓" title="Skilled Instructors" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" highlighted={true} />
        <FeatureCard icon="🌐" title="Online Classes" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
        <FeatureCard icon="🏠" title="Home Projects" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
        <FeatureCard icon="📖" title="Book Library" desc="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
      </div>

      {/* ── ABOUT US ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 60, padding: "80px 60px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px", minWidth: 280 }}>
          <img src="https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=700&q=80" alt="about" style={{ width: "100%", borderRadius: 4, objectFit: "cover", height: 420 }} />
        </div>
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ color: TEAL, fontWeight: 700, fontSize: 13, letterSpacing: 2, fontFamily: "'Poppins', sans-serif" }}>ABOUT US</span>
            <span style={{ height: 2, width: 50, background: TEAL, display: "block" }} />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(26px,3vw,38px)", color: DARK_NAVY, marginBottom: 20 }}>Welcome to eLEARNING</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 32 }}>
            {["Skilled Instructors", "Online Classes", "International Certificate", "Skilled Instructors", "Online Classes", "International Certificate"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#444" }}>
                <span style={{ color: TEAL }}>→</span> {item}
              </div>
            ))}
          </div>
          <Link to="/about" style={{ background: TEAL, color: "#fff", padding: "14px 30px", textDecoration: "none", fontFamily: "'Poppins', sans-serif", fontWeight: 600, borderRadius: 2, display: "inline-block" }}>
            Read More
          </Link>
        </div>
      </div>

      {/* ── POPULAR COURSES ── */}
      <div style={{ padding: "60px 60px", background: "#f9fafb" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel text="COURSES" />
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY }}>Popular Courses</h2>
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {courses.slice(0, 3).map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>

      {/* ── EXPERT INSTRUCTORS ── */}
      <div style={{ padding: "60px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel text="INSTRUCTORS" />
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY }}>Expert Instructors</h2>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {instructors.map((inst, i) => (
            <InstructorCard key={i} {...inst} />
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ padding: "60px 60px", background: "#f9fafb" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel text="TESTIMONIAL" />
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY }}>Our Students Say!</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {testimonials.map((t, i) => (
            <div key={i} onClick={() => setActiveTestimonial(i)} style={{ cursor: "pointer" }}>
              <TestimonialCard {...t} active={activeTestimonial === i} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTestimonial(i)}
              style={{ width: 20, height: 20, border: `2px solid ${TEAL}`, background: activeTestimonial === i ? TEAL : "transparent", cursor: "pointer", borderRadius: 2 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
