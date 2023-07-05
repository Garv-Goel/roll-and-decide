function diceroll() {
        var i1=document.querySelector(".img1");
        var i2=document.querySelector(".img2");
        var text=document.querySelector("h1");
        var num1=Math.floor(Math.random()*6)+1;
        var num2=Math.floor(Math.random()*6)+1;
    if(num1>num2)
        text.textContent="Player 1 wins!";
    else if(num1<num2)
        text.textContent="Player 2 wins!";
    else
        text.textContent="Draw!,Roll more"
    var img1src="dice"+num1+".png";

    i1.setAttribute("src","img/"+img1src);

    var img2src="dice"+num2+".png";

    i2.setAttribute("src","img/"+img2src);
}

