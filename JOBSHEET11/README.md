<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 10&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 10 - Dynamic Routing & Static Generation</td>
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
- ✅ Membuat halaman detail produk menggunakan Dynamic Routing.
- ✅ Mengambil parameter URL pada Next.js.
- ✅ Mengimplementasikan detail produk dengan:<br>
  - Client Side Rendering (CSR)
  - Server Side Rendering (SSR)
  - Static Site Generation (SSG)
- ✅ Menggunakan getStaticPaths pada dynamic SSG.
- ✅ Menganalisis perbedaan performa ketiga metode rendering.


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
<summary><h3>🔍 Bagian 1 – Membuat Dynamic Route</h3></summary>

1. Buka file pages/products/[product].tsx dan modfikasi sbb ( line 20 )

![alt text](<Images/Bagian 1 – Membuat Dynamic Route(Buka file pages products [product].tsx dan modfikasi sbb ( line 20 )).png>)

2. Jalankan browser http://localhost:3000/produk

![alt text](<Images/Bagian 1 – Membuat Dynamic Route (Jalankan).png>)

</details>

---

<details open>
<summary><h3>📦 Bagian 2 – Implementasi CSR (Client Rendering)</h3></summary>

1. Modifikasi pada file [produk].tsx pada folder src/pages/produk/

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi pada file [produk].tsx pada folder src pages produk).png>)

2. Pada file produk.ts pada folder pages/api di rename menjadi [[...product]].ts menjadi:

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi pada file [produk].tsx).png>)

3. Akses: http://localhost:3000/products/static

![alt text](<Images/Bagian 3 – Build Production Mode(3. Akses httplocalhost3000productsstatic).png>)

4. Modifikasi file servicefirebase.ts

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi pada file [produk].tsx pada folder src pages produk)).png>)

5. Modifikasi file [[...produk]].ts

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi file [[...produk]].ts).png>)

6. Jalankan alamat url http://localhost:3000/api/produk/123

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Jalankan produk).png>)

7. Buat file dengan nama index.tsx pada folder views/DetailProduct selain itu buat juga
file dengan nama detailProduct.module.scss

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Buat File views DetailProduct).png>)

8. Modifikasi detailProduct.module.scss

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi detailProduct.module.scss).png>)

9. Modifikasi index.tsx pada folder DetailProduct

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi index.tsx pada folder DetailProduct).png>)

10. Modifikasi file [product].tsx

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi file [product].tsx).png>)

11. Modifikasi index.tsx pada folder views/detailProduct line 16

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Modifikasi index.tsx pada folder views detailProduct line 16).png>)

12. Jalankan browser http://localhost:3000/produk/ saat produk diklik maka akan muncul
detailProduk http://localhost:3000/produk/pAWIT99SWmVbVrNm49ml

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Jalankan 2).png>)

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(Jalankan 1).png>)

13. Agar tulisan detail produk ditengah maka modifikasi file detailProduct.module.scss line
103-108 dan file index.tsx tambahkan code pada line 7,8 dan 22 menjadi

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(file index.tsx tambahkan code pada line 7,8 dan 22 menjadi).png>)

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(modifikasi file detailProduct.module.scss line).png>)

14. Sehingga hasilnya seperti berikut

![alt text](<Images/Bagian 2 – Implementasi CSR (Client Rendering)(jalankan 3).png>)
</details>

---

<details open>
<summary><h3>🚀 Bagian 3 – Implementasi SSR</h3></summary>
1. Modifikasi [produk].tsx pada folder src/pages/produk dan comment line 9 sampai 20 dikarena kita akan menggunakan metode SSR. Tambahkan beberapa kode untuk SSR

![alt text](<Images/Bagian 3 – Implementasi SSR(Modifikasi [produk].tsx).png>)

2. Jalankan browser http://localhost:3000/produk/server

![alt text](<Images/Bagian 3 – Implementasi SSR(Jalankan 1).png>)

![alt text](<Images/Bagian 3 – Implementasi SSR(Jalankan 2).png>)

</details>

---

<details open>
<summary><h3>🚀 Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)</h3></summary>
1. Buka file [produk].tsx dan modifikasi seperti berikut

![alt text](<Images/Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)(Buka file [produk].tsx dan modifikasi seperti berikut).png>)

2. Buka file index.tsx pada folder src/views/DetailProduct dan modifikasi pada line 11

![alt text](<Images/Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)(Buka file index.tsx pada folder src views DetailProduct.png>)

</details>

-----------

<details open>
<summary><h3>🧑‍💻 D. Tugas Praktikum </h3></summary>

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

## E. Tugas Praktikum (Sesuai Instruksi)

### 🎯 Tugas Individu

#### 1) Implementasikan halaman detail dengan:

- **CSR** (Client Side Rendering)
  - Detail data diambil di browser setelah halaman `/produk/[id]` terbuka.
  - Cocok untuk interaksi cepat, namun ada loading state.

- **SSR** (Server Side Rendering)
  - Detail data diambil oleh server pada setiap request ke `/produk/[id]`.
  - HTML awal sudah berisi data produk (lebih baik untuk SEO).

- **SSG** (Static Site Generation)
  - Detail data dibuat saat proses build menggunakan `getStaticPaths` + `getStaticProps`.
  - Perubahan data baru terlihat setelah build ulang (atau ISR jika ditambahkan `revalidate`).

---

#### 2) Tabel Perbandingan

| Aspek | CSR | SSR | SSG |
|---|---|---|---|
| **Loading** | Ada loading/skeleton di awal | Nyaris tanpa loading di awal (data sudah dari server) | Paling cepat (HTML statis) |
| **Build Required** | Tidak | Tidak | Ya, wajib build untuk generate halaman |
| **SEO** | Kurang optimal | Baik | Sangat baik |
| **Perubahan Data** | Cepat terlihat setelah fetch ulang | Selalu fresh per request | Tidak langsung berubah (perlu rebuild/ISR) |

---

#### 3) Dokumentasikan

- **Screenshot**
  - Hasil halaman detail mode CSR, SSR, dan SSG.
  - Simpan di folder `Images/` lalu cantumkan di README.

- **Network Tab**
  - Bandingkan request pada CSR vs SSR vs SSG.
  - Tunjukkan bahwa CSR melakukan request data dari browser setelah page load.

- **Build Result**
  - Jalankan `npm run build` dan lampirkan hasil sukses build.
  - Opsional: jalankan `npm run start` untuk validasi hasil produksi.


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


