// #####################################################################
//  TUGAS 05 : Pencarian Array (indexOf, includes)
//  FILE     : 05-pencarian-array.js   <- file ini kamu buat sendiri
//  ISI      : soal 5.1 dan 5.2
//  TARGET   : bisa membedakan mana yang menghasilkan boolean
//             dan mana yang menghasilkan index
// #####################################################################

// ---------- TUGAS 05 | SOAL 5.1 ----------
// SOAL   : Cek apakah 'b' ada di array huruf, lalu cek apakah 'z' ada.
// LOGIKA : 1) cek 'b' lalu tampilkan hasilnya
//          2) cek 'z' lalu tampilkan hasilnya
// CLUE   : cek ada atau tidak = huruf.includes(...)
//          hasilnya berupa true atau false
console.log("\n");

{
  console.info("---------- TUGAS 05 | SOAL 5.1 ----------");
  const huruf = ["a", "b", "c"];
  console.log(`Apakah b ada di dalam array huruf? ${huruf.includes("b")}`);
  console.log(`Apakah z ada di dalam array huruf? ${huruf.includes("z")}`);

  // TULIS KODEMU DI SINI
}

// ---------- TUGAS 05 | SOAL 5.2 ----------
// SOAL   : Cari POSISI (index) 'c' di array huruf, lalu cari posisi 'z'.
// LOGIKA : 1) cari posisi 'c' lalu tampilkan hasilnya
//          2) cari posisi 'z' lalu tampilkan hasilnya
// CLUE   : mencari posisi = huruf.indexOf(...)
//          hasilnya berupa ANGKA index; kalau tidak ketemu hasilnya -1
console.log("\n");
{
  console.info("---------- TUGAS 05 | SOAL 5.2 ----------");
  const huruf = ["a", "b", "c"];

  // TULIS KODEMU DI SINI

  console.log(`huruf c berada di index ${huruf.indexOf("c")}`);
  console.log(`huruf z berada di index ${huruf.indexOf("z")}`);

  // JAWABANKU: includes() menghasilkan nilai boolean (true/false) sedangkan indexOf() menghasilkan nomor index dari param nya,, kalau -1 artinya tidak ada di dalam index/elemen nya
}

console.log("\n");
