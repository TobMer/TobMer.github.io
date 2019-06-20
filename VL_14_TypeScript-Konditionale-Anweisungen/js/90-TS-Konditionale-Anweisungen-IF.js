var Beispielcode_96;
(function (Beispielcode_96) {
    // Objekte  initialisieren
    var penguin = {
        name: "Pingu",
        age: 2,
        food: ["Seelachs", "Dorade", "Red Snapper"],
        placeOfBirth: "Südpol",
        currentLocation: "Hamburg",
        specialNeed: "Iced Pool"
    };
    var lion = {
        name: "Leon",
        age: 14,
        food: ["Antilopen", "Gazellen", "Zebras", "Gnus"],
        placeOfBirth: "Afrika",
        currentLocation: "Stuttgart",
        specialNeed: ""
    };
    var elephant = {
        name: "Ele",
        age: 28,
        food: ["Gras", "Früchte", "Zweige", "Rinde"],
        placeOfBirth: "Afrika",
        currentLocation: "München",
        specialNeed: ""
    };
    // Objekte in ein Array schreiben
    var zoo = [penguin, lion, elephant];
    function checkForSpecialNeed(animals) {
        // Durchlauf des Arrays
        for (var i = 0; i < animals.length; i++) {
            // Konditionale Abfrage – falls erfüllt, wird der Codeblock ausgeführt
            if (animals[i].specialNeed == "Iced Pool") {
                console.log(animals[i].name + " benötigt dringend einen gekühlten Pool");
            }
        }
    }
    checkForSpecialNeed(zoo);
})(Beispielcode_96 || (Beispielcode_96 = {}));
//# sourceMappingURL=90-TS-Konditionale-Anweisungen-IF.js.map