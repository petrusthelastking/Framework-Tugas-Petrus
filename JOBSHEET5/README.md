<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%5005&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
- ✅ Memahami fungsi Custom Document (_document.js) pada Next.js.
- ✅ Mengimplementasikan custom document untuk kebutuhan global aplikasi.
- ✅ Membuat dan mengatur Custom Error Page (404).
- ✅ Menambahkan styling khusus pada halaman error.
- ✅ Menampilkan gambar dari folder public.
- ✅ Melakukan handling komponen global (misalnya Navbar) pada halaman error.

---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **6 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Langkah 2 – Membuat Custom Document</h3></summary>
<h4>Modifikasi pada folder pages _document.js</h4>

![alt text](<Images/Langkah 2 – Membuat Custom Document ().png>)

**Deskripsi:**<br>
Langkah ini dilakukan untuk membuat Custom Document di Next.js, yaitu dengan memodifikasi file _document.js yang berada di dalam folder pages. Fungsi dari Custom Document (_document.js) adalah untuk mengatur struktur dasar HTML aplikasi secara global, mencakup tag html,head, dan body. Dalam praktikum ini, modifikasi yang dilakukan adalah mengubah atribut lang dari tag html dari en menjadi id. Setelah kode diisi, hasilnya bisa diperiksa di Inspect Element untuk memastikan atribut lang="id" sudah berubah. Perlu diingat bahwa tag title tidak disarankan diletakkan di _document.js, melainkan di masing-masing halaman.
</details>

---

<details open>
<summary><h3>📦 Langkah 3 – Pengaturan Title per Halaman</h3></summary>
<h4>1. Buka pages/index.js.<br>
2. Tambahkan:</h4>

![alt text](<Images/Langkah 3 – Pengaturan Title per Halaman (Buka pagesindex.js.).png>)

- Refresh halaman dan perhatikan judul tab browser.<br>

![alt text](<Images/Langkah 3 – Pengaturan Title per Halaman (Refresh halaman dan perhatikan judul tab browser.).png>)

**Deskripsi:**<br>
Langkah ini bertujuan untuk mengatur judul spesifik pada setiap halaman, mengikuti praktik terbaik Next.js yang tidak menyarankan penempatan tag <br>

> title

di Custom Document (

> _document.js 

). Pengaturan ini dilakukan dengan memodifikasi file halaman yang bersangkutan, misalnya

> pages/index.js 

. Di dalam komponen halaman tersebut, tag

> head 

dari Next.js digunakan untuk menambahkan tag

> title

. Setelah title ditambahkan, halaman perlu di-refresh untuk melihat perubahan judul yang muncul pada tab browser. Dengan cara ini, setiap halaman dapat memiliki judul unik yang relevan.
</details>

---

<details open>
<summary><h3>🚀 Langkah 4 – Membuat Custom Error Page (404) </h3></summary>

<h4>Di folder pages, buat file</h4>

- 404.tsx

![alt text](<Images/Langkah 4 – Membuat Custom Error Page (404)(Di folder pages, buat file).png>)

- Isi kode:

![alt text](<Images/Langkah 4 – Membuat Custom Error Page (404)(Isi kode).png>)

- Akses URL yang tidak ada, misalnya:

![alt text](<Images/Langkah 4 – Membuat Custom Error Page (404)(Akses URL yang tidak ada, misalnya).png>)


**Deskripsi:**<br>
Langkah ini bertujuan untuk membuat halaman kesalahan (error page) kustom (404) yang akan otomatis ditampilkan Next.js saat pengguna mengakses route atau URL yang tidak ditemukan. Pembuatan halaman ini sangat sederhana, yaitu dengan membuat file baru bernama ```404.tsx``` di dalam folder

> pages 

. Setelah file dibuat, di dalamnya diisi dengan komponen React sederhana yang menampilkan pesan bahwa "Halaman Tidak Ditemukan" dan "Maaf, halaman yang Anda cari tidak ada". Setelah itu, hasilnya bisa langsung diuji dengan mengakses URL yang tidak ada, seperti

> /dashboard 

. Dengan adanya file ini, tampilan error standar dari browser akan digantikan oleh halaman kustom yang telah dibuat.
</details>

---

<details open>
<summary><h3>🎨 Langkah 5 – Styling Halaman 404</h3></summary>

<h4>Buat file:</h4>

- styles/404.module.scss<br>

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(styles404.modulescss).png>)

-  Tambahkan style:

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(Tambahkan style).png>)

-  Modifikasi kode pada pages/404.tsx:

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(Modifikasi kode pada pages404.tsx).png>)

-  Jalankan browser

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(output).png>)

-  Tambahkan ’/404’ pada disable navbar

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(Tambahkan ’404’ pada disable navbar).png>)

-  Jalankan browser

![alt text](<Images/Langkah 5 – Styling Halaman 404(Buat file)(Jalankan browser).png>)

**Deskripsi:**<br>
Langkah ini bertujuan untuk menambahkan gaya spesifik pada Halaman Error 404 yang telah dibuat. Pertama, dibuat file CSS Module baru, yaitu ```styles/404.module.scss```. Di dalam file tersebut, ditambahkan class CSS (misalnya ```.error```) untuk mengatur tata letak halaman agar tampilannya menjadi lebih baik, seperti mengatur halaman menjadi penuh (width: 100vw, height: 100vh) dan menengahkan konten secara horizontal maupun vertikal.
Selanjutnya, file ```404.tsx``` dimodifikasi dengan mengimpor style dari ```404.module.scss``` dan menerapkan class ```styles.error``` pada elemen utama div.
Jika setelah styling dijalankan Navbar masih muncul di halaman 404, maka dilakukan handling dengan menambahkan ```/404``` ke dalam daftar array ```disableNavbar``` di komponen Appshell. Dengan demikian, Navbar tidak akan lagi ditampilkan pada halaman error tersebut.

</details>

---

<details open>
<summary><h3>Langkah 6 – Menampilkan Gambar dari Folder Public</h3></summary>

<h4>Simpan gambar not-found.png ke folder public/ dan rename agar memudahkan</h4>

![alt text](<Images/Langkah 6 – Menampilkan Gambar dari Folder Public(Simpan gambar not-found.png).png>)

<h4>Modifikasi kode pada 404.tsx:</h4>

![alt text](<Images/Langkah 6 – Menampilkan Gambar dari Folder Public(Modifikasi kode pada 404.tsx).png>)

- Jalankan browser<br>

![alt text](<Images/Langkah 6 – Menampilkan Gambar dari Folder Public(Jalankan Browser).png>)


**Deskripsi:**<br>
Langkah ini bertujuan untuk menampilkan gambar ilustrasi di Halaman Error 404, dengan memanfaatkan folder ```public``` dari Next.js.

Pertama, gambar yang akan digunakan (misalnya not-found.png yang diunduh dari undraw.co) disimpan ke dalam folder ```public``` dan diberi nama yang memudahkan, misalnya ```page-not-found.png```.

Keunggulan utama folder ```public``` adalah aset di dalamnya dapat diakses langsung dari root URL tanpa perlu diimpor. Oleh karena itu, di dalam file ```404.tsx```, elemen ```<img>``` ditambahkan dengan atribut

> src 

yang mengarah langsung ke ```"/page-not-found.png"```. Selain itu, class ```styles.error_image``` juga ditambahkan pada tag

> img

untuk mengatur ukuran gambar. Setelah dimodifikasi, hasilnya dapat dilihat di browser bahwa gambar ilustrasi sudah muncul di halaman 404.
</details>

---

<details open>
<summary><h3>🌈 E. Tugas Praktikum</h3></summary>

![alt text](<Images/E. Tugas Praktikum(1).png>)
![alt text](<Images/E. Tugas Praktikum(2).png>)
![alt text](<Images/E. Tugas Praktikum(3).png>)

</details>
---

## Pertanyaan Refleksi
1. Apa fungsi utama _document.js?<br>
**Jawab:**<br>
`_document.js` berfungsi untuk mengkustomisasi struktur dokumen HTML dasar yang dihasilkan Next.js, yaitu tag `<html>`, `<head>`, dan `<body>` secara global untuk seluruh aplikasi. File ini hanya dirender di sisi server (server-side only) dan dieksekusi sekali saat membangun kerangka HTML. Penggunaan umumnya adalah untuk mengubah atribut `lang` pada tag `<html>` (misalnya dari `en` ke `id`), menambahkan font eksternal, atau menyisipkan tag meta global. `_document.js` adalah lapisan terendah yang berperan sebelum `_app.js` dan komponen halaman.

2. Mengapa `<title>` tidak disarankan di _document.js?<br>
**Jawab:**<br>
Karena `_document.js` dirender hanya sekali di server dan berlaku global untuk semua halaman, sehingga jika `<title>` diletakkan di sana, semua halaman akan memiliki judul yang sama dan tidak bisa dibedakan. Next.js menyediakan komponen `<Head>` dari `next/head` justru untuk keperluan ini — agar setiap halaman dapat mendefinisikan `<title>` dan meta tag-nya sendiri secara dinamis dan unik. Menaruh `<title>` di `_document.js` juga tidak akan dioverride dengan benar oleh `<Head>` pada halaman individual, sehingga mengakibatkan judul tidak berubah sesuai halaman yang dikunjungi.

3. Apa perbedaan halaman biasa dan halaman 404.js?<br>
**Jawab:**<br>
Perbedaan utamanya adalah pada **cara Next.js melakukan routing**:
- **Halaman biasa** (misal `pages/about.tsx`) — hanya tampil ketika URL-nya secara eksplisit diakses (`/about`). Jika URL tidak cocok dengan file apapun di folder `pages`, halaman ini tidak akan pernah tampil.
- **Halaman 404.js/404.tsx** — merupakan halaman khusus yang secara otomatis ditampilkan oleh Next.js setiap kali pengguna mengakses URL yang **tidak cocok** dengan route manapun. Tidak perlu mendefinisikan route-nya secara manual karena Next.js sudah mengenali nama file `404` sebagai handler error route-not-found. Halaman ini juga mengirimkan HTTP status code `404` ke browser, berbeda dengan halaman biasa yang mengirim `200`.

4. Mengapa folder public tidak perlu di-import?<br>
**Jawab:**<br>
Karena Next.js secara otomatis meng-serve semua file yang ada di dalam folder `public` sebagai **static asset** melalui root URL server (`/`). Artinya, file seperti `public/gambar.png` dapat langsung diakses melalui URL `/gambar.png` tanpa perlu menggunakan `import` atau `require`. Mekanisme ini mirip dengan cara kerja server web seperti Apache atau Nginx yang langsung melayani file statis dari folder tertentu. Keuntungannya adalah tidak ada overhead bundling dari webpack/Turbopack, file langsung dikirim ke browser dengan cepat, dan URL-nya tetap bersih dan mudah untuk dirujuk di mana saja dalam kode.


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


