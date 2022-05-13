const white = 0 ;
const black = 1 ;
const king=0;
const queen=1;
const bishop=2;
const knight=3;
const rook=4;
const pawn=5;
const alive = 0 ;
const dead = 1 ;
var clickedpiece = 0 ;
var turn = "white" ;
var holdedpiece ;
var holdedTeam;
class piece{
  constructor(team , id , status , imageURL , row , column , number){
  this.team = team ;
  this.id = id ;
  this.status = status ;
  this.imageURL = imageURL;
  this.row = row ;
  this.column = column ;
  this.num = number;
  this.valid_move 
  }
  valid_move(){
      return 1 ;
  }
  }
  
var teams=[
[
   new piece(white , rook , alive , "src/white/rook.png" , 1 , 'a' , 0),
   new piece(white , knight , alive , "src/white/knight.png" , 1 , 'b' , 1),
   new piece(white , bishop , alive , "src/white/bishop.png" , 1 , 'c' , 2),
   new piece(white , queen , alive , "src/white/queen.png" , 1 , 'd' , 3),
   new piece(white , king , alive , "src/white/king.png" , 1 , 'e' , 4),
   new piece(white , bishop , alive , "src/white/bishop.png" , 1 , 'f' , 5),
   new piece(white , knight , alive , "src/white/knight.png" , 1 , 'g' , 6),
   new piece(white , rook , alive , "src/white/rook.png" , 1 , 'h' , 7),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'a' , 8),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'b' , 9),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'c' , 10),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'd' , 11),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'e' , 12),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'f' , 13),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'g' , 14),
   new piece(white , pawn , alive , "src/white/pawn.png" , 2 , 'h' , 15),
]
,
[
  new piece(black , rook , alive , "src/black/rook.png" , 8 , 'a' , 0),
  new piece(black , knight , alive,"src/black/knight.png" , 8 , 'b' , 1),
  new piece(black , bishop , alive,"src/black/bishop.png" , 8 , 'c' , 2),
  new piece(black , queen , alive ,"src/black/queen.png" , 8 , 'd' , 3),
  new piece(black , king , alive , "src/black/king.png" , 8 , 'e' , 4),
  new piece(black , bishop , alive,"src/black/bishop.png" , 8 , 'f' , 5),
  new piece(black , knight , alive,"src/black/knight.png" , 8 , 'g' , 6),
  new piece(black , rook , alive , "src/black/rook.png" , 8 , 'h' , 7),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'a' , 8),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'b' , 9),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'c' , 10),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'd' , 11),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'e' , 12),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'f' , 13),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'g' , 14),
  new piece(black , pawn , alive , "src/black/pawn.png" , 7 , 'h' , 15),
 ]
]
/*-----------initialisation----------- */
for(var i=1 ; i<=8;i++){
    color_col(i);
}
for (var i = 0 ; i<16 ; i++){
  movePiece(teams[white][i],teams[white][i].column,teams[white][i].row);
  movePiece(teams[black][i],teams[black][i].column,teams[black][i].row);
}
/*---------------events----------------*/
for(var i=0 ; i<document.querySelectorAll(".column").length ; i++){
document.querySelectorAll(".column")[i].addEventListener("click" , function(){
if(clickedpiece===1){
  movePiece(teams[holdedTeam][holdedpiece] , this.classList[1][0] , this.classList[1][1]);
  clickedpiece=0;
  holdedTeam=-1;
  holdedpiece=-1;
  if(turn==="white"){
    turn="black";
  }
  else{
    turn="white";
  }
}


if(this.classList.contains(turn)){
clickedpiece=1;
holdedpiece = this.classList[4];
switch(turn){
  case "white" : holdedTeam = white ; break ;
  default: holdedTeam = black;
}
}
return 0 ; 
});
}







/*--------------------------------*/
/*----------functions------------*/
function getImageElement(p){
  return "<img src='" + p.imageURL + "' class='white piece'/>"
}  

function setImage(piece, location){
  var team="" ; 
  switch (piece.team){
    case white:team="white"; break ;
    case black:team="black";
  }
 document.querySelector("."+location).innerHTML=getImageElement(piece); 
 document.querySelector("."+location).classList.add(team);
 document.querySelector("."+location).classList.add(piece.num);
}

function removeImage(piece){
  var team ; 
  switch (piece.team){
    case white:team="white"; break ;
    case black:team="black"; 
  }
 document.querySelector("." + piece.column + piece.row).innerHTML="";  
 document.querySelector("." + piece.column + piece.row).classList.remove(team);
 document.querySelector("." + piece.column + piece.row).classList.remove(piece.num);
}

function movePiece(piece , newColumn , newRow){
if(piece.valid_move(newRow, newColumn)===1){
removeImage(piece);
setImage(piece , newColumn+newRow.toString());
piece.row = newRow;
piece.column=newColumn;
}
}
function color_col(c){
  var col='o';
  switch(c){
    case 1:col='a';   break;
    case 2:col='b';  break;
    case 3:col='c';   break;
    case 4:col='d';   break;
    case 5:col='e';   break;
    case 6:col='f';  break;
    case 7:col='g';   break;
    case 8:col='h';  break;
  }

for(var i=1 ; i<=8 ; i++){
  if(c%2==1){
    if(i%2==1){
        document.querySelector("."+col+i.toString()).classList.add("brown");
    }
    else{
      document.querySelector("."+col+i.toString()).classList.add("green");
    }
  }
  else{
      if(i%2==0){
          document.querySelector("."+col+i.toString()).classList.add("brown");
      }
      else{
          document.querySelector("."+col+i.toString()).classList.add("green");
        }
  }
}
}

