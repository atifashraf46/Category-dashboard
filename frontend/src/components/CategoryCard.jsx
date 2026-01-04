import { useState } from "react";

export default function CategoryCard({ name, count, image, itemCount, onEdit }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
        boxShadow: "0 4px 14px rgba(0,0,0,.05)",
        cursor: "pointer"
      }}
    >
      <div
        style={{ height: 160, position: "relative" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {hover && (
          <button
            onClick={onEdit}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              border: "1px solid #d1d5db",
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 12,
              cursor: "pointer"
            }}
          >
            Edit
          </button>
        )}
      </div>

      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ color: "#64748b", fontSize: 13 }}>{count}</div>
        <div style={{ color: "#475569", fontSize: 13, marginTop: 4 }}>
          Item count: {itemCount || 0}
        </div>
      </div>
    </div>
  );
}