// #####################################################################
//  TUGAS 03 : Perulangan & Akumulasi (for + total)
//  FILE     : 03-perulangan-akumulasi.js   <- file ini kamu buat sendiri
//  ISI      : soal 3.1 dan 3.2
//  TARGET   : bisa tracing / menghitung manual nilai akhir variabel
// #####################################################################

// ---------- TUGAS 03 | SOAL 3.1 ----------
// SOAL   : Jumlahkan angka 1 + 2 + 3 + 4 + 5 memakai for, lalu tampilkan.
//          SEBELUM mengetik, buat tabel tracing di kertas:
//              putaran | i | total sebelum | total sesudah
// LOGIKA : 1) buat variabel total bernilai 0 (di LUAR loop)
//          2) loop dengan i mulai 1 sampai 5
//          3) di tiap putaran, tambahkan i ke total
//          4) setelah loop selesai, tampilkan total
// CLUE   : bentuk loop: for (let i = 1; i <= 5; i++) { ... }
//          menambah ke total: total = total + i
//          total harus pakai let (nilainya berubah), bukan const
console.log("\n");

{
  console.info("---------- TUGAS 03 | SOAL 3.1 ----------");
  // TULIS KODEMU DI SINI
  let total = 0;

  for (let i = 1; i <= 5; i++) {
    // pake lebih kekcil atau sama dengan karena kita ingin berhenti di 5, kalo gak bisa infinite/nested loop
    total = total + i;
    console.log(total);
  }
}

// ---------- TUGAS 03 | SOAL 3.2 ----------
// SOAL   : Array harga berisi harga 3 barang. Hitung total semua harga
//          memakai for, lalu tampilkan.
// LOGIKA : 1) buat variabel total bernilai 0
//          2) loop dari index 0 sampai elemen terakhir
//          3) di tiap putaran, tambahkan harga[i] ke total
//          4) tampilkan total setelah loop selesai
// CLUE   : index mulai dari 0, jadi loop: for (let i = 0; i < harga.length; i++)
//          mengambil isi array di putaran ke-i = harga[i]
console.log("\n");

{
  console.info("---------- TUGAS 03 | SOAL 3.2 ----------");
  const harga = [10000, 25000, 5000];
  // TULIS KODEMU DI SINI
  let total = 0;
  for (let i = 0; i < harga.length; i++) {
    // di kasus ini pake sama dengan saja, karena elemen array nya cuman 3
    total += harga[i];
    console.log(total);
  }
  //coba pake foreach
  console.log("\n");
  console.info("---------- TUGAS 03 | NYOBA FOREACH ----------");

  let harga2 = [10000, 25000, 5000];
  let total2 = 0;
  harga2.forEach((angka) => {
    return console.log((angka += total2));
  });
}

console.log("\n");
