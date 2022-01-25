window.onload = function() {

    /* Generate two random numbers */
    var player1 = Math.floor(Math.random()*6+1);
    var player2 = Math.floor(Math.random()*6+1);

    /* print dice values */
    console.log(player1,player2);
    
    /* Change images src according to the generated dice */
    document.getElementsByClassName("img1")[0].src= `images/dice${player1}.png`;
    document.getElementsByClassName("img2")[0].src= `images/dice${player2}.png`;

    /* Query the h1 directly after div*/ 
    result = document.querySelector("div.container h1");

    /* Display Winner or Draw */
    if(player1 > player2){
        result.innerHTML = "Player 1 Won!";
    }else if(player2 > player1){
        result.innerHTML = "player 2 Won!";
    } else{
        result.innerHTML = "Draw!";
    }
}
    
