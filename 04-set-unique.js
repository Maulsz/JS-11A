// #####################################################################
//  TUGAS 04 : Set (Data Unik)
//  FILE     : 04-set-unique.js   <- file ini kamu buat sendiri
//  ISI      : soal 4.1 dan 4.2
//  TARGET   : tahu kapan harus pakai Set agar data tidak duplikat
// #####################################################################

// ---------- TUGAS 04 | SOAL 4.1 ----------
// SOAL   : Array angka berisi data ganda. Buang duplikatnya memakai Set,
//          lalu tampilkan (a) jumlah data uniknya dan (b) data uniknya
//          dalam bentuk array.
// LOGIKA : 1) masukkan array angka ke dalam Set
//          2) tampilkan jumlah isi Set
//          3) ubah Set kembali menjadi array, lalu tampilkan
// CLUE   : membuat Set dari array = new Set(angka)
//          jumlah isi Set = namaSet.size   (BUKAN .length)
//          Set menjadi array = [...namaSet]
console.log("\n");

{
  console.info("---------- TUGAS 04 | SOAL 4.1 ----------");
  const angka = [1, 1, 2, 3, 3];
  console.log(`Angka Sebelum Di set: ${angka}`);
  console.log(angka);

  const angkaSet = new Set(angka);
  console.log(`Angka setelah Di set: ${angkaSet}`);
  console.log(angkaSet);

  // const ubahKembali = [...angkaSet];
  const ubahKembali = Array.from(angkaSet);
  console.log(`AngkaSet setelah Di ubah ke array kembali: ${ubahKembali}`);
  console.log(ubahKembali);

  console.info(
    "CARA CEPAT HILANGKAN DATA DUPLIKAT NAMUN TETAP ARRAY BUKAN SET",
  );
  const angkaSetCepat = [...new Set(angka)];
  console.log(angkaSetCepat);

  // TULIS KODEMU DI SINI

  // JAWABANKU: kapan sebaiknya pakai Set? -> Saat dimana data tidak boleh double
}

console.log("\n");
// ---------- TUGAS 04 | SOAL 4.2 ----------
// SOAL   : Buat Set kosong untuk daftar nama peserta. Masukkan 'budi',
//          'sari', lalu 'budi' lagi. Tampilkan jumlah isinya, lalu cek
//          apakah 'sari' ada dan apakah 'andi' ada.
// LOGIKA : 1) buat Set kosong
//          2) tambahkan 'budi', 'sari', 'budi' satu per satu
//          3) tampilkan jumlah isinya
//          4) tampilkan hasil pengecekan 'sari', lalu 'andi'
// CLUE   : Set kosong = new Set()
//          menambah ke Set = add(...)
//          mengecek ada atau tidak = has(...)   (hasilnya true / false)
{
  console.info("---------- TUGAS 04 | SOAL 4.2 ----------");
  // TULIS KODEMU DI SINI
  const peserta = new Set();
  peserta.add("budi");
  peserta.add("sari");
  peserta.add("budi"); // ini tidak terhitung karena pendeklarasian budi sudah ada di atas dan Set itu menolak data duplikat

  console.log(`Total Peserta: ${peserta.size}`);
  console.log(`${peserta.size}`);
  console.log(
    `Apakah Sari Hadir Sebagai Peserta?  ${peserta.has("sari") ? "Iya CUy" : "Gakda Cuy"}`, // iya CUy adalah true, false nya adalah Gakda Cuy
  );
  console.log(`Apakah andi Hadir Sebagai Peserta?  ${peserta.has("andi")}`);
}
