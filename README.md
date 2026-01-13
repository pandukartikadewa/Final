NOTED: 
Mohon maaf mas kami baru menggunakan branch di checkpoint 3. Dalam mengerjakan checkpoint 1-2 kami sistem nya setiap anggota a,b, dan c mengerjakan tugas masing-masing dahulu baru kalau sudah seslesai upload ke repositoy github terus habis itu akan di clone oleh anggota selanjutnya dan seterusnya sampai checkpoint 2. Untuk pembagian tugas lebih jelas nya seperti berikut ini: 

# Anggota A (Frontend User)
Instal dan setup react vite, tailwind css, dan shadcn ui. 
Membuat struktur component file seperti: 
src/public
- Eventcard.jsx
- Footer. jsx
- Navbar. jsx

src/pages
- EventDetail.jsx (tidak termasuk integrasi API) 
- Home.jsx
- Kontak.jsx
- Login.jsx (tidak termasuk integrasi API) 
- Notfound.jsx
- Signup.jsx (tidak termasuk integrasi API) 
- Tentang kami.jsx

src/
- App.jsx

# Anggota B (Admin Frontend)
- Dashboard admin
- CRUD event (admin)
- Validasi form
- UX, loading, dan error handling

# Anggota C (Set up API & Integrasi)
- Setup MockAPI
- Menyusun schema data event
- Menyediakan endpoint API
- Mengintegrasikan API ke dalam pages eventdetail, login, dan signup
  
# Event Ticketing Web App
Aplikasi web pemesanan tiket event yang dibuat menggunakan React dan Vite sebagai Final Project mata kuliah Teknologi Web.

# Teknologi yang Digunakan
- React
- Vite
- Tailwind CSS
- MockAPI
- React Router DOM

Proyek ini dibuat menggunakan template React + Vite untuk mendapatkan performa pengembangan yang cepat (HMR).

# Cara Menjalankan Aplikasi
1. Clone repository ini
2. Masuk ke folder project
3. Jalankan perintah berikut di terminal:

npm install
npm run dev

4. Buka browser dan akses:
http://localhost:5173

# Fitur Aplikasi
# User
- Melihat daftar event
- Melihat detail event
- Pencarian dan filter event
- Halaman Tentang Kami
- Halaman Kontak

# Admin
- Login page (simulasi)
- Melihat daftar event
- Menambahkan event
- Mengedit event
- Menghapus event
- Validasi form dan feedback UI

# API
- Menggunakan MockAPI sebagai backend simulasi
- CRUD event (GET, POST, PUT, DELETE)
- Error handling dan loading state
