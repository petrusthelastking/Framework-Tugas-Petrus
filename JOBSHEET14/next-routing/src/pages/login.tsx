import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    document.cookie = "isLogin=true; path=/";
    router.push("/products");
  };

  const handleLogout = () => {
    document.cookie = "isLogin=; path=/; max-age=0";
  };

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>Login Page</h1>
      <p style={{ color: "#555", marginBottom: 18 }}>
        Ini adalah simulasi login untuk middleware. Klik tombol <strong>Login</strong> untuk membuat
        cookie <strong>isLogin=true</strong>.
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        <button
          onClick={handleLogin}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: 6,
            background: "#0070f3",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Login
        </button>
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            border: "1px solid #bbb",
            borderRadius: 6,
            background: "#fff",
            color: "#333",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Logout (hapus cookie)
        </button>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/products" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Coba akses /products
        </Link>
        <Link href="/about" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Coba akses /about
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
