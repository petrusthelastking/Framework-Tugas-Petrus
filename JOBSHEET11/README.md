<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 11&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 11 - Incremental Static Regeneration (ISR)</td>
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
- ✅ Menjelaskan konsep Incremental Static Regeneration (ISR).
- ✅ Mengimplementasikan revalidate pada getStaticProps.
- ✅ Menguji pembaruan halaman tanpa build ulang.
- ✅ Membuat endpoint On-Demand Revalidation.
- ✅ Mengamankan endpoint revalidation dengan token.

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
<summary><h3>Bagian 1 – Tambahkan revalidate</h3></summary>

1. Buka halaman static.tsx pada folder src/pages/produk

![alt text](<Images/C. Implementasi ISR Otomatis (Bagian 1 – Tambahkan revalidate)(Buka halaman static.tsx pada folder src pages produk).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Pengujian ISR</h3></summary>

1. Jalankan: ( lakukan hal sama seperti JS sebelumnya untuk ngebuild SSG)

![alt text](<Images/C. Implementasi ISR Otomatis (Bagian 2 – Pengujian ISR)(Jalankan ( lakukan hal sama seperti JS sebelumnya untuk ngebuild).png>)

2. Tambahkan data baru di database pada firebase

![alt text](<Images/C. Implementasi ISR Otomatis (Bagian 2 – Pengujian ISR)(Jalankan ( Tambahkan data baru di database pada firebase ).png>)

![alt text](<Images/C. Implementasi ISR Otomatis (Bagian 2 – Pengujian ISR)(Jalankan ( Tambahkan data baru di database pada firebase) 1.png>)

3. Refresh setelah 10 detik → Data baru muncul.

![alt text](<Images/C. Implementasi ISR Otomatis (Bagian 2 – Pengujian ISR)(Jalankan (Refresh setelah 10 detik → Data baru muncul.).png>)

</details>

---

<details open>
<summary><h3>Bagian 1 – Buat API Revalidate</h3></summary>
1. Buat file revalidate.ts pada folder pages/api/ dan modifikasi

![alt text](<Images/D. On-Demand Revalidation(Bagian 1 – Buat API Revalidate)(Buat file revalidate.ts pada folder pages api dan modifikasi).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Tambahkan Parameter Data</h3></summary>
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
<summary><h3>Bagian 3 – Tambahkan Token Security</h3></summary>

1. Modifikasi file revalidate.ts tambahkan kondisi pada line 13 - 17

![alt text](<Images/D. On-Demand Revalidation(Bagian 3 – Tambahkan Token Security)(Modifikasi file revalidate.ts tambahkan kondisi pada line 13 - 17).png>)

</details>

-----------

<details open>
<summary><h3>E. Pengujian Manual Revalidation</h3></summary>

Akses:<br>
http://localhost:3000/api/revalidate?data=products&token=12345678<br>
Jika benar:

![alt text](<Images/E. Pengujian Manual Revalidation(Akses).png>)

</details>

<details open>
<summary><h3>D. Tugas Praktikum </h3></summary>

## 🎯 Tugas Individu

Sesuai gambar instruksi, tugas yang dikerjakan:

1. Tambahkan lagi produk pada Firebase.
2. Implementasikan ISR dengan `revalidate: 10`.
3. Tambahkan endpoint On-Demand Revalidation.
4. Tambahkan validasi token.
5. Uji dengan token benar, token salah, dan tanpa token.

---

## 1) Tambahkan Produk pada Firebase

Penambahan produk dilakukan melalui API:

- `POST /api/produk/produk`

Contoh body:

```json
{
  "name": "Produk Baru",
  "price": 150000,
  "category": "Aksesoris",
  "image": "https://example.com/image.jpg"
}
```

Implementasi terkait:
- `src/pages/api/[[...produk]].ts` (method `POST`)
- `src/utils/db/servicefirebase.ts` (`addProduct`)

---

## 2) Implementasi ISR (`revalidate: 10`)

ISR diterapkan pada halaman:

- `src/pages/produk/static.tsx`

Bagian `getStaticProps`:

```ts
return {
  props: {
    products: response,
  },
  revalidate: 10,
};
```

Dokumentasi:

![ISR 1](<Images/C. Implementasi ISR Otomatis (Bagian 1 – Tambahkan revalidate)(Buka halaman static.tsx pada folder src pages produk).png>)

![ISR 2](<Images/C. Implementasi ISR Otomatis (Bagian 2 – Pengujian ISR)(Jalankan (Refresh setelah 10 detik → Data baru muncul.).png>)

---

## 3) Endpoint On-Demand Revalidation

Endpoint dibuat di:

- `src/pages/api/revalidate.ts`

Trigger revalidate:

```ts
await res.revalidate("/produk/static");
```

Dokumentasi:

![On-demand 1](<Images/D. On-Demand Revalidation(Bagian 1 – Buat API Revalidate)(Buat file revalidate.ts pada folder pages api dan modifikasi).png>)

![On-demand 2](<Images/D. On-Demand Revalidation(Bagian 2 – Tambahkan Parameter Data)(Modifikasi file revalidate.ts).png>)

---

## 4) Validasi Token

Validasi token pada endpoint `revalidate`:

```ts
if (req.query.token !== process.env.REVALIDATE_TOKEN) {
  return res
    .status(401)
    .json({ revalidated: false, message: "Insert correct token" });
}
```

Konfigurasi token:

```env
REVALIDATE_TOKEN=12345678
```

Dokumentasi:

![Token security](<Images/D. On-Demand Revalidation(Bagian 3 – Tambahkan Token Security)(Modifikasi file revalidate.ts tambahkan kondisi pada line 13 - 17).png>)

---

## 5) Pengujian Endpoint

### a. Token benar

URL:

`http://localhost:3000/api/revalidate?data=produk&token=12345678`

Hasil:

```json
{"revalidated":true}
```

### b. Token salah

URL:

`http://localhost:3000/api/revalidate?data=produk&token=salah`

Hasil:

```json
{"revalidated":false,"message":"Insert correct token"}
```

### c. Tanpa token

URL:

`http://localhost:3000/api/revalidate?data=produk`

Hasil:

```json
{"revalidated":false,"message":"Insert correct token"}
```

Dokumentasi:

![Revalidate akses](<Images/E. Pengujian Manual Revalidation(Akses).png>)

---

## Ringkasan

- ✅ Tambah produk pada Firebase
- ✅ ISR `revalidate: 10`
- ✅ Endpoint On-Demand Revalidation
- ✅ Validasi token
- ✅ Uji token benar, token salah, dan tanpa token

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


