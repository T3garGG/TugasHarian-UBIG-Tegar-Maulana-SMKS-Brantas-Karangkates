const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", () => {
  const tugas = Number(inputTugas.value);
  const uts = Number(inputUts.value);
  const uas = Number(inputUas.value);

  const rata = hitungRataRata(tugas, uts, uas);
  hasil.textContent = `Rata-rata ${rata.toFixed(1)}, predikat ${predikat(rata)}`;
});
