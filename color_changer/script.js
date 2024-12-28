document.querySelector('.buttons').addEventListener('click', function (e) {
    document.getElementsByTagName('body')[0].style.backgroundColor = e.target.id;
}, false)
