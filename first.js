let turn = 'O';
let total_turn = 0;
let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill('E'); // Initially sabhi mei 'E' fill krr doo

// check winner for all 8 cases:
function checkwinner(){
      for(let [i0, i1,i2] of winner){
        if(board_array[i0] !='E' &&  board_array[i0] === board_array[i1] && board_array[i1] === board_array[i2])
            return 1;
      }
      return 0;
}

let playerA = document.getElementById('playerA');
let playerB = document.getElementById('playerB');
let printer = (event)=>{
    // console.log(event.target.id);
    const element = event.target;
   if(board_array[element.id] == 'E')
   {
    total_turn++;
    if(turn === 'O'){
        element.innerHTML = 'O';  // ye visual hai
        board_array[element.id] = 'O'; // Logic behind
        // playerA.style.transform.scale = '1.1';
        playerA.style.height = '550px';
        playerA.style.width = '350px';
        playerB.style.height = '500px';
        playerB.style.width = '300px';
        if(checkwinner())
        {
            document.getElementById('winningMessage').innerHTML = 'winner is O';
            board.removeEventListener('click',printer) // remove kro event Listerner koo // 1)Konsa ??? Click wala  2)refference bhi dena hai : isliye ya tho same function likho, ya firr short krr doo issitrrha
            return;
        }
        turn = 'X';
    }
    else{
        element.innerHTML = 'X';
        board_array[element.id] = 'X';
        playerA.style.height = '500px';
        playerA.style.width = '300px';
        playerB.style.height = '550px';
        playerB.style.width = '350px';
        if(checkwinner())
        {
            document.getElementById('winningMessage').innerHTML = 'winner is X';
            board.removeEventListener('click',printer)  
            return;
        }
        turn = 'O';
    }
    if(total_turn==9){
        document.getElementById('winningMessage').innerHTML = "Match is Draw"
        board.removeEventListener('click',printer);
    }
   }
};

const board = document.querySelector('.board');
board.addEventListener('click',printer);


// 1) kisi box me click kiya (let cell 0 me click kiya 'O' ye print hua)
// 2) board_array me value update krii
// 3) check the winner for all cases


const restart = document.getElementById('restartButton');
restart.addEventListener('click',()=>{
   const cell =  document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
    value.innerHTML = '';
   })
   turn = 'O';
   total_turn = 0;
   board_array =  new Array(9).fill('E');
   board.addEventListener('click',printer);
   document.getElementById('winningMessage').innerHTML = "";
        playerA.style.height = '500px';
        playerA.style.width = '300px';
        playerB.style.height = '500px';
        playerB.style.width = '300px';
})


// window.reload() : isse puri window hi reload ho jae gii

// HW : rock paper Scisor , advance Tic Tac Toe
