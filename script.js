
function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('.button').addEventListener('click', event => {
    if (validateEmail(document.querySelector('#input-mail').value)){
        document.querySelector('.validation_message').classList = 'validation_message visible valid';
        document.querySelector('.validation_message').textContent = 'Email sent';
        

    }
    else{
        document.querySelector('.validation_message').classList = 'validation_message visible invalid';
        document.querySelector('.validation_message').textContent = 'Oops! Please check your email';
    }
    document.querySelector('.button__arrow').classList.add('animation');
    setTimeout(() =>{
        document.querySelector('.button__arrow').classList.remove('animation');
    }, 500);
    

})
document.querySelector('#input-mail').addEventListener('change', function(){
    if (validateEmail(document.querySelector('#input-mail').value)){
        document.querySelector('.validation_message').classList = 'validation_message visible valid';
        document.querySelector('.validation_message').textContent = 'Email sent';

    }
    else{
        document.querySelector('.validation_message').classList = 'validation_message visible invalid';
        document.querySelector('.validation_message').textContent = 'Oops! Please check your email';
    }
})