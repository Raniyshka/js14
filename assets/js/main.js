'use strict'

let tabBtns = document.querySelectorAll('.tab_btn');
let tabTexts = document.querySelectorAll('.tab_text');

tabBtns.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab_btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab_text.active').classList.remove('active');
        tabTexts[index].classList.add('active');
    })
})