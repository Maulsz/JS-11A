// #####################################################################
//  TUGAS 08 : DOM Dasar (getElementById)
//  FILE     : 08-dom.js  +  08-index.html   <- file ini kamu buat sendiri
//  ISI      : soal 8.1 dan 8.2
//  TARGET   : bisa mengambil elemen HTML dengan getElementById
//             lalu membaca dan mengubah isinya
// #####################################################################
//
//  PENTING: DOM hanya ada di BROWSER, tidak di Node. Kalau soal 8 ditulis
//  di tugas.js dan dijalankan dengan node, hasilnya error
//  "document is not defined". Karena itu soal 8 dikerjakan LANGSUNG di
//  dua file asli, lalu dibuka di browser:
//
//    1) Buat file  08-index.html  berisi:
//
//       <!DOCTYPE html>
//       <html lang="id">
//       <head>
//         <meta charset="UTF-8">
//         <title>Latihan DOM</title>
//       </head>
//       <body>
//         <h1 id="judul">Belajar DOM</h1>
//         <p id="pesan">Ini paragraf awal.</p>
//
//         <script src="08-dom.js"></script>
//       </body>
//       </html>
//    2) Buat file  08-dom.js  (satu folder dengan 08-index.html)
//       dan tulis kodemu di sana.
//    3) Buka 08-index.html di browser (klik dua kali), lalu tekan F12
//       dan buka tab Console untuk melihat hasil console.log.
//
//  Catatan: tag <script> sengaja ditaruh di PALING BAWAH <body>. Kalau
//  di atas, JavaScript jalan sebelum elemennya ada, hasilnya null.

// ---------- TUGAS 08 | SOAL 8.1 (dikerjakan di 08-dom.js) ----------
// SOAL   : Ambil elemen <h1 id="judul">. Tampilkan isi teksnya di
//          console, lalu ubah teksnya menjadi "Halo, [namamu]!".
// LOGIKA : 1) ambil elemen yang id-nya "judul", simpan di variabel
//          2) tampilkan isi teks elemen itu di console
//          3) isi teks elemen dengan kalimat baru
// CLUE   : mengambil elemen = document.getElementById("judul")
//          (tulis id-nya TANPA tanda #)
//          isi teks elemen   = namaVariabel.textContent
//          mengubah isi teks = namaVariabel.textContent = "teks baru"

// ---------- TUGAS 08 | SOAL 8.2 (dikerjakan di 08-dom.js) ----------
// SOAL   : Ambil elemen <p id="pesan">. Ubah teksnya jadi kalimat
//          bebas dan ubah warna teksnya jadi biru. Lalu coba ambil
//          id yang TIDAK ada ("tidak-ada") dan tampilkan hasilnya
//          di console.
// LOGIKA : 1) ambil elemen "pesan"
//          2) ubah isi teksnya
//          3) ubah warna teksnya
//          4) console.log hasil getElementById untuk id yang tidak ada
// CLUE   : mengubah warna = namaVariabel.style.color = "blue"
//          id yang tidak ada menghasilkan nilai khusus (bukan error).
//          Apa namanya? Itu jawabannya.

// ---------- TUGAS 08 | SOAL 8.1 (dikerjakan di 08-dom.js) ----------
const judul = document.getElementById("judul");
console.log(judul.textContent);
judul.textContent = "Halo Guys";
console.log(judul.textContent);

// ---------- TUGAS 08 | SOAL 8.2 (dikerjakan di 08-dom.js) ----------
// const paragraf = document.getElementById("pesan");
const paragraf = document.querySelector("#pesan");
console.log(paragraf.textContent);

paragraf.textContent = "Ubah Hehe ~~";
paragraf.style.background = "red";

console.log(paragraf.textContent);
