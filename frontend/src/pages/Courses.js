import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courseList = [
  {
    id: 1,
    emoji: "🌐",
    title: "Web Development",
    desc: "Master HTML, CSS & JavaScript from scratch",
    duration: "8 weeks",
    level: "Beginner",
    students: 1240,
    rating: "4.8",
    about:
      "This course covers everything you need to become a front-end web developer. You will learn how to build beautiful, responsive websites using HTML, CSS, and JavaScript. By the end you will have built 5 real projects for your portfolio.",
    topics: [
      "HTML5 & Semantic Tags",
      "CSS Flexbox & Grid",
      "JavaScript Basics",
      "DOM Manipulation",
      "Responsive Design",
      "Building Real Projects",
    ],
    videos: [
      {
        title: "Introduction to HTML",
        duration: "12 min",
        url: "https://www.youtube.com/embed/qz0aGYrrlhU",
      },
      {
        title: "CSS Basics & Styling",
        duration: "18 min",
        url: "https://www.youtube.com/embed/yfoY53QXEnI",
      },
      {
        title: "JavaScript for Beginners",
        duration: "22 min",
        url: "https://www.youtube.com/embed/W6NZfCO5SIk",
      },
    ],
  },
  {
    id: 2,
    emoji: "📊",
    title: "Data Science",
    desc: "Python, Pandas & Machine Learning basics",
    duration: "10 weeks",
    level: "Intermediate",
    students: 980,
    rating: "4.7",
    about:
      "Dive into the world of data with Python. This course teaches you how to collect, clean, analyze, and visualize data using powerful tools like Pandas, NumPy, and Matplotlib. You will also get an introduction to Machine Learning.",
    topics: [
      "Python Fundamentals",
      "NumPy & Pandas",
      "Data Visualization",
      "Statistics Basics",
      "Machine Learning Intro",
      "Real Data Projects",
    ],
    videos: [
      {
        title: "Python for Data Science",
        duration: "20 min",
        url: "https://www.youtube.com/embed/LHBE6Q9XlzI",
      },
      {
        title: "Pandas Tutorial",
        duration: "25 min",
        url: "https://www.youtube.com/embed/vmEHCJofslg",
      },
      {
        title: "Intro to Machine Learning",
        duration: "30 min",
        url: "https://www.youtube.com/embed/Gv9_4yMHFhI",
      },
    ],
  },
  {
    id: 3,
    emoji: "🎨",
    title: "UI/UX Design",
    desc: "Create stunning designs using Figma",
    duration: "6 weeks",
    level: "Beginner",
    students: 760,
    rating: "4.9",
    about:
      "Learn the art and science of designing beautiful user interfaces. This course walks you through design principles, wireframing, prototyping, and building real UI designs in Figma. No experience needed!",
    topics: [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Wireframing",
      "Figma Basics",
      "Prototyping",
    ],
    videos: [
      {
        title: "Intro to UI/UX Design",
        duration: "15 min",
        url: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        title: "Figma for Beginners",
        duration: "20 min",
        url: "https://www.youtube.com/embed/FTFaQWZBqQ8",
      },
      {
        title: "Building a Design System",
        duration: "18 min",
        url: "https://www.youtube.com/embed/Dtd40cHQQlk",
      },
    ],
  },
  {
    id: 4,
    emoji: "⚛️",
    title: "React JS",
    desc: "Build modern web apps with React",
    duration: "8 weeks",
    level: "Intermediate",
    students: 1100,
    rating: "4.8",
    about:
      "React is the most popular JavaScript library for building user interfaces. In this course you will learn components, hooks, state management, and how to build full modern web applications from scratch.",
    topics: [
      "React Components",
      "Props & State",
      "React Hooks",
      "React Router",
      "API Integration",
      "Building Full Apps",
    ],
    videos: [
      {
        title: "React JS Crash Course",
        duration: "28 min",
        url: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      },
      {
        title: "React Hooks Explained",
        duration: "22 min",
        url: "https://www.youtube.com/embed/TNhaISOUy6Q",
      },
      {
        title: "React Router Tutorial",
        duration: "18 min",
        url: "https://www.youtube.com/embed/Law7wfdg_ls",
      },
    ],
  },
  {
    id: 5,
    emoji: "🖥️",
    title: "Node JS",
    desc: "Backend development with Node & Express",
    duration: "7 weeks",
    level: "Intermediate",
    students: 890,
    rating: "4.6",
    about:
      "Learn how to build powerful backend servers using Node.js and Express. This course covers REST APIs, database integration with MongoDB, authentication, and deploying your own backend applications.",
    topics: [
      "Node.js Basics",
      "Express Framework",
      "REST APIs",
      "MongoDB Integration",
      "Authentication",
      "Deployment",
    ],
    videos: [
      {
        title: "Node.js Crash Course",
        duration: "24 min",
        url: "https://www.youtube.com/embed/fBNz5xF-Kx4",
      },
      {
        title: "Express.js Tutorial",
        duration: "20 min",
        url: "https://www.youtube.com/embed/L72fhGm1tfE",
      },
      {
        title: "REST API with Node",
        duration: "26 min",
        url: "https://www.youtube.com/embed/pKd0Rpw7O48",
      },
    ],
  },
  {
    id: 6,
    emoji: "📱",
    title: "Mobile Dev",
    desc: "Build iOS & Android apps with React Native",
    duration: "12 weeks",
    level: "Advanced",
    students: 540,
    rating: "4.7",
    about:
      "Build real mobile apps for both iOS and Android using React Native. This advanced course covers navigation, device features, state management, and publishing your app to the App Store and Google Play.",
    topics: [
      "React Native Basics",
      "Navigation",
      "Device Features",
      "State Management",
      "API Integration",
      "Publishing Apps",
    ],
    videos: [
      {
        title: "React Native Crash Course",
        duration: "30 min",
        url: "https://www.youtube.com/embed/0-S5a0eXPoc",
      },
      {
        title: "Navigation in React Native",
        duration: "22 min",
        url: "https://www.youtube.com/embed/nQVCkqvU1uE",
      },
      {
        title: "Publishing Your App",
        duration: "18 min",
        url: "https://www.youtube.com/embed/oBWBDaqNuws",
      },
    ],
  },
];

function Courses() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [viewingVideos, setViewingVideos] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  // Get enrolled courses from localStorage
  const getEnrolledCourses = () => {
    const enrolled = localStorage.getItem(`enrolled_${user?.id || "guest"}`);
    return enrolled ? JSON.parse(enrolled) : [];
  };

  const isEnrolled = (courseId) => {
    return getEnrolledCourses().some((course) => course.id === courseId);
  };

  const handleEnrollClick = (course) => {
    if (!user) {
      alert("Please login first to enroll!");
      navigate("/login");
      return;
    }
    setSelected(course);
    setEnrolling(true);
  };

  const handleViewVideos = (course) => {
    setSelected(course);
    setViewingVideos(true);
    setEnrolling(false);
  };

  // Course Detail Page
  if (selected && !enrolling && !viewingVideos) {
    return (
      <CourseDetail
        course={selected}
        user={user}
        isEnrolled={isEnrolled(selected.id)}
        onEnroll={() => setEnrolling(true)}
        onViewVideos={() => setViewingVideos(true)}
        onBack={() => setSelected(null)}
      />
    );
  }

  // Video Viewing Page (for enrolled users)
  if (selected && viewingVideos) {
    return (
      <VideoViewer
        course={selected}
        user={user}
        onBack={() => {
          setViewingVideos(false);
          setSelected(null);
        }}
      />
    );
  }

  // Enroll Page
  if (selected && enrolling) {
    return (
      <EnrollPage
        course={selected}
        user={user}
        navigate={navigate}
        onBack={() => {
          setEnrolling(false);
          setSelected(null);
        }}
      />
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#1a1a2e",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 60px",
          background: "transparent",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
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
          <span style={{ color: "#4CAF50", fontWeight: "bold" }}>Courses</span>
          {user && (
            <span
              onClick={() => navigate("/dashboard")}
              style={{ color: "#ccc", cursor: "pointer" }}
            >
              Dashboard
            </span>
          )}
          {!user && (
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "8px 20px",
                background: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          )}
          {!user && (
            <button
              onClick={() => navigate("/register")}
              style={{
                padding: "8px 20px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </button>
          )}
          {user && (
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
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
          )}
        </div>
      </nav>

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px 40px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          📚 Our Courses
        </h1>
        <p style={{ color: "#ccc", fontSize: "16px" }}>
          Click any course to explore details and video tutorials
        </p>
        {!user && (
          <p style={{ color: "#ccc", fontSize: "14px", marginTop: "10px" }}>
            ⚠️{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#4CAF50", cursor: "pointer" }}
            >
              Login
            </span>{" "}
            or{" "}
            <span
              onClick={() => navigate("/register")}
              style={{ color: "#4CAF50", cursor: "pointer" }}
            >
              Sign Up
            </span>{" "}
            to enroll
          </p>
        )}
      </div>

      {/* Course Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          padding: "20px 40px 60px",
        }}
      >
        {courseList.map((course) => (
          <div
            key={course.id}
            style={{
              background: "white",
              border: "none",
              borderRadius: "16px",
              padding: "24px",
              width: "250px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
            onClick={() => {
              setSelected(course);
              setEnrolling(false);
            }}
          >
            <div style={{ fontSize: "44px", marginBottom: "12px" }}>
              {course.emoji}
            </div>
            <h3 style={{ color: "#1a1a2e", margin: "0 0 8px" }}>
              {course.title}
            </h3>
            <p
              style={{ color: "#888", fontSize: "13px", marginBottom: "12px" }}
            >
              {course.desc}
            </p>
            <p style={{ color: "#888", fontSize: "12px", margin: "0 0 4px" }}>
              ⏱ {course.duration} &nbsp; 📶 {course.level}
            </p>
            <p style={{ color: "#888", fontSize: "12px", margin: "0 0 16px" }}>
              ⭐ {course.rating}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isEnrolled(course.id)) {
                  handleViewVideos(course);
                } else {
                  handleEnrollClick(course);
                }
              }}
              style={{
                width: "100%",
                padding: "10px",
                background: isEnrolled(course.id)
                  ? "#2196F3"
                  : user
                    ? "#4CAF50"
                    : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {isEnrolled(course.id)
                ? "🎬 View Videos"
                : user
                  ? "Enroll Now →"
                  : "🔒 Login to Enroll"}
            </button>
            <p style={{ color: "#4CAF50", fontSize: "12px", marginTop: "8px" }}>
              Click card to see details
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Course Detail Page
function CourseDetail({
  course,
  user,
  isEnrolled,
  onEnroll,
  onViewVideos,
  onBack,
}) {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        color: "#1a1a2e",
      }}
    >
      {/* Back */}
      <div
        style={{
          padding: "20px 40px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button
          onClick={onBack}
          style={{
            padding: "8px 18px",
            background: "transparent",
            color: "#ccc",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ← Back to Courses
        </button>
      </div>

      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}
      >
        {/* Course Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ fontSize: "60px" }}>{course.emoji}</div>
          <div>
            <h1
              style={{ margin: "0 0 8px", fontSize: "36px", color: "#1a1a2e" }}
            >
              {course.title}
            </h1>
            <p style={{ color: "#888", margin: "0 0 10px" }}>{course.desc}</p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "14px",
                color: "#888",
              }}
            >
              <span>⏱ {course.duration}</span>
              <span>📶 {course.level}</span>
              <span>⭐ {course.rating}</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div
          style={{
            background: "white",
            border: "none",
            borderRadius: "16px",
            padding: "28px",
            marginBottom: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#4CAF50", marginTop: 0 }}>
            📖 About This Course
          </h2>
          <p style={{ color: "#555", lineHeight: "1.8", fontSize: "15px" }}>
            {course.about}
          </p>
        </div>

        {/* Topics */}
        <div
          style={{
            background: "white",
            border: "none",
            borderRadius: "16px",
            padding: "28px",
            marginBottom: "24px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#4CAF50", marginTop: 0 }}>
            📋 What You Will Learn
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {course.topics.map((topic, i) => (
              <div
                key={i}
                style={{
                  background: "#e8f5e9",
                  border: "1px solid #c8e6c9",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "#2e7d32",
                  fontSize: "14px",
                }}
              >
                ✅ {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div
          style={{
            background: "white",
            border: "none",
            borderRadius: "16px",
            padding: "28px",
            marginBottom: "32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#4CAF50", marginTop: 0 }}>
            🎬 Free Preview Videos
          </h2>

          {/* Video Player */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <iframe
              width="100%"
              height="380"
              src={course.videos[activeVideo].url}
              title={course.videos[activeVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {course.videos.map((video, i) => (
              <div
                key={i}
                onClick={() => setActiveVideo(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background: activeVideo === i ? "#e8f5e9" : "#f5f7fa",
                  border: `1px solid ${activeVideo === i ? "#c8e6c9" : "#e0e0e0"}`,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "20px" }}>
                  {activeVideo === i ? "▶️" : "⏸️"}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      margin: 0,
                      color: activeVideo === i ? "#2e7d32" : "#1a1a2e",
                      fontSize: "14px",
                    }}
                  >
                    {video.title}
                  </p>
                </div>
                <span style={{ color: "#888", fontSize: "13px" }}>
                  {video.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enroll/View Videos Button */}
        {user ? (
          isEnrolled ? (
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={onViewVideos}
                style={{
                  flex: 1,
                  padding: "16px",
                  background: "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                🎬 View All Videos
              </button>
              <button
                onClick={onBack}
                style={{
                  padding: "16px 24px",
                  background: "transparent",
                  color: "#666",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Back to Courses
              </button>
            </div>
          ) : (
            <button
              onClick={onEnroll}
              style={{
                width: "100%",
                padding: "16px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Enroll in {course.title} Now 🚀
            </button>
          )
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              background: "#ffebee",
              border: "1px solid #ffcdd2",
              borderRadius: "12px",
            }}
          >
            <p style={{ color: "#c62828", margin: "0 0 12px" }}>
              Please login or sign up to enroll in this course!
            </p>
            <button
              onClick={onBack}
              style={{
                padding: "10px 24px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login to Enroll
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Enroll Page
function EnrollPage({ course, user, onBack, navigate }) {
  const [done, setDone] = useState(false);
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");

  const handleEnroll = () => {
    if (!goal || !experience) return alert("Please fill all fields!");

    // Save enrollment to localStorage
    const enrolledCourses = JSON.parse(
      localStorage.getItem(`enrolled_${user.id}`) || "[]",
    );
    const enrollmentData = {
      id: course.id,
      title: course.title,
      emoji: course.emoji,
      enrolledAt: new Date().toISOString(),
      progress: 0,
      completedVideos: [],
      goal: goal,
      experience: experience,
    };

    // Check if already enrolled
    if (!enrolledCourses.some((c) => c.id === course.id)) {
      enrolledCourses.push(enrollmentData);
      localStorage.setItem(
        `enrolled_${user.id}`,
        JSON.stringify(enrolledCourses),
      );
    }

    setDone(true);
  };

  if (done) {
    return (
      <div
        style={{
          fontFamily: "'Segoe UI', sans-serif",
          background: "#f5f7fa",
          minHeight: "100vh",
          color: "#1a1a2e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "500px",
            padding: "20px",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "80px", marginBottom: "20px" }}>🎉</div>
          <h1
            style={{ fontSize: "32px", marginBottom: "12px", color: "#1a1a2e" }}
          >
            Enrolled Successfully!
          </h1>
          <p style={{ color: "#888", fontSize: "16px", marginBottom: "8px" }}>
            Welcome to <span style={{ color: "#4CAF50" }}>{course.title}</span>,{" "}
            {user.name}!
          </p>
          <p style={{ color: "#888", fontSize: "14px", marginBottom: "32px" }}>
            Confirmation sent to {user.email}
          </p>
          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <button
              onClick={onBack}
              style={{
                padding: "12px 24px",
                background: "#666",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              ← Back to Courses
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              style={{
                padding: "12px 24px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Go to Dashboard →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        color: "#1a1a2e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "white",
          border: "none",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "6px", color: "#1a1a2e" }}>
          {course.emoji} Enroll in {course.title}
        </h2>
        <p style={{ color: "#888", marginBottom: "24px", fontSize: "14px" }}>
          {course.desc}
        </p>

        <div
          style={{
            background: "#e8f5e9",
            border: "1px solid #c8e6c9",
            borderRadius: "10px",
            padding: "14px",
            marginBottom: "24px",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#1a1a2e" }}>
            👤 <strong style={{ color: "#2e7d32" }}>{user.name}</strong>
          </p>
          <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#1a1a2e" }}>
            📧 {user.email}
          </p>
        </div>

        <label
          style={{
            display: "block",
            color: "#1a1a2e",
            fontSize: "13px",
            marginBottom: "6px",
          }}
        >
          What is your goal for this course?
        </label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "white",
            color: "#1a1a2e",
            fontSize: "14px",
          }}
        >
          <option value="" style={{ background: "white" }}>
            Select your goal
          </option>
          <option value="job" style={{ background: "white" }}>
            Get a Job
          </option>
          <option value="freelance" style={{ background: "white" }}>
            Freelancing
          </option>
          <option value="hobby" style={{ background: "white" }}>
            Personal Interest
          </option>
          <option value="upgrade" style={{ background: "white" }}>
            Upgrade My Skills
          </option>
        </select>

        <label
          style={{
            display: "block",
            color: "#1a1a2e",
            fontSize: "13px",
            marginBottom: "6px",
          }}
        >
          Your experience level?
        </label>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "24px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "white",
            color: "#1a1a2e",
            fontSize: "14px",
          }}
        >
          <option value="" style={{ background: "white" }}>
            Select experience
          </option>
          <option value="none" style={{ background: "white" }}>
            No Experience
          </option>
          <option value="beginner" style={{ background: "white" }}>
            Beginner
          </option>
          <option value="intermediate" style={{ background: "white" }}>
            Intermediate
          </option>
          <option value="advanced" style={{ background: "white" }}>
            Advanced
          </option>
        </select>

        <button
          onClick={handleEnroll}
          style={{
            width: "100%",
            padding: "14px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Confirm Enrollment ✅
        </button>
        <button
          onClick={onBack}
          style={{
            width: "100%",
            padding: "12px",
            background: "#f5f7fa",
            color: "#1a1a2e",
            border: "1px solid #ccc",
            borderRadius: "10px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          ← Back to Courses
        </button>
      </div>
    </div>
  );
}

// Video Viewer for Enrolled Users
function VideoViewer({ course, user, onBack }) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState(() => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem(`enrolled_${user.id}`) || "[]",
    );
    const courseData = enrolledCourses.find((c) => c.id === course.id);
    return courseData ? courseData.completedVideos || [] : [];
  });

  const markVideoComplete = (videoIndex) => {
    if (!watchedVideos.includes(videoIndex)) {
      const newWatched = [...watchedVideos, videoIndex];
      setWatchedVideos(newWatched);

      // Update progress in localStorage
      const enrolledCourses = JSON.parse(
        localStorage.getItem(`enrolled_${user.id}`) || "[]",
      );
      const courseIndex = enrolledCourses.findIndex((c) => c.id === course.id);
      if (courseIndex !== -1) {
        enrolledCourses[courseIndex].completedVideos = newWatched;
        enrolledCourses[courseIndex].progress = Math.round(
          (newWatched.length / course.videos.length) * 100,
        );
        localStorage.setItem(
          `enrolled_${user.id}`,
          JSON.stringify(enrolledCourses),
        );
      }
    }
  };

  const progress = Math.round(
    (watchedVideos.length / course.videos.length) * 100,
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        color: "#1a1a2e",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 40px",
          background: "white",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={onBack}
              style={{
                padding: "8px 16px",
                background: "transparent",
                color: "#666",
                border: "1px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ← Back to Courses
            </button>
            <div>
              <h1
                style={{
                  margin: "0 0 4px",
                  fontSize: "24px",
                  color: "#1a1a2e",
                }}
              >
                {course.emoji} {course.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                <span>Progress: {progress}%</span>
                <div
                  style={{
                    width: "200px",
                    height: "8px",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#4CAF50",
                      borderRadius: "4px",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
                <span>
                  {watchedVideos.length}/{course.videos.length} videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
          }}
        >
          {/* Video Player */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ margin: "0 0 16px", color: "#1a1a2e" }}>
                {course.videos[activeVideo].title}
              </h3>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <iframe
                  width="100%"
                  height="400"
                  src={course.videos[activeVideo].url}
                  title={course.videos[activeVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                onClick={() => markVideoComplete(activeVideo)}
                disabled={watchedVideos.includes(activeVideo)}
                style={{
                  padding: "12px 24px",
                  background: watchedVideos.includes(activeVideo)
                    ? "#4CAF50"
                    : "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: watchedVideos.includes(activeVideo)
                    ? "default"
                    : "pointer",
                  fontWeight: "bold",
                }}
              >
                {watchedVideos.includes(activeVideo)
                  ? "✅ Completed"
                  : "Mark as Complete"}
              </button>
            </div>
          </div>

          {/* Video List */}
          <div>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ margin: "0 0 20px", color: "#1a1a2e" }}>
                Course Videos
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {course.videos.map((video, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveVideo(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "16px",
                      background:
                        activeVideo === i
                          ? "#e3f2fd"
                          : watchedVideos.includes(i)
                            ? "#e8f5e9"
                            : "#f8f9fa",
                      border: `2px solid ${activeVideo === i ? "#2196F3" : watchedVideos.includes(i) ? "#4CAF50" : "#e0e0e0"}`,
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ fontSize: "20px" }}>
                      {activeVideo === i
                        ? "▶️"
                        : watchedVideos.includes(i)
                          ? "✅"
                          : "⏸️"}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: 0,
                          color:
                            activeVideo === i
                              ? "#1976d2"
                              : watchedVideos.includes(i)
                                ? "#2e7d32"
                                : "#1a1a2e",
                          fontSize: "14px",
                          fontWeight: activeVideo === i ? "bold" : "normal",
                        }}
                      >
                        {video.title}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: "12px",
                          color: "#666",
                        }}
                      >
                        {video.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
