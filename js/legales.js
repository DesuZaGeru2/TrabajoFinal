/* btn */

let content_btn = document.getElementById('hide-btn');
let contentlist = document.getElementById('content-list');

content_btn.addEventListener('click', toogle_list);

function toogle_list() {
    contentlist.classList.toggle('show');

    if(contentlist.classList.contains('show')) {
        hide-btn.innerHTML == "sho";
    }
    else {
        hide-btn.innerHTML== "hide";
    }
}