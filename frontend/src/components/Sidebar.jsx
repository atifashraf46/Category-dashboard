import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#0f172a",
        color: "white",
        padding: "18px 10px",
      }}
    >
      <h2 style={{ marginLeft: 14, marginBottom: 24, fontWeight: 600 }}>
        fastcart
      </h2>

      <nav>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <Link
              style={{ ...link, background: "#1e293b" }}   // highlighted / active
              to="/"
            >
              Categories
            </Link>
          </li>

          <li>
            <a style={link}>Products</a>
          </li>

          <li>
            <a style={link}>Orders</a>
          </li>

          <li>
            <a style={link}>Reports</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const link = {
  color: "#cbd5e1",
  display: "block",
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  marginBottom: 6,
};