const button = document.querySelector('.button');
const arrow = document.querySelector('.button__arrow');

function buttonAnimation(){
    arrow.classList.toggle('animation');
    setTimeout(() => {
        arrow.classList.toggle('animation');
    }, 500); 

}

button.addEventListener('click', buttonAnimation);

