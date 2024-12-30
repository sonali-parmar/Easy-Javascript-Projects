const button = document.querySelector('button');
const text = document.querySelector('input');
const qrContainer = document.querySelector('.img-container');
const qrCode = document.querySelector('img');

button.addEventListener('click', function () {
    if (text.value.length>0) {
        src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value;
        qrCode.src = src;
    }
    else{
        text.classList.add('error');
        setTimeout(()=>{text.classList.remove('error')},2000)
    }
})