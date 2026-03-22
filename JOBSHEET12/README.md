<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 12&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

# Laporan Praktikum

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&duration=3000&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&lines=%F0%9F%9A%80+Setup+Project+Next.js;%E2%9A%A1+Pages+Router+Configuration;%F0%9F%8E%A8+Modern+Web+Development" alt="Typing SVG" />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square&logo=checkmarx&logoColor=white)
![Praktikum](https://img.shields.io/badge/Praktikum-01-blue?style=flat-square)
![Progress](https://img.shields.io/badge/Progress-100%25-brightgreen?style=flat-square)

</div>

---

## Identitas Mahasiswa

<table>
<tr>
<td><b>Mata Kuliah</b></td>
<td>Pemrograman Berbasis Framework</td>
</tr>
<tr>
<td><b>Program Studi</b></td>
<td>Teknik Informatika</td>
</tr>
<tr>
<td><b>Semester</b></td>
<td>6 (Genap)</td>
</tr>
<tr>
<td><b>Praktikum</b></td>
<td>Jobsheet 12 - Middleware & Route Protection</td>
</tr>
<tr>
<td><b>Nama</b></td>
<td>Petrus Tyang Agung Rosario</td>
</tr>
<tr>
<td><b>NIM</b></td>
<td>2341720227</td>
</tr>
<tr>
<td><b>Kelas</b></td>
<td>TI-3D</td>
</tr>
</table>

---

## 📚 Tujuan Praktikum

Setelah mengikuti praktikum ini, mahasiswa mampu:
- ✅ Menjelaskan konsep Middleware pada Next.js.
- ✅ Membedakan redirect menggunakan useEffect dan Middleware.
- ✅ Membuat file middleware.ts.
- ✅ Mengatur proteksi route tertentu.
- ✅ Mengimplementasikan sistem login sederhana menggunakan Middleware.

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
<summary><h3>Bagian 1 – Membuat Middleware</h3></summary>

1. Buka halaman static.tsx pada folder src/pages/produk

![alt text](<Images/Bagian 1 – Membuat Middleware(1).png>)

2. Buat file: src/middleware.ts Sejajar dengan folder pages.

![alt text](<Images/Bagian 1 – Membuat Middleware(2).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Pengujian ISR</h3></summary>

1. Modifikasi file index.tsx pada folder src/pages/produk

![alt text](<Images/Bagian 2 – Struktur Dasar Middleware(2).png>)

</details>

---

<details open>
<summary><h3>Bagian 3 – Redirect Sederhana</h3></summary>

1. Redirect Sederhana

![alt text](<Images/Bagian 3 – Redirect Sederhana(1).png>)

2. Semua halaman akan redirect ke home dan error dikarenakan terus menerus loading

![alt text](<Images/Bagian 3 – Redirect Sederhana(2).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Struktur Dasar Middleware</h3></summary>
1. Modifikasi file revalidate.ts

![alt text](<Images/D. On-Demand Revalidation(Bagian 2 – Tambahkan Parameter Data)(Modifikasi file revalidate.ts).png>)

2. Uji coba menambahkan parameter dan value pada url
http://localhost:3000/api/revalidate?data=produk

![alt text](<Images/E. Pengujian Manual Revalidation(Akses).png>)

3. Uji coba dengan url http://localhost:3000/api/revalidate?data=

![alt text](<Images/D. On-Demand Revalidation(Bagian 2 – Tambahkan Parameter Data)(Uji coba dengan url httplocalhost3000apirevalidatedata=).png>)

</details>

-----------

<details open>
<summary><h3>Bagian 4 – Batasi Route Tertentu</h3></summary>

1. Untuk mengatasi pada bagian 3 maka perlu pembatasan route

![alt text](<Images/Bagian 4 – Batasi Route Tertentu(1).png>)

2. hasil

![alt text](<Images/Bagian 4 – Batasi Route Tertentu(2).png>)

</details>

-----------


<details open>
<summary><h3>Bagian 5 – Simulasi Sistem Login</h3></summary>

1. Modifikasi file middleware.ts

![alt text](<Images/Bagian 5 – Simulasi Sistem Login(1).png>)

2. Jika user langsung mengakses ke alamat http://localhost:3000/produk tidak akan bisa user akan diarahkan ke halaman login

![alt text](<Images/Bagian 5 – Simulasi Sistem Login(2).png>)

</details>

-----------

<details open>
<summary><h3>D. Pengujian</h3></summary>

Uji 1 – isLogin = false<br>
Akses:<br>
/products<br>
Hasil:<br>
Redirect ke /login<br>

![alt text](<Images/Bagian 5 – Simulasi Sistem Login(1).png>)

Hasil

![alt text](<Images/Bagian 5 – Simulasi Sistem Login(2).png>)

Uji 2 – isLogin = true<br>
Ubah:<br>
const isLogin = true<br>

![alt text](<Images/Uji 2 – isLogin = true(1).png>)

Hasil

![alt text](<Images/Uji 2 – isLogin = true(2).png>)

Uji 3 – Tambahkan Multiple Route<br>
<!-- export const config = {
matcher: ['/products', '/about']
} -->

Sekarang:<br>
• /products dan /about butuh login<br>
• Halaman lain bebas<br>

False:
![alt text](<Images/Uji 3 – Tambahkan Multiple Route(false1).png>)

Hasil:

![alt text](<Images/Uji 3 – Tambahkan Multiple Route(false2).png>)

True:

![alt text](<Images/Uji 3 – Tambahkan Multiple Route(true1).png>)

Hasil:

![alt text](<Images/Uji 3 – Tambahkan Multiple Route(true2).png>)

</details>

<details open>
<summary><h3>D. Tugas Praktikum </h3></summary>

## 🎯 Tugas Individu

Sesuai instruksi, implementasi yang dikerjakan:

1. Membuat halaman `/products`, `/about`, dan `/login`.
2. Menambahkan Middleware:
   - Redirect ke `/login` jika belum login.
   - Izinkan akses jika login `true`.
3. Menambahkan proteksi hanya untuk route tertentu.
4. Mendokumentasikan hasil pengujian (sebelum/sesudah redirect) dan perbandingan dengan `useEffect`.

---

## 1) Pembuatan Halaman

Halaman yang digunakan pada tugas ini:

- `/products` → `src/pages/products/index.tsx`
- `/about` → `src/pages/about/index.tsx`
- `/login` → `src/pages/login.tsx`

Implementasi `/login` menggunakan simulasi cookie:

- Tombol **Login** menyimpan cookie `isLogin=true`.
- Tombol **Logout** menghapus cookie `isLogin`.

---

## 2) Implementasi Middleware

File middleware:

- `src/middleware.ts`

Logika middleware:

```ts
const isLogin = request.cookies.get("isLogin")?.value === "true";

if (isLogin) {
  return NextResponse.next();
}

return NextResponse.redirect(new URL("/login", request.url));
```

Artinya:

- Jika cookie `isLogin=true` → user boleh akses route yang diproteksi.
- Jika tidak ada / bukan `true` → user diarahkan ke `/login`.

---

## 3) Proteksi Hanya Route Tertentu

Konfigurasi matcher:

```ts
export const config = {
  matcher: ["/products", "/about"],
};
```

Dampak matcher:

- `/products` dan `/about` **wajib login**.
- Route lain tetap bebas diakses (tidak diproses middleware ini).

---

## 4) Dokumentasi Pengujian Redirect

### a. Sebelum login (cookie belum ada)

Uji akses:

- `http://localhost:3000/products`
- `http://localhost:3000/about`

Hasil:

- Otomatis redirect ke `http://localhost:3000/login`

Screenshot:

![alt text](<Images/Screenshot 2026-03-22 232749.png>)

### b. Sesudah login (cookie `isLogin=true`)

Langkah:

- Buka `/login`
- Klik tombol **Login**
- Akses ulang `/products` atau `/about`

Hasil:

- Halaman dapat diakses (tidak redirect ke `/login`)

Screenshot:

![alt text](<Images/Screenshot 2026-03-22 232849.png>)

---

## 5) Perbandingan Middleware vs useEffect

| Aspek | Middleware | useEffect |
|---|---|---|
| Lokasi eksekusi | Sebelum halaman dirender (edge/server) | Setelah komponen dirender di browser |
| UX redirect | Lebih cepat, minim flicker | Bisa muncul flicker/flash halaman |
| Keamanan akses route | Lebih baik untuk proteksi route | Lebih cocok untuk kontrol UI di client |
| Kasus penggunaan | Auth guard route (`/products`, `/about`) | Side effect client (fetch, sync state, dll) |

Kesimpulan:

- Untuk **proteksi route**, middleware lebih tepat.
- `useEffect` tetap berguna untuk logika client-side, bukan sebagai proteksi utama route.

---

## Ringkasan

- ✅ Halaman `/products`, `/about`, `/login` tersedia
- ✅ Middleware redirect ke `/login` saat belum login
- ✅ Akses diizinkan saat cookie login bernilai `true`
- ✅ Proteksi hanya aktif pada route tertentu (`/products`, `/about`)
- ✅ Dokumentasi pengujian dan perbandingan `useEffect` sudah ditulis

</details>

---


<div align="center">

### Praktikum Selesai!

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge&logo=checkmarx)
![Score](https://img.shields.io/badge/Score-100%2F100-brightgreen?style=for-the-badge&logo=affirm)

---

**Disusun oleh:**

### Petrus Tyang Agung Rosario

**NIM:** 2341720227 | **Kelas:** TI-3D

*Teknik Informatika - Politeknik Negeri Malang*

*Semester 6 | 2026*

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=120&section=footer" width="100%"/>

</div>


