import Link from "next/link";

const AboutPage = () => {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>About Page (Protected)</h1>
      <p style={{ color: "#555", marginBottom: 16 }}>
        Halaman ini dilindungi oleh middleware. Jika belum login, user akan diarahkan ke halaman
        {" "}
        <strong>/login</strong>.
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/products" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Ke /products
        </Link>
        <Link href="/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Ke /login
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
