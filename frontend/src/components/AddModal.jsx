export default function AddModal({ open, onClose, onSave, values, setValues }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.25)",
        display: "grid",
        placeItems: "center",
        zIndex: 50
      }}
    >
      <div
        style={{
          background: "white",
          padding: 32,
          borderRadius: 18,
          width: 380,
          boxShadow: "0 12px 32px rgba(0,0,0,.15)"
        }}
      >
        <h2 style={{ marginBottom: 18, textAlign: "center" }}>Add Category</h2>

        <input
          placeholder="Name"
          value={values.name || ""}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        <input
          placeholder="Description"
          value={values.description || ""}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        <input
          placeholder="Image URL"
          value={values.image || ""}
          onChange={(e) => setValues({ ...values, image: e.target.value })}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        <input
          placeholder="Item Count"
          type="number"
          value={values.itemCount || ""}
          onChange={(e) =>
            setValues({ ...values, itemCount: Number(e.target.value) })
          }
          style={{
            width: "100%",
            marginBottom: 12,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb"
          }}
        />

        <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
          <button
            onClick={onSave}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              border: 0,
              background: "#2563eb",
              color: "white",
              cursor: "pointer"
            }}
          >
            Save
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              border: "1px solid #d1d5db",
              background: "white",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}