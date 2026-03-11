<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%7007&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

# 📘 Laporan Praktikum

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=%F0%9F%9A%80+Setup+Project+Next.js;%E2%9A%A1+Pages+Router+Configuration;%F0%9F%8E%A8+Modern+Web+Development" alt="Typing SVG" />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square&logo=checkmarx&logoColor=white)
![Praktikum](https://img.shields.io/badge/Praktikum-01-blue?style=flat-square)
![Progress](https://img.shields.io/badge/Progress-100%25-brightgreen?style=flat-square)

</div>

---

## 👨‍🎓 Identitas Mahasiswa

<table>
<tr>
<td><b>📚 Mata Kuliah</b></td>
<td>Pemrograman Berbasis Framework</td>
</tr>
<tr>
<td><b>🎓 Program Studi</b></td>
<td>Teknik Informatika</td>
</tr>
<tr>
<td><b>📅 Semester</b></td>
<td>6 (Genap)</td>
</tr>
<tr>
<td><b>📖 Praktikum</b></td>
<td>Jobsheet 05 - Custom Document dan Custom Error Page pada Next.js</td>
</tr>
<tr>
<td><b>👤 Nama</b></td>
<td>Petrus Tyang Agung Rosario</td>
</tr>
<tr>
<td><b>🆔 NIM</b></td>
<td>2341720227</td>
</tr>
<tr>
<td><b>🏛️ Kelas</b></td>
<td>TI-3D</td>
</tr>
</table>

---

## 📚 Tujuan Praktikum

Setelah mengikuti praktikum ini, mahasiswa mampu:
- ✅ Menjelaskan konsep Client Side Rendering (CSR).
- ✅ Mengimplementasikan data fetching menggunakan useEffect.
- ✅ Membuat Skeleton Loading menggunakan conditional rendering.
- ✅ Menggunakan library SWR untuk optimasi data fetching.
- ✅ Mengimplementasikan caching pada aplikasi berbasis framework.


---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **5 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Bagian 1 – Setup Data Produk</h3></summary>

1. Siapkan project Next.js.
2. Buat endpoint API /api/products.
3. Pastikan data memiliki:
o id
o name
o category
o price
o image
4. jalankan browser http://localhost:3000/api/produk

![alt text](<Images/Bagian 1 – Setup Data Produk(bukti).png>)

**Deskripsi:**<br>
Bagian 1 - Setup Data Produk merupakan langkah awal praktikum Client-Side Rendering (CSR) yang berfokus pada penyiapan data produk dengan membuat proyek Next.js, mengakses Firebase, serta membangun endpoint API /api/products yang harus memuat data contoh produk, seperti "Sepatu Duramo SL" dan "SEPATU SAMBA OG", lengkap dengan atribut id, name, category, price, dan image, lalu memastikannya dapat diakses melalui http://localhost:3000/api/produk.
</details>

---

<details open>
<summary><h3>📦 Bagian 2 – Implementasi CSR dengan useEffect</h3></summary>
<h4>1. Membuat file index.tsx pada folder views/products</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(1. Membuat file index.tsx pada folder viewsproducts).png>)

<h4>2. Modifikasi index.tsx</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(2. Modifikasi index.tsx).png>)

<h4>3. Buka file index.tsx pada pages/produk/</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(3. Buka file index.tsx pada pagesproduk).png>)

<h4>4. Modifikasi index.tsx pada pages/produk/</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(4. Modifikasi index.tsx pada pagesproduk).png>)

<h4>5. Jalankan browser http://localhost:3000/produk</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(6. Pada folder produk buat file produk.modules.scss).png>)

<h4>6. Pada folder produk buat file produk.modules.scss</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(6. Pada folder produk buat file produk.modules.scss).png>)

<h4>7. Modifikasi produk.modules.scss</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(7. Modifikasi produk.modules.scss).png>)

<h4>8. Modifikasi Pada file index.tsx pada folder pages/views/product</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(8. Modifikasi Pada file index.tsx pada folder pagesviewsproduct).png>)

<h4>9. Jalankan Browser</h4>

![alt text](<Images/Bagian 2 – Implementasi CSR dengan useEffect(jalankan2).png>)

**Deskripsi:**<br>
Bagian 2 - Implementasi CSR dengan useEffect adalah proses menampilkan daftar produk menggunakan pola Client-Side Rendering (CSR) dasar di Next.js, dimulai dengan membuat komponen TampilanProduk di views/products/index.tsx untuk menampilkan data produk (nama, harga, kategori, dan gambar), kemudian memodifikasi halaman pages/produk/index.tsx untuk melakukan pengambilan data (data fetching) dari endpoint /api/produk menggunakan hook useEffect dan menyimpan hasilnya ke dalam state products, yang akhirnya ditampilkan pada peramban melalui http://localhost:3000/produk, dan dilengkapi dengan styling menggunakan product.module.scss.
</details>

---

<details open>
<summary><h3>🚀 Bagian 3 – Implementasi Skeleton Loading</h3></summary>

<h4>Modfikasi file index.tsx pada folder views/product/index.tsx</h4>

![alt text](<Images/Bagian 3 – Implementasi Skeleton Loading(Modfikasi file index.tsx pada folder views product index.tsx).png>)

<h4>Modifikasi file product.module.scss</h4>

![alt text](<Images/Bagian 3 – Implementasi Skeleton Loading(Modifikasi file product.module.scss).png>)

<h4>Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip</h4>

![alt text](<Images/Bagian 3 – Implementasi Skeleton Loading(Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip).png>)

<h4>Modifikasi pada index.tsx pada folder views/product/index.tsx</h4>

![alt text](<Images/Bagian 3 – Implementasi Skeleton Loading(Modifikasi pada index.tsx pada folder views product ndex.tsx).png>)

<h4>Jalankan browser</h4>

![alt text](<Images/Bagian 3 – Implementasi Skeleton Loading(Jalankan).png>)

**Deskripsi:**<br>
Bagian 3 - Implementasi Skeleton Loading bertujuan untuk meningkatkan User Experience (UX) dengan memodifikasi komponen TampilanProduk di
> views/product/index.tsx 
dan menambahkan struktur HTML skeleton yang relevan untuk menggantikan tampilan kosong saat data fetching berlangsung, di mana struktur skeleton tersebut mencakup elemen untuk gambar, nama, kategori, dan harga. Selain itu, diterapkan styling khusus di
> product.module.scss 
untuk memberikan tampilan skeleton yang memiliki animasi berkedip, dan menggunakan conditional rendering (
> products.length > 0 
) sehingga skeleton hanya ditampilkan saat data belum tersedia atau sedang dimuat.
</details>

---

<details open>
<summary><h3>🎨 Bagian 5 – Implementasi SWR</h3></summary>

<h4>1. Install SWR</h4>

![alt text](<Images/Bagian 5 – Implementasi SWR(1. Install SWR).png>)

<h4>2. Buka dan modifkasi file index.tsx pada folder pages/product/</h4>

![alt text](<Images/Bagian 5 – Implementasi SWR(2. Buka dan modifkasi file index.tsx pada folder pages product).png>)

<h4>3. Agar terlihat lebih rapi</h4>

- Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js

![alt text](<Images/Bagian 5 – Implementasi SWR(3. Agar terlihat lebih rapi)(Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js).png>)

- Modifikasi file fetcher.ts

![alt text](<Images/Bagian 5 – Implementasi SWR(Modifikasi file fetcher.ts).png>)

- Modifikasi file index.tsx pada folder pages/produk

![alt text](<Images/Bagian 5 – Implementasi SWR(Modifikasi file index.tsx pada folder pages produk).png>)

**Deskripsi:**<br>
Bagian 5 - Implementasi SWR adalah langkah untuk mengoptimalkan pengambilan data (data fetching) dengan mengganti hook useEffect manual menjadi penggunaan library SWR (Stale-While-Revalidate) yang menyediakan fitur caching dan revalidation otomatis, dengan cara menginstal SWR, lalu memodifikasi halaman produk (pages/produk/index.tsx) untuk mengimpor useSWR dan membuat fungsi fetcher untuk mengambil data dari API /api/produk, kemudian data produk ditampilkan menggunakan hasil dari useSWR dengan penanganan loading yang lebih sederhana, bahkan fungsi fetcher dapat di-refactor ke file terpisah untuk kode yang lebih rapi.
</details>

---

<details open>
<summary><h3>🌈 D. Tugas Praktikum</h3></summary>

1. Perbedaan Client Side Rendering, Server Side Rendering, dan Static Site Generation

**Client Side Rendering (CSR)** adalah pendekatan di mana proses rendering halaman terjadi di sisi browser (client). Server hanya mengirimkan file HTML kosong beserta JavaScript. Browser kemudian mengeksekusi JavaScript tersebut, mengambil data dari API, dan baru merender konten ke layar. Karena itu, pada pemuatan pertama halaman terlihat kosong sejenak — inilah alasan skeleton loading sangat berguna pada CSR. Contoh implementasi di Next.js: menggunakan `useEffect` + `fetch` atau library `useSWR` seperti yang diterapkan di praktikum ini.

**Server Side Rendering (SSR)** adalah pendekatan di mana rendering terjadi di sisi server setiap kali ada request masuk. Server mengambil data, merender HTML yang sudah berisi konten, lalu mengirimkannya ke browser. Hasilnya, konten langsung terlihat tanpa perlu menunggu JavaScript dieksekusi. SSR cocok untuk halaman yang membutuhkan data selalu *fresh* dan penting untuk SEO. Contoh implementasi di Next.js: `getServerSideProps`.

**Static Site Generation (SSG)** adalah pendekatan di mana halaman di-render satu kali pada saat proses build (`npm run build`), menghasilkan file HTML statis yang siap disajikan. Karena tidak ada pemrosesan di server saat request masuk, SSG sangat cepat dan ideal untuk di-cache di CDN. Cocok untuk konten yang jarang berubah seperti blog, dokumentasi, atau landing page. Contoh implementasi di Next.js: `getStaticProps` dan `getStaticPaths`.

**Perbandingan:**

| Aspek | CSR | SSR | SSG |
|---|---|---|---|
| **Render terjadi** | Di browser (runtime) | Di server (setiap request) | Saat build time |
| **Kecepatan awal** | Lambat (JS harus diunduh dulu) | Sedang (server memproses dulu) | Sangat cepat (HTML sudah jadi) |
| **Data** | Diambil setelah halaman dimuat | Diambil per request di server | Diambil saat build |
| **SEO** | Kurang baik | Baik | Sangat baik |
| **Cocok untuk** | Dashboard, real-time data | Halaman dengan data fresh | Blog, katalog, landing page |
| **Next.js API** | `useEffect`, `useSWR` | `getServerSideProps` | `getStaticProps` |

2. Halaman Produk dengan Skeleton Loading dan Animasi

**Skeleton Loading** diimplementasikan di `src/pages/views/product/index.tsx` menggunakan ternary operator:

```tsx
{products.length > 0 ? (
  <>
    {products.map((products: ProductType) => (
      <div key={products.id} className={styles.produk__content__item}>
        <div className={styles.produk__content__item__image}>
          <img src={products.image} alt={products.name} width={200} />
        </div>
        <h4 className={styles.produk__content__item__name}>{products.name}</h4>
        <p className={styles.produk__content__item__category}>{products.category}</p>
        <p className={styles.produk__content__item__price}>Rp {products.price.toLocaleString()}</p>
      </div>
    ))}
  </>
) : (
  <div className={styles.produk__content__skeleton}>
    <div className={styles.produk__content__skeleton__image}></div>
    <div className={styles.produk__content__skeleton__name}></div>
    <div className={styles.produk__content__skeleton__category}></div>
    <div className={styles.produk__content__skeleton__price}></div>
  </div>
)}
```

**Animasi** diimplementasikan di `src/pages/produk/produk.module.scss` menggunakan `@keyframes`:

```scss
&__skeleton {
  width: 200px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: identifier 1.5s infinite ease-in-out;

  &__image { width: 100%; height: 200px; background-color: #e0e0e0; border-radius: 4px; margin-bottom: 12px; }
  &__name { width: 80%; height: 20px; background-color: #e0e0e0; border-radius: 4px; margin-bottom: 8px; }
  &__category { width: 60%; height: 10px; background-color: #e0e0e0; border-radius: 4px; margin-bottom: 8px; }
  &__price { width: 40%; height: 18px; background-color: #e0e0e0; border-radius: 4px; }
}

@keyframes identifier {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}
```

- Saat data **belum ada** (`products.length === 0` / sedang loading) → skeleton card abu-abu dengan animasi fade muncul sebagai placeholder
- Saat data **sudah dimuat** → daftar produk asli ditampilkan, skeleton menghilang

---

3. Refactor Kode dari useEffect menjadi SWR

**Sebelum — menggunakan `useEffect`:**

```tsx
import { useEffect, useState } from "react";

const kategori = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};
```

**Sesudah — menggunakan `useSWR`:**

```tsx
import useSWR from "swr";
import fetcher from "../utlis/swr/fetcher";

const kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};
```

**File `utlis/swr/fetcher.ts` (dipisah agar reusable):**

```ts
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default fetcher;
```

**Keunggulan SWR dibanding useEffect:**

| Aspek | useEffect | useSWR |
|---|---|---|
| State management | Harus buat `useState` manual | `data`, `isLoading`, `error` otomatis tersedia |
| Caching | Tidak ada | Built-in cache — request tidak diulang jika data masih fresh |
| Revalidasi otomatis | Tidak ada | Otomatis revalidasi saat window di-focus kembali |
| Error handling | Harus `try/catch` manual | `error` langsung dari hook |
| Jumlah kode | Lebih banyak (boilerplate) | Lebih ringkas dan deklaratif |

</details>
---

## Pertanyaan Refleksi

**1. Apa fungsi API Routes pada Next.js?**

API Routes pada Next.js berfungsi sebagai backend endpoint yang dapat dibuat langsung di dalam project Next.js tanpa perlu server terpisah. File yang diletakkan di folder `pages/api/` secara otomatis menjadi endpoint HTTP yang dapat menerima request (GET, POST, PUT, DELETE) dan mengembalikan response JSON. Fungsi utamanya adalah menghubungkan frontend dengan sumber data eksternal seperti database atau layanan pihak ketiga (misalnya Firebase), sekaligus menyembunyikan kredensial sensitif agar tidak terekspos ke sisi client.

**2. Mengapa .env.local tidak boleh di-push ke repository?**

File `.env.local` menyimpan informasi sensitif seperti API key, kredensial database, secret token, dan konfigurasi privat lainnya. Jika file ini di-push ke repository publik maupun privat, pihak yang tidak berwenang dapat mengakses dan menyalahgunakan kredensial tersebut — misalnya menguras kuota Firebase, mengakses database secara ilegal, atau mencuri data pengguna. Oleh karena itu, `.env.local` harus selalu ditambahkan ke `.gitignore` dan tidak pernah diunggah ke version control.

**3. Apa perbedaan data statis dan data dinamis?**

Data statis adalah data yang sudah ditentukan pada saat build time dan tidak berubah saat runtime — contohnya daftar produk yang di-hardcode langsung di dalam kode atau file JSON lokal. Data dinamis adalah data yang diambil secara real-time dari sumber eksternal seperti database saat halaman diakses atau tombol diklik, sehingga selalu menampilkan informasi terkini. Pada praktikum ini, data produk dari Firestore merupakan data dinamis karena diambil melalui API route setiap kali halaman dimuat atau tombol Refresh Data ditekan.

**4. Mengapa Next.js disebut framework fullstack?**

Next.js disebut framework fullstack karena menggabungkan kemampuan frontend dan backend dalam satu project. Di sisi frontend, Next.js menangani rendering halaman (SSR, SSG, CSR) dengan React. Di sisi backend, Next.js menyediakan API Routes yang memungkinkan pembuatan endpoint server tanpa perlu framework backend terpisah seperti Express. Dengan demikian, developer dapat membangun aplikasi web lengkap — mulai dari antarmuka pengguna hingga logika server dan akses database — hanya menggunakan satu codebase Next.js.


<div align="center">

### ✅ Praktikum Selesai!

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge&logo=checkmarx)
![Score](https://img.shields.io/badge/Score-100%2F100-brightgreen?style=for-the-badge&logo=affirm)

---

**Disusun oleh:**

### 👨‍💻 Petrus Tyang Agung Rosario

**NIM:** 2341720227 | **Kelas:** TI-3D

*Teknik Informatika - Politeknik Negeri Malang*

*Semester 6 | 2026*

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=120&section=footer" width="100%"/>

</div>


