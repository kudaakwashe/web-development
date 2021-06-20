// const btnGenerator = document.querySelector('#btnGenerator');
const mainTitle = document.querySelector('#mainTitle');
const colorCircle = document.querySelector('#wrapper');

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.fontFamily = 'helvetica';

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const sum = r + g + b;
    if (sum < 180){
        document.body.style.color = 'rgb(255, 255, 255)';
    } else {
        document.body.style.color = 'rgb(0, 0, 0)';
    }
    return `rgb(${r}, ${g}, ${b})`;   
}

btnGenerator.addEventListener('click', function () {
    const newColor = makeRandomColor()
    colorCircle.style.backgroundColor = newColor;
    mainTitle.innerText = newColor;
    
})
