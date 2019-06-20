var Beispielcode_94;
(function (Beispielcode_94) {
    // Objekte  initialisieren
    var penguin = {
        name: "Pingu",
        age: 2,
        food: ["Seelachs", "Dorade", "Red Snapper"],
        placeOfBirth: "Südpol",
        imgSrc: "pinguin.png"
    };
    var lion = {
        name: "Leon",
        age: 14,
        food: ["Antilopen", "Gazellen", "Zebras", "Gnus"],
        placeOfBirth: "Afrika",
        imgSrc: "loewe.png"
    };
    var elephant = {
        name: "Ele",
        age: 28,
        food: ["Gras", "Früchte", "Zweige", "Rinde"],
        placeOfBirth: "Afrika",
        imgSrc: "elephant.png"
    };
    var ape = {
        name: "Chico",
        age: 5,
        food: ["Bananen", "Früchte"],
        placeOfBirth: "Asien",
        imgSrc: "affe.png"
    };
    var beaver = {
        name: "Bibi",
        age: 9,
        food: ["Holz", "Blätter"],
        placeOfBirth: "Nordamerika",
        imgSrc: "biber.png"
    };
    var icebear = {
        name: "Cooli",
        age: 16,
        food: ["Robben", "Rentiere"],
        placeOfBirth: "Nordpol",
        imgSrc: "eisbaer.png"
    };
    var duck = {
        name: "Daggy",
        age: 3,
        food: ["Algen"],
        placeOfBirth: "Europa",
        imgSrc: "ente.png"
    };
    var rooster = {
        name: "Rocky",
        age: 7,
        food: ["Algen"],
        placeOfBirth: "Europa",
        imgSrc: "hahn.png"
    };
    var dog = {
        name: "Bello",
        age: 12,
        food: ["Hundefutter", "Leckerli"],
        placeOfBirth: "Europa",
        imgSrc: "hund.png"
    };
    var cat = {
        name: "Kitty",
        age: 12,
        food: ["Katzenfutter", "Mäuse"],
        placeOfBirth: "Europa",
        imgSrc: "katze.png"
    };
    var chick = {
        name: "Chicka",
        age: 0.5,
        food: ["Würmer", "Körner"],
        placeOfBirth: "Europa",
        imgSrc: "kueken.png"
    };
    var cow = {
        name: "Mucki",
        age: 11,
        food: ["Gras"],
        placeOfBirth: "Europa",
        imgSrc: "kuh.png"
    };
    var pig = {
        name: "Stinky",
        age: 6,
        food: ["alles"],
        placeOfBirth: "Europa",
        imgSrc: "schwein.png"
    };
    var sealion = {
        name: "Seeli",
        age: 9,
        food: ["Fisch"],
        placeOfBirth: "Nordamerika",
        imgSrc: "seeloewe.png"
    };
    var zebra = {
        name: "paul",
        age: 19,
        food: ["Gras"],
        placeOfBirth: "Afrika",
        imgSrc: "zebra.png"
    };
    // Objekte in ein Array schreiben
    var zoo = [penguin, lion, elephant, ape, beaver, icebear, duck, rooster, dog, cat, chick, cow, pig, sealion, zebra];
    // Funktion zur Ausgabe im HTML-Code mit Hilfe einer Schleife
    function writeHTML() {
        var node = document.getElementById("content");
        // HTML String
        var childNodeHTML;
        // Zählvariable initialisieren
        var i = 0;
        //Schleifen
        while (i < zoo.length) {
            // Ausgabe name des aktuell ausgewählten Animals, sowie die entsprechende Bild-Quelle
            console.log(zoo[i].name, zoo[i].imgSrc);
            childNodeHTML = "";
            childNodeHTML += "<div ";
            childNodeHTML += "id=animal" + i + " >"; // id zum späteren 'dynamischen' Zugriff über die Zählvariable
            //childNodeHTML +="class=>";
            childNodeHTML += "<img src=imgs/";
            childNodeHTML += zoo[i].imgSrc;
            childNodeHTML += ">";
            childNodeHTML += "<div><button>";
            childNodeHTML += zoo[i].name;
            childNodeHTML += "</button></div>";
            childNodeHTML += "</div>";
            console.log(childNodeHTML);
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    function filterByRegion(region) {
        console.log("Filter", region);
        // Zählvariable initialisieren
        var i = 0;
        //Schleifen
        while (i < zoo.length) {
            var node = document.getElementById("animal" + i);
            console.log("animal" + i);
            if (zoo[i].placeOfBirth != region && region != "all") { // Filterattribut abfragen
                //ausblenden, falls Filtereigenschaft nicht erfüllt
                node.style.display = "none";
            }
            else {
                //einblenden, falls Filterattribut erfüllt
                node.style.display = "initial";
            }
            var animalOrigin = zoo[i].placeOfBirth;
            /*
            switch(animalOrigin)
            {
                case "Asien":
                    console.log("Dieses Tier stammt aus Asien");
                    break;
                case "Südamerika":
                case "Nordamerika":
                    console.log("Aus Amerika");
                    break;
                case "Afrika":
                    console.log("Afrika");
                    break;
                default:
                    console.log("Keine Ahznung woher das Tier kommt");
            }

            if(animalOrigin == "Asien")
            {
                console.log("Dieses Tier stammt aus Asien");
            } else if(animalOrigin == "Nordamerika" || animalOrigin == "Südamerika")
            {
                console.log("Aus Amerika");
            } else if(animalOrigin == "Afrika")
            {
                console.log("Afrika");
            } else {

            }
            */
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        console.log("main");
        // Content erzeugen
        writeHTML();
        //Event Listener installieren für Filter-Buttons
        document.getElementById("EuropaFilter").addEventListener('click', function () {
            filterByRegion("Europa");
        });
        document.getElementById("NordamerikaFilter").addEventListener('click', function () {
            filterByRegion("Nordamerika");
        });
        document.getElementById("AfrikaFilter").addEventListener('click', function () {
            filterByRegion("Afrika");
        });
        document.getElementById("AsienFilter").addEventListener('click', function () {
            filterByRegion("Asien");
        });
        document.getElementById("NordpolFilter").addEventListener('click', function () {
            filterByRegion("Nordpol");
        });
        document.getElementById("SuedpolFilter").addEventListener('click', function () {
            filterByRegion("Südpol");
        });
        document.getElementById("allFilter").addEventListener('click', function () {
            filterByRegion("all");
        });
    }
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener('DOMContentLoaded', main);
})(Beispielcode_94 || (Beispielcode_94 = {}));
// -----------------------------------------------------------------------------------------------------
// Funktionen von Algorithmen-Vorlesung:
var numberArray1 = [0, 2, 50, 1, 7, 8];
var numberArray2 = [-2, -5, -10];
function getHighestNumber(inputArray) {
    var tempHighestNumber = inputArray[0];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < tempHighestNumber) {
            tempHighestNumber = inputArray[i];
        }
    }
    console.log(tempHighestNumber);
}
// Funktionen von Algorithmen-Vorlesung:
var var1 = 5;
var var2 = 6;
function switchNumber(value1, value2) {
    console.log("Wert 1 : " + value1);
    console.log("Wert 2 : " + value2);
    console.log("Calcuation here");
    var tempValue = value1;
    value1 = value2;
    value2 = tempValue;
    /*
    if(var1 == 5 && var2 == 6)
    {
        value1 = 6;
        value2 = 5;
    }
    */
    console.log("Wert 1 : " + value1);
    console.log("Wert 2 : " + value2);
}
switchNumber(var1, var2);
