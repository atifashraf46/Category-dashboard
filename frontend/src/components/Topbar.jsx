import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Topbar() {
  const { logout } = useContext(AuthContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "14px 20px",
        background: "white",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      <button
        onClick={logout}
        style={{
          border: "1px solid #d1d5db",
          background: "white",
          borderRadius: 8,
          padding: "8px 14px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </header>
  );
}