window.alert("Button geklickt?!"); //Das löst eine Meldung aus
console.log('Test1');
//Javascript und Typescript geht los
window.onload = function () {
    console.log("Objekte wurden geladen"); //Text in Konsole
    var name = "tobias"; //Typ String
    var surname = "merkle";
    var number1 = 1; //Typ Number
    var number2 = 2;
    var number3 = 24;
    number1 = 2; //Neue Wertzuweisung
    console.log(number1 + number1);
    console.log(name + surname);
    console.log(number1 + number2 + number3); //Addiert 
};
//Button Event
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Was geht ab";
});
//# sourceMappingURL=script.js.map