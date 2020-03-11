console.log("TicTacToe.js connected")

cells = document.querySelectorAll('td')
restart = document.querySelector('#Restart');
// two = document.querySelector('#2')
// three = document.querySelector('#3')
// four = document.querySelector('#4')
// five = document.querySelector('#5')
// six = document.querySelector('#6')
// seven = document.querySelector('#7')
// eight = document.querySelector('#8')
// nine = document.querySelector('#9')
// Clear Squares
restart.addEventListener('click',function(){
  for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
  }
})

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(){
      if (this.textContent == "X") {
        this.textContent = "O";
      } else if (this.textContent == "O") {
        this.textContent = ""
      } else {
        this.textContent = "X"
      }
    }
  )
}
