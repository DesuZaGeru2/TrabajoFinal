/* Btn menú de contenidos */

let contenedorBtn = document.querySelector('.contentBar');

contenedorBtn.addEventListener('click', function() {
    document.getElementById('content-list').classList.toggle('show');
});

