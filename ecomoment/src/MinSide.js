import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function MinSide() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleInnstillinger = () => {
    navigate("/Innstillinger");
  };

  return (
    <div style={styles.container}>
      {/* Top bar */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleGoBack}>
          ←
        </button>
        <h2 style={styles.title}>Min Side</h2>
        <div style={styles.placeholder}></div>
      </div>

      {/* Main content */}
      <div style={styles.main}>
        <div style={styles.profileSection}>
          <div style={styles.profileIcon}>👤</div>
          <h3 style={styles.profileTitle}>Profil Innstillinger</h3>
        </div>

        <div style={styles.menuSection}>
          <button style={styles.menuItem} onClick={handleInnstillinger}>
            <span style={styles.menuText}>Innstillinger</span>
          </button>
          
          <button style={styles.menuItem}>
            <span style={styles.menuText}>Rediger Kjøretøy</span>
          </button>
          
          <button style={styles.menuItem}>
            <span style={styles.menuText}>Mine Utslipp</span>
          </button>
          
          <button style={styles.logoutButton}>
            <span style={styles.menuText}>Logg ut</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#e5e5e5",
    display: "flex",
    flexDirection: "column",
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
    margin: 0,
  },
  backButton: {
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "5px",
  },
  placeholder: {
    width: "32px", // Same width as back button for centering
  },
  main: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  profileSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    paddingBottom: "20px",
    borderBottom: "1px solid #ccc",
  },
  profileIcon: {
    fontSize: "60px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  profileTitle: {
    margin: 0,
    fontSize: "18px",
    color: "#333",
  },
  menuSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#228B22",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "16px 15px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease",
    width: "220px",
    height: "50px",
    minWidth: "220px",
    maxWidth: "220px",
    minHeight: "50px",
    maxHeight: "50px",
  },
  menuText: {
    fontSize: "18px",
    color: "white",
    fontWeight: "900",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  logoutButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px",
    padding: "16px 15px",
    fontWeight: "900",
    boxShadow: "0 2px 8px rgba(244,67,54,0.3)",
    transition: "all 0.2s ease",
    width: "220px",
    height: "50px",
    minWidth: "220px",
    maxWidth: "220px",
    minHeight: "50px",
    maxHeight: "50px",
  },
};