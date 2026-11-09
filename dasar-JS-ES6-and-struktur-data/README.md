# Belajar JavaScript Dasar (ES6) & Struktur Data

Dokumen ini adalah **penjelasan materi lengkap** untuk tugas mandiri _Pemrograman Dasar JavaScript (ES6) & Struktur Data_.

Isinya disusun dari dua sumber yang diminta:

- **W3Schools** : bahasanya sederhana, banyak contoh, cocok untuk pertama kali kenal.
- **MDN (Mozilla Developer Network)** : dokumentasi resmi, lebih rinci soal parameter, nilai kembalian, dan kasus khusus.

Pasangan file di folder ini:

| File                   | Fungsi                                                          |
| ---------------------- | --------------------------------------------------------------- |
| `README.md` (file ini) | Penjelasan semua materi, termasuk apa itu ES6                   |
| `tugas.js`             | Soal / TODO untuk mengecek apakah target belajar sudah tercapai |

---

## Daftar Isi

0. [Gambaran Tugas](#0-gambaran-tugas)
1. [Cara Menjalankan Kode](#1-cara-menjalankan-kode)
2. [Apa itu ES6?](#2-apa-itu-es6)
3. [Materi 1: Array, push, pop, length](#3-materi-1-array-push-pop-length)
4. [Materi 2: `==` vs `===`](#4-materi-2--vs-)
5. [Materi 3: for loop & accumulator](#5-materi-3-for-loop--accumulator)
6. [Materi 4: Array vs Set](#6-materi-4-array-vs-set)
7. [Materi 5: indexOf & includes](#7-materi-5-indexof--includes)
8. [Penerapan di Dunia Nyata (Tugas No. 4)](#8-penerapan-di-dunia-nyata-tugas-no-4)
9. [Upload ke GitHub (Tugas No. 3)](#9-upload-ke-github-tugas-no-3)
10. [Cara Mengerjakan tugas.js](#10-cara-mengerjakan-tugasjs)
11. [Cheat Sheet](#11-cheat-sheet)
12. [Catatan tentang Sumber](#12-catatan-tentang-sumber)

---

## 0. Gambaran Tugas

Tugas mandiri hari ini terdiri dari 4 langkah:

| No  | Tugas                                                                     | Dikerjakan di mana                          |
| --- | ------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | Buka W3Schools / MDN, cari 5 materi                                       | Dirangkum di README ini (bagian 3 sampai 7) |
| 2   | Coba semua contoh kode di JSFiddle atau console browser (F12)             | Lihat bagian 1                              |
| 3   | Tulis program contoh, buat file per program, upload ke GitHub             | Lihat bagian 9                              |
| 4   | Kembangkan penggunaan struktur data ke kasus sehari-hari / masalah sistem | Lihat bagian 8 dan Bagian C di `tugas.js`   |

Lima materi yang dipelajari, beserta **target** masing-masing:

| #   | Materi                      | Target                                                             |
| --- | --------------------------- | ------------------------------------------------------------------ |
| 1   | `push()`, `pop()`, `length` | Bisa menjawab jumlah array jika ditambah 1 lalu dihapus 1          |
| 2   | `==` vs `===`               | Bisa menebak output boolean jika tipe data berbeda                 |
| 3   | `for` + accumulator         | Bisa tracing / menghitung manual nilai akhir variabel              |
| 4   | Array vs Set                | Tahu kapan memakai Set agar data tidak duplikat                    |
| 5   | `indexOf()` vs `includes()` | Bisa membedakan mana yang menghasilkan boolean dan mana yang index |

---

## 1. Cara Menjalankan Kode

Ada 3 cara. Pilih yang paling nyaman.

### a. Console browser (paling cepat)

1. Buka browser (Chrome / Edge / Firefox).
2. Tekan **F12**, lalu buka tab **Console**.
3. Ketik kode, tekan **Enter**.

> Tips: untuk kode lebih dari satu baris, tekan **Shift + Enter** untuk pindah baris tanpa menjalankan.

### b. JSFiddle

1. Buka https://jsfiddle.net
2. Tulis kode di panel **JavaScript**.
3. Tambahkan `console.log(...)` untuk melihat hasil, lalu buka console browser (F12). Kalau pakai panel hasil bawaan, pastikan kodenya tetap memakai `console.log`.

### c. Node.js (untuk file `.js`)

Kalau Node.js sudah terpasang, jalankan dari terminal:

```bash
node tugas.js
```

---

## 2. Apa itu ES6?

**ES6** (sering disebut **ES2015**) adalah versi ke-6 dari standar bahasa JavaScript (ECMAScript), rilis tahun 2015. Versi ini membawa banyak fitur baru yang membuat kode lebih singkat, lebih aman, dan lebih mudah dibaca. Hampir semua kode JavaScript modern ditulis dengan gaya ES6.

Fitur ES6 yang dipakai di materi ini:

### 2.1 `let` dan `const` (menggantikan `var`)

| Kata kunci            | Bisa diisi ulang? | Dipakai untuk                                                   |
| --------------------- | ----------------- | --------------------------------------------------------------- |
| `var` (lama, hindari) | Ya                | Tidak disarankan lagi                                           |
| `let`                 | Ya                | Variabel yang nilainya akan berubah (misal `total`, `i`)        |
| `const`               | **Tidak**         | Nilai yang tidak akan di-assign ulang (default pilihan pertama) |

```js
let total = 0;
total = total + 5; // boleh

const pi = 3.14;
// pi = 3;           // ERROR: Assignment to constant variable
```

**Hal yang sering membingungkan:** `const` pada array/object berarti _variabelnya_ tidak boleh diganti, tapi **isinya tetap boleh diubah**.

```js
const buah = ["apel"];
buah.push("jeruk"); // boleh, isi array berubah
console.log(buah); // ['apel', 'jeruk']

// buah = ['mangga'];  // ERROR, karena mencoba mengganti variabelnya
```

W3Schools juga menyebut kebiasaan umum mendeklarasikan array dengan `const`.

### 2.2 Arrow function `=>`

Cara lebih singkat menulis fungsi.

```js
// Gaya lama
function tambah(a, b) {
  return a + b;
}

// Gaya ES6 (arrow function)
const tambah = (a, b) => {
  return a + b;
};

// Kalau isinya cuma satu ekspresi, `return` dan kurung kurawal boleh dihilangkan
const tambah = (a, b) => a + b;
```

### 2.3 Template literal (backtick)

Menyisipkan variabel ke dalam teks memakai tanda `` ` `` dan `${...}`.

```js
const nama = "Budi";
const umur = 17;

// Gaya lama
console.log("Halo " + nama + ", umur kamu " + umur);

// Gaya ES6
console.log(`Halo ${nama}, umur kamu ${umur}`);
```

### 2.4 Spread operator `...`

"Menumpahkan" isi array/Set ke tempat lain. Sangat berguna untuk Materi 4.

```js
const a = [1, 2];
const b = [3, 4];
const gabung = [...a, ...b]; // [1, 2, 3, 4]
```

### 2.5 `for...of`

Perulangan langsung atas **nilai** (bukan index).

```js
const buah = ["apel", "jeruk"];
for (const item of buah) {
  console.log(item); // 'apel', lalu 'jeruk'
}
```

### 2.6 `Set` (struktur data baru di ES6)

Kumpulan nilai unik. Dibahas lengkap di Materi 4.

### 2.7 Default parameter

Memberi nilai awal pada parameter fungsi.

```js
const sapa = (nama = "Teman") => `Halo ${nama}`;
sapa(); // 'Halo Teman'
sapa("Budi"); // 'Halo Budi'
```

### 2.8 Catatan: tidak semua method yang dipakai berasal dari ES6

| Fitur                                                                       | Muncul di versi                 |
| --------------------------------------------------------------------------- | ------------------------------- |
| `push()`, `pop()`, `length`                                                 | Sudah ada sejak JavaScript awal |
| `==`, `===`                                                                 | Sudah ada sejak awal            |
| `indexOf()`                                                                 | ES5 (2009)                      |
| `let`, `const`, arrow function, template literal, spread, `for...of`, `Set` | **ES6 (2015)**                  |
| `includes()` pada array                                                     | ES2016 (sering disebut ES7)     |

Semuanya didukung oleh browser modern, jadi kamu bisa memakainya bersama-sama tanpa masalah.

---

## 3. Materi 1: Array, push, pop, length

### 3.1 Apa itu array?

Array adalah **satu variabel yang menyimpan banyak nilai berurutan**. Setiap nilai punya **index** (nomor urut) yang dimulai dari **0**, bukan 1.

```js
const buah = ["apel", "jeruk", "mangga"];
//             [0]     [1]      [2]

console.log(buah[0]); // 'apel'
console.log(buah[2]); // 'mangga'
console.log(buah[9]); // undefined (index tidak ada)
```

### 3.2 `push()`: tambah di AKHIR

|                         | W3Schools                           | MDN                                            |
| ----------------------- | ----------------------------------- | ---------------------------------------------- |
| Fungsi                  | Menambah elemen baru di akhir array | Menambah satu atau lebih elemen di akhir array |
| Mengubah array asli?    | Ya                                  | Ya (method yang _mutating_)                    |
| Nilai yang dikembalikan | Panjang array yang baru             | Panjang (`length`) baru dari array             |

```js
const buah = ["apel"];
const hasil = buah.push("jeruk");

console.log(buah); // ['apel', 'jeruk']
console.log(hasil); // 2  <- yang dikembalikan adalah PANJANG baru, bukan array

buah.push("mangga", "pisang"); // boleh langsung banyak
console.log(buah); // ['apel', 'jeruk', 'mangga', 'pisang']
```

### 3.3 `pop()`: hapus di AKHIR

|                         | W3Schools                 | MDN                                                     |
| ----------------------- | ------------------------- | ------------------------------------------------------- |
| Fungsi                  | Menghapus elemen terakhir | Menghapus elemen terakhir dan mengembalikannya          |
| Mengubah array asli?    | Ya                        | Ya                                                      |
| Nilai yang dikembalikan | Elemen yang dihapus       | Elemen yang dihapus, atau `undefined` jika array kosong |

```js
const buah = ["apel", "jeruk"];
const dihapus = buah.pop();

console.log(dihapus); // 'jeruk'  <- yang dikembalikan adalah ELEMEN yang dibuang
console.log(buah); // ['apel']

console.log([].pop()); // undefined (array kosong, tapi tidak error)
```

### 3.4 `length`: jumlah elemen

- `length` adalah **properti**, jadi ditulis **tanpa tanda kurung**: `buah.length`. Menulis `buah.length()` akan error.
- Nilainya selalu **index terakhir + 1**.
- Menurut MDN, `length` bisa diubah manual. Jika diperkecil, elemen di ujung ikut terpotong.

```js
const angka = [10, 20, 30, 40];
console.log(angka.length); // 4
console.log(angka[angka.length - 1]); // 40  (cara mengambil elemen terakhir)

angka.length = 2;
console.log(angka); // [10, 20]
```

### 3.5 Perbandingan cepat

|           | Mengubah array?     | Mengembalikan           |
| --------- | ------------------- | ----------------------- |
| `push(x)` | Ya, tambah di akhir | **Angka**: panjang baru |
| `pop()`   | Ya, hapus di akhir  | **Elemen** yang dihapus |

### 3.6 Menjawab target

```js
const buah = ["apel"]; // length = 1
buah.push("jeruk"); // length = 2
buah.pop(); // length = 1
console.log(buah.length); // 1
```

**Jawaban: jumlahnya kembali ke jumlah awal** (ditambah 1, dikurangi 1).

### 3.7 Kesalahan umum

- `buah.length()` -> error, karena `length` bukan fungsi.
- Mengira `push()` mengembalikan array baru. Nyatanya mengembalikan angka.
- Lupa bahwa `push` dan `pop` **mengubah array aslinya**.

---

## 4. Materi 2: `==` vs `===`

### 4.1 Perbedaan inti

| Operator | Nama                      | Cara kerja                                                                  |
| -------- | ------------------------- | --------------------------------------------------------------------------- |
| `==`     | Loose equality (equality) | Mengubah tipe data lebih dulu (**type coercion**), baru membandingkan nilai |
| `===`    | Strict equality           | Membandingkan **nilai DAN tipe**, tanpa konversi                            |

**Type coercion** artinya JavaScript otomatis mengubah tipe data supaya kedua sisi bisa dibandingkan. Ini penyebab hasil `==` kadang mengejutkan.

```js
5 == "5"; // true   (string '5' diubah jadi angka 5)
5 === "5"; // false  (number vs string, tipe beda)

0 == false; // true   (false diubah jadi 0)
0 === false; // false

1 == true; // true
1 === true; // false
```

### 4.2 Tabel tebak output

| Ekspresi             | Hasil   | Alasan                      |
| -------------------- | ------- | --------------------------- |
| `5 == '5'`           | `true`  | string diubah jadi number   |
| `5 === '5'`          | `false` | tipe beda                   |
| `true == 1`          | `true`  | boolean diubah jadi number  |
| `true === 1`         | `false` | tipe beda                   |
| `'' == 0`            | `true`  | string kosong diubah jadi 0 |
| `null == undefined`  | `true`  | aturan khusus di JavaScript |
| `null === undefined` | `false` | tipe beda                   |
| `'abc' === 'abc'`    | `true`  | tipe dan nilai sama         |

### 4.3 Kasus khusus (dibahas di MDN)

- **`NaN` tidak sama dengan apa pun, termasuk dirinya sendiri.** `NaN == NaN` dan `NaN === NaN` sama-sama `false`. Untuk mengecek NaN pakai `Number.isNaN(x)`.
- **Array dan object dibandingkan berdasarkan referensi**, bukan isi:

  ```js
  [1, 2] === [1, 2]; // false (dua array berbeda di memori)

  const a = [1, 2];
  const b = a;
  a === b; // true  (menunjuk array yang sama)
  ```

- MDN juga menjelaskan `Object.is()` sebagai cara ketiga membandingkan, untuk kasus langka seperti membedakan `+0` dan `-0`.

### 4.4 Pakai yang mana?

Aturan praktis yang dipakai hampir semua tim: **selalu pakai `===` dan `!==`**, supaya hasilnya bisa diprediksi.

Lawan dari keduanya: `!=` (loose not-equal) dan `!==` (strict not-equal).

### 4.5 Kesalahan umum

Input dari form HTML atau `prompt()` selalu bertipe **string**.

```js
const input = "18";
input == 18; // true
input === 18; // false
Number(input) === 18; // true  <- konversi dulu secara eksplisit, lalu pakai ===
```

---

## 5. Materi 3: for loop & accumulator

### 5.1 Struktur `for`

```js
for (inisialisasi; kondisi; langkah) {
  // kode yang diulang
}
```

| Bagian       | Dijalankan kapan                                      | Contoh                      |
| ------------ | ----------------------------------------------------- | --------------------------- |
| inisialisasi | **Sekali** di awal                                    | `let i = 1`                 |
| kondisi      | **Sebelum** tiap putaran; jika `false`, loop berhenti | `i <= 3`                    |
| langkah      | **Setelah** tiap putaran                              | `i++` (artinya `i = i + 1`) |

### 5.2 Variabel accumulator (penampung)

Variabel yang **dideklarasikan di luar loop** dan nilainya **ditambah terus-menerus** di dalam loop.

```js
let total = 0; // accumulator, mulai dari 0
for (let i = 1; i <= 3; i++) {
  total = total + i; // boleh ditulis: total += i;
}
console.log(total); // 6
```

Kenapa harus di luar loop? Kalau dideklarasikan di dalam, nilainya ter-reset di setiap putaran dan tidak bisa diakses setelah loop selesai.

Pakai `let` untuk accumulator, bukan `const`, karena nilainya terus berubah.

### 5.3 Tracing (menghitung manual) dengan tabel

Tracing = mengikuti jalannya kode baris demi baris di atas kertas.

Kode: `let total = 0; for (let i = 1; i <= 3; i++) { total = total + i; }`

| Putaran | `i` | `total` sebelum | Operasi                               | `total` sesudah |
| ------- | --- | --------------- | ------------------------------------- | --------------- |
| 1       | 1   | 0               | 0 + 1                                 | 1               |
| 2       | 2   | 1               | 1 + 2                                 | 3               |
| 3       | 3   | 3               | 3 + 3                                 | 6               |
| cek     | 4   | 6               | `4 <= 3` bernilai false, **berhenti** | **6**           |

### 5.4 Pola accumulator yang sering dipakai

```js
// 1) Menjumlahkan isi array
const nilai = [80, 90, 70];
let jumlah = 0;
for (let i = 0; i < nilai.length; i++) {
  jumlah += nilai[i];
}
console.log(jumlah); // 240
console.log(jumlah / nilai.length); // 80 (rata-rata)

// 2) Versi ES6 dengan for...of (tanpa index)
let jumlah2 = 0;
for (const n of nilai) {
  jumlah2 += n;
}

// 3) Mengalikan: accumulator mulai dari 1, bukan 0
let faktorial = 1;
for (let i = 1; i <= 4; i++) {
  faktorial *= i;
}
console.log(faktorial); // 24
```

### 5.5 Kesalahan umum

- **Nilai awal salah:** penjumlahan mulai dari `0`, perkalian mulai dari `1`.
- **Off-by-one:** `i < 3` dan `i <= 3` hasilnya beda. Untuk array pakai `i < arr.length`.
- **Accumulator berupa string:** `let total = ''` lalu `total += 1` menghasilkan `'1'` (teks), bukan angka.
- **Infinite loop:** kondisi tidak pernah menjadi `false` (misalnya lupa menulis `i++`).

---

## 6. Materi 4: Array vs Set

### 6.1 Perbedaan utama

|                        | Array                 | Set (ES6)                         |
| ---------------------- | --------------------- | --------------------------------- |
| Data duplikat          | **Boleh**             | **Tidak boleh**, semua nilai unik |
| Akses via index `x[0]` | Bisa                  | **Tidak bisa**                    |
| Jumlah elemen          | `.length`             | `.size`                           |
| Urutan                 | Sesuai index          | Sesuai **urutan data dimasukkan** |
| Menambah               | `.push(x)`            | `.add(x)`                         |
| Mengecek ada           | `.includes(x)`        | `.has(x)`                         |
| Menghapus              | `.pop()`, `.splice()` | `.delete(x)`                      |
| Mengosongkan           | `arr.length = 0`      | `.clear()`                        |

### 6.2 Membuat Set

```js
const s = new Set([1, 1, 2, 3]);
console.log(s); // Set(3) {1, 2, 3}
console.log(s.size); // 3
```

> **Perhatian:** hasil `new Set([1,1,2,3])` adalah objek **Set** berisi `1, 2, 3`, **bukan array** `[1,2,3]`. Jumlahnya dilihat dengan **`.size`**, bukan `.length`. Kalau butuh jadi array, pakai spread: `[...s]`.

### 6.3 Method penting Set

```js
const s = new Set();
s.add("a");
s.add("b");
s.add("a"); // diabaikan, karena 'a' sudah ada

console.log(s.size); // 2
console.log(s.has("b")); // true
s.delete("a");
console.log(s.size); // 1

for (const item of s) {
  // Set bisa di-loop dengan for...of
  console.log(item);
}

s.clear(); // kosongkan semua
```

### 6.4 Menghapus duplikat dari array (kegunaan paling populer)

```js
const data = [1, 1, 2, 3, 3, 3];
const unik = [...new Set(data)]; // Set -> kembali jadi array pakai spread
console.log(unik); // [1, 2, 3]

// Cara lain:
const unik2 = Array.from(new Set(data));
```

### 6.5 Bagaimana Set menilai dua nilai "sama"?

MDN menyebut Set memakai algoritma **SameValueZero**: mirip `===`, tapi `NaN` dianggap sama dengan `NaN`.

```js
new Set([1, "1", 1]).size; // 2  (1 dan '1' beda tipe, jadi dianggap berbeda)
new Set([NaN, NaN]).size; // 1  (NaN dianggap sama)
new Set([[1], [1]]).size; // 2  (dua array berbeda = dua referensi berbeda)
```

### 6.6 Kapan pakai Set?

**Pakai Set jika:**

- Perlu daftar yang **dijamin unik** (username, email, ID, tag, kategori).
- Ingin membuang data ganda dari array.
- Sering mengecek "nilai ini sudah ada belum?" pada data banyak. `Set.has()` umumnya lebih cepat daripada mencari satu-satu di array.

**Tetap pakai Array jika:**

- Butuh akses lewat index (`data[0]`).
- Data duplikat memang penting (misalnya riwayat transaksi, daftar nilai ujian).
- Urutan dan posisi elemen penting.

---

## 7. Materi 5: indexOf & includes

### 7.1 `indexOf()`: cari POSISI

```js
const huruf = ["a", "b", "c", "b"];

huruf.indexOf("b"); // 1    (kemunculan pertama)
huruf.indexOf("z"); // -1   (tidak ditemukan)
huruf.indexOf("b", 2); // 3    (mulai mencari dari index 2)
```

- Mengembalikan **angka**: index pertama yang cocok, atau **`-1`** jika tidak ada.
- Pembandingan memakai **strict equality (`===`)**.
- Parameter kedua (opsional) = index awal pencarian.

### 7.2 `includes()`: cek ADA atau TIDAK

```js
const huruf = ["a", "b", "c"];

huruf.includes("b"); // true
huruf.includes("z"); // false
huruf.includes("a", 1); // false  (mulai mencari dari index 1)
```

- Mengembalikan **boolean** (`true` / `false`).
- Parameter kedua (opsional) = index awal pencarian.

### 7.3 Perbedaan

|               | `indexOf()`                              | `includes()`                          |
| ------------- | ---------------------------------------- | ------------------------------------- |
| Hasil         | **Angka** (index) atau `-1`              | **Boolean** (`true` / `false`)        |
| Dipakai untuk | Tahu **di mana** posisinya               | Tahu **ada atau tidak**               |
| Mencari `NaN` | Tidak bisa: `[NaN].indexOf(NaN)` -> `-1` | Bisa: `[NaN].includes(NaN)` -> `true` |
| Muncul di     | ES5                                      | ES2016                                |

### 7.4 Jebakan klasik pada `indexOf`

```js
const arr = ["x", "y"];

if (arr.indexOf("x")) {
  /* ... */
} // SALAH: hasilnya 0, dan 0 dianggap falsy
if (arr.indexOf("x") !== -1) {
  /* ... */
} // BENAR
if (arr.includes("x")) {
  /* ... */
} // BENAR dan paling mudah dibaca
```

Kalau hanya perlu tahu **ada atau tidak**, pakai `includes()`.

### 7.5 Hal lain yang perlu diingat

- Keduanya **case-sensitive**: `['A'].includes('a')` -> `false`.
- Untuk array berisi object, perbandingan memakai referensi: `[{a: 1}].includes({a: 1})` -> `false`.
- `indexOf()` dan `includes()` juga ada di **String** dengan cara kerja yang mirip.

---

## 8. Penerapan di Dunia Nyata (Tugas No. 4)

Tugas nomor 4 meminta kamu **mengembangkan penggunaan fundamental ini ke kasus sehari-hari atau masalah di sistem aplikasi**. Berikut pemetaan konsep ke kasus nyata.

| Konsep              | Kasus nyata                                            | Contoh                                                              |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| `push()`            | Menambah produk ke keranjang belanja                   | Klik "Tambah ke Keranjang"                                          |
| `pop()`             | Fitur "Undo" / batalkan aksi terakhir                  | Hapus item terakhir yang ditambahkan                                |
| `length`            | Badge jumlah item di ikon keranjang / notifikasi       | Ikon keranjang bertuliskan angka 3                                  |
| `===`               | Validasi input form                                    | Cek umur sama persis dengan 18 setelah input diubah jadi angka      |
| `for` + accumulator | Total harga belanja, rata-rata nilai                   | Total = harga x jumlah, dijumlahkan semua                           |
| `Set`               | Daftar peserta / email unik, hindari pendaftaran ganda | Dua orang mendaftar dengan email yang sama (beda huruf besar kecil) |
| `includes()`        | Cek apakah username sudah dipakai                      | Form register: "Username sudah digunakan"                           |
| `indexOf()`         | Menemukan posisi item untuk diubah/dihapus             | Cari posisi produk di daftar lalu hapus                             |

Contoh kecil (ES6):

```js
// Keranjang belanja
const keranjang = [];
keranjang.push("Kopi");
keranjang.push("Gula");
console.log(`Isi keranjang: ${keranjang.length} item`); // Isi keranjang: 2 item

// Total belanja
const barang = [
  { nama: "Kopi", harga: 15000, qty: 2 },
  { nama: "Gula", harga: 12000, qty: 1 },
];
let total = 0;
for (const item of barang) {
  total += item.harga * item.qty;
}
console.log(`Total: Rp${total}`); // Total: Rp42000

// Email peserta unik (tidak peduli huruf besar/kecil)
const pendaftar = ["A@mail.com", "b@mail.com", "a@mail.com"];
const unik = [...new Set(pendaftar.map((e) => e.toLowerCase()))];
console.log(unik); // ['a@mail.com', 'b@mail.com']

// Cek username
const terpakai = ["budi", "sari"];
console.log(terpakai.includes("budi") ? "Sudah dipakai" : "Tersedia"); // Sudah dipakai
```

Versi lengkap dalam bentuk soal ada di **Bagian C** pada `tugas.js`.

**Ide pengembangan lain** untuk file GitHub kamu:

- Antrean loket sederhana (`push` untuk antre, `shift` untuk dipanggil, `length` untuk sisa antrean).
- Daftar tag unik artikel blog (Set).
- Mini kalkulator nilai rapor (accumulator dan rata-rata).
- Pengecekan stok barang (`includes` / `indexOf`).

---

## 9. Upload ke GitHub (Tugas No. 3)

Tugas meminta: **"buat masing-masing file berdasarkan program yang kamu buat pada GitHub"**. Artinya tiap program contoh disimpan sebagai file sendiri.

### 9.1 Saran struktur folder

```
belajar-js-dasar/
├── README.md
├── tugas.js
├── 01-array-push-pop-length.js
├── 02-equality.js
├── 03-for-accumulator.js
├── 04-set-unik.js
├── 05-indexof-includes.js
└── 06-studi-kasus.js
```

Isi tiap file: contoh kode yang sudah kamu coba, lengkap dengan komentar singkat dan `console.log`.

### 9.2 Perintah dasar Git

```bash
# sekali di awal (di dalam folder proyek)
git init
git add .
git commit -m "Tambah materi dasar JavaScript"

# hubungkan ke repository GitHub yang sudah dibuat di github.com
git branch -M main
git remote add origin https://github.com/USERNAME/belajar-js-dasar.git
git push -u origin main
```

Untuk perubahan berikutnya cukup:

```bash
git add .
git commit -m "Pesan singkat perubahan"
git push
```

---

## 10. Cara Mengerjakan tugas.js

`tugas.js` berisi soal yang bisa **mengecek jawabanmu secara otomatis**.

1. Buka `tugas.js`.
2. Cari tanda `___` (tiga garis bawah). Itu tempat kamu mengisi jawaban.
3. Ada dua jenis soal:
   - **Tebak output:** ganti `___` dengan tebakanmu. Tebak dulu **sebelum** menjalankan kodenya di console.
   - **Tulis kode:** ganti `return ___;` dengan kode buatanmu.
4. Jalankan `node tugas.js` (atau salin ke console browser).
5. Arti ikon hasil:
   - ✅ jawaban benar
   - ❌ jawaban salah (jawabanmu akan ditampilkan)
   - ⏳ belum dijawab
6. Di akhir, ada **ringkasan** yang menunjukkan target mana yang sudah tercapai.

---

## 11. Cheat Sheet

```js
// ARRAY
const a = ["x"];
a.push("y"); // tambah di akhir, return panjang baru
a.pop(); // hapus di akhir, return elemen yang dihapus
a.length; // jumlah elemen (tanpa kurung)

// PERBANDINGAN
5 == "5"; // true  (nilai saja)
5 === "5"; // false (nilai + tipe)

// LOOP + ACCUMULATOR
let total = 0;
for (let i = 1; i <= 3; i++) {
  total += i;
} // 6

// SET
const s = new Set([1, 1, 2, 3]); // Set {1, 2, 3}
s.size; // 3
[...s]; // [1, 2, 3] (jadi array)

// PENCARIAN
["a", "b"].indexOf("b"); // 1     (index; -1 jika tidak ada)
["a", "b"].includes("b"); // true  (boolean)
```

---

## 12. Catatan tentang Sumber

Isi README ini disusun berdasarkan konsep yang dibahas di **W3Schools** dan **MDN**, lalu ditulis ulang dengan bahasa sendiri (bukan salinan teks aslinya). Link rujukan utama:

| Topik                         | W3Schools                                                | MDN                                                                                       |
| ----------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| JavaScript ES6                | https://www.w3schools.com/js/js_es6.asp                  | https://developer.mozilla.org/en-US/docs/Web/JavaScript                                   |
| Array                         | https://www.w3schools.com/js/js_arrays.asp               | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array    |
| Array methods (`push`, `pop`) | https://www.w3schools.com/js/js_array_methods.asp        | .../Global_Objects/Array/push dan .../Array/pop                                           |
| `length`                      | https://www.w3schools.com/jsref/jsref_length_array.asp   | .../Global_Objects/Array/length                                                           |
| Perbandingan                  | https://www.w3schools.com/js/js_comparisons.asp          | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness |
| `for` loop                    | https://www.w3schools.com/js/js_loop_for.asp             | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for          |
| Set                           | https://www.w3schools.com/js/js_sets.asp                 | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set      |
| `indexOf`                     | https://www.w3schools.com/jsref/jsref_indexof_array.asp  | .../Global_Objects/Array/indexOf                                                          |
| `includes`                    | https://www.w3schools.com/jsref/jsref_includes_array.asp | .../Global_Objects/Array/includes                                                         |

Dokumentasi bisa diperbarui dari waktu ke waktu, jadi untuk detail parameter dan kasus khusus, buka link di atas dan bandingkan dengan catatan ini.
