console.log("am ok");
let btn =document.getElementById('btn');
let grid = document.querySelector('.grid');
let squares =[];
let snake = [2,1,0];
let direction = 1;
let width= 10;
let displayScore = document.getElementById("score");
let score = 0;
let speed = 0.9;
let interval = 1000/2;
let time = 0;
for(let s=0; s<100; s++){
    let child = document.createElement("div");
    child.classList.add("childClass");
    grid.appendChild(child);
    squares.push(child);
}
function startGame(){
    snake.forEach(ah => squares[ah].classList.remove("snakeMe"));
    squares[appleIndex].classList.remove("fruit");
    clearInterval(time);
    snake = [2,1,0];
    score = 0;
    displayScore.textContent = score;
    direction =1;
    interval= 1000/2;
    generateFruit();
    snake.forEach(ah => squares[ah].classList.add("snakeMe"));
     time = setInterval(move, interval);
}
snake.forEach(ah => squares[ah].classList.add('snakeMe'));
function move(){
    if((snake[0] + width>= 100 && direction === 10)||(snake[0] % width === 9 && direction === 1)||(snake[0] % width ===0 && direction ===-1)||(snake[0] - width < 0 && direction === -10)){
        return clearInterval(time);
    }
    if(squares[snake[0] + direction].classList.contains("snakeMe")){
        return clearInterval(time);
    }
    const tail = snake.pop();
    squares[tail].classList.remove('snakeMe');
    snake.unshift(snake[0] + direction);
    squares[snake[0]].classList.add("snakeMe");
    // remove the fruit
    if(squares[snake[0]].classList.contains("fruit")){
     squares[appleIndex].classList.remove("fruit");
     squares[tail].classList.add("snakeMe");
     snake.push(tail);
     score++;
     displayScore.textContent = score;
     generateFruit();
     clearInterval(time);
     interval = interval * speed;
     time = setInterval(move, interval);

    }
}
// fruit
function generateFruit(){
    do {
        appleIndex = Math.floor(Math.random() * squares.length)

    }while (squares[appleIndex].classList.contains("snakeMe"))
     squares[appleIndex].classList.add("fruit")
}
generateFruit();
function control(e){
    if(e.keyCode === 39){
direction = 1;
    }else if(e.keyCode === 38){
direction = -width;
    }else if(e.keyCode === 37){
direction = -1;
    }else if(e.keyCode === 40){
        console.log("it's fine");
direction = +width;
    }
}
document.addEventListener("keyup", control);
btn.addEventListener("click", startGame);