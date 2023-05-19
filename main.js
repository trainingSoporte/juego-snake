//*Snake App


console.log('Iniciando App..');
console.log('Snake El Juego');

//*DOM
const body = document.getElementsByTagName('body')[0];
const squares = document.getElementsByClassName('squares');
const board = document.getElementById('board');

//*Board

const config = {
    rows: 15,
    columns: 17
}

let square;

for (let index = 1; index <= (config.rows * config.columns); index++) {
    // console.log(index);
    square = document.createElement('div');
    square.classList.add('squares');
    square.textContent = index;
    board.append(square);
}

//*Snake

const snake = [];

snake[0] = 1;//snake--head
snake[1] = 0;//snake--body

console.log(body);
console.log(squares);
console.log(board);


let index = 0;
let step;
let oldEvent;

squares[snake[1]].classList.add('snake--body');
squares[snake[0]].classList.add('snake--head');

//* Snake Move
body.addEventListener('keyup', (e) => {
    console.log('keyup');
    console.log(e.key);

    if ((oldEvent === undefined) || (oldEvent === 'ArrowRight' && e.key !== 'ArrowLeft') || (oldEvent === 'ArrowLeft' && e.key !== 'ArrowRight') ||
        (oldEvent === 'ArrowUp' && e.key !== 'ArrowDown') || (oldEvent === 'ArrowDown' && e.key !== 'ArrowUp')) {

        switch (e.key) {
            case 'ArrowRight':
                step = 1;
                break;
            case 'ArrowLeft':
                step = (-1);
                break;
            case 'ArrowUp':
                step = (-config.columns);
                break;
            case 'ArrowDown':
                step = config.columns;
                break;
            default:
                step = 0;
                break;
        }

        oldEvent = e.key;

        if (squares[snake[0]].classList.contains('snake--head')) {//
            squares[snake[0]].classList.remove('snake--head');
        }
        if (squares[snake[1]].classList.contains('snake--body')) {//
            squares[snake[1]].classList.remove('snake--body');
        }
        snake[1] = snake[0];
        snake[0] = snake[0] + step;
        
        squares[snake[1]].classList.add('snake--body');
        squares[snake[0]].classList.add('snake--head');
    }

})

