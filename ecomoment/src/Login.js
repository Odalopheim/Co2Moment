// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert("Feil ved innlogging: " + error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Bruker opprettet!");
    } catch (error) {
      alert("Feil ved registrering: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Logg inn</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>
        Logg inn
      </button>
      <button style={styles.button} onClick={handleSignup}>
        Registrer deg
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f2f2f2",
  },
  input: {
    margin: "8px",
    padding: "10px",
    width: "250px",
  },
  button: {
    margin: "8px",
    padding: "10px",
    width: "150px",
    cursor: "pointer",
  },
};
