<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%9009&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 09 - Perbandingan CSR vs SSR vs SSG</td>
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
- ✅ Menjelaskan konsep Static Site Generation (SSG).
- ✅ Membedakan SSG dengan SSR dan CSR.
- ✅ Mengimplementasikan getStaticProps.
- ✅ Melakukan build dan start production mode.
- ✅ Menganalisis perilaku data dinamis pada SSG.


---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **4 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Bagian 1 – Setup Halaman Static</h3></summary>

1. Buat file baru pada pages/products/static.tsx

![alt text](<Images/Bagian 1 – Setup Halaman Static(1. Buat file baru pada pages products static.tsx).png>)

2. Modifikasi file server.tsx :

![alt text](<Images/Bagian 1 – Setup Halaman Static(2. Modifikasi file static.tsx).png>)


**Deskripsi:**<br>
Bagian 1 fokus pada pembuatan halaman statis di Next.js dengan membuat file static.tsx di folder pages/products/. Di sini, fungsi getStaticProps diimplementasikan untuk mengambil data produk dari API saat proses build. Data tersebut kemudian dikirim sebagai props ke komponen halamanProdukStatic untuk menampilkan daftar produk secara statis.
</details>

---

<details open>
<summary><h3>📦 Bagian 3 – Build Production Mode</h3></summary>

1. Pindah beberapa folder diluar pages antara lain<br>
- Untuk menghindari error maka folder Views, utils, stylesdipindah di luar folder src sehingga susunan folder pada src sebagai berikut

![alt text](<Images/Bagian 3 – Build Production Mode(1. Pindah beberapa folder diluar pages antara lain).png>)

2. Jalankan: npm run build
- Jalankan npm run dev dan pastikan ini jalan ( jangan distop saat ngebuild ), jadi
buka dua terminal
o Terminal 1 : jalankan aplikasi npm run dev
o Terminal 2 : build aplikasi
- Hal ini dikarenakan aplikasi berjalan di local http://localhost:3000/api/produk (
jika berhasil maka akan muncul pesan route(pages))

![alt text](<Images/Bagian 3 – Build Production Mode(2. Jalankan npm run build).png>)

3. Akses: http://localhost:3000/products/static

![alt text](<Images/Bagian 3 – Build Production Mode(3. Akses httplocalhost3000productsstatic).png>)

**Deskripsi:**<br>
Bagian 3 berfokus pada persiapan aplikasi untuk mode produksi. Langkahnya meliputi pemindahan folder Views, utils, dan styles ke luar folder src untuk menghindari eror. Selanjutnya, jalankan perintah npm run build sambil tetap menjalankan npm run dev untuk mengambil data API lokal. Terakhir, gunakan npm run start untuk menjalankan aplikasi dalam mode produksi.
</details>

---

<details open>
<summary><h3>🚀 Bagian 4 – Pengujian Perubahan Data</h3></summary>

Uji 1 – Tambah Data di Database
1. Buka database firebasenya
- Tambahkan produk baru di database.

![alt text](<Images/Bagian 4 – Pengujian Perubahan Data(Uji 1 – Tambah Data di Database)(1. Buka database firebasenya).png>)

2. Buka halaman:<br>
• /products (CSR) → Data bertambah

![alt text](<Images/Bagian 4 – Pengujian Perubahan Data(Uji 1 – Tambah Data di Database)(2. Buka halaman products (CSR) → Data bertambah).png>)

• /products/server (SSR) → Data bertambah<br>

![alt text](<Images/Bagian 4 – Pengujian Perubahan Data(Uji 1 – Tambah Data di Database)(2. Buka halaman productsserver (SSR) → Data bertambah).png>)

• /products/static (SSG) → Data tidak berubah<br>

![alt text](<Images/Bagian 4 – Pengujian Perubahan Data(Uji 1 – Tambah Data di Database)(2. Buka halaman productsstatic (SSG) → Data tidak berubah).png>)

**Deskripsi:**<br>
Bagian 4 menguji perilaku data pada mode SSG. Pengujian dilakukan dengan menambah data baru di Firebase. Hasilnya, data pada halaman CSR dan SSR otomatis bertambah. Namun, halaman SSG tidak berubah karena datanya statis sejak proses build. Agar data baru muncul di halaman SSG, aplikasi harus melalui proses build ulang dan dijalankan kembali.1
</details>

---

<details open>
<summary><h3>🎨 Uji 2 – Build Ulang</h3></summary>

1. Jalankan kembali:<br>
• npm run build<br>
o lakukan secara bersamaan dengan npm run dev saat melakukan npm run build<br>

![alt text](<Images/Uji 2 – Build Ulang(1. Jalankan kembali)(npm run build).png>)

• npm run start<br>
o npm run dev stop terlebih dahulu setelah itu npm run start<br>

![alt text](<Images/Uji 2 – Build Ulang(1. Jalankan kembali)(npm run start).png>)

2. Refresh halaman static<br>
→ Data baru muncul<br>

![alt text](<Images/Uji 2 – Build Ulang(2. Refresh halaman static).png>)

**Deskripsi:**<br>
Uji 2 menjelaskan proses memperbarui data pada halaman SSG. Langkahnya dimulai dengan menjalankan npm run build bersamaan dengan npm run dev untuk mengambil data terbaru dari API. Setelah proses build selesai, matikan npm run dev dan jalankan npm run start. Saat halaman statis di-refresh, data baru dari database akhirnya akan muncul.
</details>

---

<details open>
<summary><h3>🌈 D. Tugas Praktikum</h3></summary>

### 🎯 Tugas Individu

---

## 1. Dua Halaman: CSR dan SSR

### Halaman `/produk` — Client Side Rendering (CSR)

File: `src/pages/produk/index.tsx`

```tsx
import TampilanProduk from "../views/product";
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

export default kategori;
```

- Data diambil di sisi **browser** menggunakan `useSWR` setelah halaman dimuat
- Saat loading, ditampilkan **skeleton loading** dengan animasi fade
- Tidak ada `getServerSideProps` — rendering murni di client

---

### Halaman `/produk/server` — Server Side Rendering (SSR)

File: `src/pages/produk/server.tsx`

```tsx
import TampilanProduk from "../views/product";
import { produkType } from "../type/Product.type";

const HalamanProdukServer = (props: { products: produkType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}

export default HalamanProdukServer;
```

- Data diambil di sisi **server** menggunakan `getServerSideProps` sebelum halaman dikirim ke browser
- HTML yang diterima browser sudah berisi data produk lengkap
- Tidak ada skeleton loading karena data sudah tersedia saat halaman pertama kali dirender

---

## 2. Dokumentasi

### Screenshot CSR (`/produk`)

> *Screenshot halaman `/produk` — saat loading tampil skeleton, setelah data dimuat tampil daftar produk*

![alt text](<Images/Screenshot CSR.png>)

### Screenshot SSR (`/produk/server`)

> *Screenshot halaman `/produk/server` — konten produk langsung tampil tanpa skeleton karena data disiapkan di server*

![alt text](<Images/Screenshot SSR.png>)

---

### Perbedaan Network Tab

| Aspek | CSR (`/produk`) | SSR (`/produk/server`) |
|---|---|---|
| **Request pertama** | HTML kosong/minimal diterima | HTML lengkap berisi data produk diterima |
| **Request tambahan** | Ada request XHR ke `/api/produk` setelah halaman dimuat | Tidak ada request XHR tambahan ke API dari browser |
| **Jumlah request** | Lebih banyak (halaman + API call) | Lebih sedikit (hanya halaman) |
| **Waktu hingga konten tampil** | Lebih lama (perlu tunggu API response) | Lebih cepat (data sudah ada di HTML) |
| **Waterfall** | Ada dua tahap: load page → fetch API | Satu tahap: load page (sudah berisi data) |

**Penjelasan:**
Pada CSR, di Network Tab akan terlihat dua request terpisah — pertama request halaman HTML, kemudian request XHR/Fetch ke `/api/produk`. Pada SSR, hanya ada satu request halaman karena server sudah menyelesaikan fetch data sebelum mengirim HTML ke browser.

---

### Perbedaan View Source

| Aspek | CSR (`/produk`) | SSR (`/produk/server`) |
|---|---|---|
| **Konten HTML awal** | `<div id="__next"></div>` kosong | HTML sudah berisi nama produk, harga, kategori |
| **Data produk** | Tidak ada di source (diisi JS setelah load) | Terlihat jelas di source HTML |
| **SEO** | Crawler tidak bisa membaca konten produk | Crawler langsung membaca konten produk |
| **`<script>` tag** | Banyak — JS yang mengambil dan merender data | Lebih sedikit — data sudah di HTML |

**Penjelasan:**
Jika klik kanan → "View Page Source" pada halaman CSR, bagian konten produk tidak terlihat karena konten baru dirender oleh JavaScript setelah halaman dimuat. Sebaliknya pada SSR, seluruh nama produk, harga, dan kategori sudah terlihat langsung di source HTML yang diterima browser.

---

## 3. Laporan Analisis: Perbandingan CSR vs SSR di Next.js

### Pendahuluan

Dalam pengembangan aplikasi web modern menggunakan Next.js, terdapat beberapa strategi rendering yang dapat dipilih sesuai kebutuhan. Dua strategi utama yang dibandingkan dalam praktikum ini adalah **Client Side Rendering (CSR)** dan **Server Side Rendering (SSR)**. Pemilihan strategi rendering yang tepat berdampak signifikan pada performa, pengalaman pengguna, dan kemampuan SEO sebuah aplikasi web.

Praktikum ini mengimplementasikan dua halaman produk — `/produk` menggunakan CSR dengan library SWR, dan `/produk/server` menggunakan SSR dengan `getServerSideProps` — untuk membandingkan secara langsung perbedaan perilaku, performa, dan karakteristik masing-masing pendekatan.

---

### Implementasi

**CSR dengan SWR (`/produk`):**

Pada halaman CSR, data produk diambil setelah browser selesai memuat halaman. Library SWR digunakan sebagai pengganti `useEffect` manual karena menawarkan fitur caching otomatis, revalidasi saat window di-focus, dan state management (`isLoading`, `error`, `data`) yang lebih ringkas. Selama proses fetch berlangsung, komponen `TampilanProduk` menerima array kosong dan merender **skeleton loading** — placeholder animasi berbentuk kotak abu-abu dengan efek fade menggunakan `@keyframes identifier`.

```
Browser request halaman → Server kirim HTML kosong + JS
→ Browser eksekusi JS → SWR fetch /api/produk
→ API ambil data Firestore → Response JSON diterima
→ React re-render dengan data produk → Tampil di layar
```

**SSR dengan getServerSideProps (`/produk/server`):**

Pada halaman SSR, siklus berbeda terjadi. Ketika browser meminta halaman `/produk/server`, Next.js di server menjalankan fungsi `getServerSideProps` terlebih dahulu. Di dalam fungsi ini, server melakukan fetch ke `/api/produk` dan mendapatkan data dari Firestore. Data tersebut dikirim sebagai `props` ke komponen React, yang kemudian di-render menjadi HTML lengkap di server. HTML final yang terisi data produk inilah yang dikirim ke browser.

```
Browser request halaman → Next.js server jalankan getServerSideProps
→ Server fetch /api/produk → Data Firestore diterima server
→ Server render React component dengan data → HTML lengkap dikirim ke browser
→ Browser tampilkan halaman (sudah berisi produk)
```

---

### Analisis Perbandingan

**1. Performa Initial Load**

CSR memiliki kelemahan pada initial load karena browser harus menunggu dua tahap: pertama memuat halaman kosong, kemudian melakukan request API tambahan. Pada koneksi lambat, pengguna akan melihat skeleton loading cukup lama. SSR mengirimkan HTML yang sudah berisi data sehingga konten tampil lebih cepat meski server membutuhkan waktu pemrosesan lebih.

**2. Beban Server**

CSR meringankan beban server karena pemrosesan data dilakukan di browser masing-masing pengguna. SSR meningkatkan beban server karena setiap request memerlukan fetch data dan rendering di server. Untuk aplikasi dengan traffic tinggi, SSR perlu infrastruktur server yang lebih kuat.

**3. User Experience**

CSR dengan skeleton loading memberikan feedback visual yang baik — pengguna tahu bahwa konten sedang dimuat. Namun ada jeda antara halaman muncul dan data tersedia. SSR memberikan pengalaman "langsung jadi" — konten tersedia sejak pertama kali halaman dimuat, tanpa jeda loading.

**4. SEO (Search Engine Optimization)**

CSR sangat tidak ramah SEO karena web crawler seperti Googlebot mendapatkan HTML kosong dan konten produk tidak terindeks. SSR sangat baik untuk SEO karena crawler langsung mendapatkan konten lengkap dalam HTML.

**5. Penggunaan SWR vs getServerSideProps**

SWR (pada CSR) unggul dalam hal: caching otomatis, revalidasi data saat window refocus, dan kode yang ringkas. `getServerSideProps` (pada SSR) unggul dalam hal: data fresh setiap request, tidak ada request API tambahan dari browser, dan konten langsung tersedia.

---

### Kesimpulan

| Kriteria | CSR (`useSWR`) | SSR (`getServerSideProps`) |
|---|---|---|
| **Initial load** | Lebih lambat | Lebih cepat |
| **Beban server** | Ringan | Lebih berat |
| **SEO** | Buruk | Baik |
| **UX loading state** | Skeleton loading | Langsung tampil |
| **Data freshness** | Bisa stale (ada cache) | Selalu fresh |
| **Cocok untuk** | Dashboard, user-specific data | Halaman publik, produk, berita |

Berdasarkan analisis ini, untuk halaman produk yang bersifat publik dan perlu diindeks oleh mesin pencari, **SSR adalah pilihan yang lebih tepat**. Namun untuk halaman dashboard atau data yang spesifik per pengguna dan tidak memerlukan SEO, **CSR dengan SWR lebih efisien** karena meringankan beban server dan memberikan pengalaman interaktif yang baik dengan skeleton loading.

</details>

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


---

<details open>
<summary><h3>🧑‍💻 D. Tugas Praktikum – Jobsheet 09</h3></summary>

## 🎯 Tugas Individu

> **Topik:** Membandingkan CSR, SSR, dan SSG dengan operasi Tambah & Hapus Data

---

## 1. Tiga Halaman yang Dibuat

Tiga halaman diimplementasikan di folder `src/pages/products/` dengan basis data **Firebase Firestore** (koleksi `products`).

| Halaman | Route | Metode | Rendering |
|---|---|---|---|
| `index.tsx` | `/products` | `useSWR` | CSR |
| `server.tsx` | `/products/server` | `getServerSideProps` | SSR |
| `static.tsx` | `/products/static` | `getStaticProps` | SSG |

---

### 1.1 Persiapan — API & Service Layer

Sebelum membuat halaman, fungsi tambah dan hapus ditambahkan ke service Firestore.

**`src/utils/db/servicefirebase.ts`**

```ts
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addProduct(collectionName: string, data: object) {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
}

export async function deleteProduct(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}
```

**`src/pages/api/produk.ts`** — API route mendukung GET, POST, DELETE:

```ts
export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
  } else if (req.method === "POST") {
    const { name, price, category, image } = req.body;
    const id = await addProduct("products", { name, price: Number(price), category, image });
    res.status(201).json({ status: true, status_code: 201, data: { id } });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    await deleteProduct("products", id);
    res.status(200).json({ status: true, status_code: 200, data: { id } });
  }
}
```

---

### 1.2 Halaman CSR — `src/pages/products/index.tsx`

Client Side Rendering menggunakan `useSWR`. Data di-fetch dari browser dan diperbarui **real-time tanpa reload** menggunakan `mutate()`.

```tsx
import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import { produkType } from "../../types/Product.type";

const HalamanProductsCSR = () => {
  const { data, isLoading, mutate } = useSWR("/api/produk", fetcher);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch("/api/produk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    mutate(); // re-fetch tanpa reload halaman
  };

  const handleDelete = async (id) => {
    await fetch("/api/produk", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    mutate(); // re-fetch tanpa reload halaman
  };

  return (
    <div>
      <h1>CSR – Client Side Rendering</h1>
      <form onSubmit={handleAdd}>{/* form fields */}</form>
      <table>
        {(isLoading ? [] : data?.data ?? []).map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td><button onClick={() => handleDelete(p.id)}>Hapus</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};
```

**Ciri khas CSR:**
- Fetch terjadi di browser menggunakan `useSWR`
- Setelah tambah/hapus: `mutate()` memicu re-fetch — **halaman tidak reload**
- State loading ditangani oleh SWR secara otomatis

---

### 1.3 Halaman SSR — `src/pages/products/server.tsx`

Server Side Rendering menggunakan `getServerSideProps`. Data di-fetch di **server** setiap request masuk. Setelah tambah/hapus, `router.reload()` memicu `getServerSideProps` ulang.

```tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const HalamanProductsSSR = ({ products, fetchedAt }) => {
  const router = useRouter();

  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch("/api/produk", { method: "POST", body: JSON.stringify(form), ... });
    router.reload(); // trigger getServerSideProps ulang
  };

  const handleDelete = async (id) => {
    await fetch("/api/produk", { method: "DELETE", body: JSON.stringify({ id }), ... });
    router.reload();
  };

  return (
    <div>
      <h1>SSR – Server Side Rendering</h1>
      <p>Data diambil server pada: {fetchedAt}</p>
      {/* form + tabel */}
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
```

**Ciri khas SSR:**
- `getServerSideProps` dijalankan **setiap kali** halaman diakses
- Setelah tambah/hapus: `router.reload()` → server fetch ulang dari Firestore
- `fetchedAt` menunjukkan waktu server mengambil data (berubah setiap reload)

---

### 1.4 Halaman SSG — `src/pages/products/static.tsx`

Static Site Generation menggunakan `getStaticProps`. Data diambil **saat build** dan disimpan sebagai HTML statis. Tidak ada fetching saat runtime.

```tsx
import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const HalamanProductsSSG = ({ products, buildTime }) => {
  return (
    <div>
      <h1>SSG – Static Site Generation</h1>
      <div>
        ⚠ Halaman ini adalah snapshot data saat build.
        Build time: {buildTime}
        Perubahan tidak terlihat tanpa npm run build ulang.
      </div>
      <table>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>Rp {p.price.toLocaleString("id-ID")}</td>
            <td>{p.category}</td>
          </tr>
        ))}
      </table>
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
```

**Ciri khas SSG:**
- `getStaticProps` dijalankan **satu kali saat `npm run build`**
- Tidak ada fetching saat user membuka halaman
- `buildTime` menunjukkan kapan data di-generate — tidak pernah berubah kecuali build ulang

---

## 2. Pengujian: Tambah Data, Hapus Data, dan Perbandingan

### Skenario Pengujian

Pengujian dilakukan dengan urutan:
1. Catat jumlah produk awal di ketiga halaman
2. Tambah 1 produk baru melalui halaman CSR
3. Amati perubahan di ketiga halaman
4. Hapus produk tersebut melalui halaman SSR
5. Amati perubahan di ketiga halaman
6. Bandingkan perilaku update masing-masing metode

---

### 2.1 Uji Tambah Data

**Langkah:** Akses `/products` (CSR) → isi form tambah produk → klik "Tambah Produk"

**Produk yang ditambahkan:**
```
Nama     : Sepatu Olahraga
Harga    : 350000
Kategori : Fashion
Gambar   : https://cdn.antaranews.com/cache/1200x800/2020/08/25/Air-Jordan-X-Dior.jpg.webp
```

![alt text](<Images/PRAKTEK 1.png>)

![alt text](<Images/PRAKTEK 2.png>)

**Hasil pengamatan:**

| Halaman | Route | Reaksi Setelah Tambah Data |
|---|---|---|
| **CSR** | `/products` | ✅ Daftar produk langsung diperbarui **tanpa reload** berkat `mutate()` |
| **SSR** | `/products/server` | ✅ Setelah dibuka / di-refresh, produk baru **langsung muncul** karena `getServerSideProps` fetch ulang |
| **SSG** | `/products/static` | ❌ Produk baru **tidak muncul** — halaman masih menampilkan data snapshot dari build time |

**Penjelasan CSR:** Setelah `fetch POST /api/produk` selesai, `mutate()` dari SWR memicu re-fetch `/api/produk` di background. React merender ulang komponen dengan data baru. Tidak ada full page reload.

**Penjelasan SSR:** `getServerSideProps` dieksekusi di server setiap kali halaman diakses. Ketika user me-reload halaman, server mengambil data terbaru dari Firestore dan produk baru sudah tersedia di props.

**Penjelasan SSG:** Data sudah "terkunci" saat `npm run build`. Firestore mungkin sudah punya data baru, tetapi HTML statis tidak berubah. Satu-satunya cara memperbarui adalah menjalankan `npm run build` ulang.

---

### 2.2 Uji Hapus Data

**Langkah:** Akses `/products/server` (SSR) → klik tombol "Hapus" pada produk yang baru ditambah

![alt text](<Images/PRAKTEK 3.png>)

![alt text](<Images/PRAKTEK 4.png>)

**Hasil pengamatan:**

| Halaman | Route | Reaksi Setelah Hapus Data |
|---|---|---|
| **CSR** | `/products` | ✅ Produk langsung hilang dari daftar **tanpa reload** setelah `mutate()` |
| **SSR** | `/products/server` | ✅ Halaman di-reload otomatis → produk hilang karena `getServerSideProps` mengambil data terbaru |
| **SSG** | `/products/static` | ❌ Produk yang dihapus **masih tampil** — snapshot build tidak diperbarui |

**Penjelasan penting SSG:** Ini adalah demonstrasi paling jelas dari sifat SSG. Data di Firestore sudah dihapus (konfirmasi dari halaman CSR dan SSR yang tidak lagi menampilkan produk tersebut), namun halaman SSG masih menampilkannya karena HTML sudah digenerate saat build dan tidak pernah di-regenerate.

---

### 2.3 Tabel Perbandingan Hasil

| Kriteria Pengujian | CSR (`/products`) | SSR (`/products/server`) | SSG (`/products/static`) |
|---|---|---|---|
| **Tambah produk terlihat** | ✅ Langsung (tanpa reload) | ✅ Setelah reload | ❌ Butuh rebuild |
| **Hapus produk terlihat** | ✅ Langsung (tanpa reload) | ✅ Setelah reload | ❌ Butuh rebuild |
| **Waktu reaksi perubahan** | ~1 detik (refetch) | ~1-2 detik (reload) | Tidak pernah (sampai rebuild) |
| **Full page reload diperlukan** | Tidak | Ya | Ya (+ rebuild) |
| **Cocok untuk CRUD** | ✅ Ya, ideal | ✅ Ya, bisa | ❌ Tidak disarankan |
| **Performa akses halaman** | Sedang (fetch setelah load) | Sedang (server proses dulu) | Terbaik (HTML statis) |
| **Beban server saat akses** | Ringan | Sedang (setiap request) | Sangat ringan |

---

## 3. Laporan Analisis: Perbandingan CSR, SSR, dan SSG

### 3.1 Pendahuluan

Dalam ekosistem Next.js, terdapat tiga strategi rendering utama: **Client Side Rendering (CSR)**, **Server Side Rendering (SSR)**, dan **Static Site Generation (SSG)**. Setiap strategi memiliki cara berbeda dalam menentukan *kapan* dan *di mana* proses pembuatan HTML terjadi, yang secara langsung berdampak pada performa, pengalaman pengguna, kemampuan SEO, dan kesiapan data yang ditampilkan.

Praktikum ini mengimplementasikan ketiga strategi tersebut pada tiga halaman produk yang terhubung ke Firebase Firestore, dengan operasi lengkap: tampil data, tambah produk, dan hapus produk. Melalui pengujian langsung, perbedaan perilaku masing-masing strategi dapat diamati secara konkrit.

#### Tujuan Analisis
1. Memahami mekanisme kerja internal tiap metode rendering
2. Mengamati perbedaan nyata saat operasi CRUD dilakukan
3. Memberikan rekomendasi penggunaan berdasarkan konteks aplikasi

---

### 3.2 Mekanisme Kerja Masing-Masing Metode

#### Client Side Rendering (CSR)

CSR adalah pendekatan di mana server hanya mengirimkan "kerangka" HTML kosong bersama JavaScript bundle ke browser. Browser mengeksekusi JavaScript, melakukan fetch data ke API (`/api/produk`), lalu merender konten ke DOM. Library SWR memperkaya CSR dengan fitur caching, deduplication request, dan revalidasi otomatis.

```
Alur CSR:
Browser → GET /products → Server kirim HTML kosong + JS
→ Browser eksekusi JS → SWR fetch GET /api/produk
→ API server query Firestore → JSON dikirim ke browser
→ React merender produk → Browser tampilkan konten
```

Keunggulan utama CSR pada operasi CRUD adalah fungsi `mutate()` dari SWR. Setelah POST atau DELETE berhasil, `mutate()` secara internal memperbarui cache SWR dan memicu rerender komponen dengan data terbaru — tanpa refresh halaman yang dapat mengganggu state UI lainnya.

#### Server Side Rendering (SSR)

SSR menjalankan `getServerSideProps` di server Next.js setiap kali ada request masuk. Fungsi ini mengambil data dari Firestore secara langsung, memasukkannya ke `props`, dan React merender HTML lengkap di server. HTML yang diterima browser sudah berisi semua konten produk.

```
Alur SSR:
Browser → GET /products/server
→ Next.js server jalankan getServerSideProps
→ Server query Firestore → Data diterima server
→ Server render React ke HTML → HTML lengkap dikirim ke browser
→ Browser tampilkan halaman (hydration)
```

Setelah operasi tambah/hapus, `router.reload()` memaksa browser meminta halaman ulang. Server menjalankan `getServerSideProps` lagi, mengambil data terbaru, dan mengirim HTML baru. Ini menjamin data selalu fresh namun memerlukan full-page reload.

#### Static Site Generation (SSG)

SSG menjalankan `getStaticProps` **satu kali** saat `npm run build`. Next.js mengambil data dari Firestore pada saat itu, merender React ke HTML, dan menyimpan hasilnya sebagai file `.html` statis. File inilah yang disajikan ke setiap user yang mengakses halaman.

```
Alur SSG:
npm run build → Next.js jalankan getStaticProps
→ Firestore query → Data N produk diterima
→ React render ke HTML statis → File .html disimpan di .next/

Saat user akses /products/static:
Browser → GET /products/static → Server langsung kirim file .html (tanpa query Firestore)
→ Browser tampilkan halaman
```

Karena tidak ada query ke Firestore saat runtime, perubahan data tidak tercermin hingga dilakukan rebuild. Ini adalah trade-off antara performa (sangat cepat) dan kesegaran data.

---

### 3.3 Analisis Mendalam

#### a) Kesegaran Data (Data Freshness)

Dari pengujian tambah dan hapus data, terlihat jelas perbedaan tingkat kesegaran data:

- **CSR** memberikan data paling segar dalam konteks session aktif. SWR bahkan dapat dikonfigurasi dengan `refreshInterval` untuk polling otomatis, memastikan tidak ada perubahan yang terlewat.
- **SSR** memberikan data segar *per request*. Setiap kali halaman diakses, server selalu mengambil data terbaru. Ini ideal untuk halaman yang data-nya berubah antara satu kunjungan dan kunjungan berikutnya.
- **SSG** memberikan data paling "basi" karena terikat waktu build. Namun dengan fitur **ISR (Incremental Static Regeneration)** Next.js menggunakan parameter `revalidate`, SSG bisa dikonfigurasi untuk re-generate secara periodik tanpa rebuild manual.

#### b) Performa dan Pengalaman Pengguna

Dari sisi performa loading awal:

- **SSG terbaik**: TTFB (Time To First Byte) sangat rendah karena server hanya mengambil file HTML yang sudah jadi. Tidak ada komputasi di server saat request masuk. File dapat di-cache di CDN untuk distribusi global.
- **SSR menengah**: Server harus mengeksekusi `getServerSideProps`, query Firestore, dan render HTML sebelum merespons. TTFB lebih tinggi dibanding SSG, namun konten sudah tersedia saat HTML tiba.
- **CSR lambat untuk konten bermakna**: Meski TTFB cepat (HTML kosong langsung dikirim), pengguna harus menunggu JavaScript diunduh, dieksekusi, dan API selesai merespons sebelum melihat produk. Ada window waktu di mana halaman kosong atau menampilkan skeleton.

#### c) Search Engine Optimization (SEO)

- **SSG sangat baik**: Crawler mesin pencari mendapatkan HTML lengkap dengan semua konten produk, nama, harga, dan kategori sudah ada di source.
- **SSR baik**: Crawler juga mendapatkan HTML lengkap. Data selalu current pada saat diakses crawler.
- **CSR buruk untuk SEO**: Meskipun Googlebot modern dapat mengeksekusi JavaScript, konten yang bergantung pada API call setelah load berisiko tidak terindeks dengan benar. Produk mungkin tidak muncul di hasil pencarian.

#### d) Skalabilitas dan Beban Server

Aspek ini krusial saat traffic meningkat:

- **SSG paling scalable**: Beban server minimal karena HTML statis di-serve tanpa komputasi. Dapat dengan mudah di-deploy ke CDN seperti Vercel Edge Network, AWS CloudFront, atau Cloudflare.
- **CSR scalable untuk server**: Karena fetching data dilakukan oleh browser masing-masing user, beban server hanya pada API routes (yang bisa di-scale secara independen).
- **SSR paling membebani**: Setiap request memerlukan eksekusi `getServerSideProps`. Untuk 1000 concurrent users, server harus memproses 1000 query Firestore sekaligus. Memerlukan autoscaling atau caching layer tambahan.

#### e) Kompleksitas Implementasi CRUD

Dari praktikum ini terlihat perbedaan kompleksitas:

- **CSR CRUD paling seamless**: `mutate()` dari SWR membuat update UI sangat mudah. Tambah produk → `mutate()` → tampil tanpa reload. Developer experience sangat baik.
- **SSR CRUD require reload**: Setiap perubahan memerlukan `router.reload()` yang menyebabkan flash putih dan reset scroll position. Kurang ideal untuk UX yang smooth, namun mudah dipahami alurnya.
- **SSG tidak cocok untuk CRUD real-time**: Halaman statis tidak reflektif terhadap perubahan data. SSG cocok untuk konten read-only atau jarang berubah, bukan untuk aplikasi dengan operasi tulis aktif.

---

### 3.4 Kapan Menggunakan Masing-Masing?

Berdasarkan analisis di atas, berikut panduan penggunaan:

| Konteks Aplikasi | Rekomendasi | Alasan |
|---|---|---|
| Dashboard admin dengan banyak CRUD | **CSR (SWR)** | Update real-time tanpa reload, UX smooth |
| Halaman katalog produk publik | **SSG + ISR** | SEO optimal, performa terbaik, data di-update periodik |
| Halaman beranda toko online | **SSG** | Jarang berubah, perlu SEO, traffic tinggi |
| Halaman detail produk | **SSG + ISR** | SEO penting, data berubah tapi tidak terlalu sering |
| Feed media sosial | **SSR** | Data sangat dinamis, personal per user, SEO tidak kritikal |
| Halaman profil user (personal) | **CSR** | Data user-specific, tidak perlu SEO |
| Blog dan dokumentasi | **SSG** | Konten statis, SEO sangat penting, update jarang |
| Sistem notifikasi real-time | **CSR + polling** | Harus selalu fresh, tidak perlu SEO |

---

### 3.5 Kesimpulan

Ketiga strategi rendering memiliki keunggulan masing-masing dan tidak ada satu pendekatan yang "terbaik" untuk semua kasus. Pemilihan harus didasarkan pada kebutuhan spesifik fitur:

1. **Pilih CSR** ketika: data sangat dinamis dan personal, operasi CRUD sering terjadi, SEO tidak diperlukan, dan pengalaman tanpa-reload sangat penting.

2. **Pilih SSR** ketika: data harus selalu fresh saat halaman diakses, halaman bersifat publik dan perlu SEO, data berbeda tiap user (personalisasi), dan tidak masalah dengan full-page reload.

3. **Pilih SSG** ketika: konten jarang berubah, performa loading terbaik sangat kritis, website perlu di-cache di CDN, dan SEO adalah prioritas utama.

Dalam konteks aplikasi produk e-commerce yang dibangun di praktikum ini:
- Halaman **listing produk publik** → ideally SSG + ISR
- Halaman **dashboard manajemen produk** → CSR dengan SWR untuk CRUD seamless
- Halaman **detail produk** → SSG untuk SEO optimal

Next.js dirancang untuk mendukung kombinasi ketiga strategi dalam satu project — bahkan dalam satu aplikasi, developer dapat memilih metode yang paling tepat untuk setiap halaman secara independen. Inilah salah satu kekuatan utama Next.js sebagai framework fullstack modern.

---

## E. Studi Analisis

---

### 1. Mengapa SSG tidak menampilkan data terbaru?

SSG (Static Site Generation) menjalankan `getStaticProps` **satu kali saja saat `npm run build`**. Pada saat itu, Next.js mengambil data dari sumber data (misalnya Firestore), merender komponen React menjadi HTML, lalu menyimpan hasilnya sebagai file `.html` statis di folder `.next/`.

Ketika user membuka halaman, server hanya mengambil dan mengirimkan file `.html` tersebut — **tidak ada query ke database sama sekali**. Karena file HTML sudah "beku" sejak build, perubahan data apapun yang terjadi setelah build (penambahan produk, penghapusan, update harga) **tidak akan tercermin** di halaman SSG.

```
Build time  → Firestore punya 5 produk → HTML dibuat dengan 5 produk → disimpan
Runtime     → User tambah produk ke-6 → Firestore punya 6 produk
User akses  → Server kirim HTML lama (5 produk) → Produk ke-6 tidak muncul
```

Satu-satunya cara memperbarui halaman SSG adalah menjalankan `npm run build` ulang agar `getStaticProps` dieksekusi lagi dengan data terbaru. Alternatifnya, gunakan fitur **ISR (Incremental Static Regeneration)** dengan parameter `revalidate` agar Next.js secara otomatis men-generate ulang halaman setelah interval waktu tertentu tanpa full rebuild.

```ts
export async function getStaticProps() {
  const data = await retrieveProducts("products");
  return {
    props: { products: data },
    revalidate: 60, // regenerasi otomatis setiap 60 detik
  };
}
```

---

### 2. Mengapa SSG lebih cepat?

SSG lebih cepat karena **tidak ada pekerjaan yang dilakukan server saat user mengakses halaman**. Semua komputasi (query database, render React, generate HTML) sudah selesai dilakukan pada saat build. Saat request masuk, server tinggal membaca dan mengirimkan file HTML yang sudah jadi.

Dibandingkan SSR yang harus menjalankan `getServerSideProps`, query database, dan render HTML setiap request masuk, SSG jauh lebih efisien:

| Tahap | SSG | SSR |
|---|---|---|
| Query database | Saat build (sekali) | Setiap request |
| Render React → HTML | Saat build (sekali) | Setiap request |
| Yang dilakukan saat request | Baca file & kirim | Query DB + render + kirim |
| TTFB (Time To First Byte) | Sangat rendah (~ms) | Lebih tinggi (tergantung DB) |

Keunggulan kecepatan SSG semakin terasa karena file HTML statis dapat **di-cache di CDN (Content Delivery Network)**. CDN menyimpan salinan file di server yang tersebar di seluruh dunia sehingga user mendapatkan respons dari server CDN terdekat secara geografis, bukan dari server origin — mengurangi latensi jaringan secara drastis.

```
SSR:  User → Origin Server (Jakarta) → Query Firestore → Render → Kirim HTML
SSG:  User → CDN Node (Surabaya)  → Kirim HTML langsung [tanpa query, tanpa render]
```

---

### 3. Kapan SSG tidak cocok digunakan?

SSG tidak cocok digunakan ketika:

**a) Data berubah sangat sering atau real-time**
Contoh: harga saham, skor pertandingan, notifikasi, feed media sosial. Data ini berubah setiap detik sehingga snapshot build sudah usang sebelum halaman selesai di-generate.

**b) Konten bersifat personal per pengguna**
Contoh: halaman profil user, dashboard "Pesanan Saya", rekomendasi personal. Setiap user memiliki data yang berbeda, sehingga tidak mungkin membuat satu halaman statis yang berlaku untuk semua.

**c) Jumlah halaman dinamis sangat besar**
`getStaticPaths` memerlukan daftar path yang di-generate saat build. Jika ada jutaan halaman (misal: halaman setiap user atau setiap transaksi), build time menjadi tidak praktis.

**d) Data sangat sering ditambah atau dihapus**
Seperti yang dibuktikan di praktikum ini: setelah menambah atau menghapus produk, halaman SSG tidak berubah. Setiap perubahan membutuhkan rebuild manual.

**e) Halaman yang membutuhkan autentikasi dan otorisasi per request**
SSG tidak bisa membuat halaman yang berbeda berdasarkan siapa yang mengaksesnya, karena kontennya sudah ditentukan saat build.

---

### 4. Mengapa e-commerce tidak cocok menggunakan SSG murni?

E-commerce memiliki karakteristik yang bertentangan dengan sifat dasar SSG:

**a) Stok produk berubah real-time**
Stok sebuah produk dapat berkurang dari 10 menjadi 0 dalam hitungan menit karena pembelian user lain. Dengan SSG murni, halaman produk masih menampilkan "Stok: 10" meskipun barang sudah habis — menyebabkan user bisa membeli produk yang tidak tersedia.

**b) Harga berubah dinamis**
Flash sale, diskon waktu terbatas, harga berdasarkan grup user, atau sistem *surge pricing* membutuhkan data harga yang selalu aktual. Harga di halaman SSG bisa sudah kadaluarsa sejak build.

**c) Data produk terus bertambah**
Merchant menambah produk baru setiap hari. Dengan SSG murni, produk baru tidak muncul di katalog sampai ada rebuild. Pengguna yang mencari produk tersebut tidak akan menemukannya.

**d) Rekomendasi produk bersifat personal**
Fitur "Produk yang mungkin kamu suka" atau "Riwayat belanja" berbeda untuk setiap user. SSG tidak bisa membuat konten personal.

**e) Keranjang belanja dan checkout bersifat stateful**
Proses transaksi, validasi pembayaran, dan update stok setelah pembelian adalah operasi yang harus terjadi di server secara real-time — tidak bisa dilakukan di halaman statis.

**Solusi yang tepat untuk e-commerce adalah pendekatan hybrid:**

| Bagian | Strategi | Alasan |
|---|---|---|
| Landing page, banner promosi | SSG | Jarang berubah, butuh performa & SEO |
| Halaman kategori produk | SSG + ISR | Perlu SEO, bisa stale beberapa menit |
| Halaman detail produk | SSR atau SSG+ISR | Harga & stok harus akurat |
| Keranjang, checkout | CSR | Per-user, real-time, tidak perlu SEO |
| Dashboard admin | CSR | CRUD aktif, tidak perlu SEO |

---

### 5. Apa perbedaan build mode dan development mode?

**Development mode** dijalankan dengan `npm run dev`. Mode ini dirancang untuk kemudahan dan kecepatan pengembangan.

**Build/Production mode** dijalankan dengan `npm run build` lalu `npm run start`. Mode ini dirancang untuk performa optimal di lingkungan produksi.

| Aspek | Development (`npm run dev`) | Production (`npm run build + start`) |
|---|---|---|
| **`getStaticProps`** | Dijalankan **setiap request** seperti SSR | Dijalankan **sekali saat build** dan hasilnya disimpan sebagai HTML statis |
| **`getServerSideProps`** | Dijalankan setiap request | Dijalankan setiap request (sama) |
| **Hot Reload** | ✅ Ada — perubahan kode langsung terlihat | ❌ Tidak ada — butuh rebuild ulang |
| **Optimisasi kode** | ❌ Tidak dioptimasi (lebih mudah di-debug) | ✅ Minifikasi, tree-shaking, code splitting |
| **Kecepatan** | Lebih lambat (banyak proses dev) | Lebih cepat (kode sudah dioptimasi) |
| **Error reporting** | Verbose — stack trace lengkap di browser | Minimal — error disembunyikan dari user |
| **Turbopack** | Digunakan untuk fast refresh | Digunakan untuk bundling produksi |
| **Cache** | Minimal — supaya perubahan kode selalu terdeteksi | Agresif — browser cache, CDN cache |

**Perbedaan kritis pada SSG:**

Inilah perbedaan paling penting yang harus dipahami: di development mode, `getStaticProps` berperilaku seperti `getServerSideProps` — dieksekusi setiap kali halaman di-refresh. Ini memudahkan developer dalam mengembangkan fitur karena perubahan data langsung terlihat.

Namun di production mode (setelah `npm run build`), `getStaticProps` hanya dieksekusi satu kali saat build, dan hasilnya disimpan sebagai file HTML statis. Itulah mengapa data tidak berubah di production meski Firestore sudah diupdate.

```
npm run dev  → /products/static di-refresh → getStaticProps dijalankan → Data terbaru tampil
npm run build + start → /products/static di-refresh → HTML statis dikirim → Data lama (sejak build)
```

Perbedaan inilah yang menjadi dasar mengapa pengujian SSG harus dilakukan di **production mode** agar membuktikan sifat statisnya yang sebenarnya — seperti yang telah dilakukan pada Bagian 3 praktikum ini.

**Sumber Referensi:**
- [Next.js Documentation – Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)
- [SWR Documentation – Mutation](https://swr.vercel.app/docs/mutation)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Web Fundamentals – Rendering on the Web (Google)](https://web.dev/rendering-on-the-web/)

</details>

---

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


