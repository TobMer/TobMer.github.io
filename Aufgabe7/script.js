window.onload = function () {
    document.getElementById("button2").addEventListener("click", Changeclass); //Button 2 änder KLasse!
    console.log("Objekte wurden geladen"); //Text in Konsole
    let name = "tobias"; //Typ String
    let surname = "merkle";
    let number1 = 1; //Typ Number
    let number2 = 2;
    let number3 = 24;
    number1 = 2; //Neue Wertzuweisung
    console.log(number1 + number1); //Zahl in konsole
    number1 = number2 + number3 + number2; //Addiert und neue Wertzwueisung
    console.log(name + surname); //Ausgabe
    console.log(number1);
    document.getElementById("anfang").innerHTML; //Greift auf HTML ID zu
    console.log('Test1'); //Text in Konsole
    //Javascript und Typescript geht los
    document.getElementById("button2").addEventListener("click", changehund); //Button2 Zuweisung
    document.getElementById("button3").addEventListener("click", changecat); //Button3 Zuweisung
    document.getElementById("button4").addEventListener("click", changeplace); //Button4 Zuweisung
};
function changehund() {
    document.getElementById("button2").innerHTML = "Tobias";
}
function changecat() {
    document.getElementById("button3").innerHTML = "Merkle";
}
function changeplace() {
    document.getElementById("button4").innerHTML = "Furtwangen";
}
window.alert("Button geklickt?!"); //Das löst eine Meldung aus
window.onclick = function () {
    function onclick() { document.getElementById('button2').innerHTML = "BlaBlaBla"; }
};
function Changeclass() {
    document.getElementById("button2").className = "class2";
    console.log("wasgeht");
}
//# sourceMappingURL=script.js.map