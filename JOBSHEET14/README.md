<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 15&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 15 - Implementasi Sistem Registrasi (Database Integration)</td>
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
- ✅ Membuat form registrasi.
- ✅ Mengirim data menggunakan metode POST.
- ✅ Membuat API Route untuk register.
- ✅ Melakukan validasi email unik.
- ✅ Meng-hash password menggunakan bcrypt.
- ✅ Menyimpan user ke database.
- ✅ Menampilkan loading dan error handling di frontend.

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
<summary><h3>Bagian 1 – Membuat Register View</h3></summary>

1. Buat folder pada views dengan nama register dan tambahkan 2 file yaitu index.tsx
dan register.module.scss

![alt text](<Images/Bagian 1 – Membuat Register View(1).png>)

2. Modifikasi file index.tsx ( pada folder views/auth/register/index.tsx)

![alt text](<Images/Bagian 1 – Membuat Register View(2).png>)

3. Buka file register.tsx pada folder auth/register.tsx

![alt text](<Images/Bagian 1 – Membuat Register View(3).png>)

4. Modifikasi file register.tsx ( pada folder pages/auth/register.tsx )

![alt text](<Images/Bagian 1 – Membuat Register View(4).png>)

5. Modifikasi register.module.scss

![alt text](<Images/Bagian 1 – Membuat Register View(5).png>)

6. Tambahkan form inputan pada file index.tsx ( pada folder views/auth/register/index.tsx) Form berisi:<br>
• Email<br>

![alt text](<Images/Bagian 1 – Membuat Register View(6).png>)

• Full Name <br>

![alt text](<Images/Bagian 1 – Membuat Register View(7).png>)

• Password<br>

![alt text](<Images/Bagian 1 – Membuat Register View(8).png>)

• Button Register<br>

![alt text](<Images/Bagian 1 – Membuat Register View(9).png>)

7. Kode keseluruahannya sebagai berikut :

![alt text](<Images/Bagian 1 – Membuat Register View(10).png>)

8. Modifikasi register.module.scss

![alt text](<Images/Bagian 1 – Membuat Register View(11).png>)

9. Jalankan browsernya http://localhost:3000/auth/register sehingga tampilan sebagai
berikut

![alt text](<Images/Bagian 1 – Membuat Register View(12).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Membuat API Register</h3></summary>

1. Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi

![alt text](<Images/Bagian 2 – Membuat API Register(1).png>)

2. Buat file register.ts pada folder api

![alt text](<Images/Bagian 2 – Membuat API Register(2).png>)

3. Modifikasi file register.ts

![alt text](<Images/Bagian 2 – Membuat API Register(3).png>)

4. Modifikasi index.tsx pada folder register ( tambahkan beberapa code)

![alt text](<Images/Bagian 2 – Membuat API Register(4).png>)

5. Buka browser http://localhost:3000/auth/register isikan data dan klik register. Jika berhasil maka akan masuk ke menu login

![alt text](<Images/Bagian 2 – Membuat API Register(5).png>)

</details>

---

<details open>
<summary><h3>Bagian 3 – Install bcrypt</h3></summary>

1. npm install bcrypt --force & npm install --save-dev @types/bcrypt –force

![alt text](<Images/Bagian 3 – Install bcrypt(1-2).png>)

2. Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi

![alt text](<Images/Bagian 3 – Install bcrypt(3).png>)

3. Jalankan browser http://localhost:3000/auth/register dan input data setelah itu klik register

![alt text](<Images/Bagian 3 – Install bcrypt(4).png>)

4. Buka pada firebase jika berhasil maka data register akan masuk

![alt text](<Images/Bagian 3 – Install bcrypt(5).png>)

5. Jika user memasukkan data yang sama sistem tidak akan memproses tetapi
permasalahannya user memasukkan data yang sama tidak ada pemberitahuan pada
layar maka dari itu perlu ada perubahan pada code index.tsx pada folder
views/auth/register

![alt text](<Images/Bagian 3 – Install bcrypt(6).png>)

o Line 34 rubah menjadi email<br>

![alt text](<Images/Bagian 3 – Install bcrypt(7).png>)

6. Modifikasi juga pada register.module.scss

![alt text](<Images/Bagian 3 – Install bcrypt(8).png>)

7. Jika berhasil maka hasilnya seperti berikut

![alt text](<Images/Bagian 3 – Install bcrypt(9).png>)

</details>

---


<details open>
<summary><h3>D. Pengujian</h3></summary>

Uji 1 – Register Baru<br>
Input:<br>
• Email baru<br>

![alt text](<Images/Uji 1 – Register Baru(1).png>)

Hasil:<br>
• Data tersimpan di Firestore<br>

![alt text](<Images/Uji 1 – Register Baru(2).png>)

• Password ter-hash<br>

![alt text](<Images/Uji 1 – Register Baru(1).png>)

• Redirect ke login<br>

![alt text](<Images/Uji 1 – Register Baru(3).png>)

Uji 2 – Email Sudah Ada<br>
Input:<br>
• Email yang sama<br>
Hasil:<br>
• Error 400<br>
• Message: Email already exists<br>

![alt text](<Images/Uji 2 – Email Sudah Ada.png>)

Uji 3 – Method GET<br>
Akses:<br>
/api/register<br>

Hasil:<br>
• 405 Method Not Allowed<br>

![alt text](<Images/Uji 3 – Method GET.png>)

</details>

<details open>
<summary><h3>G. Tugas Praktikum</h3></summary>

## Tugas Individu

Sesuai instruksi, implementasi yang dikerjakan:

1. Implementasi register terhubung database (Firestore).
2. Tambahkan validasi: email wajib & password minimal 6 karakter.
3. Tambahkan role default `"member"`.
4. Tampilkan pesan error di UI.
5. Screenshot hasil: register sukses, email sudah ada, database Firestore.

---

## 1) Register Terhubung Database Firestore

Register diimplementasikan menggunakan Firestore. Fungsi `signUp` di `src/utils/db/servicefirebase.ts` melakukan query email terlebih dahulu, jika belum ada maka simpan ke koleksi `"users"`.

File: `src/utils/db/servicefirebase.ts`

```ts
export async function signUp(
    userData: {
        email: string;
        fullname: string;
        password: string;
        role?: string;
    },
    callback: Function,
) {
    const q = query(
        collection(db, "users"),
        where("email", "==", userData.email),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        callback({ status: "error", message: "Email already exists" });
    } else {
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";
        await addDoc(collection(db, "users"), userData)
            .then(() => {
                callback({ status: "success", message: "User registered successfully" });
            })
            .catch((error) => {
                callback({ status: "error", message: error.message });
            });
    }
}
```

File: `src/pages/api/register.ts`

```ts
export default async function handler(req, res) {
  if (req.method === "POST") {
    await signUp(req.body, (result) => {
      if (result.status === "success") {
        res.status(200).json({ name: result.message, alamat: "" });
      } else {
        res.status(400).json({ name: result.message, alamat: "" });
      }
    });
  } else {
    res.status(405).json({ name: "Method not allowed", alamat: "" });
  }
}
```

Screenshot register sukses (redirect ke login):

![alt text](<Images/Uji 1 – Register Baru(3).png>)

Screenshot database Firestore (data tersimpan):

![alt text](<Images/Uji 1 – Register Baru(2).png>)

---

## 2) Validasi Form Register

Validasi dilakukan di `src/views/auth/register/index.tsx` sebelum request ke API:

```tsx
if (!email) {
  setError("Email wajib diisi");
  setIsLoading(false);
  return;
}
if (password.length < 6) {
  setError("Password minimal 6 karakter");
  setIsLoading(false);
  return;
}
```

- **Email wajib diisi** — jika kosong, muncul pesan error sebelum fetch
- **Password minimal 6 karakter** — jika kurang dari 6, muncul pesan error sebelum fetch

---

## 3) Role Default "member"

Sebelum data disimpan ke Firestore, role otomatis diset ke `"member"`:

```ts
userData.role = "member";
```

---

## 4) Pesan Error di UI

Error ditampilkan di dua tempat:

1. **Di atas judul** — menggunakan class `register__error` dari scss:
```tsx
{error && <p className={style.register__error}>{error}</p>}
```

2. **Di dalam form** — duplikat error juga tampil di atas button

Styling `register__error` di `register.module.scss`:
```scss
&__error {
  color: red;
  font-size: 14px;
  margin-top: 8px;
}
```

Screenshot email sudah terdaftar (error "Email already exists"):

![alt text](<Images/Uji 2 – Email Sudah Ada.png>)

---

## Ringkasan

- ✅ Register terhubung Firestore berhasil diimplementasikan
- ✅ Validasi email wajib dan password minimal 6 karakter
- ✅ Role default `"member"` tersimpan di Firestore
- ✅ Password di-hash dengan `bcrypt` sebelum disimpan
- ✅ Pesan error tampil di UI saat validasi gagal atau email sudah ada
- ✅ Redirect ke `/auth/login` setelah register sukses

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


