# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛡️ Sistem Deteksi Hoaks Berita (Capstone Project)

Selamat datang di repositori utama **Sistem Deteksi Hoaks Berita**. Repositori ini memuat _codebase_ lengkap (Full-Stack) dalam satu tempat, mencakup antarmuka **Front-End (React + Vite)** dan **Back-End API Gateway (Node.js + Express.js)** yang terintegrasi secara _real-time_ dengan sistem Microservice AI (Python NLP).

---

## 🛠️ Arsitektur & Teknologi yang Digunakan

Sistem ini memisahkan layanan menjadi beberapa _environment_ (_Microservices Architecture_):

**1. Front-End (Client-Side) ➔ Di-hosting di Vercel**

- **Library:** React.js
- **Bundler:** Vite (SWC/Oxc)
- **Styling:** CSS / Tailwind

**2. Back-End (API Gateway) ➔ Di-hosting di Render**

- **Runtime:** Node.js
- **Framework:** Express.js
- **Networking:** Axios (Komunikasi asinkron ke layanan AI)
- **Middleware:** CORS & Express JSON

**3. AI Microservice (Model Prediksi) ➔ Google Colab / Ngrok**

- **Teknologi:** Python, Flask, Random Forest, XGBoost

---

## 📂 Struktur Direktori Utama

Repositori ini menggunakan struktur _monorepo_. Berikut adalah navigasi direktori utamanya:

```text
📦 trusted-news-ai (Root)
 ┣ 📂 backend/         # Lingkungan Back-End (Node.js & Express)
 ┃ ┣ 📂 controllers/   # Logika bisnis & integrasi AI (hoaxController.js)
 ┃ ┣ 📂 routes/        # Definisi endpoint API
 ┃ ┗ 📜 server.js      # Entry point server Back-End
 ┣ 📂 src/             # Lingkungan Front-End (React Components, Pages, Assets)
 ┣ 📂 public/          # File statis Front-End
 ┣ 📜 package.json     # Konfigurasi dependencies Front-End
 ┗ 📜 vite.config.js   # Konfigurasi build Vite

 🚀 Cara Menjalankan di Lingkungan Lokal
Untuk menjalankan aplikasi ini secara lokal (di laptop/PC), Anda perlu membuka dua terminal terpisah (satu untuk Front-End, dan satu untuk Back-End).

1. Menjalankan Front-End (React + Vite)
Buka terminal di direktori utama (root), lalu jalankan perintah berikut:

npm install
npm run dev


2. Menjalankan Back-End (Express.js)
Buka tab terminal baru, masuk ke dalam folder backend, dan nyalakan server:

cd backend
npm install
npm run dev


📡 Dokumentasi Endpoint API Utama
Back-End bertindak sebagai jembatan lalu lintas data yang aman antara Front-End dan Model AI.

POST /api/check
Endpoint ini menerima parameter headline berita dari Front-End, memvalidasinya, dan meneruskannya ke mesin AI untuk dianalisis skor hoaks beserta daftar referensi beritanya.

Request Body (JSON):

{
  "headline": "Ijazah Jokowi Palsu"
}

Response (200 OK):

{
    "status": "success",
    "data": {
        "skor_hoax": 53,
        "verdict": "TIDAK PASTI (PERLU VERIFIKASI)",
        "keyakinan": "rendah",
        "komponen_analisis": {
            "analisis_semantik": ["Narasi Berulang", "Mayoritas Membantah"],
            "cek_fakta_resmi": "Tidak ada cek fakta resmi ditemukan",
            "jangkauan_penelusuran": 5,
            "rasio_konfirmasi": {
                "membantah": 4,
                "mendukung": 0
            }
        },
        "berita_terkait": [
            {
                "id": 1,
                "judul": "Polisi Limpahkan Lagi Berkas Kasus Ijazah Jokowi ke Kejaksaan - detikNews",
                "sumber": "detikNews",
                "similarity": 23.77,
                "status": "Membantah",
                "clickbait": "no",
                "skor_hoax_artikel": 21.22,
                "trusted_source": false,
                "url": "[https://news.google.com/](https://news.google.com/)..."
            }
        ]
    }
}
```

Dikelola oleh Tim Capstone - Sistem Deteksi Hoaks Berita © 2026
