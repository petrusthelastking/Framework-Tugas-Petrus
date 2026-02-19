<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%2001&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 02 - Routing, Nested Routing, Dynamic Routing, dan Layouting pada Next.js (Pages Router)</td>
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

Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- ✅ Memahami konsep Pages Router pada Next.js
- ✅ Membuat routing statis berbasis file dan folder
- ✅ Mengimplementasikan nested routing
- ✅ Mengimplementasikan dynamic routing menggunakan parameter URL
- ✅ Membuat layout global menggunakan komponen layout (App Shell)

---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **7 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Routing Dasar (Static Routing)</h3></summary>

**Deskripsi:**

a. Struktur Awal
pages/<br>
└── index.tsx<br>
b. Tambahkan Halaman About<br>
**Hasil:**<br>
![alt text](Images/1.%20Routing%20Dasar%20(Static%20Routing)(2).png)
c. Uji di Browser<br>
**Hasil:**<br>
![alt text](Images/1.%20Routing%20Dasar%20(Static%20Routing)(1).png)


</details>

---

<details open>
<summary><h3>📦 2. Routing Menggunakan Folder</h3></summary>

**Deskripsi:**

a. Rapikan Struktur Pages<br>


**Hasil:**<br>
![alt text](Images/2.%20Routing%20Menggunakan%20Folder(1).png)

b. Akses dari halaman browser ( tetap sama tetapi lebih rapi )<br>
**Hasil:**<br>
![alt text](Images/2.%20Routing%20Menggunakan%20Folder(2).png)
</details>

---

<details open>
<summary><h3>🚀 3. Nested Routing </h3></summary>

**Deskripsi:**

a. Buat Folder Setting<br>
**Hasil:**<br>
pages/<br>
└── setting/<br>
 ├── user.tsx<br>
 └── app.tsx<br>
![alt text](Images/3.%20Nested%20Routing%20a.%20Buat%20Folder%20Setting(1).png)

Modifikasi kodenya<br>
/setting/user<br>
![alt text](Images/3.%20Nested%20Routing%20a.%20Buat%20Folder%20Setting(3).png)
/setting/app<br>
![alt text](Images/3.%20Nested%20Routing%20a.%20Buat%20Folder%20Setting(2).png)<br>

Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting <br>
dipindah ke folder user dan rubah file user.tsx menjadi index.tsx<br>
![alt text](Images/3.%20Nested%20Routing%20a.%20Buat%20Folder%20Setting(5).png)
**Hasil:**<br>
![alt text](Images/3.%20Nested%20Routing%20a.%20Buat%20Folder%20Setting(4).png)

b. Nested Lebih Dalam<br>
![alt text](Images/3.%20Nested%20Routing%20b.%20Nested%20Lebih%20Dalam(2).png)
**Hasil:**<br>
/setting/user/password<br>
![alt text](Images/3.%20Nested%20Routing%20b.%20Nested%20Lebih%20Dalam(1).png)
</details>

---

<details open>
<summary><h3>🎨 4. Dynamic Routing</h3></summary>

**Deskripsi:**

a. Buat Halaman Produk<br>

![alt text](Images/4.%20Dynamic%20Routing%20a.%20Buat%20Halaman%20Produk(2).png)
**Hasil:**<br>
![alt text](Images/4.%20Dynamic%20Routing%20a.%20Buat%20Halaman%20Produk(4).png)
![alt text](Images/4.%20Dynamic%20Routing%20a.%20Buat%20Halaman%20Produk(3).png)

</details>

---

<details open>
<summary><h3>🔌 5. Membuat Komponen Navbar</h3></summary>

**Deskripsi:**

a. Struktur Komponen<br>
src/<br>
└── components/<br>
 └── layouts/<br>
 └── Navbar/<br>
 └── index.tsx<br>
 **Hasil:**<br>
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(1).png)
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(2).png)
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(3).png)
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(4).png)
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(5).png)
![alt text](Images/5.%20Membuat%20Komponen%20Navbar%20a.%20Struktur%20Komponen(6).png)

</details>

---

<details open>
<summary><h3>🌈 6. Membuat Layout Global (App Shell)</h3></summary>

**Deskripsi:**

a. Buat AppShell<br>
![alt text](Images/6.%20Membuat%20Layout%20Global%20(App%20Shell)%20a.%20Buat%20AppShell.png)<br>

<!-- import type { ReactNode } from "react";
import Navbar from "../navbar";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <div>footer</div>
    </main>
  );
};


export default AppShell; -->

</details>

---

<details open>
<summary><h3>🌈 7. Implementasi Layout di _app.tsx</h3></summary>

**dokumentasi:**
![alt text](Images/7.%20Implementasi%20Layout%20di%20_app.tsx(1).png)
![alt text](Images/7.%20Implementasi%20Layout%20di%20_app.tsx(2).png)
</details>

---

<details open>
<summary><h3>🌈 E. Tugas Praktikum</h3></summary>

**Tugas 1 – Routing:**
1. Buat halaman:<br>
o /profile<br>
o /profile/edit<br>
2. Pastikan routing berjalan tanpa error<br>
**Hasil:**<br>
![alt text](Images/8.%20Tugas%201%20–%20Routing.png)

Tugas 2 – Dynamic Routing<br>
1. Buat routing:<br>
2. /blog/[slug]<br>
3. Tampilkan nilai slug di halaman<br>
**Hasil:**<br>
![alt text](Images/8.%20Tugas%202%20–%20Dynamic%20Routing.png)
Tugas 3 – Layout<br>
1. Tambahkan Footer pada AppShell<br>
2. Footer tampil di semua halaman<br>
**Hasil:**<br>
![alt text](Images/8.%20Tugas%203%20–%20Layout(1).png)
</details>

---
## Pertanyaan Refleksi
1. Apa perbedaan routing berbasis file dan routing manual?<br>
Jawab:<br>
Routing berbasis file membuat URL otomatis dari struktur file/folder (mis. about.tsx -> /about), jadi minim konfigurasi.
Routing manual mengharuskan kamu mendefinisikan route satu per satu di kode router (path, komponen, nested, dll), lebih fleksibel tapi lebih banyak setup dan rawan salah konfigurasi.
2. Mengapa dynamic routing penting dalam aplikasi web?<br>
Jawab:<br>
Dynamic routing penting karena aplikasi web sering menampilkan data per item yang berubah-ubah (produk, artikel, profil user).
Dengan dynamic route (mis. /blog/[slug]), satu template halaman bisa melayani banyak URL dan mengambil parameter (slug, id) untuk menampilkan konten yang tepat.
3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?<br>
Jawab:<br>
Keuntungan layout global:
- Konsisten: navbar/footer/wrapper sama di semua halaman.<br>
- DRY: tidak perlu import/panggil komponen berulang di tiap page.<br>
- Mudah maintenance: ubah satu file layout, semua halaman ikut update <br>
- Mengurangi risiko inkonsistensi UI antar halaman.<br>
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


