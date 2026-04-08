import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
// import styles from './login.module.css';
import styles from './login.module.scss';

const TampilanLogin = () => {
  const { push } = useRouter();
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.ok) {
      push("/profile");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12, width: 260 }}>
        <input
          placeholder="Full Name"
          value={form.fullname}
          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
          style={{ padding: "8px 10px", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ padding: "8px 10px", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ padding: "8px 10px", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button onClick={handleLogin} style={{ padding: "8px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer", fontWeight: 600 }}>
          Login
        </button>
      </div>
      <h1 style={{ color: "red", border: "1px solid red", borderRadius: "5px", padding: "5px", marginTop: 12 }}>
        belum punya akun
      </h1>
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default TampilanLogin;
