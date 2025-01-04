const leftBox = document.querySelector('.left');
console.log(leftBox);
const rightBox = document.querySelector('.right');
const lists = document.getElementsByClassName('list');
let selected = null;

for (let list of lists) {
    list.addEventListener('dragstart', function (e) {
        selected = e.target;
    })
};

[rightBox,leftBox].forEach((box)=>{
    box.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    box.addEventListener('drop', function (e) {
        if (selected) {
            box.appendChild(selected);
            selected = null;
        }
    });
});