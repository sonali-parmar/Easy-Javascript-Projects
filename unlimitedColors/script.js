let color = 0;
let colorChangeAllower;
const start = document.getElementById('start');
const stop = document.getElementById('stop');


function randomColor() {
    if (color > 360) {
        color = 0;
    }
    document.body.style.backgroundColor = `hsl(${color += 16},90%,40%)`;
}


start.addEventListener('click', function () {
    if(!colorChangeAllower)
    {
        colorChangeAllower = setInterval(randomColor, 1000);
    }
});


stop.addEventListener('click', function () {
    clearInterval(colorChangeAllower);
    colorChangeAllower=null;
})
