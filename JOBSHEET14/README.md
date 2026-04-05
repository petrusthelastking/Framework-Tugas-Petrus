<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 14&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 14 - Sistem Autentikasi & Proteksi Route</td>
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
- ✅ Menjelaskan konsep autentikasi dan otorisasi.
- ✅ Mengimplementasikan login menggunakan NextAuth.
- ✅ Menggunakan Credentials Provider.
- ✅ Mengakses data session di frontend.
- ✅ Melindungi halaman menggunakan middleware.

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
<summary><h3>Bagian 1 – Install NextAuth</h3></summary>

1. npm install next-auth –force

![alt text](<Images/Bagian 1 – Install NextAuth(1).png>)

</details>

---

<details open>
<summary><h3>Bagian 2 – Konfigurasi API Auth</h3></summary>

1. Buat file dan folder pada folder pages/api/auth/``[...nextauth].ts

![alt text](<Images/Bagian 2 – Konfigurasi API Auth(1).png>)

2. Modifikasi file [...nextauth].ts:

![alt text](<Images/Bagian 2 – Konfigurasi API Auth(2).png>)

</details>

---

<details open>
<summary><h3>Bagian 4 – Tambahkan SessionProvider</h3></summary>

1. Buka file _app.tsx dan modifikasi:

![alt text](<Images/Bagian 4 – Tambahkan SessionProvider(1).png>)

</details>

---

<details open>
<summary><h3>Bagian 5 – Tambahkan Tombol Login & Logout</h3></summary>
1. Buka index.tsx pada folder component/navbar:

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(1).png>)

2. Modifikasi file index.tsx pada line 10 dan 2

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(2).png>)

3. Buka file file navbar.module.scss tambahkan code pada line 9

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(3).png>)

4. Jalankan http://localhost:3000/

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(4).png>)

5. Jika di klik sign in maka akan muncul dan isikan textbox masing. Setelah itu klik
button sign in dan setelah diklik maka akan kembali ke halaman localhost

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(5).png>)

6. Untuk dapat menangkap data pada session maka tambahkan code sebagai berikut :

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(6).png>)

7. Uji coba sign in dan sign out<br>
o Jalankan Kembali npm run dev<br>

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(7).png>)

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(8).png>)

![alt text](<Images/Bagian 5 – Tambahkan Tombol Login & Logout(9).png>)

</details>

-----------

<details open>
<summary><h3>D. Menambahkan Data Tambahan (Full Name)</h3></summary>

1. Buka file [...nextauth].js dan tambahkan code pada line 22

![alt text](<Images/D. Menambahkan Data Tambahan (Full Name)(1).png>)

2. Pada callbacks modifikasi codenya menjadi berikut :

![alt text](<Images/D. Menambahkan Data Tambahan (Full Name)(2).png>)

3. Modifikasi navbar.module.scss

![alt text](<Images/D. Menambahkan Data Tambahan (Full Name)(3).png>)

4. Modifikasi index.tsx pada folder components/layouts/navbar

![alt text](<Images/D. Menambahkan Data Tambahan (Full Name)(4).png>)

5. Jalankan browser pada localhost

![alt text](<Images/D. Menambahkan Data Tambahan (Full Name)(5).png>)


</details>

-----------


<details open>
<summary><h3>E. Proteksi Halaman Profile</h3></summary>

1. Buat Halaman Profile<br>
o pages/profile/index.tsx dan modifikasi file index.tsx

![alt text](<Images/E. Proteksi Halaman Profile(Buat Halaman Profile)(1).png>)

jalankan browser<br>

![alt text](<Images/E. Proteksi Halaman Profile(Buat Halaman Profile)(2).png>)

2. Buat Middleware Authorization<br>
o Buat file withAuth.ts dan folder dengan nama middleware di src

![alt text](<Images/Buat Middleware Authorization(1).png>)

o Modifikasi withAuth.ts<br>

![alt text](<Images/Buat Middleware Authorization(2).png>)

o Modifikasi file middleware.ts<br>

![alt text](<Images/Buat Middleware Authorization(3).png>)

</details>

-----------


<details open>
<summary><h3>F. Pengujian</h3></summary>

Uji 1 – Belum Login<br>
Akses:<br>
/profile<br>
Hasil:<br>
Redirect ke home<br>

![alt text](<Images/F. Pengujian(Uji 1 – Belum Login).png>)

Uji 2 – isLogin = true<br>
Login terlebih dahulu → Akses /profile<br>
Hasil:<br>
Bisa masuk<br>

![alt text](<Images/F. Pengujian(Uji 2 – Sudah Login).png>)

Klik Sign Out → Akses /profile<br>

Hasil:<br>
Tidak bisa masuk<br>

![alt text](<Images/F. Pengujian(Uji 3 – Logout).png>)

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

![alt text](<Images/G. Tugas Praktikum(Register Sukses).png>)

Screenshot database Firestore (data tersimpan):

![alt text](<Images/G. Tugas Praktikum(Database Firestore).png>)

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

![alt text](<Images/G. Tugas Praktikum(Email Sudah Ada).png>)

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


