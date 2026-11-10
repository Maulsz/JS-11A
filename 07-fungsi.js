// #####################################################################
//  TUGAS 07 : Arrow Function & Default Parameter
//  FILE     : 07-fungsi.js   <- file ini kamu buat sendiri
//  ISI      : soal 7.1 dan 7.2
//  TARGET   : bisa mengubah function biasa menjadi arrow function
//             dan memakai default parameter
// #####################################################################

// ---------- TUGAS 07 | SOAL 7.1 ----------
// SOAL   : Function biasa tambah() sudah ada di bawah. Tulis ulang jadi
//          arrow function DUA kali:
//            a) tambahA : arrow function dengan { } dan return
//            b) tambahB : arrow function paling singkat (1 baris,
//               tanpa { } dan tanpa return)
//          Tampilkan tambahA(2, 3) dan tambahB(2, 3).
// LOGIKA : 1) simpan fungsi ke variabel const, hapus kata function
//          2) taruh tanda => setelah kurung parameter
//          3) versi (b): isinya cuma satu ekspresi, jadi { } dan return
//             boleh dibuang
// CLUE   : bentuk (a): const namaFungsi = (a, b) => { return ...; };
//          bentuk (b): const namaFungsi = (a, b) => ...;

console.log("\n");
{
  console.info("---------- TUGAS 07 | SOAL 7.1 ----------");

  function tambah(a, b) {
    return a + b;
  }

  // TULIS KODEMU DI SINI
  const tambah2 = (a, b) => {
    return a + b;
  };

  const tambah3 = (a, b) => a + b; // karena return/ekspresi nya cuman satu,, jadi kata kunci return dan kurung kurawal tidak diperlukan dalam kondisi ini

  console.log(tambah(5, 10));
  console.log(tambah2(10, 10));
  console.log(tambah3(50, 50));
}

// ---------- TUGAS 07 | SOAL 7.2 ----------
// SOAL   : Buat arrow function sapa dengan satu parameter nama yang
//          nilai defaultnya "Teman". Fungsi mengembalikan teks
//          "Halo, <nama>!". Tampilkan:
//            a) sapa()
//            b) sapa("Budi")
//            c) sapa(null)    <- TEBAK DULU hasilnya
// LOGIKA : 1) buat arrow function dengan parameter nama
//          2) beri nilai default untuk nama
//          3) kembalikan teks "Halo, " + nama + "!"
//          4) panggil 3 kali seperti di soal
// CLUE   : default parameter = tulis tanda = di parameternya:  (nama = "...")
//          gabung teks pakai tanda +  (backtick baru dipelajari di materi 9)
//          default HANYA dipakai kalau argumen tidak diisi / undefined.
//          null itu bukan undefined.
console.log("\n");
{
  console.info("---------- TUGAS 07 | SOAL 7.2 ----------");
  // TULIS KODEMU DI SINI

  const sapa = (nama = "programer") => {
    return "Halo " + nama;
  };

  const sapa2 = (nama = "developer") => "Halo " + nama;
  console.info("SAPA");
  console.log(sapa());
  console.log(sapa("Pablo"));

  console.log("\n");

  console.info("SAPA2");
  console.log(sapa2("Maul"));
  console.log(sapa2());
}
console.log("\n");
