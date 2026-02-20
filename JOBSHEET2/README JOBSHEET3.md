<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%2002&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 04 - RCatch-All Routing, Optional Catch-All, Linking & Navigating pada Next.js Pages 
Router</td>
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
- ✅ Membuat catch-all route untuk menangkap banyak segmen URL.
- ✅ Menggunakan optional catch-all route agar halaman tetap dapat  diakses tanpa parameter.
- ✅ Mengambil parameter URL berbentuk array menggunakan useRouter
- ✅ Menerapkan navigasi antar halaman menggunakan Link
- ✅ Melakukan navigasi imperatif menggunakan router.push()
- ✅ Mengimplementasikan redirect sederhana berbasis kondisi (simulasi login).

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
<summary><h3>🔍 Langkah 2 – Membuat Catch-All Route</h3></summary>

**Deskripsi:**

1. Masuk ke folder pages.<br>
2. Buat folder shop dan file […slug].tsx:<br>
**Hasil:**<br>
![alt text](Images/Buatfolder.png)
3. Modifikasi Isi file […slug].tsx dengan kode berikut:<br>
**Hasil:**<br>
![alt text](Images/Modifikasi1.png)
Modifikasi [...slug].tsx untuk menampilkan nilai query<br>
![alt text](Images/code9.png)
</details>

---

<details open>
<summary><h3>📦 Langkah 3 – Pengujian Catch-All Route</h3></summary>

**Deskripsi:**

Akses URL berikut di browser:<br>
/shop/clothes<br>
**Hasil:**<br>
![alt text](Images/MODIF1.png)
/shop/clothes/top<br>
**Hasil:**<br>
![alt text](Images/MODIF2.png)
/shop/clothes/tops<br>
**Hasil:**<br>
![alt text](Images/MODIF3.png)

Jika dilihat ada yang terbaca undifined dan ada yang tidak terbaca ini dikarena segmennya dibatasi<br>
Cuma array[0] dan array[1]. Solusinya bagaimana ?<br>
Modifikasi […slug].tsx menjadi berikut<br>
**code:**<br>
![alt text](Images/code9.png)

Jalankan browser : Berapapun banyaknya seqment tetap terbaca<br>
**Hasil:**<br>
![alt text](Images/MODIF4.png)
**Hasil:**<br>
![alt text](Images/MODIF5.png)




</details>

---

<details open>
<summary><h3>🚀 Langkah 4 – Optional Catch-All Route </h3></summary>

**Deskripsi:**

1. Jika menggunakan [...slug].js maka ketika mengakses shop akan terjadi error<br>
**Hasil:**<br>
![alt text](Images/MODIF6.png)

2. Solusinya dengan Rename file: [...slug].js → [[...slug]].js<br>
![alt text](Images/MODIF7.png)

3. Sekarang akses:<br>
/shop<br>
![alt text](Images/MODIF8.png)

</details>

---

<details open>
<summary><h3>🎨 Langkah 5 – Validasi Parameter</h3></summary>

**Deskripsi:**

Langkah 6 – Membuat Halaman Login & Register<br>
1. Buat folder:<br>
2. pages/auth<br>
3. Buat file:<br>
o login.jsx<br>
o register.jsx<br>
![alt text](Images/MODIF9.png)
Modifikasi login.jsx:<br>
![alt text](Images/code%202.png)
Modifikasi register.jsx:<br>
![alt text](Images/code%203.png)
</details>

---

<details open>
<summary><h3>🔌 Langkah 7 – Navigasi Imperatif (router.push)</h3></summary>

**Deskripsi:**

Tambahkan button login:<br>
![alt text](Images/code%204.png)
**Hasil:**<br>
![alt text](Images/MODIF10.png)
**Hasil:**<br>
![alt text](Images/MODIF11.png)

</details>

---

<details open>
<summary><h3>🌈 Langkah 8 – Simulasi Redirect (Belum Login)</h3></summary>

**Deskripsi:**

Di halaman product, pada index.tsx tambahkan beberapa code berikut:<br>
![alt text](Images/code%205.png)
</details>

---

<details open>
<summary><h3>🌈 E. Tugas Praktikum</h3></summary>

**dokumentasi:**
Tugas 1 (Wajib)<br>
• Buat catch-all route:<br>
• /category/[...slug].js<br>
• Tampilkan seluruh parameter URL dalam bentuk list<br>
![alt text](Images/code%207.png)

Tugas 2 (Wajib)<br>
• Buat navigasi:<br>
o Login → Product (imperatif)<br>
o Login ↔ Register (Link)<br>
![alt text](Images/code9.png)

Tugas 3 (Pengayaan)<br>
• Terapkan redirect otomatis ke login jika user belum login.<br>
![alt text](Images/MODIF12.png)
</details>
---

## Pertanyaan Refleksi
1. Apa perbedaan [id].js dan [...slug].js?<br>
Jawab:<br>
[id].js menangkap satu segmen URL saja.
Contoh: /produk/123 -> id = "123"
[...slug].js adalah catch-all, menangkap banyak segmen.
Contoh: /shop/a/b/c -> slug = ["a","b","c"]
2. Mengapa slug berbentuk array?<br>
Jawab:<br>
Karena catch-all route bisa menerima lebih dari satu segmen path, maka Next.js mengirimnya sebagai array agar tiap segmen tetap terpisah dan mudah diolah (join, map, dll).
3. Kapan sebaiknya menggunakan Link dan router.push()?<br>
Jawab:<br>
Gunakan Link untuk navigasi deklaratif di UI (menu, tombol pindah halaman biasa).
Gunakan router.push() untuk navigasi imperatif dari logic/aksi (setelah submit form, setelah login, redirect berdasarkan kondisi).
4. Mengapa navigasi Next.js tidak me-refresh halaman?
Jawab:<br>
Karena Next.js melakukan client-side navigation (SPA behavior): hanya mengganti komponen halaman dan data yang perlu, bukan reload dokumen HTML penuh, jadi terasa cepat dan state tertentu bisa tetap terjaga.
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


