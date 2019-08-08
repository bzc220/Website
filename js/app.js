/*
Bethany Chen
Final 
*/


function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
      for (var column = 1; column <= 3; column++) { //For each column in this row
  
        var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
        var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3
  
        swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
      }
    }
    document.body.style.backgroundColor = "black";
    
  }
  
  function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile9") {
      if (column < 3) {
        if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + row + (column + 1));
          check();
          return;
        }
      }
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + row + (column - 1));
          check();
          return;
        }
      }
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + (row - 1) + column);
          check();
          return;
        }
      }
      if (row < 3) {
        if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
          swapTiles("cell" + row + column, "cell" + (row + 1) + column);
          check();
          return;
        }
      }
    }
  }
  function check() {
  
    if (document.getElementById("cell11").className == "tile1") {
      if (document.getElementById("cell12").className == "tile2") {
        if (document.getElementById("cell13").className == "tile3") {
          if (document.getElementById("cell21").className == "tile4") {
            if (document.getElementById("cell22").className == "tile5") {
              if (document.getElementById("cell23").className == "tile6") {
                if (document.getElementById("cell31").className == "tile7") {
                  if (document.getElementById("cell32").className == "tile8") {
                    document.body.style.backgroundColor = "yellow";
                    alert("Well done!");
                    //shuffle();
                  }
                }
              }
            }
          }
        }
      }
    }
  
  }