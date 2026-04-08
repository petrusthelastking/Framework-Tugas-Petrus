<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 17&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 17 - Implementasi Login Google Provider dengan NextAuth.js + Firebase</td>
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
- ✅ Menghubungkan login dengan database.
- ✅ Melakukan verifikasi password menggunakan bcrypt.
- ✅ Membuat custom login page.
- ✅ Mengimplementasikan callback URL redirect.
- ✅ Menerapkan middleware authentication.
- ✅ Menerapkan role-based access control (RBAC).

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
<summary><h3>B. Konfigurasi Google OAuth</h3></summary>

1. Langkah 1 – Masuk ke Google Cloud Console Buka:

![alt text](<Images/B. Konfigurasi Google OAuth(1).png>)

2. Langkah 2 – Buat Project Baru

![alt text](<Images/B. Konfigurasi Google OAuth(2).png>)

![alt text](<Images/B. Konfigurasi Google OAuth(3).png>)

3. Langkah 3 – Konfigurasi OAuth Consent Screen

![alt text](<Images/B. Konfigurasi Google OAuth(4).png>)

![alt text](<Images/B. Konfigurasi Google OAuth(5).png>)

![alt text](<Images/B. Konfigurasi Google OAuth(6).png>)

![alt text](<Images/B. Konfigurasi Google OAuth(7).png>)

4. Langkah 4 – Buat OAuth Credentials

![alt text](<Images/B. Konfigurasi Google OAuth(8).png>)

</details>

---

<details open>
<summary><h3>D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session</h3></summary>

1. Buka file [...nextauth].ts pada folder api/auth dan modifikasi menjadi berikut

![alt text](<Images/D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session(1)(1).png>)

![alt text](<Images/D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session(1)(2).png>)

![alt text](<Images/D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session(1)(3).png>)

![alt text](<Images/D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session(1)(4).png>)

</details>

---

<details open>
<summary><h3>E. Tambahkan Button Login Google</h3></summary>

1. Modifikasi file index.tsx pada folder views/auth/login

![alt text](<Images/E. Tambahkan Button Login Google(1).png>)

2. Jalankan browser localhost:3000/auth/login masuk melalui sign in with google.Jika berhasil maka akan terhubung dengan akun google.

![alt text](<Images/E. Tambahkan Button Login Google(2).png>)

3. Menampilkan image dari google<br>
o Buka file index.tsx dan tambahkan code berikut<br>

![alt text](<Images/E. Tambahkan Button Login Google(3).png>)

4. Buka file navbar.module.css dan tambahkan code berikut

![alt text](<Images/E. Tambahkan Button Login Google(4).png>)

5. Jika berhasil maka tampillannya akan seperti berikut

![alt text](<Images/E. Tambahkan Button Login Google(5).png>)


</details>

---

<details open>
<summary><h3>G. Simpan Data Google ke Database</h3></summary>

1. Buka file servicefirebase.ts pada folder src/utils/db/ dan tambahkan beberapa kode berikut

![alt text](<Images/G. Simpan Data Google ke Database(1).png>)

2. Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika
data akun googlenya masuk ke database maka anda telah berhasil

![alt text](<Images/G. Simpan Data Google ke Database(2).png>)

</details>

---

<details open>
<summary><h3>G. Tugas Mandiri</h3></summary>

## Tugas Mandiri

Sesuai instruksi, implementasi yang dikerjakan:

1. Tambahkan role `editor` dan buat halaman khusus `/editor`.
2. Buat halaman yang hanya bisa diakses oleh role `editor` dan `admin`.
3. Tambahkan provider GitHub ke NextAuth.
4. Refactor fungsi OAuth agar reusable (dapat digunakan Google dan GitHub).
5. Gunakan `next/image` untuk optimasi avatar dari Google/GitHub.

---

## 1) Role Editor + Halaman /editor

Role `editor` ditambahkan sebagai peran baru di antara `member` dan `admin`. Halaman `/editor` hanya dapat diakses oleh user dengan role `editor` atau `admin`.

### Proteksi Route — `src/Middleware/withAuth.ts`

```ts
const hanyaAdmin = ["/admin"];
const hanyaEditor = ["/editor"];

// Di dalam withAuth:
if (token.role !== "admin" && hanyaAdmin.includes(pathname)) {
  return NextResponse.redirect(new URL("/", req.url));
}

if (
  token.role !== "editor" &&
  token.role !== "admin" &&
  hanyaEditor.includes(pathname)
) {
  return NextResponse.redirect(new URL("/", req.url));
}
```

Logika: Admin dapat mengakses `/admin` dan `/editor`. Editor hanya dapat mengakses `/editor`. Member tidak bisa mengakses keduanya.

### Middleware Entry — `src/middleware.ts`

```ts
export const middleware = withAuth(
  function middleware(request) {
    return NextResponse.next();
  },
  ["/profile", "/admin", "/editor"]
);

export const config = {
  matcher: ["/profile", "/admin", "/editor"],
};
```

### Halaman Editor — `src/pages/editor/index.tsx`

```tsx
const HalamanEditor = () => {
  return (
    <div>
      <div className="editor">
        <h1>Halaman Editor</h1>
        <p>
          Selamat datang di halaman editor! Anda memiliki akses untuk mengelola
          konten di aplikasi ini. Di sini, Anda dapat membuat, mengedit, dan
          menghapus artikel atau konten lainnya. Pastikan untuk menggunakan hak
          akses Anda dengan bijak.
        </p>
      </div>
    </div>
  );
};

export default HalamanEditor;
```

---

## 2) GitHub Provider

GitHub OAuth ditambahkan sebagai provider login alternatif selain Google.

### Konfigurasi — `src/pages/api/auth/[...nextauth].ts`

```ts
import GithubProvider from "next-auth/providers/github";

providers: [
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  }),
  // ... GoogleProvider, CredentialsProvider
],
```

### JWT Callback untuk GitHub

```ts
if (account?.provider === "github") {
  const data = {
    fullname: profile?.name || profile?.login,
    email: profile?.email,
    image: profile?.avatar_url,
    type: "github",
  };
  await signInWithGoogle(data, (result: any) => {
    if (result.status === "success") {
      token.fullname = data.fullname;
      token.email = data.email;
      token.image = data.image;
      token.role = result.data?.role || "member";
      token.type = "github";
    }
  });
}
```

### Environment Variables — `.env.local`

```env
GITHUB_CLIENT_ID=<your_github_client_id>
GITHUB_CLIENT_SECRET=<your_github_client_secret>
```

Daftarkan OAuth App di: **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**

Callback URL: `http://localhost:3000/api/auth/callback/github`

---

## 3) Refactor signInWithOAuth (Reusable)

Fungsi `signInWithGoogle` di-refactor menjadi `signInWithOAuth` yang dapat digunakan oleh semua provider OAuth (Google, GitHub, dll).

### Fungsi Baru — `src/utils/db/servicefirebase.ts`

```ts
export async function signInWithOAuth(
  userData: {
    fullname: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
    type: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const existingData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (existingData.length > 0) {
    // Update data existing, pertahankan role
    const existingUser: any = existingData[0];
    await updateDoc(doc(db, "users", existingUser.id), {
      fullname: userData.fullname,
      image: userData.image,
      type: userData.type,
    });
    callback({ status: "success", data: existingUser });
  } else {
    // Buat user baru dengan role default "member"
    const newUser = {
      ...userData,
      role: "member",
      password: null,
    };
    await addDoc(collection(db, "users"), newUser)
      .then(() => {
        callback({ status: "success", data: newUser });
      })
      .catch((error) => {
        callback({ status: "error", message: error.message });
      });
  }
}

// Alias untuk backward compatibility
export const signInWithGoogle = signInWithOAuth;
```

**Keuntungan refactor:**
- Satu fungsi untuk semua provider OAuth
- Role user yang sudah ada dipertahankan (tidak direset ke "member")
- Data profil (nama, foto) selalu diperbarui saat login

---

## 4) next/image untuk Optimasi Avatar

Elemen `<img>` biasa diganti dengan komponen `<Image>` dari `next/image` untuk optimasi gambar otomatis (lazy loading, format WebP, resize).

### Perubahan — `src/components/layouts/navbar/index.tsx`

```tsx
import Image from "next/image";

// Sebelum:
// <img src={data.user?.image} alt="avatar" className={styles.navbar__user__image} />

// Sesudah:
{data.user?.image && (
  <Image
    src={data.user.image}
    alt={data.user.fullname || "avatar"}
    width={42}
    height={42}
    className={styles.navbar__user__image}
  />
)}
```

### Konfigurasi Domain — `next.config.ts`

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};
```

**Keuntungan:**
- Gambar di-lazy load secara otomatis
- Next.js mengonversi ke format WebP jika browser mendukung
- Ukuran gambar dibatasi (42×42 px) → tidak unduh gambar berlebihan

---

## Ringkasan

- ✅ Role `editor` ditambahkan — dapat mengakses `/editor` (juga bisa diakses `admin`)
- ✅ Halaman `/editor` dibuat dan diproteksi via `withAuth.ts` + `middleware.ts`
- ✅ GitHub Provider ditambahkan ke NextAuth — login dengan akun GitHub
- ✅ `signInWithOAuth` refactored — reusable untuk semua provider OAuth
- ✅ `signInWithGoogle` dipertahankan sebagai alias (backward compatibility)
- ✅ `<img>` diganti `<Image>` dari `next/image` — avatar Google/GitHub ter-optimasi

</details>

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


