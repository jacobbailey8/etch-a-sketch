const container = document.querySelector('.container');
let number = parseInt(prompt("Enter the number of boxes"));

let boxWidth = 400 / number;

for (let i = 0; i < (number ** 2); i++){
    let div = document.createElement('div');
    div.classList.add('inside-box');
    div.style.width = boxWidth + "px";
    div.style.height = boxWidth + "px";
    container.appendChild(div);
}
let boxList = document.querySelectorAll('.container div');

boxList.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#b9b9ba';
    });
});

function resetGrid(){
    boxList.forEach(box => {
        box.remove();
    });

    number = parseInt(prompt("Enter the number of boxes"));
    boxWidth = 400 / number;

    for (let i = 0; i < (number ** 2); i++){
        let div = document.createElement('div');
        div.classList.add('inside-box');
        div.style.width = boxWidth + "px";
        div.style.height = boxWidth + "px";
        container.appendChild(div);
    }

    boxList = document.querySelectorAll('.container div');

    boxList.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#b9b9ba';
        });
    });

}

const button = document.querySelector('.btn');
button.addEventListener('click', resetGrid);


