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
<summary><h3>H. Tugas Praktikum</h3></summary>

## Tugas Individu

Sesuai instruksi, implementasi yang dikerjakan:

1. Implementasi login menggunakan Credentials Provider.
2. Tambahkan field full name.
3. Tampilkan full name setelah login.
4. Buat halaman profile.
5. Lindungi halaman profile dengan middleware.
6. Dokumentasi: screenshot login, session, dan redirect middleware.

---

## 1) Login dengan Credentials Provider

Login diimplementasikan menggunakan `CredentialsProvider` dari `next-auth`.

File: `src/pages/api/auth/[...nextauth].ts`

```ts
CredentialsProvider({
  name: "credentials",
  credentials: {
    fullname: { label: "Full Name", type: "text" },
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    const user: any = {
      id: "1",
      email: credentials?.email,
      password: credentials?.password,
      fullname: credentials?.fullname,
    }
    if (user) return user
    return null
  },
})
```

---

## 2) Field Full Name

Field `fullname` ditambahkan pada:

- `credentials` di `CredentialsProvider`
- Objek `user` di fungsi `authorize`
- JWT callback: `token.fullname = user.fullname`
- Session callback: `session.user.fullname = token.fullname`

Screenshot form login:

![Login Form](<Images/H. Tugas Praktikum(Login Form).png>)

---

## 3) Tampilkan Full Name Setelah Login

Full name ditampilkan di dua tempat:

**Navbar** (`src/components/layouts/navbar/index.tsx`):

```tsx
const {data}:any = useSession()
// ...
Welcome, {data.user?.fullname}
```

**Halaman Profile** (`src/pages/profile/index.tsx`):

```tsx
const {data}:any = useSession();
// ...
<h1>Selamat Datang {data?.user?.fullname}</h1>
```

Screenshot session (setelah login — full name tampil di navbar):

![Session Navbar](<Images/H. Tugas Praktikum(Session Navbar).png>)

Screenshot halaman profile:

![Profile Page](<Images/H. Tugas Praktikum(Profile Page).png>)

---

## 4) Halaman Profile

File: `src/pages/profile/index.tsx`

```tsx
import { useSession } from "next-auth/react";

const HalamanProfile = () => {
    const {data}:any = useSession();
    return (
        <div>
            <h1>Halaman Profile</h1><br />
            <h1>Selamat Datang {data?.user?.fullname}</h1>
        </div>
    )
}

export default HalamanProfile
```

---

## 5) Proteksi Halaman Profile dengan Middleware

### Higher-Order Middleware (`src/Middleware/withAuth.ts`)

```ts
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
      if (!token) {
        const loginUrl = new URL("/", req.url);
        return NextResponse.redirect(loginUrl);
      }
    }
    return middleware(req, next);
  }
}
```

### Middleware utama (`src/middleware.ts`)

```ts
export const middleware = withAuth(
  function middleware(request) { return NextResponse.next(); },
  ["/profile"]
);

export const config = { matcher: ["/profile"] };
```

Efek:
- Akses `/profile` **tanpa login** → redirect ke `/` (home)
- Akses `/profile` **setelah login** → halaman tampil normal

Screenshot redirect saat belum login:

![Redirect Middleware](<Images/H. Tugas Praktikum(Redirect Middleware).png>)

---

## Ringkasan

- ✅ Login dengan Credentials Provider berhasil diimplementasikan
- ✅ Field full name ditambahkan pada form dan session
- ✅ Full name tampil di navbar dan halaman profile
- ✅ Halaman `/profile` dibuat
- ✅ Halaman `/profile` dilindungi middleware (`withAuth`)
- ✅ Redirect ke `/` jika belum login

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


