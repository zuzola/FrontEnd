
let tank = document.querySelector('.tank');
let positionTop = 100;
let positionLeft = 100;

tank.style.top = positionTop + 'px';
tank.style.left = positionLeft + 'px';


document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowUp' && positionTop > 20) {
        positionTop -= 3;
        tank.style.transform = 'rotate(-90deg)';
        tank.style.top = positionTop + 'px';
    }
    if (event.code === 'ArrowDown' && positionTop < window.innerHeight - 70) {
        positionTop += 3;
        tank.style.transform = 'rotate(90deg)';
        tank.style.top = positionTop + 'px';
    }
    if (event.code === 'ArrowLeft' && positionLeft > 20) {
        positionLeft -= 3;
        tank.style.transform = 'rotate(180deg)';
        tank.style.left = positionLeft + 'px';
    }
    if (event.code === 'ArrowRight' && positionLeft < window.innerWidth - 70) {
        positionLeft += 3;
        tank.style.transform = 'rotate(0deg)';
        tank.style.left = positionLeft + 'px';
    }
});

document.addEventListener('keyup', function() {
    // console.log('keyup');
});