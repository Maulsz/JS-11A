// #####################################################################
//  TUGAS 02 : Operator Perbandingan (== vs ===)
//  FILE     : 02-operator-perbandingan.js   <- file ini kamu buat sendiri
//  ISI      : soal 2.1 dan 2.2
//  TARGET   : bisa menebak output boolean jika tipe data berbeda
// #####################################################################

// ---------- TUGAS 02 | SOAL 2.1 ----------
// SOAL   : Tampilkan hasil 4 perbandingan di bawah ini.
//          TEBAK DULU jawabannya (true / false) di kertas atau komentar,
//          BARU jalankan untuk memeriksa tebakanmu.
//            a) 5 == "5"
//            b) 5 === "5"
//            c) 0 == false
//            d) 0 === false
// LOGIKA : 1) tebak a, b, c, d
//          2) tulis console.log untuk masing-masing
//          3) bandingkan hasilnya dengan tebakanmu
// CLUE   : ==  = hanya cek nilai (tipe boleh diubah otomatis)
//          === = cek nilai DAN tipe data harus sama

console.log("\n");

{
  // tebakanku:  a)    b)    c)    d)
  // TULIS KODEMU DI SINI
  console.info("---------- TUGAS 02 | SOAL 2.1 ----------");
  console.log(5 == "5"); // Predik Maul: true
  console.log(5 === "5"); // Predik Maul: false
  console.log(0 == false); // Predik Maul: true
  console.log(0 === false); // Predik Maul: false
}

// ---------- TUGAS 02 | SOAL 2.2 ----------
// SOAL   : Variabel input berisi teks "18" (dari form, jadi bertipe string).
//          Cek apakah nilainya SAMA PERSIS dengan angka 18.
// LOGIKA : 1) ubah input menjadi angka
//          2) bandingkan hasilnya dengan 18 memakai ===
//          3) tampilkan hasilnya
//          4) sebagai pembanding, tampilkan juga  input === 18  (tanpa diubah)
// CLUE   : mengubah teks jadi angka = Number(input)

console.log("\n");

{
  console.info("---------- TUGAS 02 | SOAL 2.2 ----------");
  const input = "18";
  console.log(
    `Perbandingan nilai input === 18 sebelum konversi: ${input === 18}`,
  );

  console.log("\n");

  // TULIS KODEMU DI SINI
  //   const ubahKeInt = Number(input);
  const ubahKeInt = parseInt(input);

  //   console.log(
  //     `Perbandingan nilai input === 18 setelah konversi: ${Number(input) === 18}`,
  //   );
  console.log(
    `Perbandingan nilai input === 18 setelah konversi: ${ubahKeInt === 18}`,
  );
}

console.log("\n");
