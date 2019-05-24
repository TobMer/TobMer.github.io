

window.onload = function () {  //Lässt in Konsole Text erscheinen





    document.getElementById("button2").addEventListener("click", Changeclass);//Button 2 änder KLasse!

    console.log("Objekte wurden geladen");//Text in Konsole
    let name: string = "tobias"; //Typ String
    let surname: string = "merkle";

    let number1: number = 1;//Typ Number
    let number2: number = 2;
    let number3: number = 24;


    number1 = 2; //Neue Wertzuweisung
    console.log(number1 + number1);//Zahl in konsole
    number1 = number2 + number3 + number2;//Addiert und neue Wertzwueisung

    console.log(name + surname);//Ausgabe
    console.log(number1);





    document.getElementById("button2").addEventListener("click", changehund)//Button2 Zuweisung
    document.getElementById("button3").addEventListener("click", changecat)//Button3 Zuweisung
    document.getElementById("button4").addEventListener("click", para)//Button4 Zuweisung
    document.getElementById("gameboy").addEventListener("click", gameb)
    
};
//Hier kommen die Funktionen:



window.alert("Button geklickt?!");//Das löst eine Meldung aus




function changehund()   //Button2
{
  
    document.getElementById("button2").innerHTML = "Tobias";

}

function changecat() //Button 3

{
    document.getElementById("button3").innerHTML = "M.";

}



function gameb()//Gameboy Bild verändert sich,kleine Spielerei
{
    document.getElementById("gameboy").innerHTML ="Bip-Bupp-Bip-Bip-Bubbb";
    console.log("GameboyLanguage");
}









function Changeclass() {//Funktion wenn sich KLasse ändert

    document.getElementById("button2").className = "class2";

    console.log("wasgeht");
}


function para (){//Text erscheint beim Button von ORt und in der Konsole wird etwas ausgegebn

document.getElementById("button4").innerHTML = "Furtwangen";
let newPara = document.createElement("p");
let position = document.getElementById("body");
position.appendChild(newPara);
newPara.innerHTML="geschafft!";
console.log("Wundervoll!");

}

