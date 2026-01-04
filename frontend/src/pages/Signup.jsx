import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", { email, password });
      login(res.data.token);
      navigate("/");
    } catch {
      setError("User already exists");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #9333ea, #a78bfa)"
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "white",
          padding: 32,
          borderRadius: 18,
          width: 380,
          boxShadow: "0 12px 32px rgba(0,0,0,.15)"
        }}
      >
        <h2 style={{ marginBottom: 18, textAlign: "center" }}>
          Create account
        </h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        {error && (
          <p style={{ color: "red", marginBottom: 10 }}>{error}</p>
        )}

        <button
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 10,
            border: 0,
            color: "white",
            background: "#7c3aed",
            cursor: "pointer"
          }}
        >
          Signup
        </button>

        <p style={{ marginTop: 14, textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}