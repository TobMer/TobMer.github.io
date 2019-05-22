window.onload = function () {  //Lässt in Konsole Text erscheinen

    document.getElementById("button2").addEventListener("click", Changeclass);

    console.log("Objekte wurden geladen");//Text in Konsole
    let name: string = "tobias"; //Typ String
    let surname: string = "merkle";

    let number1: number = 1;//Typ Number
    let number2: number = 2;
    let number3: number = 24;


    number1 = 2; //Neue Wertzuweisung
    console.log(number1 + number1);//Zahl in konsole
    number1 = number2 + number3 + number2;//Addiert und neue Wertzwueisung

    console.log(name + surname);
    console.log(number1);







    document.getElementById("anfang").innerHTML;//Greift auf HTML ID zu
    console.log('Test1'); //Text in Konsole
    //Javascript und Typescript geht los

    document.getElementById("button2").addEventListener("click", changehund)
    document.getElementById("button3").addEventListener("click", changecat)
    document.getElementById("button4").addEventListener("click", changeplace)
};

function changehund() {//Button2
    document.getElementById("button2").innerHTML = "Tobias";

}

function changecat() {//Button 3
    document.getElementById("button3").innerHTML = "Merkle";

}

function changeplace() {//Button 4
    document.getElementById("button4").innerHTML = "Furtwangen";

}




window.alert("Button geklickt?!");//Das löst eine Meldung aus



window.onclick = function () {

    function onClick() { document.getElementById('button2').innerHTML = "BlaBlaBla"; }
}


function Changeclass() {

    document.getElementById("button2").className = "class2";

    console.log("wasgeht");
}


