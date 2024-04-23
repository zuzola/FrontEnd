
function createTank(x,y) {
    let tank = document.createElement('div');
    let delo = document.createElement('div');
    tank.style.left = x + 'px';
    tank.style.top = y + 'px';
    tank.classList.add('tank');
    delo.classList.add('delo');
    tank.appendChild(delo);
    document.body.appendChild(tank);
    return tank;
}

function addTankControll(tank, position, keys) {
    // keys = {up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight'}
    document.addEventListener('keydown', function(event) {
        if (event.code === keys.up && canGoUp(position)) {goUp(tank, position);}
        if (event.code === keys.down && canGoDown(position)) {goDown(tank, position);}
        if (event.code === keys.left && canGoLeft(position)) {goLeft(tank, position);}
        if (event.code === keys.right && canGoRight(position)) {goRight(tank, position);}
    });
}

function goUp(tank, position) {
    position.y -= position.speed;
    tank.style.transform = 'rotate(-90deg)';
    tank.style.top = position.y + 'px';
}
function goDown(tank, position) {
    position.y += position.speed;
    tank.style.transform = 'rotate(90deg)';
    tank.style.top = position.y + 'px';
}
function goLeft(tank, position) {
    position.x -= position.speed;
    tank.style.transform = 'rotate(180deg)';
    tank.style.left = position.x + 'px';
}
function goRight(tank, position) {
    position.x += position.speed;
    tank.style.transform = 'rotate(0deg)';
    tank.style.left = position.x + 'px';
}

function canGoUp(position) {
    return position.y > 20;
}
function canGoDown(position) {
    return position.y < window.innerHeight - 70;
}
function canGoLeft(position) {
    return position.x > 20;
}
function canGoRight(position) {
    return position.x < window.innerWidth - 70;
}

let tank1 = createTank(100, 200);
let tank2 = createTank(50, 300);
let tank3 = createTank(10, 200);

addTankControll(tank1, {x: 100, y: 200, speed: 10}, {up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight'});
addTankControll(tank2, {x: 50, y: 300, speed: 5}, {up: 'KeyW', down: 'KeyS', left: 'KeyA', right: 'KeyD'});
addTankControll(tank3, {x: 10, y: 200, speed: 3}, {up: 'KeyI', down: 'KeyK', left: 'KeyU', right: 'KeyO'});




document.addEventListener('keyup', function() {
    // console.log('keyup');
});