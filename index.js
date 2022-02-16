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
// boxList.forEach((box) => {
//     box.addEventListener('mouseover', () => {
//         box.style.backgroundColor = '#b9b9ba';
//     });
// });


function resetGrid(){
    boxList.forEach(box => {
        box.remove();
    });
    grayButton.style.backgroundColor = 'white';
    blackButton.style.backgroundColor = 'white';
    rainbowButton.style.backgroundColor = 'white';

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

}

const button = document.querySelector('#reset');
button.addEventListener('click', resetGrid);
button.addEventListener('mousedown', () => {
    button.style.backgroundColor = 'gray';
})
button.addEventListener('mouseup', () => {
    button.style.backgroundColor = 'white';
})

const grayButton = document.querySelector('#gray');
grayButton.addEventListener('click', () => {
    boxList.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#b9b9ba';
        });
    });
    grayButton.style.backgroundColor = 'gray';
    blackButton.style.backgroundColor = 'white';
    rainbowButton.style.backgroundColor = 'white';
})

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', () => {
    boxList.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        });
    });
    grayButton.style.backgroundColor = 'white';
    blackButton.style.backgroundColor = 'gray';
    rainbowButton.style.backgroundColor = 'white';
})

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    boxList.forEach((box) => {
        box.addEventListener('mouseover', () => {
            let o = Math.round, r = Math.random, s = 255;
            box.style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        });
    });
    grayButton.style.backgroundColor = 'white';
    blackButton.style.backgroundColor = 'white';
    rainbowButton.style.backgroundColor = 'gray';
})




