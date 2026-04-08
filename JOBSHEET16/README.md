<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 16&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 16 - Implementasi Login Database & Multi-Role</td>
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
<summary><h3>BAGIAN 1 – Custom Login Page</h3></summary>

1. Tambahkan custom page di NextAuth line 55-57

![alt text](<Images/BAGIAN 1 – Custom Login Page(1).png>)

![alt text](<Images/BAGIAN 1 – Custom Login Page(2).png>)

2. Jalankan browser http://localhost:3000/ dan klik sign in maka akan diarahkan ke
login

![alt text](<Images/BAGIAN 1 – Custom Login Page(3).png>)

</details>

---

<details open>
<summary><h3>BAGIAN 2 – Handle Login di Frontend</h3></summary>

1. Copy paste isi dari register/index.tsx ke file login/index.tsx

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(1).png>)

2. Copy paste isi dari register/register.module.scss ke file login/login.module.scss<br>
• Semua text register pada file index.tsx pada folder login diubah menjadi login

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(2).png>)

3. Lakukan hal yang sama pada file login.module.scss rubah text register menjadi login

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(3).png>)

4. Cek pada file login.tsx pada pages/auth

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(4).png>)

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(5).png>)

5. Jalankan browser localhost:3000/auth/login. Tampilannya akan sama dengan register

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(6).png>)

6. Pada tampilan login kita tidak perlu hapus fullname jadi pada folder
views/auth/login/index.tsx hapus fullname

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(7).png>)

7. Sehingga hasilnya seperti berikut :

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(8).png>)

8. Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti
berikut ( Untuk line 64 sampai kebawah tidak ada perubahan )

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(9).png>)

9. Buka file servicefirebase.ts dan tambahkan code di line 25-38

![alt text](<Images/BAGIAN 2 – Handle Login di Frontend(10).png>)

</details>

---

<details open>
<summary><h3>BAGIAN 3 – Authorize di NextAuth (Database Login)</h3></summary>

1. Buka file [...nextauth].ts modifikasi menjadi berikut ( pada bagian providers )

![alt text](<Images/BAGIAN 3 – Authorize di NextAuth (Database Login)(1).png>)

</details>

---

<details open>
<summary><h3>BAGIAN 4 – Tambahkan Role ke Token</h3></summary>

1. JWT Callback pada file [...nextauth].ts Modifikasi menjadi

![alt text](<Images/BAGIAN 4 – Tambahkan Role ke Token(1).png>)

2. Jalankan browser http://localhost:3000/auth/login

![alt text](<Images/BAGIAN 4 – Tambahkan Role ke Token(2).png>)

![alt text](<Images/BAGIAN 4 – Tambahkan Role ke Token(3).png>)

</details>

---

<details open>
<summary><h3>BAGIAN 5 – Callback URL Logic</h3></summary>

1. Modifikasi withAuth.ts pada folder src/middleware

![alt text](<Images/BAGIAN 5 – Callback URL Logic(1).png>)

</details>

---

<details open>
<summary><h3>BAGIAN 6 – Membuat halaman Admin dan authoriz</h3></summary>

1. Buat halaman admin

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(1).png>)

2. Pada index.tsx tambahkan code berikut

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(2).png>)

3. Modifikasi withAuth.ts

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(3).png>)

4. Jalankan browser localhost:3000/produk dan pada status sudah login. Rubah urlnya
menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. Pada
intinya role selain admin tidak bisa mengakses

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(4).png>)

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(5).png>)

![alt text](<Images/BAGIAN 6 – Membuat halaman Admin dan authoriz(6).png>)

</details>

---

<details open>
<summary><h3>D. Pengujian</h3></summary>

Uji 1 – Login Valid<br>
Input:<br>
• Email benar<br>
• Password benar<br>
Hasil:<br>
• Login berhasil<br>
• Redirect sesuai callbackUrl<br>

![alt text](<Images/Uji 1 – Login Valid.png>)

Uji 2 – Password Salah<br>
Input:<br>
• Email benar<br>
• Password salah<br>
Hasil:<br>
• Error message tampil<br>
• Tidak login<br>

![alt text](<Images/Uji 2 – Password Salah.png>)

Uji 3 – Akses Admin sebagai User<br>
Login sebagai:<br>
• role: user<br>
Akses:<br>
/admin<br>
Hasil:<br>
• Redirect ke home<br>

![alt text](<Images/Uji 3 – Akses Admin sebagai User(1).png>)

![alt text](<Images/Uji 3 – Akses Admin sebagai User(2).png>)

Uji 4 – Akses Admin sebagai Admin<br>
Login sebagai:<br>
• role: admin<br>
Akses:<br>
/admin<br>
Hasil:<br>
• Bisa masuk halaman admin<br>

![alt text](<Images/Uji 4 – Akses Admin sebagai Admin(1).png>)

![alt text](<Images/Uji 4 – Akses Admin sebagai Admin(2).png>)

![alt text](<Images/Uji 4 – Akses Admin sebagai Admin(3).png>)

</details>

<details open>
<summary><h3>G. Tugas Praktikum</h3></summary>

## Tugas Individu

Sesuai instruksi, implementasi yang dikerjakan:

1. Implementasikan login database.
2. Tambahkan role pada user.
3. Buat halaman `/profile` dan `/admin`.
4. Proteksi `/admin` hanya untuk admin.
5. Implementasikan callback URL.

---

## 1) Implementasi Login Database

Login diimplementasikan dengan menghubungkan NextAuth `CredentialsProvider` ke Firestore melalui fungsi `signIn` di `servicefirebase.ts`.

File: `src/utils/db/servicefirebase.ts`

```ts
export async function signIn(email: string) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if (data) {
        return data[0];
    } else {
        return null;
    }
}
```

File: `src/pages/api/auth/[...nextauth].ts` — bagian `authorize`:

```ts
async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) return null;

  const user: any = await signIn(credentials.email);

  if (user) {
    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password,
    );
    if (isPasswordValid) {
      return {
        id: user.id,
        email: user.email,
        fullname: user.fullname,
        role: user.role,
      };
    }
  }
  return null;
},
```

Screenshot halaman login:

![Login Page](Images/login-page.png)

Screenshot login berhasil redirect ke profile:

![Login Success](Images/login-success.png)

---

## 2) Tambahkan Role pada User

Role disimpan di Firestore saat register (`role: "member"` atau `role: "admin"`). Saat login, role dibawa ke JWT token dan session melalui callbacks.

File: `src/pages/api/auth/[...nextauth].ts`

```ts
callbacks: {
  async jwt({ token, account, profile, user }: any) {
    if (account?.provider === "credentials" && user) {
      token.email = user.email;
      token.fullname = user.fullname;
      token.role = user.role;
    }
    return token;
  },
  async session({ session, token }: any) {
    if (token.email) session.user.email = token.email;
    if (token.fullname) session.user.fullname = token.fullname;
    if (token.role) session.user.role = token.role;
    return session;
  },
},
```

Screenshot data user di Firestore (dengan field role):

![Firestore Role](Images/firestore-role.png)

---

## 3) Halaman /profile dan /admin

### Halaman Profile (`src/pages/profile/index.tsx`)

```tsx
import { useSession } from "next-auth/react";

const HalamanProfile = () => {
    const { data }: any = useSession();
    return (
        <div>
            <h1>Halaman Profile</h1>
            <h1>Selamat Datang {data?.user?.fullname}</h1>
        </div>
    );
};

export default HalamanProfile;
```

Screenshot halaman profile:

![Profile Page](Images/profile-page.png)

### Halaman Admin (`src/pages/admin/index.tsx`)

```tsx
const HalamanAdmin = () => {
  return (
    <div>
      <div className="admin">
        <h1>Halaman Admin</h1>
        <p>
          Selamat datang di halaman admin! Anda memiliki akses penuh ke semua
          fitur dan data di aplikasi ini. Di sini, Anda dapat mengelola
          pengguna, melihat laporan, dan melakukan tugas administratif lainnya.
          Pastikan untuk menggunakan hak akses Anda dengan bijak dan menjaga
          keamanan data pengguna.
        </p>
      </div>
    </div>
  );
};

export default HalamanAdmin;
```

Screenshot halaman admin (diakses role admin):

![Admin Page](Images/admin-page.png)

---

## 4) Proteksi /admin Hanya untuk Admin

Proteksi dilakukan di dua tempat:

### `src/Middleware/withAuth.ts`

```ts
const hanyaAdmin = ["/admin"];

export default function withAuth(middleware, requireAuth = []) {
  return async (req, next) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

      if (!token) {
        const Url = new URL("/auth/login", req.url);
        Url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(Url);
      }

      if (token.role !== "admin" && hanyaAdmin.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
}
```

### `src/middleware.ts`

```ts
export const middleware = withAuth(
  function middleware(request) {
    return NextResponse.next();
  },
  ["/profile", "/admin"]
);

export const config = {
  matcher: ["/profile", "/admin"],
};
```

Screenshot akses `/admin` dengan role bukan admin → redirect ke `/`:

![Admin Redirect](Images/admin-redirect.png)

Screenshot akses `/admin` dengan role admin → berhasil masuk:

![Admin Access](Images/admin-access.png)

---

## 5) Implementasi Callback URL

Callback URL diimplementasikan agar setelah login, user diarahkan ke halaman yang sebelumnya ingin diakses.

### Di `withAuth.ts` — set callbackUrl saat redirect ke login:

```ts
const Url = new URL("/auth/login", req.url);
Url.searchParams.set("callbackUrl", encodeURI(req.url));
return NextResponse.redirect(Url);
```

### Di `views/auth/login/index.tsx` — baca callbackUrl dari query dan gunakan setelah login:

```tsx
const { push, query } = useRouter();
const callbackUrl: any = query.callbackUrl || "/";

const res = await signIn("credentials", {
  redirect: false,
  email: event.target.email.value,
  password: event.target.password.value,
  callbackUrl,
});

if (!res?.error) {
  push(callbackUrl);
}
```

Screenshot: akses `/profile` tanpa login → redirect ke `/auth/login?callbackUrl=...` → login → kembali ke `/profile`:

![Callback URL](Images/callback-url.png)

---

## Ringkasan

- ✅ Login terhubung Firestore dengan validasi password `bcrypt`
- ✅ Role tersimpan di Firestore dan dibawa ke JWT token & session
- ✅ Halaman `/profile` menampilkan nama user dari session
- ✅ Halaman `/admin` hanya bisa diakses role `"admin"`
- ✅ User non-admin yang akses `/admin` di-redirect ke `/`
- ✅ Callback URL berfungsi — setelah login user kembali ke halaman tujuan semula

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


