// #####################################################################
//  TUGAS 06 : Objek & Nested Object
//  FILE     : 06-objek.js   <- file ini kamu buat sendiri
//  ISI      : soal 6.1 dan 6.2
//  TARGET   : bisa membuat object, mengakses / mengubah / menambah
//             propertinya, dan membaca object di dalam object
// #####################################################################

// ---------- TUGAS 06 | SOAL 6.1 ----------
// SOAL   : Buat object siswa berisi nama "Budi", umur 16, kelas "X-A".
//          Lalu: tampilkan nama (pakai titik), tampilkan umur (pakai
//          kurung siku), ubah umur jadi 17, tambah properti hobi
//          "membaca", dan tampilkan seluruh object.
// LOGIKA : 1) buat object dengan 3 properti
//          2) tampilkan nama, lalu umur
//          3) ubah isi umur
//          4) tambah properti baru bernama hobi
//          5) tampilkan seluruh object siswa
// CLUE   : membuat object   = { kunci: nilai, kunci2: nilai2 }
//          akses pakai titik = siswa.nama
//          akses kurung siku = siswa["umur"]
//          ubah / tambah     = siswa.umur = 17   |   siswa.hobi = "..."
console.log("\n");
{
  console.info("---------- TUGAS 06 | SOAL 6.1 ----------");
  // TULIS KODEMU DI SINI
  const siswa = {
    nama: "Budi",
    umur: 16,
    kelas: "X-A",
  };

  console.log(
    `Tampilkan nama object siswa pakai . / Dot notaion: ${siswa.nama}`,
  );

  console.log(
    `Tampilkan nama object siswa pakai [] / Kurungsiku / Square Bracket: ${siswa["umur"]}`,
    // kurung siku di object wajib pake string, dan pada awalnya meski kita gakpake petik saat buat object, key nya itu tetap string pada dasarnya
  );

  siswa.hobi = "Badminton";
  console.log(siswa.hobi);
  console.log(siswa);
}
console.log("\n");

// ---------- TUGAS 06 | SOAL 6.2 ----------
// SOAL   : Object sekolah punya object lain di dalamnya (alamat).
//          Tampilkan kota dan jalan, ubah kota jadi "Bandung", tambah
//          kodePos "40111" ke DALAM alamat, lalu tampilkan alamat.
// LOGIKA : 1) masuk ke sekolah, lalu ke alamat, lalu ambil kota
//          2) hal yang sama untuk jalan
//          3) ubah isi kota di dalam alamat
//          4) tambah properti kodePos di dalam alamat
//          5) tampilkan seluruh alamat
// CLUE   : nested object = rantai titik, dari luar ke dalam:
//          sekolah.alamat.kota
//          mengubah / menambah juga memakai rantai yang sama
console.log("\n");

{
  console.info("---------- TUGAS 06 | SOAL 6.2 ----------");
  const sekolah = {
    nama: "SMA Nusantara",
    alamat: {
      kota: "Jakarta",
      jalan: "Jl. Merdeka No. 1",
    },
  };

  // TULIS KODEMU DI SINI
  console.log(`SMA Nusantara berada di Kota ${sekolah.alamat.kota}`); // pake titik
  console.log(`di ${sekolah["alamat"]["jalan"]}`); // pake kurung siku
  console.log(sekolah.alamat["kota"]); // pake keduanya
  console.log(sekolah["alamat"].jalan);

  console.log("\n");

  console.info("COBA BUAH KOTA");
  sekolah.alamat.kota = "Jawa"; // pake titik
  console.log(sekolah.alamat.kota);

  sekolah["alamat"]["kota"] = "Jatim"; // Pake kotak
  console.log(sekolah.alamat["kota"]);

  sekolah["alamat"].kota = "Jabar";
  console.log(sekolah["alamat"].kota);

  console.log(`Alamat lengkap ${sekolah.alamat.kota} ${sekolah.alamat.jalan}`);
  console.log(sekolah.alamat);
}

console.log("\n");
