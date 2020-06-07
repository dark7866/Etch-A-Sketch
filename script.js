const container = document.getElementById("container");
const resetBtns = document.getElementById("reset-btn");

let squaresInGrid = 16;
let gridArr = [];

function makeGrid() {
    for(let i = 1; i <= (squaresInGrid * squaresInGrid); i++){
        let tempDiv = document.createElement("div");
        tempDiv.classList.add("grid");
        gridArr.push(tempDiv);
    }
    container.style.gridTemplateRows = `repeat(${squaresInGrid}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squaresInGrid}, 1fr)`;
    gridArr.forEach(div => container.appendChild(div));
    addClassToEach();

};

function addClassToEach() {
    gridArr.forEach(div => div.addEventListener('mouseover', () => {
        div.classList.add('onmouseover');
     })
    )
}


makeGrid();

function resetGrid() {
    container.innerHTML = " ";
    gridArr = [];
    makeGrid();
}
resetBtns.addEventListener("click", resetGrid);