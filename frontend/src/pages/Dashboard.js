import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  // Get real enrolled courses data
  const enrolledCourses = JSON.parse(
    localStorage.getItem(`enrolled_${user.id}`) || "[]",
  );

  // Check if user has enrolled in any courses
  if (enrolledCourses.length === 0) {
    navigate("/courses");
    return null;
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // Calculate real stats
  const totalCourses = enrolledCourses.length;
  const completedLessons = enrolledCourses.reduce(
    (total, course) => total + (course.completedVideos?.length || 0),
    0,
  );
  const totalTimeSpent = enrolledCourses.reduce((total, course) => {
    // Estimate time based on completed videos (assuming 10 min per video)
    return total + (course.completedVideos?.length || 0) * 10;
  }, 0);

  const stats = [
    { num: totalCourses.toString(), label: "Courses Enrolled" },
    { num: completedLessons.toString(), label: "Lessons Completed" },
    { num: "0", label: "Certificates Earned" },
    {
      num: `${Math.floor(totalTimeSpent / 60)}h ${totalTimeSpent % 60}m`,
      label: "Time Spent",
    },
  ];

  const recommendations = [
    { emoji: "🖥️", title: "Node JS", level: "Intermediate" },
    { emoji: "🎨", title: "UI/UX Design", level: "Beginner" },
    { emoji: "📱", title: "Mobile Dev", level: "Advanced" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        color: "#1a1a2e",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 60px",
          background: "#1a1a2e",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{ margin: 0, color: "#4CAF50", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          📚 EduLearn
        </h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <span
            onClick={() => navigate("/")}
            style={{ color: "#ccc", cursor: "pointer" }}
          >
            Home
          </span>
          <span
            onClick={() => navigate("/courses")}
            style={{ color: "#ccc", cursor: "pointer" }}
          >
            Courses
          </span>
          <span style={{ color: "#ccc" }}>👋 {user.name || "Student"}</span>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 20px",
              background: "transparent",
              color: "#ccc",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Welcome Hero */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px 40px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Welcome back, {user.name}! 🎉
        </h1>
        <p style={{ color: "#ccc", fontSize: "16px" }}>
          Keep learning and growing 🚀
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "40px 20px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "28px 32px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              minWidth: "140px",
            }}
          >
            <h2
              style={{ color: "#4CAF50", margin: "0 0 8px", fontSize: "32px" }}
            >
              {s.num}
            </h2>
            <p style={{ color: "#888", margin: 0, fontSize: "14px" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <div style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "28px", marginBottom: "24px", color: "#1a1a2e" }}
          >
            ▶️ Continue Learning
          </h2>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "28px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    minWidth: "280px",
                    flex: 1,
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                    {course.emoji}
                  </div>
                  <h3
                    style={{
                      margin: "0 0 16px",
                      fontSize: "20px",
                      color: "#1a1a2e",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "#888",
                      margin: "0 0 12px",
                      fontSize: "14px",
                    }}
                  >
                    Progress: {course.progress || 0}%
                  </p>
                  <div
                    style={{
                      height: "8px",
                      background: "#e0e0e0",
                      borderRadius: "4px",
                      marginBottom: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: "#4CAF50",
                        width: `${course.progress || 0}%`,
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                  <button
                    onClick={() => navigate("/courses")}
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Resume Course →
                  </button>
                </div>
              ))
            ) : (
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "40px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>📚</div>
                <h3 style={{ color: "#1a1a2e", margin: "0 0 12px" }}>
                  No Courses Enrolled Yet
                </h3>
                <p style={{ color: "#888", margin: "0 0 24px" }}>
                  Start your learning journey by enrolling in a course!
                </p>
                <button
                  onClick={() => navigate("/courses")}
                  style={{
                    padding: "12px 24px",
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Browse Courses →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div style={{ padding: "40px 20px", background: "#f5f7fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "28px", marginBottom: "24px", color: "#1a1a2e" }}
          >
            💡 Recommended for You
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {recommendations.map((rec, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  minWidth: "200px",
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                  {rec.emoji}
                </div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#1a1a2e",
                    fontSize: "18px",
                  }}
                >
                  {rec.title}
                </h3>
                <p
                  style={{
                    color: "#888",
                    margin: "0 0 16px",
                    fontSize: "13px",
                  }}
                >
                  {rec.level}
                </p>
                <button
                  onClick={() => navigate("/courses")}
                  style={{
                    padding: "8px 20px",
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  View →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "24px",
          background: "#1a1a2e",
          color: "#888",
        }}
      >
        <p style={{ margin: 0 }}>© 2026 EduLearn. Keep learning! 🚀</p>
      </div>
    </div>
  );
}

export default Dashboard;
