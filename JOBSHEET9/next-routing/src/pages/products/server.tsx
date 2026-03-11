import { useState } from "react";
import { useRouter } from "next/router";
import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const th: React.CSSProperties = { padding: "10px 14px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 14px" };

const fieldLabel = (field: string): string => {
  const labels: Record<string, string> = { name: "Nama", price: "Harga", category: "Kategori", image: "URL Gambar" };
  return labels[field] ?? field;
};

const HalamanProductsSSR = (props: { products: produkType[]; fetchedAt: string }) => {
  const { products, fetchedAt } = props;
  const router = useRouter();
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const res = await fetch("/api/produk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ name: "", price: "", category: "", image: "" });
      setMsg("✅ Produk ditambahkan! Halaman akan di-reload...");
      setTimeout(() => router.reload(), 800);
    } else {
      setMsg("❌ Gagal menambahkan produk.");
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus produk ini?")) return;
    const res = await fetch("/api/produk", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      router.reload();
    }
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#9c27b0", borderBottom: "3px solid #9c27b0", paddingBottom: 8 }}>
        SSR – Server Side Rendering
      </h1>
      <p style={{ color: "#555", marginBottom: 8 }}>
        Data diambil di sisi <strong>server</strong> setiap kali halaman diminta via{" "}
        <code>getServerSideProps</code>. Perubahan terlihat setelah halaman di-reload.
      </p>
      <div style={{ background: "#fce4ec", padding: "8px 14px", borderRadius: 6, marginBottom: 20, fontSize: 13 }}>
        Data diambil server pada: <strong>{fetchedAt}</strong>
      </div>

      <form
        onSubmit={handleAdd}
        style={{ background: "#fdf0ff", padding: 20, borderRadius: 8, marginBottom: 28, border: "1px solid #e1bee7" }}
      >
        <h2 style={{ marginTop: 0, color: "#9c27b0" }}>Tambah Produk Baru</h2>
        {(["name", "price", "category", "image"] as const).map((field) => (
          <div key={field} style={{ marginBottom: 10 }}>
            <label style={{ display: "block", marginBottom: 4, fontWeight: 600, textTransform: "capitalize" }}>
              {fieldLabel(field)}
            </label>
            <input
              name={field}
              type={field === "price" ? "number" : "text"}
              value={form[field]}
              onChange={handleChange}
              required
              placeholder={field === "price" ? "contoh: 150000" : ""}
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: 4,
                border: "1px solid #c9a",
                boxSizing: "border-box",
                fontSize: 14,
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: 8, padding: "8px 24px", background: "#9c27b0", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", fontWeight: 600 }}
        >
          {loading ? "Menyimpan..." : "+ Tambah Produk"}
        </button>
        {msg && (
          <p style={{ marginTop: 10, color: msg.includes("✅") ? "green" : "red", fontWeight: 600 }}>{msg}</p>
        )}
      </form>

      <h2 style={{ color: "#333" }}>Daftar Produk ({products.length} item)</h2>
      {products.length === 0 ? (
        <p style={{ color: "#888" }}>Belum ada produk.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <thead>
            <tr style={{ background: "#9c27b0", color: "#fff" }}>
              <th style={th}>Nama</th>
              <th style={th}>Harga</th>
              <th style={th}>Kategori</th>
              <th style={th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} style={{ background: i % 2 === 0 ? "#fff" : "#fdf5ff", borderBottom: "1px solid #eee" }}>
                <td style={td}>{p.name}</td>
                <td style={td}>Rp {Number(p.price).toLocaleString("id-ID")}</td>
                <td style={td}>{p.category}</td>
                <td style={td}>
                  <button
                    onClick={() => handleDelete(p.id)}
                    style={{ padding: "4px 14px", background: "#e53935", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 32, background: "#ede7f6", padding: 16, borderRadius: 8, border: "1px solid #d1c4e9" }}>
        <strong>Info SSR:</strong>
        <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
          <li>Fetching terjadi di server setiap kali ada request masuk</li>
          <li>Setelah tambah/hapus, halaman di-reload agar SSR mengambil data terbaru</li>
          <li>Kondusif untuk SEO karena HTML sudah terisi saat dikirim ke browser</li>
          <li>TTFB lebih lambat karena server harus fetch data dulu sebelum merespons</li>
        </ul>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data,
      fetchedAt: new Date().toLocaleString("id-ID"),
    },
  };
}

export default HalamanProductsSSR;
