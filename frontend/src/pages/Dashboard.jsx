import { useEffect, useState } from "react";
import api from "../services/api";

import CategoryCard from "../components/CategoryCard";
import EditModal from "../components/EditModal";
import AddModal from "../components/AddModal";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [categories, setCategories] = useState([]);

  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const [current, setCurrent] = useState({});
  const [newCat, setNewCat] = useState({});

  useEffect(() => {
    api.get("/categories").then((res) => setCategories(res.data));
  }, []);

  async function addCategory() {
    await api.post("/categories", newCat);
    const res = await api.get("/categories");
    setCategories(res.data);
    setAddOpen(false);
  }

  function openEdit(cat) {
    setCurrent({ ...cat });
    setEditOpen(true);
  }

  async function saveEdit() {
    await api.put(`/categories/${current.id}`, {
      name: current.name,
      description: current.description,
      image: current.image,
      itemCount: current.itemCount       // <-- IMPORTANT
    });

    const res = await api.get("/categories");
    setCategories(res.data);
    setEditOpen(false);
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16
        }}
      >
        <h2>Categories</h2>

        <button
  onClick={() => setAddOpen(true)}
  style={{
    background: "#2563eb",
    color: "white",
    border: 0,
    borderRadius: 8,
    padding: "8px 14px",
    height: 36,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "20px",
    cursor: "pointer"
  }}
>
  + Add Category
</button>
      </div>

      <div
        style={{
          display: "grid",
          gap: 18,
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))"
        }}
      >
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            name={c.name}
            count={c.description}
            image={c.image}
            itemCount={c.itemCount}
            onEdit={() => openEdit(c)}
          />
        ))}
      </div>

      <AddModal
        open={addOpen}
        values={newCat}
        setValues={setNewCat}
        onClose={() => setAddOpen(false)}
        onSave={addCategory}
      />

      <EditModal
        open={editOpen}
        values={current}
        setValues={setCurrent}
        onClose={() => setEditOpen(false)}
        onSave={saveEdit}
      />
    </Layout>
  );
}