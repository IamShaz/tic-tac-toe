(function(){
    let squares = document.getElementsByClassName('square');
    let turn = 0;
    let isFull = [];

    const newGame = () => {
        turn = 0;    
        isFull = [];        
        for(let i = 0; i < squares.length; i++) {
            squares[i].classList.remove('p1', 'p2');
            squares[i].innerHTML = '';            
        }
    }

    const checkIfBoardFull = () => {
        isFull.push(1)
        if(isFull.length == 9) {
            alert('Tie Game');
            newGame();
        }            
    }    

    const findWinner = (val, mark) => {
        const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        turn == 0 ? turn = 1 : turn = 0;

        winningLines.map(line => {
            line.map((num,i) => {
                if(line[i] == val) {
                    if(i == 0) {
                        if(squares[line[i + 1]].innerHTML == mark && squares[line[i + 2]].innerHTML == mark) {
                            alert(`PLAYER ${mark} WINS!`);
                            newGame();
                        }
                    }
                    if(i == 1) {
                        if(squares[line[i - 1]].innerHTML == mark && squares[line[i + 1]].innerHTML == mark) {
                            alert(`PLAYER ${mark} WINS!`);
                            newGame();
                        }
                    }
                    if(i == 2) {
                        if(squares[line[i - 1]].innerHTML == mark && squares[line[i - 2]].innerHTML == mark) {
                            alert(`PLAYER ${mark} WINS!`);
                            newGame();
                        }
                    }
                }
            });
        })
        checkIfBoardFull();
    }

    const markSquare = (square, val) => {
        let mark = '';
        if(turn == 0) {
            mark = 'X';  
            square.classList.add('p1');  
            square.innerHTML = mark;
            setTimeout(() => {
                findWinner(val, mark);  
            }, 400);
                      
        } else {
            mark = 'O';
            square.classList.add('p2');
            square.innerHTML = mark;
            setTimeout(() => {
                findWinner(val, mark);
            }, 400);
        }
    }

    const checkSquare = (square, val) => {
        square.innerHTML == '' ? markSquare(square, val) : alert('Select empty square');
    }

    for(let i = 0; i < squares.length; i++) {     
        squares[i].addEventListener('click', function() {
            checkSquare(squares[i],i);
        });
    }

})();