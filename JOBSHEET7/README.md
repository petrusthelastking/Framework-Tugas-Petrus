<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet%6006&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
- ✅ Memahami konsep API Routes pada Next.js.
- ✅ Membuat API sederhana menggunakan Next.js.
- ✅ Mengirim response JSON dengan status code.
- ✅ Mengambil data API di sisi frontend menggunakan fetch.
- ✅ Mengintegrasikan Firebase Firestore sebagai database.
- ✅ Mengelola environment variable (.env.local).
- ✅ Menampilkan data dinamis dari database ke halaman web.


---

## 📝 Langkah-Langkah Praktikum

<div align="center">

**Progress Praktikum**

```
██████████████████████████████████████  100%
```

🟢 **10 Langkah** | ✅ **Semua Selesai**

</div>

---

<details open>
<summary><h3>🔍 Langkah 2 – Membuat API Produk</h3></summary>
<h4>1. Buat file pad pages/api/produk.js</h4>

![alt text](<Images/Langkah 2 – Membuat API Produk(Buat file pad pagesapiproduk.js).png>)

<h4>2. Tambahkan data statis:</h4>

![alt text](<Images/Langkah 2 – Membuat API Produk(Tambahkan data statis).png>)

<h4>3. Akses: http://localhost:3000/api/produk</h4>

![alt text](<Images/Langkah 2 – Membuat API Produk(Jalankan).png>)


**Deskripsi:**<br>
Langkah 2 – Membuat API Produk bertujuan untuk membuat endpoint API sederhana pada Next.js dengan nama /api/produk. Prosesnya meliputi pembuatan file pages/api/produk.js atau produk.ts, penambahan data produk statis di dalamnya, dan pengiriman response JSON yang berisi data produk, status true, dan status_code 200. Endpoint ini kemudian dapat diakses melalui browser di ``http://localhost:3000/api/produk.``
</details>

---

<details open>
<summary><h3>📦 Langkah 3 – Fetch Data API di Frontend</h3></summary>
<h4>1. Buka pages/product/index.ts</h4>

- Modifikasi kode<br>
o Tambahkan useEffect() dan comment useEffect untuk isLogin

![alt text](<Images/Langkah 3 – Fetch Data API di Frontend(1. Buka pagesproductindex.tsx).png>)

<h4>2. Jalankan browser http://localhost:3000/produk</h4>

![alt text](<Images/Langkah 3 – Fetch Data API di Frontend(jalankan).png>)

**Deskripsi:**<br>
Langkah 3 – Fetch Data API di Frontend dilakukan dengan membuka file pages/product/index.tsx dan memodifikasi kodenya. Modifikasi tersebut meliputi penambahan useEffect() untuk mengambil data API produk menggunakan fetch("/api/produk"), yang akan mengirimkan response JSON. Data produk yang diterima kemudian disimpan menggunakan setProducts(responsedata.data) dan ditampilkan di halaman. Selanjutnya, Anda dapat menjalankan browser di http://localhost:3000/produk untuk melihat hasilnya.
</details>

---

<details open>
<summary><h3>🚀 Langkah 5 – Setup Firebase</h3></summary>

<h4>Buat project baru</h4>

[text](README.md) ![text](<Images/Langkah 5 – Setup Firebase(1).png>) ![text](<Images/Langkah 5 – Setup Firebase(2).png>) ![text](<Images/Langkah 5 – Setup Firebase(3).png>) ![text](<Images/Langkah 5 – Setup Firebase(4).png>) ![text](<Images/Langkah 5 – Setup Firebase(5).png>) ![text](<Images/Langkah 5 – Setup Firebase(6).png>)

[text](README.md) ![text](<Images/Langkah 5 – Setup Firebase(Buat project baru).png>) ![text](<Images/Langkah 5 – Setup Firebase(Buat project baruu).png>) ![text](<Images/Langkah 5 – Setup Firebase(Buat project baruuu).png>) ![text](<Images/Langkah 5 – Setup Firebase(klik create database1).png>) ![text](<Images/Langkah 5 – Setup Firebase(klik create database2).png>) ![text](<Images/Langkah 5 – Setup Firebase(klik create database3).png>) ![text](<Images/Langkah 5 – Setup Firebase(Note klik add app dan pilih web).png>)


**Deskripsi:**<br>
Langkah 5 – Setup Firebase meliputi beberapa tahapan, diawali dengan membuka Firebase Go To Console (login dengan akun Google) dan membuat project baru. Dalam proses pembuatan project, Anda perlu memberikan nama, misalnya "Framework-next", dan memastikan untuk menonaktifkan Google Analytics sebelum menekan "Create project".

Setelah project siap, lanjutkan dengan menambahkan aplikasi dengan memilih platform "web". Daftarkan aplikasi web dengan memberikan julukan (misalnya "Framework-next2026") dan klik "Register app". Setelah itu, klik "Continue to console".

Tahap berikutnya adalah mengaktifkan Firestore Database dengan mengklik "Create database". Pilih Select edition (Standard edition atau Enterprise edition) dan tentukan Database ID & location, misalnya asia-southeast2 (Jakarta). Setelah mengklik Configure atau Next, atur security rules dengan mengubah rules menjadi allow read, write: if true; dan klik publish.

Terakhir, buat collection baru dengan ID products dan tambahkan document pertama menggunakan auto-id. Tambahkan field seperti name (string, contoh: "baju polo"), price (number, contoh: 100000), dan size (string, contoh: "xl").
</details>

---

<details open>
<summary><h3>🎨 Langkah 6 – Install Firebase</h3></summary>

<h4>1. npm install firebase</h4>

![alt text](<Images/Langkah 6 – Install Firebase(1. npm install firebase).png>)

<h4>2. Buat folder dan file ts pada pages utlis/db/firebase.ts</h4>

![alt text](<Images/Langkah 6 – Install Firebase(Buat folder dan file ts pada pages utlisdbfirebase.ts.png>)

**Deskripsi:**<br>
Langkah 6 – Install Firebase diawali dengan menjalankan perintah npm install firebase di terminal. Setelah instalasi berhasil, buat folder dan file firebase.ts di pages/utils/db/firebase.ts. Kemudian, salin dan tempel kode konfigurasi Firebase yang ada pada kotak merah di Project settings ke dalam file firebase.ts tersebut.
</details>

---

<details open>
<summary><h3>Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush
di repository</h3></summary>

<h4>1. Buat file: .env.local</h4>

![alt text](<Images/Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush(Buat file .env.local).png>)

<h4>2. Modifikasi file env</h4>

![alt text](<Images/Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush(Modifikasi file env).png>)

**Deskripsi:**<br>
Langkah 7 – Konfigurasi Environment Variable bertujuan agar kredensial Firebase tidak dapat dilihat saat di-push ke repository. Langkah-langkahnya adalah sebagai berikut:
Buat file bernama .env.local di root directory proyek (6.praktikum-ApiRoutes\my-app).
Modifikasi file .env.local dengan menambahkan variabel-variabel lingkungan untuk kredensial Firebase:
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
Isi nilai variabel-variabel tersebut sesuai dengan konfigurasi Firebase Anda (tanpa koma dan petik dua). Nilai ini dapat ditemukan di Project settings Firebase Anda.
</details>

---
<details open>
<summary><h3>🌈 Langkah 8 – Konfigurasi Firebase</h3></summary>
<h4>1. Modifikasi firebase.ts</h4>

![alt text](<Images/Langkah 8 – Konfigurasi Firebase(1. Modifikasi firebase.ts).png>)

</details>

<details open>
<summary><h3>Langkah 9 – Ambil Data dari Firestore</h3></summary>

<h4>1. Buat file</h4>

- ulits/db/servicefirebase.js

![alt text](<Images/Langkah 9 – Ambil Data dari Firestore(1. Buat file).png>)

- modifikasi file servicefirebase.js

![alt text](<Images/Langkah 9 – Ambil Data dari Firestore(1. Buat filee).png>)

**Deskripsi:**<br>
Langkah 9 – Ambil Data dari Firestore dilakukan dengan membuat file baru bernama ulits/db/servicefirebase.js (atau servicefirebase.ts) dan memodifikasinya. Di dalam file tersebut, buat fungsi retrieveProducts yang bersifat async, yang mengambil collectionName sebagai parameter. Fungsi ini menggunakan getFirestore(app) untuk mendapatkan instance database dan getDocs(collection (db, collectionName)) untuk mengambil snapshot data dari collection yang ditentukan. Data kemudian di-map untuk menyertakan id dokumen dan data lainnya sebelum dikembalikan. Untuk mengimplementasikannya, impor getFirestore, collection, dan getDocs dari firebase/firestore, serta app dari file firebase.ts.
</details>

<details open>
<summary><h3>Langkah 10 – API Mengambil Data Firebase</h3></summary>

<h4>1. Edit pages/api/product.js:</h4>

![alt text](<Images/Langkah 10 – API Mengambil Data Firebase(Edit pagesapiproduct.js).png>)

<h4>2. Jalankan browser http://localhost:3000/api/produk</h4>

![alt text](<Images/Langkah 10 – API Mengambil Data Firebase(Jalankan browser1).png>)

<h4>3. Modifikasi index.ts pada produk sesuaikan nama typenya dan db nya</h4>

![alt text](<Images/Langkah 10 – API Mengambil Data Firebase(3. Modifikasi index.ts pada produk sesuaikan nama typenya dan db nya).png>)

<h4>Jalankan</h4>

![alt text](<Images/Langkah 10 – API Mengambil Data Firebase(Jalankan browser2).png>)

**Deskripsi:**<br>
Langkah 10 – API Mengambil Data Firebase dilakukan dengan mengedit file pages/api/produk.js. Modifikasi ini melibatkan pengubahan implementasi API produk untuk mengambil data dari Firestore, bukan dari data statis.

Caranya adalah:
Impor fungsi retrieveProducts dari ../utils/db/servicefirebase.
Ubah fungsi handler menjadi async.
Di dalam fungsi handler, panggil const data = await retrieveProducts("products"); untuk mengambil data dari collection "products" di Firebase.
Kirim response JSON dengan data yang diterima dari Firebase: res.status(200).json({ status: true, status_code: 200, data });.
Setelah dimodifikasi, endpoint API dapat diakses di http://localhost:3000/api/produk. Hasilnya akan menampilkan data dinamis dari Firestore.
</details>

<details open>
<summary><h3>🌈 F. Tugas Praktikum</h3></summary>

![alt text](<Images/Screenshot 2026-03-03 234045.png>)

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


