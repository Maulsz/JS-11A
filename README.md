# Belajar JavaScript Dasar (ES6) & Struktur Data

Dokumen ini adalah **penjelasan materi lengkap** untuk tugas belajar mandiri _Pemrograman Dasar JavaScript (ES6) & Struktur Data_, Selasa 10 November 2026.

Isinya disusun dari dua sumber yang diminta:

- **W3Schools** : bahasanya sederhana, banyak contoh, cocok untuk pertama kali kenal.
- **MDN (Mozilla Developer Network)** : dokumentasi resmi, lebih rinci soal parameter, nilai kembalian, dan kasus khusus.

Pasangan file di folder ini:

| File                   | Fungsi                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| `README.md` (file ini) | Penjelasan semua materi (Bagian A dan Bagian B), termasuk apa itu ES6                                    |
| `tugas.js`             | Soal latihan: 2 soal per materi, tiap soal ada SOAL, LOGIKA, CLUE, dan **file tujuan** untuk dipindahkan |

---

## Daftar Isi

0. [Gambaran Tugas](#0-gambaran-tugas)
1. [Cara Menjalankan Kode](#1-cara-menjalankan-kode)
2. [Apa itu ES6?](#2-apa-itu-es6)

**Bagian A: Array & Struktur Data**

3. [Materi 1: Array, push, pop, length](#3-materi-1-array-push-pop-length)
4. [Materi 2: `==` vs `===`](#4-materi-2--vs-)
5. [Materi 3: for loop & accumulator](#5-materi-3-for-loop--accumulator)
6. [Materi 4: Array vs Set](#6-materi-4-array-vs-set)
7. [Materi 5: indexOf & includes](#7-materi-5-indexof--includes)

**Bagian B: Objek, Fungsi & DOM**

8. [Materi 6: Objek & Nested Object](#8-materi-6-objek--nested-object)
9. [Materi 7: Arrow Function & Default Parameter](#9-materi-7-arrow-function--default-parameter)
10. [Materi 8: DOM Dasar](#10-materi-8-dom-dasar)
11. [Materi 9: Template Literals](#11-materi-9-template-literals)

**Penutup**

12. [Penerapan di Dunia Nyata](#12-penerapan-di-dunia-nyata)
13. [Peta File Tugas & Upload ke GitHub](#13-peta-file-tugas--upload-ke-github)
14. [Cara Mengerjakan tugas.js](#14-cara-mengerjakan-tugasjs)
15. [Cheat Sheet](#15-cheat-sheet)
16. [Catatan tentang Sumber](#16-catatan-tentang-sumber)

---

## 0. Gambaran Tugas

Instruksi hari ini terdiri dari **2 bagian, 9 materi**. Tiap materi punya kata kunci Google dan satu file tugas.

### Bagian A: Array & Struktur Data

| No  | Materi                 | Cari                               | Kata kunci Google                              | File tugas                    |
| --- | ---------------------- | ---------------------------------- | ---------------------------------------------- | ----------------------------- |
| 1   | Manipulasi Array       | Fungsi `push()`, `pop()`, `length` | "contoh push pop javascript"                   | `01-manipulasi-array.js`      |
| 2   | Operator Perbandingan  | Beda `==` dan `===`                | "perbedaan == dan === javascript"              | `02-operator-perbandingan.js` |
| 3   | Perulangan & Akumulasi | `for` loop + variabel total        | "contoh akumulasi nilai for javascript"        | `03-perulangan-akumulasi.js`  |
| 4   | Set (Data Unik)        | Beda Array vs Set                  | "contoh set javascript menghilangkan duplikat" | `04-set-unique.js`            |
| 5   | Pencarian Array        | `indexOf` dan `includes`           | "contoh indexOf includes javascript"           | `05-pencarian-array.js`       |

### Bagian B: Objek, Fungsi & DOM

| No  | Materi                             | Cari                                   | Kata kunci Google                         | File tugas                    |
| --- | ---------------------------------- | -------------------------------------- | ----------------------------------------- | ----------------------------- |
| 6   | Objek & Nested Object              | Object literal dan nested object       | "contoh nested object javascript"         | `06-objek.js`                 |
| 7   | Arrow Function & Default Parameter | Cara ubah function biasa ke arrow `=>` | "contoh arrow function default parameter" | `07-fungsi.js`                |
| 8   | DOM Dasar                          | `getElementById`                       | "contoh getElementById javascript"        | `08-dom.js` + `08-index.html` |
| 9   | Template Literals                  | Backtick `${}`                         | "contoh template literals javascript"     | `09-template.js`              |

Totalnya **10 file** (materi 8 punya dua file: JavaScript dan HTML).

### Target tiap materi

Target materi 1 sampai 5 berasal dari instruksi sebelumnya. Instruksi hari ini tidak menulis target tertulis untuk materi 6 sampai 9, jadi targetnya di bawah disusun dari bagian "Cari" di instruksi.

| #   | Materi                             | Target                                                                                            |
| --- | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | `push()`, `pop()`, `length`        | Bisa menjawab jumlah array jika ditambah 1 lalu dihapus 1                                         |
| 2   | `==` vs `===`                      | Bisa menebak output boolean jika tipe data berbeda                                                |
| 3   | `for` + accumulator                | Bisa tracing / menghitung manual nilai akhir variabel                                             |
| 4   | Array vs Set                       | Tahu kapan memakai Set agar data tidak duplikat                                                   |
| 5   | `indexOf()` vs `includes()`        | Bisa membedakan mana yang menghasilkan boolean dan mana yang index                                |
| 6   | Objek & nested object              | Bisa membuat object, mengakses / mengubah / menambah properti, dan membaca object di dalam object |
| 7   | Arrow function & default parameter | Bisa mengubah function biasa menjadi arrow function dan memakai default parameter                 |
| 8   | DOM dasar                          | Bisa mengambil elemen HTML dengan `getElementById` lalu membaca dan mengubah isinya               |
| 9   | Template literals                  | Bisa menyisipkan variabel dan perhitungan ke dalam teks dengan backtick                           |

### Cara kumpul tugas GitHub (dari instruksi guru)

1. Buka w3schools.com atau tonton video YouTube: **"Web Programming UNPAS - Object, Arrow Function, DOM"**.
2. Cari contoh program sesuai kata kunci di atas.
3. **Ketik ulang** di VS Code (jangan copy-paste buta).
4. **Ganti nama variabel** dengan nama kalian.
5. Tambahkan **1 baris komentar** `// penjelasan kalian`.
6. Upload ke GitHub dengan **format nama file** di tabel atas.
7. Kumpulkan **link GitHub** di Google Classroom sebelum jam batas (jamnya belum diisi di instruksi, `[ISI JAM]`, jadi cek lagi di Google Classroom atau tanya guru).

Detail teknisnya ada di [bagian 13](#13-peta-file-tugas--upload-ke-github).

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

> Catatan: kode DOM (Materi 8) **tidak bisa** dijalankan dengan Node. Kode itu hanya jalan di browser lewat file HTML.

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

Cara lebih singkat menulis fungsi. Dibahas lengkap di [Materi 7](#9-materi-7-arrow-function--default-parameter).

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

Dibahas lengkap di [Materi 9](#11-materi-9-template-literals).

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

Dibahas lengkap di [Materi 7](#9-materi-7-arrow-function--default-parameter).

Memberi nilai awal pada parameter fungsi.

```js
const sapa = (nama = "Teman") => `Halo ${nama}`;
sapa(); // 'Halo Teman'
sapa("Budi"); // 'Halo Budi'
```

### 2.8 Catatan: tidak semua method yang dipakai berasal dari ES6

| Fitur                                                                       | Muncul di versi                                                                        |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `push()`, `pop()`, `length`                                                 | Sudah ada sejak JavaScript awal                                                        |
| `==`, `===`                                                                 | Sudah ada sejak awal                                                                   |
| `indexOf()`                                                                 | ES5 (2009)                                                                             |
| `let`, `const`, arrow function, template literal, spread, `for...of`, `Set` | **ES6 (2015)**                                                                         |
| Default parameter `(x = 1) => ...`                                          | **ES6 (2015)**                                                                         |
| Shorthand property `{ nama }` dan destructuring `const { nama } = obj`      | **ES6 (2015)**                                                                         |
| `includes()` pada array                                                     | ES2016 (sering disebut ES7)                                                            |
| Optional chaining `obj?.prop`                                               | ES2020                                                                                 |
| `document.getElementById()` dan seluruh DOM                                 | Bukan fitur bahasa JavaScript, tapi **Web API milik browser** (hanya jalan di browser) |

Semuanya didukung oleh browser modern, jadi kamu bisa memakainya bersama-sama tanpa masalah.

---

# BAGIAN A: Array & Struktur Data

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

---

# BAGIAN B: Objek, Fungsi & DOM

---

## 8. Materi 6: Objek & Nested Object

**File tugas:** `06-objek.js`

### 8.1 Apa itu object?

Object adalah **satu variabel yang menyimpan data berpasangan `kunci: nilai`**. Kalau array memanggil data lewat **nomor index** (`buah[0]`), object memanggil data lewat **nama** (`siswa.nama`).

```js
const siswa = {
  nama: "Budi",
  umur: 16,
  kelas: "X-A",
};
```

| Istilah             | Artinya                                                    | Contoh             |
| ------------------- | ---------------------------------------------------------- | ------------------ |
| Object literal      | Cara membuat object dengan kurung kurawal `{ }`            | `{ nama: "Budi" }` |
| Property (properti) | Satu pasangan kunci dan nilai                              | `nama: "Budi"`     |
| Key (kunci)         | Nama propertinya                                           | `nama`             |
| Value (nilai)       | Isi propertinya (angka, teks, array, object, fungsi, dst.) | `"Budi"`           |
| Method              | Properti yang nilainya **fungsi**                          | `sapa() { ... }`   |

|                | W3Schools                                                                                                                     | MDN                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Definisi       | Object adalah variabel yang bisa menyimpan banyak nilai; nilainya disimpan sebagai pasangan `key:value` yang disebut properti | Object adalah kumpulan properti, dan properti adalah hubungan antara nama (key) dan nilai |
| Object literal | Daftar pasangan `name:value` di dalam `{}`                                                                                    | Disebut juga object initializer                                                           |
| Deklarasi      | Kebiasaan umum memakai `const`                                                                                                | Properti boleh bernama string apa saja atau Symbol                                        |
| Sifat penting  | Object _mutable_: dialamatkan lewat referensi, bukan lewat nilai                                                              | Dua object literal yang isinya sama tetap dua object berbeda, tidak dianggap sama         |

### 8.2 Mengakses properti: titik vs kurung siku

```js
const siswa = { nama: "Budi", umur: 16, kelas: "X-A" };

siswa.nama; // "Budi"      (notasi titik)
siswa["umur"]; // 16          (notasi kurung siku)
siswa.alamat; // undefined   (properti tidak ada, tidak error)

const kunci = "kelas";
siswa[kunci]; // "X-A"       (kunci disimpan di variabel -> WAJIB kurung siku)
siswa.kunci; // undefined   (ini mencari properti bernama "kunci")
```

| Notasi           | Kapan dipakai                                                                       |
| ---------------- | ----------------------------------------------------------------------------------- |
| `objek.kunci`    | Nama kunci sudah pasti dan valid sebagai nama variabel. Paling sering dipakai       |
| `objek["kunci"]` | Nama kunci ada di variabel, atau mengandung spasi / tanda khusus (`"nama lengkap"`) |

MDN mencatat: nama properti yang bukan identifier valid **tidak bisa** diakses dengan titik, jadi pakai kurung siku.

### 8.3 Mengubah, menambah, menghapus

```js
const siswa = { nama: "Budi", umur: 16 };

siswa.umur = 17; // mengubah
siswa.hobi = "membaca"; // menambah (kunci baru langsung dibuat)
delete siswa.hobi; // menghapus

console.log("nama" in siswa); // true  (cek kunci ada atau tidak)
```

> **Ingat `const`:** `const siswa = {...}` artinya variabel `siswa` tidak bisa di-assign ulang, tapi **isi object boleh diubah** (sama seperti array di bagian 2.1). Karena itu deklarasi object dengan `const` itu kebiasaan umum.

### 8.4 Method (fungsi di dalam object)

```js
const siswa = {
  nama: "Budi",
  sapa() {
    return "Halo, " + this.nama;
  },
};
console.log(siswa.sapa()); // "Halo, Budi"
```

`this` di dalam method menunjuk ke **object pemilik method** itu. Jangan menulis method dengan arrow function (alasannya di [Materi 7](#9-materi-7-arrow-function--default-parameter)).

### 8.5 Nested object (object di dalam object)

Nilai sebuah properti boleh berupa object lain. Kamu membacanya dengan **rantai titik**, dari luar ke dalam.

```js
const sekolah = {
  nama: "SMA Nusantara",
  alamat: {
    // <- object di dalam object
    kota: "Jakarta",
    jalan: "Jl. Merdeka No. 1",
  },
};

sekolah.alamat; // { kota: "Jakarta", jalan: "Jl. Merdeka No. 1" }
sekolah.alamat.kota; // "Jakarta"
sekolah["alamat"]["jalan"]; // "Jl. Merdeka No. 1"  (kurung siku juga bisa dirantai)

sekolah.alamat.kota = "Bandung"; // mengubah isi di dalam
sekolah.alamat.kodePos = "40111"; // menambah properti di dalam
```

**Cara membaca rantai:** `sekolah.alamat.kota` berarti "masuk ke `sekolah`, ambil `alamat` (hasilnya object), dari object itu ambil `kota`".

**Gabungan object dan array** sangat umum di aplikasi nyata:

```js
const kelas = {
  nama: "X-A",
  siswa: [
    { nama: "Budi", umur: 16 },
    { nama: "Sari", umur: 15 },
  ],
};

kelas.siswa[1].nama; // "Sari"  (array -> index 1 -> object -> nama)
kelas.siswa.length; // 2
```

**Jebakan: path yang salah.** Kalau salah satu "pintu" di tengah rantai tidak ada, hasilnya error:

```js
sekolah.kontak.telepon;
// TypeError: Cannot read properties of undefined (reading 'telepon')
// sekolah.kontak = undefined, lalu mencoba mengambil .telepon dari undefined

sekolah.kontak?.telepon; // undefined (optional chaining, aman, tanpa error)
```

Tanda `?.` (optional chaining) berarti "kalau bagian kiri `undefined` atau `null`, berhenti dan hasilnya `undefined`". Fitur ini lebih baru (ES2020), bukan ES6.

### 8.6 Membaca semua isi object (loop)

```js
const siswa = { nama: "Budi", umur: 16, kelas: "X-A" };

Object.keys(siswa); // ["nama", "umur", "kelas"]   (semua kunci)
Object.values(siswa); // ["Budi", 16, "X-A"]         (semua nilai)
Object.entries(siswa); // [["nama","Budi"], ["umur",16], ["kelas","X-A"]]

for (const kunci in siswa) {
  console.log(kunci, siswa[kunci]); // nama Budi, umur 16, kelas X-A
}
```

`for...in` memberi **kunci** (nama properti), sedangkan `for...of` di array memberi **nilai**. Jangan tertukar.

### 8.7 Object disalin lewat referensi

```js
const a = { x: 1 };
const b = a; // b TIDAK menyalin, hanya menunjuk object yang sama
b.x = 2;
console.log(a.x); // 2  (a ikut berubah!)

const c = { ...a }; // spread (ES6): salinan baru
c.x = 99;
console.log(a.x); // 2  (a aman)
```

Salinan dengan spread bersifat **dangkal (shallow)**: kalau ada nested object di dalamnya, nested object itu tetap dipakai bersama.

### 8.8 Dua penyingkat ES6 (cukup dikenali dulu)

```js
const nama = "Budi";
const umur = 16;

// Shorthand property: nama kunci = nama variabel
const siswa = { nama, umur }; // sama dengan { nama: nama, umur: umur }

// Destructuring: mengambil beberapa properti sekaligus jadi variabel
const { nama: namaSiswa, umur: umurSiswa } = siswa;
console.log(namaSiswa, umurSiswa); // "Budi" 16
```

### 8.9 Jawaban target dan kesalahan umum

**Target:** bisa membuat object, mengakses dengan titik dan kurung siku, mengubah dan menambah properti, dan membaca nested object lewat rantai titik.

Kesalahan umum:

- Lupa tanda koma `,` antar properti, atau memakai `;` di dalam `{ }`.
- Memakai `=` (tanda sama dengan) di dalam object literal. Yang benar `:` (titik dua).
- `siswa.kunci` padahal maksudnya `siswa[kunci]` (kunci ada di variabel).
- Rantai nested terlalu dalam tanpa mengecek ada atau tidaknya (`Cannot read properties of undefined`).
- Mengira `const b = a` membuat salinan object.

---

## 9. Materi 7: Arrow Function & Default Parameter

**File tugas:** `07-fungsi.js`

### 9.1 Tiga cara menulis fungsi

```js
// 1) Function declaration (cara lama)
function tambah(a, b) {
  return a + b;
}

// 2) Function expression (fungsi disimpan di variabel)
const tambah = function (a, b) {
  return a + b;
};

// 3) Arrow function (ES6)
const tambah = (a, b) => {
  return a + b;
};
```

### 9.2 Mengubah function biasa menjadi arrow function, langkah demi langkah

MDN menjelaskan dengan cara menyederhanakan satu langkah demi satu langkah, dan setiap langkah tetap valid.

| Langkah | Kode                                                | Yang dilakukan                                                                       |
| ------- | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 0       | `function tambah(a, b) { return a + b; }`           | Function biasa                                                                       |
| 1       | `const tambah = function (a, b) { return a + b; };` | Simpan fungsi di variabel `const`                                                    |
| 2       | `const tambah = (a, b) => { return a + b; };`       | Hapus kata `function`, tambah `=>` setelah kurung parameter                          |
| 3       | `const tambah = (a, b) => a + b;`                   | Isinya satu ekspresi saja: buang `{ }` dan `return` (hasilnya otomatis dikembalikan) |
| 4       | `const kuadrat = x => x * x;`                       | Hanya **satu** parameter: kurung `( )` boleh dibuang                                 |

**Aturan kurung parameter** (dari W3Schools):

| Jumlah parameter | Penulisan                                                   |
| ---------------- | ----------------------------------------------------------- |
| Nol              | `() => "Halo"` (kurung **wajib**)                           |
| Satu             | `x => x * 2` atau `(x) => x * 2` (kurung boleh dihilangkan) |
| Dua atau lebih   | `(a, b) => a + b` (kurung **wajib**)                        |

**Return otomatis hanya jika isinya satu ekspresi.** W3Schools memberi peringatan:

```js
const kali1 = (x, y) => { x * y };         // SALAH: pakai { } tapi tidak ada return -> hasilnya undefined
const kali2 = (x, y) => return x * y;      // SALAH: SyntaxError, return tidak boleh tanpa { }
const kali3 = (x, y) => { return x * y };  // BENAR
const kali4 = (x, y) => x * y;             // BENAR
```

**Mengembalikan object literal** harus dibungkus kurung `( )`, karena kalau tidak, `{ }` dibaca sebagai badan fungsi (MDN membahas ini):

```js
const buatSiswa = (nama) => ({ nama: nama }); // BENAR
const salah = (nama) => {
  nama: nama;
}; // SALAH: dibaca sebagai badan fungsi, hasilnya undefined
```

### 9.3 Beda arrow function dan function biasa

|                                           | Function biasa              | Arrow function                                           |
| ----------------------------------------- | --------------------------- | -------------------------------------------------------- |
| Cara tulis                                | `function`, `{ }`, `return` | `=>`, bisa singkat                                       |
| `this` sendiri                            | Punya                       | **Tidak punya** (memakai `this` dari kode di sekitarnya) |
| Cocok jadi method object                  | Ya                          | **Tidak disarankan** (MDN dan W3Schools)                 |
| Bisa dipanggil sebelum ditulis (hoisting) | Declaration: bisa           | **Tidak bisa**, harus didefinisikan dulu                 |
| Objek `arguments` sendiri                 | Punya                       | Tidak punya (MDN)                                        |
| Bisa dipakai dengan `new` (constructor)   | Bisa                        | Tidak bisa (MDN)                                         |

```js
hitung(); // function declaration: jalan walau dipanggil sebelum ditulis
function hitung() {
  return 1;
}

halo(); // ERROR: Cannot access 'halo' before initialization
const halo = () => "Halo";
```

Untuk saat ini cukup ingat satu hal: **pakai arrow function untuk fungsi pendek dan callback** (misalnya di `map`, `filter`), dan **jangan pakai untuk method di dalam object**.

### 9.4 Default parameter

Parameter yang tidak diberi argumen nilainya `undefined`. Akibatnya sering `NaN` atau teks `undefined`:

```js
const kali = (a, b) => a * b;
kali(5); // NaN   (b = undefined, 5 * undefined = NaN)
```

Default parameter (ES2015) memberi **nilai cadangan**:

```js
const kali = (a, b = 1) => a * b;
kali(5, 2); // 10
kali(5); // 5     (b memakai default 1)
```

Contoh lain:

```js
const sapa = (nama = "Teman") => "Halo, " + nama + "!";

sapa(); // "Halo, Teman!"
sapa("Budi"); // "Halo, Budi!"
```

**Kapan default dipakai?** Hanya jika argumen **tidak diisi** atau bernilai **`undefined`**. Ini poin yang sering keliru (MDN menekankan `undefined` berbeda dari `null` dan nilai falsy lain):

| Panggilan         | Default dipakai? | Hasil            |
| ----------------- | ---------------- | ---------------- |
| `sapa()`          | Ya               | `"Halo, Teman!"` |
| `sapa(undefined)` | Ya               | `"Halo, Teman!"` |
| `sapa(null)`      | **Tidak**        | `"Halo, null!"`  |
| `sapa("")`        | **Tidak**        | `"Halo, !"`      |
| `sapa(0)`         | **Tidak**        | `"Halo, 0!"`     |

Hal lain dari MDN:

- Default **dihitung saat fungsi dipanggil**, bukan saat fungsi ditulis.
- Parameter di kiri boleh dipakai oleh default parameter di kanannya: `(a, b = a * 2) => ...`
- Letakkan parameter ber-default di **paling belakang**, supaya bisa dilewati begitu saja.

### 9.5 Gabungan arrow + default

```js
const hitungTotal = (harga, qty = 1) => harga * qty;

hitungTotal(5000); // 5000
hitungTotal(5000, 3); // 15000
```

### 9.6 Jawaban target dan kesalahan umum

**Target:** bisa mengubah function biasa menjadi arrow function (dengan dan tanpa `{ }`), dan memberi default pada parameter.

Kesalahan umum:

- `{ }` ditulis tapi `return` lupa, hasilnya `undefined`.
- Kurung dihilangkan padahal parameternya nol atau lebih dari satu.
- Memakai arrow function sebagai method object lalu `this` tidak menunjuk ke object itu.
- Memanggil arrow function sebelum didefinisikan.
- Mengira `sapa(null)` memakai default. Nyatanya tidak, hanya `undefined` yang memicu default.

---

## 10. Materi 8: DOM Dasar

**File tugas:** `08-dom.js` dan `08-index.html`

### 10.1 Apa itu DOM?

**DOM (Document Object Model)** adalah cara browser menyajikan halaman HTML sebagai **pohon objek** yang bisa dibaca dan diubah oleh JavaScript. Menurut W3Schools, DOM API adalah kumpulan method dan properti yang memungkinkan JavaScript mengubah **isi, struktur, dan gaya** elemen HTML.

Titik awal semuanya adalah objek **`document`**, yang mewakili seluruh halaman web.

```
document
 └─ html
     ├─ head
     │   └─ title
     └─ body
         ├─ h1  (id="judul")
         └─ p   (id="pesan")
```

### 10.2 DOM hanya jalan di browser

`document` dan DOM adalah milik **browser** (bagian dari Web API), bukan bagian bahasa JavaScript itu sendiri. Kalau kamu menjalankan kode DOM dengan Node.js:

```
ReferenceError: document is not defined
```

Karena itu tugas ini memakai **dua file**: `08-index.html` (halaman) dan `08-dom.js` (kodenya), lalu dibuka di browser.

### 10.3 `getElementById()`: ambil satu elemen lewat id

```html
<p id="demo">Halo</p>
```

```js
const paragraf = document.getElementById("demo");
```

| Hal                         | Penjelasan (W3Schools dan MDN)                                                |
| --------------------------- | ----------------------------------------------------------------------------- |
| Parameter                   | `id` elemen sebagai **teks**, **tanpa tanda `#`** (`"demo"`, bukan `"#demo"`) |
| Hasil jika ketemu           | Objek elemen tersebut                                                         |
| Hasil jika **tidak ketemu** | **`null`** (bukan error)                                                      |
| Huruf besar/kecil           | **Case-sensitive**: `"Demo"` tidak sama dengan `"demo"` (MDN)                 |
| Id kembar                   | Id seharusnya unik; kalau kembar, yang dikembalikan elemen **pertama**        |
| Dipanggil dari mana         | Hanya dari objek `document`                                                   |
| Penulisan                   | Namanya `getElementById` (huruf **Id**, bukan `ID`)                           |

### 10.4 Membaca dan mengubah elemen

Setelah elemen didapat, ubah lewat **properti**-nya:

| Properti             | Fungsi                                       | Contoh                            |
| -------------------- | -------------------------------------------- | --------------------------------- |
| `textContent`        | Membaca / mengubah **teks** elemen           | `judul.textContent = "Halo"`      |
| `innerHTML`          | Membaca / mengubah isi dalam bentuk **HTML** | `judul.innerHTML = "<b>Halo</b>"` |
| `style.namaProperti` | Mengubah gaya CSS                            | `judul.style.color = "red"`       |
| `value`              | Membaca isi kolom `<input>`                  | `kolom.value`                     |

```js
const judul = document.getElementById("subjudul");

console.log(judul.textContent); // membaca teks
judul.textContent = "Teks baru"; // mengubah teks
judul.style.color = "blue"; // mengubah warna
judul.style.backgroundColor = "yellow"; // properti CSS dengan tanda minus ditulis camelCase
```

**`textContent` vs `innerHTML`:**

- `textContent` memperlakukan semuanya sebagai **teks biasa**. Aman untuk teks dari pengguna.
- `innerHTML` **membaca tanda HTML** sebagai HTML. Kalau diisi teks dari pengguna, bisa dipakai menyisipkan skrip berbahaya (serangan XSS). Pakai `innerHTML` hanya untuk HTML yang kamu tulis sendiri.

**`.value` selalu berupa string.** Kalau perlu angka, ubah dulu dengan `Number()`, lalu bandingkan dengan `===` (ingat [Materi 2](#4-materi-2--vs-)).

### 10.5 Kenapa `<script>` ditaruh paling bawah?

Browser membaca HTML dari atas ke bawah. Kalau `<script>` ada di atas elemen, saat JavaScript jalan elemennya **belum ada**, hasilnya `null`:

```html
<!-- SALAH: script di atas, elemen belum ada -->
<script src="08-dom.js"></script>
<h1 id="judul">Belajar DOM</h1>

<!-- BENAR: script di paling bawah body -->
<h1 id="judul">Belajar DOM</h1>
<script src="08-dom.js"></script>
</body>
```

Alternatifnya menulis `<script src="08-dom.js" defer></script>` di dalam `<head>`.

### 10.6 Contoh lengkap (id-nya sengaja berbeda dari soal)

`contoh-index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Contoh DOM</title>
  </head>
  <body>
    <h2 id="subjudul">Teks awal</h2>
    <p id="demo">Paragraf awal</p>

    <script src="contoh-dom.js"></script>
  </body>
</html>
```

`contoh-dom.js`

```js
const subjudul = document.getElementById("subjudul");
const demo = document.getElementById("demo");

console.log(subjudul.textContent); // "Teks awal"
subjudul.textContent = "Sudah diganti"; // halaman berubah
demo.style.color = "green"; // warna teks jadi hijau

console.log(document.getElementById("tidak-ada")); // null
```

### 10.7 Langkah berikutnya (opsional, tidak diminta di tugas)

Biasanya perubahan dijalankan saat **tombol diklik**, memakai `addEventListener`:

```html
<button id="tombol">Klik aku</button>
```

```js
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  demo.textContent = "Tombol sudah diklik!";
});
```

Perhatikan: ini memakai arrow function dari Materi 7.

### 10.8 Cara debug kalau tidak jalan

1. Buka console browser (**F12**, tab **Console**) dan baca pesan error merahnya.
2. `Cannot set properties of null` berarti elemennya `null`. Cek: id salah ketik? ada `#` di depan id? `<script>` masih di atas elemen? nama file `src` salah?
3. Tampilkan hasil `getElementById` dengan `console.log` untuk memastikan elemennya ketemu.
4. Setelah mengubah file, **refresh** halaman (F5).

### 10.9 Jawaban target dan kesalahan umum

**Target:** mengambil elemen dengan `getElementById`, lalu membaca (`textContent`) dan mengubah isinya (`textContent`, `style`).

Kesalahan umum:

- `getElementById("#judul")` (tanda `#` tidak dipakai di sini).
- `getElementByID` atau `getelementbyid` (huruf besar-kecil harus persis).
- Mencoba menjalankan kode DOM dengan `node` (harus di browser).
- Lupa menyambungkan `08-dom.js` ke HTML lewat `<script src="...">`.
- Mengira `getElementById` yang gagal akan error. Hasilnya `null`, error baru muncul saat `null` itu dipakai.

---

## 11. Materi 9: Template Literals

**File tugas:** `09-template.js`

### 11.1 Apa itu template literal?

Cara menulis teks dengan **tanda backtick** `` ` `` (bukan kutip `'` atau `"`), yang membolehkan:

1. **Menyisipkan variabel / ekspresi** lewat `${...}` (disebut _string interpolation_).
2. **Teks beberapa baris** tanpa `\n`.
3. Memakai kutip `'` dan `"` di dalam teks tanpa perlu escape.

> Tanda backtick ada di tombol **kiri atas keyboard**, di bawah tombol Esc (satu tombol dengan `~`). Jangan tertukar dengan apostrof `'`.

W3Schools menyebut fitur ini dengan banyak nama: _Template Strings_, _Template Literals_, _Back-Tics Syntax_. Fitur ini bagian dari **ES6**.

### 11.2 Dibandingkan dengan menyambung teks pakai `+`

```js
const nama = "Budi";
const umur = 16;

// Cara lama: sambung pakai +
console.log("Halo, nama saya " + nama + ", umur " + umur + " tahun.");

// Cara ES6: template literal
console.log(`Halo, nama saya ${nama}, umur ${umur} tahun.`);
// Halo, nama saya Budi, umur 16 tahun.
```

Hasilnya sama, tapi versi backtick lebih mudah dibaca dan lebih kecil kemungkinan salah (lupa spasi atau tanda `+`).

### 11.3 Isi `${ }` boleh ekspresi apa saja

Apa pun yang menghasilkan nilai boleh ditulis di dalam `${ }`:

```js
const harga = 15000;
const qty = 3;
const siswa = { nama: "Budi" };
const huruf = ["a", "b", "c"];

console.log(`Total: Rp${harga * qty}`); // Total: Rp45000    (perhitungan)
console.log(`Nama: ${siswa.nama}`); // Nama: Budi        (properti object)
console.log(`Terakhir: ${huruf[huruf.length - 1]}`); // Terakhir: c       (isi array)
console.log(`Status: ${qty > 2 ? "banyak" : "sedikit"}`); // Status: banyak  (ternary)
console.log(`Besar: ${"halo".toUpperCase()}`); // Besar: HALO       (memanggil method)
```

Dari W3Schools, contoh dengan pembulatan:

```js
const price = 10;
const VAT = 0.25;
console.log(`Total: ${(price * (1 + VAT)).toFixed(2)}`); // Total: 12.50
```

### 11.4 Teks beberapa baris

Tekan **Enter** langsung di dalam backtick:

```js
const struk = `Barang: Kopi
Total: Rp45000`;
console.log(struk);
// Barang: Kopi
// Total: Rp45000
```

> **Jebakan:** semua yang kamu ketik di dalam backtick ikut tercetak, **termasuk spasi di depan baris**.
>
> ```js
> function cetak() {
>   const teks = `Baris 1
>     Baris 2`; // 4 spasi di depan "Baris 2" ikut tercetak
> }
> ```
>
> Tulis baris berikutnya dari kolom paling kiri kalau tidak mau ada spasi tambahan.

### 11.5 Hal-hal kecil yang perlu tahu

```js
// Kutip tunggal dan ganda boleh langsung dipakai
`He's often called "Johnny"`;

// Backtick di dalam teks harus di-escape dengan backslash
`Gunakan tanda \` untuk template`;

// Template di dalam template (nested) lewat ${ }
const kelas = `header ${true ? `icon-${"kecil"}` : ""}`; // "header icon-kecil"
```

### 11.6 Cara kerja menurut MDN: beda halus dengan `+`

MDN menjelaskan bahwa template literal **mengubah hasil ekspresi langsung menjadi string**, sedangkan operator `+` mengubah operandnya ke nilai primitif terlebih dulu. Untuk pemakaian sehari-hari hasilnya sama. Yang perlu kamu tahu:

```js
const siswa = { nama: "Budi" };
console.log(`Data: ${siswa}`); // Data: [object Object]   (bukan isi object!)
console.log(`Data: ${siswa.nama}`); // Data: Budi
console.log(`Data: ${JSON.stringify(siswa)}`); // Data: {"nama":"Budi"}
```

Kalau yang disisipkan object atau array, ambil **propertinya** atau ubah dengan `JSON.stringify()`.

### 11.7 Template literal untuk membuat HTML (cocok dengan DOM)

W3Schools memberi contoh membuat HTML dari array memakai template literal:

```js
const tags = ["template strings", "javascript", "es6"];

let html = `<ul>`;
for (const t of tags) {
  html += `<li>${t}</li>`;
}
html += `</ul>`;
```

Cara yang lebih ringkas dengan `map` (menggabungkan Materi 7 dan 9):

```js
const html2 = `<ul>${tags.map((t) => `<li>${t}</li>`).join("")}</ul>`;
// lalu di browser: document.getElementById("daftar").innerHTML = html2;
```

### 11.8 Tagged template (cukup tahu namanya)

MDN juga membahas **tagged template**: nama fungsi ditulis tepat sebelum backtick, supaya fungsi itu bisa memproses bagian-bagian teksnya. Ini topik lanjutan dan **tidak dipakai di tugas hari ini**.

### 11.9 Jawaban target dan kesalahan umum

**Target:** bisa menyisipkan variabel dan perhitungan ke dalam teks memakai backtick dan `${ }`.

Kesalahan umum:

- Memakai kutip biasa: `"Halo ${nama}"` mencetak teks `Halo ${nama}` apa adanya.
- Lupa kurung kurawal: `` `Halo $nama` `` mencetak `$nama` apa adanya.
- Memakai apostrof `'` yang mirip backtick dari keyboard.
- Spasi di depan baris kedua ikut tercetak pada teks beberapa baris.
- Menyisipkan object langsung, hasilnya `[object Object]`.

## 12. Penerapan di Dunia Nyata

Struktur data dan fungsi dasar ini dipakai di kasus sehari-hari dan di sistem aplikasi. Berikut pemetaan konsep ke kasus nyata, mulai dari Bagian A.

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

Kasus nyata seperti total belanja (soal 3.2) dan daftar peserta unik (soal 4.2) juga ada di `tugas.js`.

**Ide pengembangan lain** untuk file GitHub kamu:

- Antrean loket sederhana (`push` untuk antre, `shift` untuk dipanggil, `length` untuk sisa antrean).
- Daftar tag unik artikel blog (Set).
- Mini kalkulator nilai rapor (accumulator dan rata-rata).
- Pengecekan stok barang (`includes` / `indexOf`).

### Pemetaan untuk Bagian B

| Konsep               | Kasus nyata                                                              | Contoh                                      |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| Object               | Data satu entitas: profil siswa, produk toko, akun pengguna              | `{ nama: "Kopi", harga: 15000 }`            |
| Nested object        | Data bertingkat: alamat di dalam profil, stok per gudang di dalam produk | `produk.stok.gudang`                        |
| Array of object      | Daftar produk di toko online, daftar siswa di kelas                      | `produk[0].nama`                            |
| Arrow function       | Fungsi kecil yang dipakai berulang: hitung total, hitung diskon          | `(harga, qty) => harga * qty`               |
| Default parameter    | Nilai cadangan: jumlah beli default 1, nama default "Tamu"               | `(harga, qty = 1) => ...`                   |
| DOM `getElementById` | Menampilkan hasil perhitungan ke halaman web                             | `getElementById("hasil").textContent = ...` |
| Template literal     | Pesan notifikasi, struk, kartu HTML                                      | `` `Halo, ${nama}!` ``                      |

### Contoh gabungan Bagian A dan B (ES6)

```js
// Object + nested object
const produk = {
  nama: "Kopi",
  harga: 15000,
  stok: { gudang: 10, toko: 4 },
};

// Arrow function + default parameter
const hitungTotal = (harga, qty = 1) => harga * qty;

// Template literal
const pesan = `Beli ${produk.nama} x3 = Rp${hitungTotal(produk.harga, 3)}`;
console.log(pesan); // Beli Kopi x3 = Rp45000
console.log(`Stok total: ${produk.stok.gudang + produk.stok.toko}`); // Stok total: 14

// Di browser, tampilkan ke halaman (butuh elemen <p id="hasil">):
// document.getElementById("hasil").textContent = pesan;
```

**Ide pengembangan untuk file GitHub kamu (Bagian B):**

- Kartu profil siswa: object nested (alamat) ditampilkan ke halaman HTML lewat DOM.
- Kalkulator belanja: array of object, arrow function, default parameter qty.
- Greeting berdasarkan jam: template literal dengan ternary.

---

## 13. Peta File Tugas & Upload ke GitHub

Instruksi guru meminta kamu **mengunggah satu file per materi** ke GitHub, dengan **nama file persis** seperti di bawah. Total ada **10 file**.

### 13.1 Peta file

| #   | Nama file (persis)            | Materi                                       | Berisi soal di `tugas.js`                      |
| --- | ----------------------------- | -------------------------------------------- | ---------------------------------------------- |
| 1   | `01-manipulasi-array.js`      | Materi 1: push, pop, length                  | 1.1 dan 1.2                                    |
| 2   | `02-operator-perbandingan.js` | Materi 2: `==` vs `===`                      | 2.1 dan 2.2                                    |
| 3   | `03-perulangan-akumulasi.js`  | Materi 3: for + akumulasi                    | 3.1 dan 3.2                                    |
| 4   | `04-set-unique.js`            | Materi 4: Set                                | 4.1 dan 4.2                                    |
| 5   | `05-pencarian-array.js`       | Materi 5: indexOf, includes                  | 5.1 dan 5.2                                    |
| 6   | `06-objek.js`                 | Materi 6: objek & nested object              | 6.1 dan 6.2                                    |
| 7   | `07-fungsi.js`                | Materi 7: arrow function & default parameter | 7.1 dan 7.2                                    |
| 8   | `08-dom.js`                   | Materi 8: DOM dasar (kode JavaScript)        | 8.1 dan 8.2                                    |
| 9   | `08-index.html`               | Materi 8: DOM dasar (halaman HTML)           | Template-nya ada di `tugas.js` bagian Materi 8 |
| 10  | `09-template.js`              | Materi 9: template literals                  | 9.1 dan 9.2                                    |

### 13.2 Cara memindahkan dari `tugas.js` ke file tugas

Untuk **materi 1 sampai 7 dan 9**:

1. Selesaikan dulu soalnya di `tugas.js` sampai hasilnya cocok dengan KUNCI HASIL.
2. Buat file baru dengan nama persis dari tabel di atas.
3. Salin kode kamu (kode yang kamu ketik sendiri) ke file itu.
4. **Hapus kurung `{ }` pembungkus** soal (di file sendiri tidak diperlukan).
5. **Ganti nama variabel** dengan nama versimu sendiri (misalnya `buah` jadi `makananku`).
6. Tambahkan **1 baris komentar** penjelasan, contoh: `// push() menambah elemen di akhir array`.
7. Jalankan `node nama-file.js` untuk memastikan masih jalan.

Untuk **materi 8 (DOM)**: kerjakan langsung di `08-dom.js` dan `08-index.html` (jangan di `tugas.js`, karena DOM hanya jalan di browser). Buka `08-index.html` di browser untuk mengecek hasilnya.

### 13.3 Contoh isi satu file tugas

`01-manipulasi-array.js`

```js
// push() menambah elemen di akhir array, pop() menghapusnya, length menghitung isinya
const makananku = ["nasi"];

makananku.push("tempe");
console.log(makananku.length); // 2

makananku.pop();
console.log(makananku.length); // 1
```

Perhatikan: tidak ada `{ }` pembungkus, nama variabel sudah diganti, dan ada 1 baris komentar penjelasan.

### 13.4 Struktur folder untuk repository

```
belajar-js-dasar/
├── README.md
├── tugas.js                          (opsional, boleh ikut diunggah)
├── 01-manipulasi-array.js
├── 02-operator-perbandingan.js
├── 03-perulangan-akumulasi.js
├── 04-set-unique.js
├── 05-pencarian-array.js
├── 06-objek.js
├── 07-fungsi.js
├── 08-dom.js
├── 08-index.html
└── 09-template.js
```

Pastikan `08-dom.js` dan `08-index.html` berada **di folder yang sama**, karena HTML memanggil `08-dom.js` lewat `<script src="08-dom.js">`.

### 13.5 Perintah dasar Git

```bash
# sekali di awal (di dalam folder proyek)
git init
git add .
git commit -m "Tambah tugas JavaScript dasar"

# hubungkan ke repository GitHub yang sudah dibuat di github.com
git branch -M main
git remote add origin https://github.com/USERNAME/belajar-js-dasar.git
git push -u origin main
```

Untuk perubahan berikutnya:

```bash
git add .
git commit -m "Pesan singkat perubahan"
git push
```

### 13.6 Setelah upload

- Buka repository di GitHub, pastikan **10 file** terlihat dengan nama yang benar.
- Salin **link repository**.
- Kumpulkan di **Google Classroom** sebelum jam batas. Jam batasnya tertulis `[ISI JAM]` di instruksi (belum diisi), jadi cek lagi di Google Classroom atau tanya guru.

---

## 14. Cara Mengerjakan tugas.js

`tugas.js` berisi **9 tugas (TUGAS 01 sampai TUGAS 09), masing-masing 2 soal**, jadi 18 soal. Kamu mengetik kodenya sendiri dan membuat file tugasnya sendiri.

**Langkah:**

1. Buka `tugas.js` dan baca soal dari atas ke bawah.
2. Ketik kodemu di bawah tulisan `// TULIS KODEMU DI SINI` (di dalam tanda `{ }` milik soal itu).
3. Jalankan `node tugas.js` (atau salin ke console browser).
4. Cocokkan hasil yang tampil dengan **KUNCI HASIL** di paling bawah file.
5. Pindahkan ke file tugas sesuai peta di [bagian 13](#13-peta-file-tugas--upload-ke-github).

**Tiap bagian diberi label `TUGAS 01` sampai `TUGAS 09`** (sesuai nomor file tugas dari guru), dan punya baris `FILE` yang menyebut nama file yang harus kamu buat sendiri. Di bawah tiap tugas ada 2 soal.

**Tiap soal punya 4 bagian yang sama:**

| Bagian               | Artinya                           |
| -------------------- | --------------------------------- |
| SOAL                 | Apa yang harus dibuat             |
| LOGIKA               | Langkah berpikirnya, urut 1, 2, 3 |
| CLUE                 | Method atau operator yang dipakai |
| TULIS KODEMU DI SINI | Tempat kamu mengetik              |

**Kenapa tiap soal dibungkus `{ }`?** Itu _block scope_ (fitur ES6): variabel `let`/`const` di dalamnya hanya hidup di dalam blok itu, jadi nama variabel yang sama boleh dipakai ulang di soal lain tanpa error.

**Daftar soal:**

| Materi                 | File tujuan                   | Soal 1                                     | Soal 2                                          |
| ---------------------- | ----------------------------- | ------------------------------------------ | ----------------------------------------------- |
| 1. push / pop / length | `01-manipulasi-array.js`      | 1.1 tambah 1 lalu hapus 1, lihat jumlahnya | 1.2 ambil elemen terakhir                       |
| 2. `==` vs `===`       | `02-operator-perbandingan.js` | 2.1 tebak 4 hasil perbandingan             | 2.2 cek umur dari input string                  |
| 3. for + accumulator   | `03-perulangan-akumulasi.js`  | 3.1 jumlahkan 1 sampai 5 (+ tabel tracing) | 3.2 jumlahkan array harga                       |
| 4. Set                 | `04-set-unique.js`            | 4.1 buang duplikat dari array              | 4.2 `add()` dan `has()` pada Set                |
| 5. indexOf / includes  | `05-pencarian-array.js`       | 5.1 pakai `includes()`                     | 5.2 pakai `indexOf()`                           |
| 6. Objek & nested      | `06-objek.js`                 | 6.1 buat, akses, ubah, tambah properti     | 6.2 baca dan ubah nested object                 |
| 7. Arrow & default     | `07-fungsi.js`                | 7.1 ubah function biasa ke arrow (2 versi) | 7.2 default parameter (+ tebak `null`)          |
| 8. DOM                 | `08-dom.js` + `08-index.html` | 8.1 ambil elemen, baca dan ubah teks       | 8.2 ubah teks dan warna, coba id yang tidak ada |
| 9. Template literals   | `09-template.js`              | 9.1 sisipkan variabel dengan `${}`         | 9.2 teks 2 baris + perhitungan di `${}`         |

**Soal 8 (DOM) beda sendiri:** karena DOM hanya jalan di browser, soal 8.1 dan 8.2 **tidak ditulis di `tugas.js`**, tapi langsung di `08-dom.js`. Template `08-index.html`-nya ada di `tugas.js` (bagian Materi 8, tinggal disalin). Cek hasilnya di browser.

Ada beberapa hal yang dikerjakan di luar kode karena itu yang membuktikan target tercapai: **tebak dulu** sebelum menjalankan (2.1 dan 7.2c), **tabel tracing di kertas** (3.1), dan **jawaban tertulis** di komentar (4.1 dan 5.2).

---

## 15. Cheat Sheet

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

```js
// BAGIAN B

// OBJECT & NESTED OBJECT
const siswa = { nama: "Budi", umur: 16, alamat: { kota: "Jakarta" } };
siswa.nama; // "Budi"        (titik)
siswa["umur"]; // 16            (kurung siku)
siswa.umur = 17; // ubah
siswa.hobi = "membaca"; // tambah
siswa.alamat.kota; // "Jakarta"     (nested: rantai titik)
siswa.kontak?.telepon; // undefined     (optional chaining, aman)
Object.keys(siswa); // semua kunci

// ARROW FUNCTION & DEFAULT PARAMETER
function tambah(a, b) {
  return a + b;
} // biasa
const tambah2 = (a, b) => {
  return a + b;
}; // arrow + { } + return
const tambah3 = (a, b) => a + b; // arrow singkat
const kuadrat = (x) => x * x; // satu parameter, tanpa kurung
const sapa = (nama = "Teman") => "Halo, " + nama + "!"; // default parameter
// default hanya untuk undefined, bukan null

// DOM (di browser, bukan Node)
const el = document.getElementById("judul"); // tanpa #; tidak ketemu = null
el.textContent; // baca teks
el.textContent = "Teks baru"; // ubah teks
el.style.color = "blue"; // ubah gaya

// TEMPLATE LITERAL
const nama = "Budi";
`Halo, ${nama}!`; // sisipkan variabel
`Total: Rp${15000 * 3}`; // perhitungan di dalam ${ }
`Baris 1
Baris 2`; // beberapa baris
```

---

## 16. Catatan tentang Sumber

Isi README ini disusun berdasarkan konsep yang dibahas di **W3Schools** dan **MDN**, lalu ditulis ulang dengan bahasa sendiri (bukan salinan teks aslinya).

### Bagian A

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

### Bagian B

| Topik                    | W3Schools                                                                                                                  | MDN                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Objek                    | https://www.w3schools.com/js/js_objects.asp (juga: https://www.w3schools.com/js/js_object_intro.asp)                       | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects             |
| Arrow function           | https://www.w3schools.com/js/js_arrow_function.asp                                                                         | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions    |
| Default parameter        | https://www.w3schools.com/howto/howto_js_default_parameters.asp dan https://www.w3schools.com/js/js_function_arguments.asp | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters |
| DOM dan `getElementById` | https://www.w3schools.com/js/js_htmldom_methods.asp dan https://www.w3schools.com/jsref/met_document_getelementbyid.asp    | https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById                       |
| Template literals        | https://www.w3schools.com/js/js_string_templates.asp                                                                       | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals            |

Video yang disebut di instruksi guru: YouTube **"Web Programming UNPAS - Object, Arrow Function, DOM"**. Isinya belum diperiksa untuk README ini, jadi ikuti sebagai pelengkap.

Dokumentasi bisa diperbarui dari waktu ke waktu (W3Schools juga pernah mengubah susunan bab di situs-nya), jadi untuk detail parameter dan kasus khusus, buka link di atas dan bandingkan dengan catatan ini.
