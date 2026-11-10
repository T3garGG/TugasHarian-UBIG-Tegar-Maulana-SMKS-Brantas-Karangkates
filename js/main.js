const skills = [
  { nama: "HTML", level: "Dasar" },
  { nama: "Mengetik cepat", level: "Menengah" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];
skills.push({ nama: "JavaScript", level: "Dasar" });

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });
  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

const tombolTema = document.querySelector("#tombol-tema");
tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");

  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
});

const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/proyek-profil.png",
    alt: "Tangkapan layar halaman profil Tegar Maulana",
    deskripsi:
      "Halaman web pertama saya, dibuat dengan HTML dasar di Minggu 01.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi:
      "Form untuk menghubungi saya. Setiap isian memiliki label dan wajib diisi.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi:
      "Tabel berisi jadwal belajar mandiri saya, disusun dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/css.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi:
      "Tampilan rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/proyek-kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi:
      "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    deskripsi:
      "Lima fungsi logika yang masing-masing diuji tiga masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  const gambarHtml = item.gambar
    ? `<img src="${item.gambar}" alt="${item.alt || item.judul}" width="280">`
    : "";

  return `
    <article class="kartu">
      <span class="label">${item.kategori}</span>
      <h3>${item.judul}</h3>
      ${gambarHtml}
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  tombol.addEventListener("click", () => {
    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }

    const aktif = document.querySelector(".tombol-filter.aktif");
    if (aktif) {
      aktif.classList.remove("aktif");
    }
    tombol.classList.add("aktif");
  });
}

if (daftarProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}
