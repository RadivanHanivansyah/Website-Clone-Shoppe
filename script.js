//Mengganti gambar utama
const gambarKecil = document.getElementsByClassName('kecil');
const gambarBesar = document.querySelector('.besar');
console.log(gambarBesar)
for (let i = 0; i < gambarKecil.length; i++) {
    gambarKecil[i].addEventListener("mouseover", function (event) {
        const atribut = event.target.getAttribute('src');
        gambarBesar.setAttribute('src', atribut)
    })
}