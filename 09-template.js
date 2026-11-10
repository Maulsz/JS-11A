// #####################################################################
//  TUGAS 09 : Template Literals
//  FILE     : 09-template.js   <- file ini kamu buat sendiri
//  ISI      : soal 9.1 dan 9.2
//  TARGET   : bisa menyisipkan variabel dan perhitungan ke dalam teks
//             memakai backtick
// #####################################################################

// ---------- TUGAS 09 | SOAL 9.1 ----------
// SOAL   : Dengan variabel nama dan umur, tampilkan kalimat:
//          Halo, nama saya Budi, umur 16 tahun.
//          Pakai template literal (backtick), BUKAN tanda +.
// LOGIKA : 1) tulis kalimat di antara tanda backtick
//          2) di tempat nama dan umur, sisipkan variabelnya
//          3) tampilkan dengan console.log
// CLUE   : tanda backtick ` ada di tombol kiri atas keyboard (di bawah Esc)
//          menyisipkan variabel = ${namaVariabel}
{
  const nama = "Budi";
  const umur = 16;

  // TULIS KODEMU DI SINI
}

// ---------- TUGAS 09 | SOAL 9.2 ----------
// SOAL   : Tampilkan struk 2 baris dalam SATU template literal:
//              Barang: Kopi
//              Total: Rp45000
//          Total harus dihitung LANGSUNG di dalam ${ }  (harga x qty).
// LOGIKA : 1) tulis baris pertama, sisipkan barang
//          2) tekan Enter di dalam backtick untuk pindah baris
//          3) tulis baris kedua, hitung harga x qty di dalam ${ }
// CLUE   : ${ } boleh berisi perhitungan:  ${harga * qty}
//          pindah baris = tekan Enter langsung di dalam backtick
//          HATI-HATI: baris kedua harus ditulis dari kolom paling kiri.
//          Spasi di depannya ikut tercetak.
{
  const barang = "Kopi";
  const harga = 15000;
  const qty = 3;

  // TULIS KODEMU DI SINI
}
