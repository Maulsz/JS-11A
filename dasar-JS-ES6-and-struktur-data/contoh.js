// =====================================================================
//  tugas.js  |  LATIHAN JAVASCRIPT DASAR  |  10 soal (2 soal per materi)
// =====================================================================
//
//  CARA PAKAI
//  1. Baca soalnya dari atas ke bawah.
//  2. Ketik kodemu SENDIRI di dalam tanda { } milik soal itu
//     (di bawah tulisan "TULIS KODEMU DI SINI").
//  3. Jalankan:  node tugas.js     (atau salin ke console browser F12)
//  4. Cocokkan hasil yang tampil dengan "KUNCI HASIL" di paling bawah file.
//
//  Penjelasan materi lengkap ada di README.md.
// =====================================================================

// #####################################################################
//  MATERI 1 : push(), pop(), length
//  TARGET   : bisa menjawab, kalau array ditambah 1 lalu dihapus 1,
//             jumlahnya jadi berapa
// #####################################################################

// ---------------------------------------------------------------------
//  CATATAN: kenapa tiap soal dibungkus kurung kurawal { } ?
//
//  { } membuat BLOCK SCOPE (fitur ES6): variabel yang dibuat dengan
//  let / const di dalamnya hanya hidup di dalam blok itu saja.
//
//  Gunanya: tiap soal punya "ruang" sendiri, jadi nama variabel yang
//  sama (misalnya huruf, total, angka) boleh dipakai lagi di soal lain
//  tanpa error "Identifier has already been declared".
//
//  Tanpa { }, dua const dengan nama sama di area yang sama = error.
// ---------------------------------------------------------------------

// ---------- SOAL 1.1 ----------
// SOAL   : Array buah berisi 'apel'. Tambahkan 'jeruk', tampilkan jumlah
//          isi array. Lalu hapus 1 elemen, tampilkan jumlah isi array lagi.
// LOGIKA : 1) tambah 'jeruk' di akhir array
//          2) tampilkan jumlahnya
//          3) hapus elemen terakhir
//          4) tampilkan jumlahnya lagi
// CLUE   : tambah di akhir = push(...)   |   hapus di akhir = pop()
//          jumlah isi array = buah.length   (tanpa tanda kurung)
console.log("\n");

{
  const buah = ["apel"];

  // TULIS KODEMU DI SINI
  buah.push("jeruk");
  console.log(`Isi array buah sekarang: ${buah} , berisi ${buah.length}`);

  buah.pop();
  console.log(
    `Isi array buah Setelah di pop(): ${buah} , berisi ${buah.length}`,
  );
}

console.log("\n");
// ---------- SOAL 1.2 ----------
// SOAL   : Tampilkan elemen TERAKHIR dari array huruf, tanpa menghapusnya.
// LOGIKA : 1) hitung index terakhir (index mulai dari 0, jadi
//             index terakhir = jumlah elemen dikurangi 1)
//          2) ambil elemen di index itu
//          3) tampilkan
// CLUE   : jumlah elemen = huruf.length
//          ambil elemen berdasarkan index = huruf[index]
//          JANGAN pakai pop(), karena pop() menghapus elemennya
{
  const huruf = ["a", "b", "c"];
  console.log(`Jumlah Index Huruf: ${huruf.length}`);
  const hurufLast = huruf[2];
  console.log(`Elemen terakhir berdasarkan index (2): ${hurufLast}`);

  // TULIS KODEMU DI SINI
}
console.log("\n");

// #####################################################################
//  MATERI 2 : == dan ===
//  TARGET   : bisa menebak output boolean jika tipe data berbeda
// #####################################################################

// ---------- SOAL 2.1 ----------
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
{
  // tebakanku:  a)    b)    c)    d)
  // TULIS KODEMU DI SINI
  // a)
  console.log(5 == "5");
  console.log(5 === "5");
  console.log(0 == false);
  console.log(0 === false); // false karena tipe data 0 (Number/int) beda dengan false (boolean)
}

console.log("\n");
// ---------- SOAL 2.2 ----------
// SOAL   : Variabel input berisi teks "18" (dari form, jadi bertipe string).
//          Cek apakah nilainya SAMA PERSIS dengan angka 18.
// LOGIKA : 1) ubah input menjadi angka
//          2) bandingkan hasilnya dengan 18 memakai ===
//          3) tampilkan hasilnya
//          4) sebagai pembanding, tampilkan juga  input === 18  (tanpa diubah)
// CLUE   : mengubah teks jadi angka = Number(input)
{
  const input = "18";

  console.log(`Sebelum di ubah, hasil operasi input === 18: ${input === 18}`);

  // const konversiKeNumber = Number(input); // konversi pake number
  const konversiKeNumber = parseInt(input); // konversi pake parseInt

  console.log(
    `Setelah di konversi ke Number, hasil operasi input === 18: ${konversiKeNumber === 18}`,
  );
  // TULIS KODEMU DI SINI
}

console.log("\n");
// #####################################################################
//  MATERI 3 : for loop + accumulator (variabel penampung)
//  TARGET   : bisa tracing / menghitung manual nilai akhir variabel
// #####################################################################

// ---------- SOAL 3.1 ----------
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
{
  // TULIS KODEMU DI SINI

  let total = 0;
  for (let i = 1; i <= 5; i++) {
    console.log((total += i)); // menambah nilai dengan nilai sebelumnya

    // console.log(total + i); // hanya mengganti nilai total dengan i
  }
}

console.log("\n");
// ---------- SOAL 3.2 ----------
// SOAL   : Array harga berisi harga 3 barang. Hitung total semua harga
//          memakai for, lalu tampilkan.
// LOGIKA : 1) buat variabel total bernilai 0
//          2) loop dari index 0 sampai elemen terakhir
//          3) di tiap putaran, tambahkan harga[i] ke total
//          4) tampilkan total setelah loop selesai
// CLUE   : index mulai dari 0, jadi loop: for (let i = 0; i < harga.length; i++)
//          mengambil isi array di putaran ke-i = harga[i]
{
  const harga = [10000, 25000, 5000];

  // TULIS KODEMU DI SINI
  let total = 0;
  for (let i = 0; i < harga.length; i++) {
    console.log((total += harga[i]));
  }
}

console.log("\n");
// #####################################################################
//  MATERI 4 : Set (data unik, tidak boleh duplikat)
//  TARGET   : tahu kapan harus pakai Set agar data tidak duplikat
// #####################################################################

// ---------- SOAL 4.1 ----------
// SOAL   : Array angka berisi data ganda. Buang duplikatnya memakai Set,
//          lalu tampilkan (a) jumlah data uniknya dan (b) data uniknya
//          dalam bentuk array.
// LOGIKA : 1) masukkan array angka ke dalam Set
//          2) tampilkan jumlah isi Set
//          3) ubah Set kembali menjadi array, lalu tampilkan
// CLUE   : membuat Set dari array = new Set(angka)
//          jumlah isi Set = namaSet.size   (BUKAN .length)
//          Set menjadi array = [...namaSet]
{
  const angka = [1, 1, 2, 3, 3];

  // CARA CEPAT LIHAT NON DUPLIKAT

  console.log(angka);
  console.log(angka.length);

  const angkaUnik = [...new Set(angka)];
  console.log(angkaUnik);
  console.log(angkaUnik.length);

  // TULIS KODEMU DI SINI

  const angkaSet = new Set(angka);
  console.log(angkaSet);
  console.log(angkaSet.size);

  // const angkaSetToArray = [...angkaSet]; // jadi gaada data duplikat,, pake spreadOperator
  const angkaSetToArray = Array.from(angkaSet); // pake Array.from()
  console.log(angkaSetToArray);
  console.log(angkaSetToArray.length);

  //  Spread Operator (ditulis dengan tiga titik: ...) di JavaScript adalah fitur
  // untuk menyebarkan atau memecah elemen-elemen dari suatu iterable (seperti array, objek, atau string)
  //  menjadi nilai-nilai individual/terpisah

  // JAWABANKU: kapan sebaiknya pakai Set? -> saat kita memerlukan/ berada di kondisi dimana data tidak boleh duplikat
}
console.log("\n");

// ---------- SOAL 4.2 ----------
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
  // TULIS KODEMU DI SINI
  const daftarNamaPeserta = new Set();
  daftarNamaPeserta.add("Budi");
  daftarNamaPeserta.add("Sari");
  daftarNamaPeserta.add("Budi"); // tidak terbaca karena set menolak data duplikat

  console.log(
    `Isi Set: ${daftarNamaPeserta}, total isi: ${daftarNamaPeserta.size}`,
  );
  console.log(
    `Apakah di daftar ada nama Sari? : ${daftarNamaPeserta.has("Sari")}`,
  );
  console.log(
    `Apakah di daftar ada nama Andi? : ${daftarNamaPeserta.has("Andi")}`,
  );
}

console.log("\n");

// #####################################################################
//  MATERI 5 : includes() dan indexOf()
//  TARGET   : bisa membedakan mana yang menghasilkan boolean
//             dan mana yang menghasilkan index
// #####################################################################

// ---------- SOAL 5.1 ----------
// SOAL   : Cek apakah 'b' ada di array huruf, lalu cek apakah 'z' ada.
// LOGIKA : 1) cek 'b' lalu tampilkan hasilnya
//          2) cek 'z' lalu tampilkan hasilnya
// CLUE   : cek ada atau tidak = huruf.includes(...)
//          hasilnya berupa true atau false
{
  const huruf = ["a", "b", "c"];

  // TULIS KODEMU DI SINI
  const cekB = huruf.includes("b");
  console.log(`Apakah di variable huruf, ada huruf b? ${cekB}`);
  console.log(`Apakah di variable huruf, ada huruf z? ${huruf.includes("z")}`);
}

console.log("\n");

// ---------- SOAL 5.2 ----------
// SOAL   : Cari POSISI (index) 'c' di array huruf, lalu cari posisi 'z'.
// LOGIKA : 1) cari posisi 'c' lalu tampilkan hasilnya
//          2) cari posisi 'z' lalu tampilkan hasilnya
// CLUE   : mencari posisi = huruf.indexOf(...)
//          hasilnya berupa ANGKA index; kalau tidak ketemu hasilnya -1
{
  const huruf = ["a", "b", "c"];

  // TULIS KODEMU DI SINI

  const indexC = huruf.indexOf("c");
  console.log(`C berada di index: ${indexC}`);
  console.log(`Z berada di index: ${huruf.indexOf("z")}`);
  // Dalam JavaScript, method indexOf() mengembalikan nilai -1 sebagai penanda (sentinel value)
  //  untuk menyatakan bahwa elemen yang Anda cari tidak ada di dalam array.

  // JAWABANKU: includes() menghasilkan nilai Boolean(true/false),  sedangkan indexOf() menghasilkan index ke-
}

console.log("\n");
// =====================================================================
//  KUNCI HASIL  (jangan dibuka sebelum mencoba!)
// =====================================================================
//
//  1.1  tampil: 2   lalu   1
//  1.2  tampil: c
//
//  2.1  tampil: true, false, true, false
//  2.2  tampil: true   lalu   false
//
//  3.1  tampil: 15
//  3.2  tampil: 40000
//
//  4.1  tampil: 3   lalu   [ 1, 2, 3 ]
//  4.2  tampil: 2   lalu   true   lalu   false
//
//  5.1  tampil: true   lalu   false
//  5.2  tampil: 2   lalu   -1
//
//  Jawaban pertanyaan:
//  - Kapan pakai Set?  -> saat data tidak boleh ada yang ganda
//                         (misalnya email / username peserta).
//  - includes() menghasilkan boolean (true/false),
//    indexOf() menghasilkan angka (index, atau -1 kalau tidak ada).
//
// =====================================================================
//  CHECKLIST  (ganti [ ] menjadi [x] kalau sudah)
// =====================================================================
//  [ ] Materi 1 selesai (soal 1.1 dan 1.2)
//  [ ] Materi 2 selesai (soal 2.1 dan 2.2)
//  [ ] Materi 3 selesai (soal 3.1 dan 3.2) + tabel tracing sudah dibuat
//  [ ] Materi 4 selesai (soal 4.1 dan 4.2) + sudah menjawab "kapan pakai Set"
//  [ ] Materi 5 selesai (soal 5.1 dan 5.2) + sudah menjawab beda includes/indexOf
// =====================================================================
