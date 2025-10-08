import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/MinSide");
  };

  return (
    <div style={styles.container}>
      {/* Top bar */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 style={styles.title}>Hjem</h2>
        <button style={styles.profileButton} onClick={handleProfileClick}>👤</button>
      </div>

      {/* Main content */}
      <div style={styles.main}>
        <button style={styles.greenButton}>Nytt utslipp</button>
        <button style={styles.whiteButton}>Rapporter</button>
      </div>

      {/* Optional logout at bottom */}
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logg ut
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#e5e5e5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#e5e5e5",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  backButton: {
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  profileButton: {
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  greenButton: {
    backgroundColor: "#228B22",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 60px",
    fontSize: "16px",
    cursor: "pointer",
  },
  whiteButton: {
    backgroundColor: "white",
    color: "#228B22",
    border: "2px solid #228B22",
    borderRadius: "8px",
    padding: "12px 60px",
    fontSize: "16px",
    cursor: "pointer",
  },
  logoutButton: {
    marginBottom: "20px",
    backgroundColor: "transparent",
    color: "#555",
    border: "none",
    cursor: "pointer",
  },
};
