type = "text/javascript";
src = "https://cdn.prinsh.com/NathanPrinsley-effect/efek-salju.js";

src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
crossorigin = "anonymous";
const tambah = document.getElementById("list");
function cetak() {
  let isi = document.getElementById("tambh").value;

  tambah.innerHTML = tambah.innerHTML + `<li>${isi}</li>`;
}
