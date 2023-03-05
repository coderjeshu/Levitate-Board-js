const board = document.getElementById('board')
const numberOfSquare = 600
let colors = ['#e74c33','#ffffff',"#3498db" , "#ec3278" ,'#9fc333']

for(let i= 0; i<numberOfSquare ; i++){
    const square = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover',()=>{
        setColor(square)
    })

    square.addEventListener('mouseout',()=>{
        removeColor(square)
    })

    board.appendChild(square)
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}

function setColor(element){
    let color = getRandomColor()
    element.style.background = color
    element.style.shadow = "0 0 2px #fff"
}

function removeColor(element){
     element.style.background = "#090535"
     element.style.shadow = "0 0 2px #fff"

}