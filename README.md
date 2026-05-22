# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Markdown

# 🛡️ Back-End: Sistem Deteksi Hoaks API

Ini adalah repositori Back-End (BE) untuk proyek Capstone **Sistem Deteksi Hoaks Berita**. Server ini dibangun menggunakan **Node.js** dan **Express.js**, serta bertindak sebagai _API Gateway_ yang menjembatani Front-End (React) dengan Microservice AI (Python/Flask).

---

## 🛠️ Teknologi yang Digunakan

- **Runtime:** Node.js
- **Framework:** Express.js
- **HTTP Client:** Axios (untuk mengonsumsi API AI)
- **Keamanan & Middleware:** CORS, Express JSON
- **Development:** Nodemon

---

## ⚙️ Persyaratan Sistem

Pastikan kamu sudah menginstal perangkat lunak berikut di laptop/komputermu:

- Node.js (direkomendasikan v16 atau lebih baru)
- npm (Node Package Manager)

---

## 🚀 Cara Menjalankan Server di Komputer Lokal

Ikuti langkah-langkah berikut untuk menguji coba server Back-End ini:

1. Buka terminal dan arahkan ke dalam folder `backend` ini.
   ```bash
   cd backend
   Instal semua dependencies atau library yang dibutuhkan.
   ```

Bash
npm install
Jalankan server dalam mode development (Nodemon akan otomatis melakukan restart jika ada perubahan file).

Bash
npm run dev
Jika berhasil, akan muncul pesan di terminal bahwa server berjalan di http://localhost:3000.

📡 Dokumentasi Endpoint API
Saat ini, server menyediakan API untuk memeriksa indikasi hoaks pada judul berita.

POST /api/check
Digunakan oleh aplikasi Front-End untuk mengirimkan headline dan mendapatkan respons berupa hasil analisis berserta artikel rujukan.

Request Body (JSON):

JSON
{
"headline": "Ijazah Jokowi Palsu"
}
Response Sukses (200 OK):

JSON
{
"status": "success",
"data": {
"headline": "Ijazah Jokowi Palsu",
"skor_hoax": 20,
"verdict": "KEMUNGKINAN BENAR",
"keyakinan": "tinggi",
"komponen_analisis": {
"rasio_konfirmasi": {
"membantah": 10,
"mendukung": 2
},
"cek_fakta_resmi": "Tidak ada cek fakta resmi ditemukan",
"analisis_semantik": [
"Provokatif",
"Clickbait",
"Narasi Berulang"
],
"jangkauan_penelusuran": 14
},
"berita_terkait": [
{
"id": 1,
"judul": "Google Berita 6",
"sumber": "Kompas",
"similarity": 91.21,
"status": "Mendukung",
"url": "[https://kompas.com](https://kompas.com)"
}
]
}
}
Catatan: Selama masa development dan menunggu API dari tim AI (Microservice) siap, endpoint ini mengembalikan Data Dummy statis untuk memfasilitasi kelancaran pembuatan UI di Front-End.

📂 Struktur Direktori
server.js : File konfigurasi utama dan entry point Express.js.

routes/ : Folder berisi definisi routing untuk setiap endpoint API.

controllers/ : Folder berisi logika inti (core logic) pemrosesan request dan integrasi ke sistem AI.
