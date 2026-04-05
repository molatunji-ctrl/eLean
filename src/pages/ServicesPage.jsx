import { useState } from "react";
import { TEAL, DARK_NAVY } from "../styles/theme";
import { courses, categories } from "../data/data";
import { CourseCard, SectionLabel, PageHeader } from "../components/UI";

const filters = ["All", "Web Design", "Development", "Marketing", "Data Science"];

function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Our Courses"
        breadcrumb="Home / Courses"
        imgSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80"
      />

      {/* Categories Section */}
      <div style={{ padding: "60px 60px", background: "#f9fafb" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel text="CATEGORIES" />
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY }}>Courses Categories</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{ position: "relative", borderRadius: 4, overflow: "hidden", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.querySelector(".cat-overlay").style.background = "rgba(0,188,212,0.55)"}
              onMouseLeave={e => e.currentTarget.querySelector(".cat-overlay").style.background = "rgba(0,0,0,0.3)"}
            >
              <img src={cat.img} alt={cat.name} style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
              <div className="cat-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", transition: "background 0.3s" }} />
              <div style={{ position: "absolute", bottom: 16, right: 16, background: "#fff", padding: "10px 18px", borderRadius: 2 }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: DARK_NAVY }}>{cat.name}</div>
                <div style={{ color: TEAL, fontFamily: "'Lato', sans-serif", fontSize: 13 }}>{cat.count} Courses</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter + Course Grid */}
      <div style={{ padding: "60px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <SectionLabel text="COURSES" />
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 34, color: DARK_NAVY, marginBottom: 24 }}>Popular Courses</h2>

          {/* Filter Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 20px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600, fontSize: 13, cursor: "pointer",
                  border: `2px solid ${TEAL}`, borderRadius: 2,
                  background: activeFilter === f ? TEAL : "transparent",
                  color: activeFilter === f ? "#fff" : TEAL,
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
