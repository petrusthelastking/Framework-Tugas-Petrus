import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import { produkType } from "../../types/Product.type";

const th: React.CSSProperties = { padding: "10px 14px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 14px" };

const fieldLabel = (field: string): string => {
  const labels: Record<string, string> = { name: "Nama", price: "Harga", category: "Kategori", image: "URL Gambar" };
  return labels[field] ?? field;
};

const HalamanProductsCSR = () => {
  const { data, isLoading, mutate } = useSWR("/api/produk", fetcher);
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
    try {
      const res = await fetch("/api/produk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: "", price: "", category: "", image: "" });
        setMsg("✅ Produk berhasil ditambahkan!");
        mutate();
      } else {
        setMsg("❌ Gagal menambahkan produk.");
      }
    } catch {
      setMsg("❌ Terjadi kesalahan jaringan.");
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
      setMsg("✅ Produk berhasil dihapus!");
      mutate();
    }
  };

  const products: produkType[] = isLoading ? [] : data?.data ?? [];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#0070f3", borderBottom: "3px solid #0070f3", paddingBottom: 8 }}>
        CSR – Client Side Rendering
      </h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Data diambil di sisi <strong>client</strong> menggunakan SWR. Perubahan langsung
        terlihat tanpa reload halaman karena SWR me-refetch otomatis setelah mutasi.
      </p>

      <form
        onSubmit={handleAdd}
        style={{ background: "#f0f7ff", padding: 20, borderRadius: 8, marginBottom: 28, border: "1px solid #d0e8ff" }}
      >
        <h2 style={{ marginTop: 0, color: "#0070f3" }}>Tambah Produk Baru</h2>
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
                border: "1px solid #aac",
                boxSizing: "border-box",
                fontSize: 14,
              }}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: 8, padding: "8px 24px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", fontWeight: 600 }}
        >
          {loading ? "Menyimpan..." : "+ Tambah Produk"}
        </button>
        {msg && (
          <p style={{ marginTop: 10, color: msg.includes("✅") ? "green" : "red", fontWeight: 600 }}>{msg}</p>
        )}
      </form>

      <h2 style={{ color: "#333" }}>Daftar Produk ({products.length} item)</h2>
      {isLoading && <p>Memuat data...</p>}
      {!isLoading && products.length === 0 && (
        <p style={{ color: "#888" }}>Belum ada produk.</p>
      )}
      {!isLoading && products.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <thead>
            <tr style={{ background: "#0070f3", color: "#fff" }}>
              <th style={th}>Nama</th>
              <th style={th}>Harga</th>
              <th style={th}>Kategori</th>
              <th style={th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} style={{ background: i % 2 === 0 ? "#fff" : "#f7f9fc", borderBottom: "1px solid #eee" }}>
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

      <div style={{ marginTop: 32, background: "#e8f5e9", padding: 16, borderRadius: 8, border: "1px solid #c8e6c9" }}>
        <strong>Info CSR:</strong>
        <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
          <li>Fetching terjadi di browser menggunakan SWR</li>
          <li>Setelah tambah/hapus, data diperbarui <em>tanpa reload halaman</em></li>
          <li>Tidak kondusif untuk SEO karena HTML awal kosong</li>
          <li>Time to First Byte (TTFB) lebih cepat, namun data butuh waktu untuk dimuat</li>
        </ul>
      </div>
    </div>
  );
};

export default HalamanProductsCSR;
