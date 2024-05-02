//Mengganti gambar utama
const gambarKecil = document.getElementsByClassName('kecil');
const gambarBesar = document.querySelector('.besar');
for (let i = 0; i < gambarKecil.length; i++) {
    gambarKecil[i].addEventListener("mouseover", function (event) {
        const atribut = event.target.getAttribute('src');
        gambarBesar.setAttribute('src', atribut)
    })
}
//geser gambar
const panahKiri = document.querySelector('.item img:first-child');
const panahKanan = document.querySelector('.item img:last-child')

panahKiri.addEventListener('mouseover', function (event) {
    panahKiri.style.cursor = 'pointer';
})
panahKiri.addEventListener('click', function (event) {
    const container = document.querySelector('.item');
    for (let i = 1; i < gambarKecil.length; i++) {
        // gambarKecil[j].classList.toggle('hidden');
        if (gambarKecil in container == 5) {
            console.log(gambarKecil[i]);
        }
    }
})