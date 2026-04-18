import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const enrolledCourses = user
    ? JSON.parse(localStorage.getItem(`enrolled_${user.id}`) || "[]")
    : [];

  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 40px",
          background: "#1a1a2e",
          color: "white",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>📚 EduLearn</h2>
        <div>
          <span
            onClick={() => navigate("/")}
            style={{ color: "#ccc", marginRight: "20px", cursor: "pointer" }}
          >
            Home
          </span>
          <span
            onClick={() => navigate("/courses")}
            style={{ color: "#ccc", marginRight: "20px", cursor: "pointer" }}
          >
            Courses
          </span>
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                style={{
                  marginRight: "10px",
                  padding: "8px 18px",
                  background: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                style={{
                  padding: "8px 18px",
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{
                padding: "8px 18px",
                background: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Main Home Content */}
      <>
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
            background: "linear-gradient(135deg, #1a1a2e, #16213e)",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
            Learn Without Limits 🚀
          </h1>
          <p
            style={{
              color: "#ccc",
              fontSize: "18px",
              maxWidth: "720px",
              margin: "0 auto 30px",
            }}
          >
            Access world-class courses in Web, Design, Data Science and more.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/courses")}
              style={{
                padding: "12px 32px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Browse Courses
            </button>
            {!user && (
              <button
                onClick={() => navigate("/register")}
                style={{
                  padding: "12px 32px",
                  background: "transparent",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Get Started Free
              </button>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            padding: "40px",
            background: "white",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2>10,000+</h2>
            <p style={{ color: "#888" }}>Students Enrolled</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>50+</h2>
            <p style={{ color: "#888" }}>Expert Courses</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>100%</h2>
            <p style={{ color: "#888" }}>Free to Join</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2>24/7</h2>
            <p style={{ color: "#888" }}>Learn Anytime</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#f5f7fa",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>Why Choose EduLearn?</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Focused Learning",
                text: "Structured courses to get you job-ready fast.",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Instructors",
                text: "Learn from real industry professionals.",
              },
              {
                icon: "📱",
                title: "Learn Anywhere",
                text: "Access from any device, anytime.",
              },
              {
                icon: "🏆",
                title: "Get Certified",
                text: "Earn certificates for your skills.",
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "16px",
                  width: "180px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "36px" }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p style={{ color: "#888", fontSize: "14px" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <h2 style={{ marginBottom: "30px" }}>Popular Courses</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { emoji: "🌐", title: "Web Development", level: "Beginner" },
              { emoji: "⚛️", title: "React JS", level: "Intermediate" },
              { emoji: "📊", title: "Data Science", level: "Intermediate" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  width: "200px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "36px" }}>{c.emoji}</div>
                <h3>{c.title}</h3>
                <p style={{ color: "#888" }}>{c.level}</p>
                <button
                  onClick={() => navigate("/courses")}
                  style={{
                    padding: "8px 20px",
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "24px",
          background: "#1a1a2e",
          color: "#888",
        }}
      >
        <p>
          © 2026 EduLearn. {user ? "Keep learning!" : "Learn, Grow, Succeed!"}{" "}
          🚀
        </p>
      </div>
    </div>
  );
}

export default Home;
