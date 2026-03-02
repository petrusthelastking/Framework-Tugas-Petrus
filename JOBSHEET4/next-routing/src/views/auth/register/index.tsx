import Link from "next/link";
import styles from './register.module.css';

const TampilanRegister = () => {
  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <h1 className={styles.title}>Halaman Register</h1>
        <input className={styles.input} type="text" placeholder="Username" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Password" />
        <button className={styles.button}>Daftar</button>
        <Link href="/auth/login" className={styles.link}>Sudah punya akun? Login</Link>
      </div>
    </div>
  );
}

export default TampilanRegister;
