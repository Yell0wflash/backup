const pos = [
  [".", "#", "."],
  ["#", "0", "#"],
  [".", "#", "."],
];

// let x = pos[1][1];

// console.log(x);

const getStatus = (x, y) => {
  let result = "";

  if (pos[x - 1] && pos[x - 1][y - 1]) {
    switch (pos[x - 1][y - 1]) {
      case "o":
        result = "white";
        break;
      case "#":
        result = "black";
        break;
      case ".":
        result = "empty";
        break;
    }
  } else result = "out";

  return result;
};

// console.log(getStatus(2, 3));

const isTaken = (x, y) => {
  let center = getStatus(x, y);
  let left = getStatus(x, y - 1);
  let right = getStatus(x, y + 1);
  let top = getStatus(x - 1, y);
  let bottom = getStatus(x + 1, y);

  if (center != "empty") {
    if (center != left) {
        if(center != right){
            if(center != top) {
                if(center != bottom){
                   
                    return true;
                    
                }
                isTaken(x+1, y);
            }
            isTaken(x-1, y);
        }
        isTaken(x, y+1);
    }
    isTaken(x, y-1);
  }
};

console.log(isTaken(1, 1));
