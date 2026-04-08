<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00d4ff,100:0099ff&height=200&section=header&text=Jobsheet 19&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Setup%20Project%20Next.js&descAlignY=55&descSize=20" width="100%"/>

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
<td>Jobsheet 19 - Implementasi Unit Testing pada Next.js menggunakan Jest
\</td>
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
- ✅ Memahami konsep dasar Unit Testing
- ✅ Menginstal dan mengkonfigurasi Jest di Next.js
- ✅ Menggunakan React Testing Library
- ✅ Membuat file testing (.spec / .test)
- ✅ Menguji komponen dan halaman (pages)
- ✅ Menghasilkan laporan coverage
- ✅ Melakukan mocking pada Next Router
- ✅ Menganalisis error melalui testing


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
<summary><h3>PRAKTIKUM 1 – Setup Jest di Next.js</h3></summary>

1. Install Dependencies<br>
• Jalankan:<br>
• npm install jest jest-environment-jsdom @testing-library/react @testing-<br>
library/jest-dom --save-dev –force<br>

![alt text](<Image/PRAKTIKUM 1 – Setup Jest di Next.js(1).png>)

2. Buat File Konfigurasi<br>
Doc : https://nextjs.org/docs/pages/guides/testing/jest<br>

![alt text](<Image/PRAKTIKUM 1 – Setup Jest di Next.js(2).png>)

![alt text](<Image/PRAKTIKUM 1 – Setup Jest di Next.js(3).png>)

3. Tambahkan Script di package.json

![alt text](<Image/PRAKTIKUM 1 – Setup Jest di Next.js(4).png>)

</details>

---

<details open>
<summary><h3>PRAKTIKUM 2 – Struktur Folder Testing</h3></summary>

1. Buat folder:<br>
src/__test__/<br>
Struktur contoh:<br>
src<br>
├── pages<br>
├── components<br>
├── views<br>
└── __test__<br>

├── pages<br>
└── components<br>

![alt text](<Image/PRAKTIKUM 2 – Struktur Folder Testing(1).png>)

</details>

---

<details open>
<summary><h3>PRAKTIKUM 3 – Testing Halaman About</h3></summary>

1. Buat File Testing<br>
src/__test__/pages/about.spec.tsx<br>

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(1).png>)

2. Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut :

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(2).png>)

3. Jalankan Testing<br>
• npm run test<br>
• Jika berhasil:<br>
• PASS about.spec.tsx<br>

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(3).png>)

</details>

---

<details open>
<summary><h3>PRAKTIKUM 4 – Coverage Report</h3></summary>

1. • Jalankan:<br>
o npm run test:coverage<br>

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(4).png>)

2. • Akan muncul folder:<br>
o coverage/<br>
o Buka:<br>
▪ coverage/lcov-report/index.html ( buka di melalui explorer)<br>

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(5).png>)

![alt text](<Image/PRAKTIKUM 3 – Testing Halaman About(6).png>)


</details>

---

<details open>
<summary><h3>PRAKTIKUM 5 – Konfigurasi Coverage Lengkap</h3></summary>

1. Update jest.config.mjs:

![alt text](<Image/PRAKTIKUM 5 – Konfigurasi Coverage Lengkap(1).png>)

2. Jalankan npm run test:coverage

![alt text](<Image/PRAKTIKUM 5 – Konfigurasi Coverage Lengkap(2).png>)

3. Jika dilihat di index.htmlnya

![alt text](<Image/PRAKTIKUM 5 – Konfigurasi Coverage Lengkap(3).png>)

</details>

<details open>
<summary><h3>PRAKTIKUM 6 – Testing dengan getByTestId</h3></summary>

1. Tambahkan pada About Page<br>
• <h1 data-testid="title">About Page</h1>

![alt text](<Image/PRAKTIKUM 6 – Testing dengan getByTestId(1).png>)

2. Update Testing pada about.spec.tsx

![alt text](<Image/PRAKTIKUM 6 – Testing dengan getByTestId(2).png>)

• Dicoba untuk di run<br>

![alt text](<Image/PRAKTIKUM 6 – Testing dengan getByTestId(3).png>)

• Jalan kan dan Hasil:<br>

![alt text](<Image/PRAKTIKUM 6 – Testing dengan getByTestId(5).png>)

![alt text](<Image/PRAKTIKUM 6 – Testing dengan getByTestId(4).png>)

</details>

<details open>
<summary><h3>PRAKTIKUM 7 – Testing Page dengan Router (Mocking)</h3></summary>

1. 1. Buat file product.spec.tsx<br>

![alt text](<Image/PRAKTIKUM 7 – Testing Page dengan Router (Mocking)(1).png>)

2. Tambahkan kode berikut

![alt text](<Image/PRAKTIKUM 7 – Testing Page dengan Router (Mocking)(2).png>)

3. Solusi: Mock Next Router<br>
Tambahkan di file product.spec.tsx<br>

![alt text](<Image/PRAKTIKUM 7 – Testing Page dengan Router (Mocking)(3).png>)

</details>

<details open>
<summary><h3>PRAKTIKUM 8 – Menangani Undefined Data</h3></summary>

1. Jalankan npm run test:coverage maka akan muncul error<br>

![alt text](<Image/PRAKTIKUM 8 – Menangani Undefined Data(1).png>)

2. • Jika muncul error:<br>
o Cannot read properties of undefined<br>
o Perbaiki di komponen:<br>

![alt text](<Image/PRAKTIKUM 8 – Menangani Undefined Data(2).png>)

3. Note pastikan : comment pada code berikut pada 2 code testing<br>

![alt text](<Image/PRAKTIKUM 7 – Testing Page dengan Router (Mocking)(3).png>)

4. Analisis Coverage

![alt text](<Image/PRAKTIKUM 8 – Menangani Undefined Data(6).png>)

</details>

<details open>
<summary><h3>H. Tugas Praktikum</h3></summary>

## Tugas Praktikum

Sesuai instruksi, implementasi yang dikerjakan:

1. Buat unit test untuk Halaman Product dan 1 Komponen (`AppShell`).
2. Gunakan minimal 1 Snapshot test, 1 `toBe()`, dan 1 `getByTestId()`.
3. Buat coverage minimal 50%.
4. Lakukan mocking untuk router.
5. Dokumentasikan hasil coverage.

---

## 1) Unit Test — Halaman Product

File: `src/__test__/pages/product.spec.tsx`

Test ini menguji halaman `/produk` (`src/pages/produk/index.tsx`) yang menggunakan `useRouter`, `useSWR`, dan `next/dynamic`. Semua dependency di-mock agar test berjalan tanpa melakukan HTTP request atau memanggil router sungguhan.

### Mock yang Digunakan

```tsx
// Mock next/router — mencegah "NextRouter was not mounted" error
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: { on: jest.fn(), off: jest.fn() },
      isReady: true,
    }
  },
}))

// Mock SWR — mencegah HTTP request, simulasi state loading
jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: null, error: null, isLoading: true })),
}))

// Mock next/dynamic — return stub component agar tidak perlu load modul asli
jest.mock("next/dynamic", () => () => () => <div data-testid="dynamic-produk">Loading...</div>)
```

### Test Cases

```tsx
describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<Kategori />);
    expect(screen.getByTestId("title").textContent).toBe("Product Page"); // ← toBe() + getByTestId()
    expect(page).toMatchSnapshot()                                         // ← Snapshot test
  })
})
```

### Komponen (`src/pages/produk/index.tsx`)

`data-testid="title"` ditambahkan pada elemen h1 agar dapat di-query oleh `getByTestId`:

```tsx
return (
  <div>
    <h1 data-testid="title">Product Page</h1>
    <TampilanProduk products={isLoading ? [] : data?.data} />
  </div>
);
```

---

## 2) Unit Test — Komponen AppShell

File: `src/__test__/components/appshell.spec.tsx`

Test ini menguji komponen `AppShell` (`src/components/layouts/Appshell/index.tsx`) yang merupakan layout utama aplikasi. Komponen ini menampilkan `Navbar` secara kondisional berdasarkan `pathname`.

### Mock yang Digunakan

```tsx
// Mock next/router — menyediakan pathname untuk logika kondisional Navbar
jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/", push: jest.fn() }),
}))

// Mock next/font/google — Roboto tidak bisa di-resolve di test environment
jest.mock("next/font/google", () => ({
  Roboto: () => ({ className: "mock-roboto" }),
}))

// Mock Navbar component — isolasi dari dependency next-auth, next/image, next/script
jest.mock("components/layouts/navbar", () => ({
  __esModule: true,
  default: () => <nav data-testid="navbar">Navbar</nav>,
}))
```

### Test Cases

```tsx
describe("AppShell Component", () => {
  it("renders children correctly", () => {
    const page = render(
      <AppShell>
        <div data-testid="content">Hello World</div>
      </AppShell>
    )
    expect(screen.getByTestId("content").textContent).toBe("Hello World") // ← toBe() + getByTestId()
    expect(page).toMatchSnapshot()                                          // ← Snapshot test
  })

  it("renders navbar on non-disabled routes", () => {
    render(<AppShell><div>Page Content</div></AppShell>)
    expect(screen.getByTestId("navbar").textContent).toBe("Navbar")        // ← toBe() + getByTestId()
  })
})
```

---

## 3) Unit Test — Halaman About (Referensi)

File: `src/__test__/pages/about.spec.tsx`

```tsx
describe("About Page", () => {
  it("renders about page correctly", () => {
    const page = render(<AboutPage />)
    // expect(screen.getByTestId("title").textContent).toBe("About Page")
    expect(page).toMatchSnapshot()
  })
})
```

---

## 4) Hasil Coverage

Konfigurasi `jest.config.mjs` menggunakan `collectCoverageFrom` yang diarahkan ke file yang diuji:

```js
collectCoverageFrom: [
  'src/pages/about/index.tsx',
  'src/pages/produk/index.tsx',
  'src/components/layouts/Appshell/index.tsx',
],
```

### Tabel Coverage

```
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |   96.15 |       75 |      60 |   95.65 |
 components/layouts/Appshell |     100 |      100 |     100 |     100 |
  index.tsx                  |     100 |      100 |     100 |     100 |
 pages/about                 |     100 |      100 |     100 |     100 |
  index.tsx                  |     100 |      100 |     100 |     100 |
 pages/produk                |   91.66 |       50 |   33.33 |    90.9 |
  index.tsx                  |   91.66 |       50 |   33.33 |    90.9 | 7
-----------------------------|---------|----------|---------|---------|-------------------
```

### Ringkasan Hasil Test

```
Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   3 passed, 3 total
```

| Metrik       | Hasil  | Target |
|--------------|--------|--------|
| Statements   | 96.15% | ≥ 50%  |
| Branch       | 75%    | ≥ 50%  |
| Functions    | 60%    | ≥ 50%  |
| Lines        | 95.65% | ≥ 50%  |

---

## Ringkasan

- ✅ Unit test Halaman Product (`product.spec.tsx`) — menggunakan `toBe()`, `getByTestId()`, Snapshot
- ✅ Unit test Komponen AppShell (`appshell.spec.tsx`) — menggunakan `toBe()`, `getByTestId()`, Snapshot
- ✅ Mocking untuk `next/router`, `swr`, `next/dynamic`, `next/font/google`, Navbar component
- ✅ Coverage: **96.15% Statements** — jauh di atas minimum 50%
- ✅ Semua 5 test PASS, 3 snapshot tersimpan

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


