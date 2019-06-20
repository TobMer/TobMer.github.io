var Beispielcode_92;
(function (Beispielcode_92) {
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
        specialNeed: "Elevated Fence"
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
            if (animals[i].placeOfBirth != "all")
                // Vorlesungs-If-Statements
                console.log("pre-if");
            if (getStatement() || (i < 1 && true)) {
                console.log("if-statement ist wahr!");
            }
            console.log("post-if");
        }
    }
    checkForSpecialNeed(zoo);
    function getStatement() {
        if (Math.random() > 0.5) {
            return true;
        }
        return false;
    }
})(Beispielcode_92 || (Beispielcode_92 = {}));
