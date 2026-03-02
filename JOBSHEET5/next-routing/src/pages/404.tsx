import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/404.module.css";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="description" content="Halaman yang Anda cari tidak tersedia atau telah dipindahkan." />
      </Head>
      <div className={styles.error}>
        <img src="/tidakada.png" alt="Ilustrasi 404" className={styles.error_image} />
        <h1 className={styles.error_title}>404 - Halaman Tidak Ditemukan</h1>
        <p className={styles.error_desc}>Maaf, halaman yang Anda cari tidak ada.</p>
        <Link href="/" className={styles.error_button}>Kembali ke Home</Link>
      </div>
    </>
  );
}

export default Custom404;