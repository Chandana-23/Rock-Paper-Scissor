var p1 = 0;
var p2 = 0;
function fun(t) {
    document.getElementById("input").style.visibility = "visible";
    var n1 = t.alt;
    document.querySelector("#input").src = t.src;
    turn(n1);
}

function turn(n1) {
    var rad = Math.floor(Math.random()*3);
    document.getElementById("turn").style.visibility = "visible";
    var n2 = document.getElementById("img"+rad).alt;
    var source = document.getElementById("img"+rad);
    document.querySelector("#turn").src = source.src;
    if((n1=='Rock' && n2=='Scissor') || (n1=='Paper' && n2=='Rock') ||(n1=='Scissor' && n2=='Paper'))
    {
        p1+=1;
        document.getElementById("p1").innerHTML = p1;
    }
    else if((n2=='Rock' && n1=='Scissor') || (n2=='Paper' && n1=='Rock') || (n2=='Scissor' && n1=='Paper'))
    {
        p2+=1;
        document.getElementById("p2").innerHTML = p2;
    }
    target(p1,p2);
}

function target() {
    var val = document.getElementById("range").value;
    document.querySelector("p").innerHTML = "Target set: "+val;
    if(val==0)
    {
        alert("Kindly set the target");
        return;
    }
    if((p1>=val))
    {
       document.getElementById("result").innerHTML = "Player 1 won"; 
       return;
    }
    else if(val<=p2)
    {
        document.getElementById("result").innerHTML = "Player 2 won"; 
        return;
    }
}
function reset() {
    document.getElementById("range").value = 0;
    document.querySelector("p").innerHTML = "Target set: "+0;
    document.getElementById("p1").innerHTML = 0;
    document.getElementById("p2").innerHTML = 0;
}