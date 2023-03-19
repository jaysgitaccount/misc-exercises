class Cell {
    constructor(div) {
        this.state = 'neutral';
        // Constructor takes the div that was created when creating this array element
        this.div = div;
        this.current
        // this.setState(this.state);

        this.setState('snaked')
        this.setState('apple')
    }

    // Store states and set what happens with each state
    setState(newState) {
        // this.div.classList.replace(this.state, newState);

        // Reset state first
        this.div.classList.remove(this.state);

        switch(newState) {
            case 'neutral':
                console.log(newState)
                this.div.classList.add('neutral')
                break;
            case 'snaked':
                console.log(newState)
                // this.div.classList.replace(this.state, 'snaked');
                this.div.classList.add('snaked')
                break;
            case 'apple':
                console.log(newState)
                this.div.classList.add('apple')
                break;
            default:
                break;
        }

        console.log(this.div)

        // We aren't using the previous state anymore so now we can change it
        this.state = newState;
    }

}

class Node {
    constructor(rowPos, colPos) {
        // What cell it occupies
        this.rowPos = rowPos;
        this.colPos = colPos;
        this.next = null;
    }

    // Each time the snake moves: receive new position, pass current position to child
    move(rowPos, colPos) {
        // Set current position from parent, send current pos to child
        this.next.move(this.rowPos, this.colPos); 
        // Receive coords from parent
        this.rowPos = rowPos;
        this.colPos = colPos;
    }

    setCell() {
        // Access the cell that this node is on currently and set the state to occupied
        board[this.rowPos][this.colPos].setState('snaked');
    }
}

let testCell;

// Init 2DArray in IIFE
(function() {
    const boardElem = document.getElementById('board');

    const boardSize = 10;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
        let secondArr = [];

        // Init second dimension of arrays
        for (let j = 0; j < boardSize; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            boardElem.appendChild(div);

            // Create cell class
            let boardCell = new Cell(div);
            
            // Store the cell inside this row's j
            secondArr[j] = boardCell;

            if (i === 5 && j === 5) {
                console.log('hello??')
                testCell = boardCell;
            }
        }
        // Assign each second dimension array to board[i];
        board[i] = secondArr;
    }
})()

console.log(testCell.div)

document.addEventListener('keyup', () => {
    testCell.setState('snaked')
})

// I should make a board class to manage all general board-related stuff