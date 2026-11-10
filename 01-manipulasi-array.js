// #####################################################################
//  TUGAS 01 : Manipulasi Array (push, pop, length)
//  FILE     : 01-manipulasi-array.js   <- file ini kamu buat sendiri
//  ISI      : soal 1.1 dan 1.2
//  TARGET   : bisa menjawab, kalau array ditambah 1 lalu dihapus 1,
//             jumlahnya jadi berapa
// #####################################################################

// ---------- TUGAS 01 | SOAL 1.1 ----------
// SOAL   : Array buah berisi 'apel'. Tambahkan 'jeruk', tampilkan jumlah
//          isi array. Lalu hapus 1 elemen, tampilkan jumlah isi array lagi.
// LOGIKA : 1) tambah 'jeruk' di akhir array
//          2) tampilkan jumlahnya
//          3) hapus elemen terakhir
//          4) tampilkan jumlahnya lagi
// CLUE   : tambah di akhir = push(...)   |   hapus di akhir = pop()
//          jumlah isi array = buah.length   (tanpa tanda kurung)

console.log("\n");
// console.log("\n");
{
  console.info("---------- TUGAS 01 | SOAL 1.1 ----------");
  const buah = ["apel"];
  console.log(`Buah sebelum push jeruk: ${buah}, jumlah nya ${buah.length}`);
  console.log(buah);

  buah.push("jeruk");
  console.log(`Buah setelah push jeruk: ${buah}, jumlah nya ${buah.length}`);
  console.log(buah);

  console.log("\n");

  console.log(`Buah sebelum pop(): ${buah}, jumlah nya ${buah.length}`);
  console.log(buah);

  buah.pop();
  console.log(`Buah setelah pop(): ${buah}, jumlah nya ${buah.length}`);
  console.log(buah);

  // TULIS KODEMU DI SINI
}

// ---------- TUGAS 01 | SOAL 1.2 ----------
// SOAL   : Tampilkan elemen TERAKHIR dari array huruf, tanpa menghapusnya.
// LOGIKA : 1) hitung index terakhir (index mulai dari 0, jadi
//             index terakhir = jumlah elemen dikurangi 1)
//          2) ambil elemen di index itu
//          3) tampilkan
// CLUE   : jumlah elemen = huruf.length
//          ambil elemen berdasarkan index = huruf[index]
//          JANGAN pakai pop(), karena pop() menghapus elemennya
console.log("\n");
{
  console.info("---------- TUGAS 01 | SOAL 1.2 ----------");
  const huruf = ["a", "b", "c"];
  console.log(`Jumlah Array Huruf Saat Ini: ${huruf.length}`);
  console.log(huruf);

  const hurufTeraKhir = huruf[2];
  console.log(`Elemen INdex Terakhir di Array Huruf: ${hurufTeraKhir}`);
  console.log(huruf);
  console.log(hurufTeraKhir);

  // TULIS KODEMU DI SINI
}
console.log("\n");
