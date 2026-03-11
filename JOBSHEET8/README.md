<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%8008&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 08 - Server Side Rendering (SSR)</td>
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
- ✅ Menjelaskan konsep Server Side Rendering (SSR).
- ✅ Membedakan SSR dengan Client Side Rendering (CSR).
- ✅ Mengimplementasikan getServerSideProps.
- ✅ Mengelola data melalui props pada SSR.
- ✅ Menganalisis perbedaan performa SSR vs CSR melalui DevTools.


---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **3 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Bagian 1 – Setup Halaman SSR</h3></summary>

1. Buat file baru pada pages/products/server.tsx

![alt text](<Images/C. Langkah Praktikum (Bagian 1 – Setup Halaman SSR)(1).png>)

2. Modifikasi file server.tsx :

![alt text](<Images/C. Langkah Praktikum (Bagian 1 – Setup Halaman SSR)(2).png>)

3. Jalankan browser : http://localhost:3000/produk/server

![alt text](<Images/C. Langkah Praktikum (Bagian 1 – Setup Halaman SSR)(3).png>)


**Deskripsi:**<br>
Langkah awal dilakukan dengan membuat file baru bernama server.tsx di dalam direktori pages/products/. Selanjutnya, file tersebut dimodifikasi dengan menyusun komponen halamanProdukServer yang mengimpor TampilanProduk untuk menampilkan daftar produk. Pada tahap inisialisasi ini, data produk yang dikirimkan ke komponen melalui props masih berupa array kosong. Terakhir, proses verifikasi dilakukan dengan mengakses URL http://localhost:3000/produk/server pada browser untuk memastikan halaman dengan judul "Halaman Produk Server" berhasil dirender
</details>

---

<details open>
<summary><h3>📦 Bagian 2 – Implementasi getServerSideProps pada server.tsx</h3></summary>

![alt text](<Images/C. Langkah Praktikum (Bagian 2 – Implementasi getServerSideProps pada server.tsx)(1).png>)

- Jalankan browser http://localhost:3000/produk/server

![alt text](<Images/C. Langkah Praktikum (Bagian 2 – Implementasi getServerSideProps pada server.tsx)(2).png>)

**Deskripsi:**<br>
Fungsi getServerSideProps pada server.tsx digunakan untuk mengambil data produk dari API di sisi server sebelum halaman dirender. Data tersebut kemudian dikirim ke komponen sebagai props, sehingga HTML yang diterima browser sudah lengkap berisi data tanpa perlu skeleton.
</details>

---

<details open>
<summary><h3>🚀 Bagian 3 – Refactor Type ( produk type )</h3></summary>

1. Buat folder types pada folder pages dan buat file Product.type.ts

![alt text](<Images/C. Langkah Praktikum (Bagian 3 – Refactor Type ( produk type ))(1).png>)

2. Modifikasi Product.type.ts

![alt text](<Images/C. Langkah Praktikum (Bagian 3 – Refactor Type ( produk type ))(2).png>)

3. Setelah membuat file Product.type.ts maka modifikasi pada file server.tsx menjadi

![alt text](<Images/C. Langkah Praktikum (Bagian 3 – Refactor Type ( produk type ))(3).png>)

**Deskripsi:**<br>
Proses refaktor dimulai dengan membuat folder baru bernama types di dalam direktori pages yang berisi file Product.type.ts. Di dalam file tersebut, dilakukan pendefinisian ProductType yang mencakup atribut seperti id, name, price, image, dan category untuk memastikan struktur data produk yang konsisten. Setelah tipe data dibuat, file server.tsx dimodifikasi dengan mengimpor ProductType dari folder types tersebut. Terakhir, tipe data ini diterapkan pada properti komponen halamanProdukServer untuk menggantikan definisi tipe lokal sebelumnya, sehingga kode menjadi lebih rapi dan terorganisir.
</details>

---

<details open>
<summary><h3>🎨 Bagian 4 – Uji Perbedaan SSR vs CSR</h3></summary>

![alt text](<Images/uji coba.png>)

**Deskripsi:**<br>
Pengujian dilakukan untuk membandingkan karakteristik Server Side Rendering (SSR) dan Client Side Rendering (CSR) melalui tiga indikator utama. Pertama, pada uji skeleton, halaman CSR akan menampilkan skeleton saat di-refresh, sedangkan halaman SSR tidak menampilkannya karena data langsung tersedia. Kedua, melalui Network Tab di DevTools, permintaan API (XHR) akan terlihat pada halaman CSR, namun tidak akan tampak pada halaman SSR karena pengambilan data terjadi di server. Ketiga, pada aspek respon HTML, halaman CSR memberikan HTML awal yang kosong atau hanya berisi skeleton, sementara halaman SSR mengirimkan HTML yang sudah berisi data produk lengkap.
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


