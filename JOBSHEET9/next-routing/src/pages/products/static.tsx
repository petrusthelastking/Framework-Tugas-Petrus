import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const th: React.CSSProperties = { padding: "10px 14px", textAlign: "left" };
const td: React.CSSProperties = { padding: "10px 14px" };

interface StaticProps {
  products: produkType[];
  buildTime: string;
}

const HalamanProductsSSG = ({ products, buildTime }: StaticProps) => {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#2e7d32", borderBottom: "3px solid #2e7d32", paddingBottom: 8 }}>
        SSG – Static Site Generation
      </h1>
      <p style={{ color: "#555", marginBottom: 8 }}>
        Data di-generate saat <strong>build time</strong> menggunakan{" "}
        <code>getStaticProps</code> dan disimpan sebagai HTML statis. Tidak ada fetching saat
        user mengunjungi halaman ini.
      </p>

      <div
        style={{
          background: "#fff8e1",
          border: "1px solid #ffe082",
          borderLeft: "4px solid #ffc107",
          borderRadius: 6,
          padding: "12px 16px",
          marginBottom: 24,
        }}
      >
        <strong>⚠ Perhatian – Sifat SSG:</strong>
        <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
          <li>
            Halaman ini adalah <strong>snapshot</strong> data Firestore pada saat build.
          </li>
          <li>
            Penambahan atau penghapusan produk melalui halaman CSR/SSR{" "}
            <strong>tidak langsung terlihat di sini</strong>.
          </li>
          <li>
            Untuk memperbarui halaman ini, jalankan <code>npm run build</code> ulang.
          </li>
        </ul>
        <p style={{ margin: "10px 0 0", fontSize: 13, color: "#555" }}>
          📅 Build time: <strong>{buildTime}</strong>
        </p>
      </div>

      <h2 style={{ color: "#333" }}>Daftar Produk saat Build ({products.length} item)</h2>
      {products.length === 0 ? (
        <p style={{ color: "#888" }}>Tidak ada produk saat build dilakukan.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <thead>
            <tr style={{ background: "#2e7d32", color: "#fff" }}>
              <th style={th}>Nama</th>
              <th style={th}>Harga</th>
              <th style={th}>Kategori</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id} style={{ background: i % 2 === 0 ? "#fff" : "#f1f8e9", borderBottom: "1px solid #eee" }}>
                <td style={td}>{p.name}</td>
                <td style={td}>Rp {Number(p.price).toLocaleString("id-ID")}</td>
                <td style={td}>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 32, background: "#e8f5e9", padding: 16, borderRadius: 8, border: "1px solid #c8e6c9" }}>
        <strong>Info SSG:</strong>
        <ul style={{ margin: "8px 0 0", paddingLeft: 20 }}>
          <li>Tidak ada fetching saat runtime – halaman sudah jadi saat build</li>
          <li>Performance terbaik: TTFB sangat cepat, bisa di-cache CDN</li>
          <li>Cocok untuk konten yang jarang berubah (blog, dokumen, produk statis)</li>
          <li>Data tidak real-time; butuh rebuild untuk melihat perubahan terbaru</li>
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data,
      buildTime: new Date().toLocaleString("id-ID"),
    },
  };
}

export default HalamanProductsSSG;
