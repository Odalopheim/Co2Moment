import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS for input focus effects
const inputStyles = `
  .custom-input:focus {
    border-color: #228B22 !important;
    box-shadow: 0 0 0 3px rgba(34,139,34,0.1) !important;
  }
  .custom-input:hover {
    border-color: #4CAF50 !important;
  }
`;

export default function Innstillinger() {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    fornavn: '',
    etternavn: '',
    epost: '',
    arbeidsplass: '',
    telefon: ''
  });

  // State for save status
  const [isSaved, setIsSaved] = useState(false);

  const handleGoBack = () => {
    navigate("/MinSide");
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsSaved(false); // Reset save status when user types
  };

  // Handle form save
  const handleSave = () => {
    // Save to localStorage (you can change this to API call later)
    localStorage.setItem('userSettings', JSON.stringify(formData));
    
    // Show success message
    setIsSaved(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
    
    console.log('Saved data:', formData);
  };

  return (
    <div style={styles.container}>
      <style>{inputStyles}</style>
      {/* Top bar */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleGoBack}>
          ←
        </button>
        <h2 style={styles.title}>Innstillinger</h2>
        <div style={styles.placeholder}></div>
      </div>

      {/* Main content */}
      <div style={styles.main}>
        <div style={styles.settingsSection}>
          <h3 style={styles.sectionTitle}>Personlig Innstillinger</h3>
          
          <div style={styles.settingItem}>
            <span style={styles.settingLabel}>Fornavn</span>
            <input 
              type="text" 
              placeholder="Skriv inn fornavn"
              className="custom-input"
              style={styles.settingInput}
              value={formData.fornavn}
              onChange={(e) => handleInputChange('fornavn', e.target.value)}
            />
          </div>

          <div style={styles.settingItem}>
            <span style={styles.settingLabel}>Etternavn</span>
            <input 
              type="text" 
              placeholder="Skriv inn etternavn"
              className="custom-input"
              style={styles.settingInput}
              value={formData.etternavn}
              onChange={(e) => handleInputChange('etternavn', e.target.value)}
            />
          </div>

          <div style={styles.settingItem}>
            <span style={styles.settingLabel}>E-post</span>
            <input 
              type="email" 
              placeholder="din@epost.no"
              className="custom-input"
              style={styles.settingInput}
              value={formData.epost}
              onChange={(e) => handleInputChange('epost', e.target.value)}
            />
          </div>

          <div style={styles.settingItem}>
            <span style={styles.settingLabel}>Arbeidsplass</span>
            <input 
              type="text" 
              placeholder="Skriv inn arbeidsplass"
              className="custom-input"
              style={styles.settingInput}
              value={formData.arbeidsplass}
              onChange={(e) => handleInputChange('arbeidsplass', e.target.value)}
            />
          </div>

          <div style={styles.settingItem}>
            <span style={styles.settingLabel}>Telefon</span>
            <input 
              type="tel" 
              placeholder="+47 123 45 678"
              className="custom-input"
              style={styles.settingInput}
              value={formData.telefon}
              onChange={(e) => handleInputChange('telefon', e.target.value)}
            />
          </div>
        </div>

        <div style={styles.buttonSection}>
          {isSaved && (
            <div style={styles.successMessage}>
              ✅ Endringer lagret!
            </div>
          )}
          <button style={styles.saveButton} onClick={handleSave}>
            Lagre Endringer
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
    width: "32px",
  },
  main: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    overflowY: "auto",
  },
  settingsSection: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
    color: "#333",
  },
  settingItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  settingLabel: {
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
    minWidth: "120px",
  },
  settingInput: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "2px solid #e0e0e0",
    fontSize: "16px",
    backgroundColor: "#fff",
    width: "220px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  buttonSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    gap: "15px",
  },
  successMessage: {
    padding: "10px 20px",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  saveButton: {
    padding: "15px 40px",
    backgroundColor: "#228B22",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 8px rgba(34,139,34,0.3)",
    transition: "all 0.2s ease",
  },
};