import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#f8fafc" }}>
        <Topbar />

        <div style={{ padding: "24px 28px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}