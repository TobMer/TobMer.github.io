window.onload = function () {
    document.getElementById("Kartendeck").addEventListener("click", ziehe, false);
    generiereKarten();
    spielStart();
    HTML();
};
////////// ARRAYS /////////////////////////                                                                                                                 (ง ° ل͜ °)ง 
let Kartendeck = []; //Der Array für das Kartendeck
let Ablage = []; // Ablage Array
let Gegner = []; //Gegnerkarten Array
let Spieler = []; //Eigene Karten Array  
////////////////Funktionen////////////////
function generiereKarten() {
    let ge1 = {
        kartenfarbe: "gelb",
        kartennummer: 1,
        img: "img/gelb1.jpg" //Bildquelle der Karte
    };
    Kartendeck.push(ge1);
    let ge2 = {
        kartenfarbe: "gelb",
        kartennummer: 2,
        img: "img/gelb2.jpg"
    };
    Kartendeck.push(ge2);
    let ge3 = {
        kartenfarbe: "gelb",
        kartennummer: 3,
        img: "img/gelb3.jpg"
    };
    Kartendeck.push(ge3);
    let ge4 = {
        kartenfarbe: "gelb",
        kartennummer: 4,
        img: "img/gelb4.jpg"
    };
    Kartendeck.push(ge4);
    let ge5 = {
        kartenfarbe: "gelb",
        kartennummer: 5,
        img: "img/gelb5.jpg"
    };
    Kartendeck.push(ge5);
    let ge6 = {
        kartenfarbe: "gelb",
        kartennummer: 6,
        img: "img/gelb6.jpg"
    };
    Kartendeck.push(ge6);
    let ge7 = {
        kartenfarbe: "gelb",
        kartennummer: 7,
        img: "img/gelb7.jpg"
    };
    Kartendeck.push(ge7);
    let ge8 = {
        kartenfarbe: "gelb",
        kartennummer: 8,
        img: "img/gelb8.jpg"
    };
    Kartendeck.push(ge8);
    let r1 = {
        kartenfarbe: "rot",
        kartennummer: 1,
        img: "img/r1.jpg"
    };
    Kartendeck.push(r1);
    let r2 = {
        kartenfarbe: "rot",
        kartennummer: 2,
        img: "img/r2.jpg"
    };
    Kartendeck.push(r2);
    let r3 = {
        kartenfarbe: "rot",
        kartennummer: 3,
        img: "img/r3.jpg"
    };
    Kartendeck.push(r3);
    let r4 = {
        kartenfarbe: "rot",
        kartennummer: 4,
        img: "img/r4.jpg"
    };
    Kartendeck.push(r4);
    let r5 = {
        kartenfarbe: "rot",
        kartennummer: 5,
        img: "img/r5.jpg"
    };
    Kartendeck.push(r5);
    let r6 = {
        kartenfarbe: "rot",
        kartennummer: 6,
        img: "img/r6.jpg"
    };
    Kartendeck.push(r6);
    let r7 = {
        kartenfarbe: "rot",
        kartennummer: 7,
        img: "img/r7.jpg"
    };
    Kartendeck.push(r7);
    let r8 = {
        kartenfarbe: "rot",
        kartennummer: 8,
        img: "img/r8.jpg"
    };
    Kartendeck.push(r8);
    let gr1 = {
        kartenfarbe: "grün",
        kartennummer: 1,
        img: "img/gruen1.jpg"
    };
    Kartendeck.push(gr1);
    let gr2 = {
        kartenfarbe: "grün",
        kartennummer: 2,
        img: "img/gruen2.jpg"
    };
    Kartendeck.push(gr2);
    let gr3 = {
        kartenfarbe: "grün",
        kartennummer: 3,
        img: "img/gruen3.jpg"
    };
    Kartendeck.push(gr3);
    let gr4 = {
        kartenfarbe: "grün",
        kartennummer: 4,
        img: "img/gruen4.jpg"
    };
    Kartendeck.push(gr4);
    let gr5 = {
        kartenfarbe: "grün",
        kartennummer: 5,
        img: "img/gruen5.jpg"
    };
    Kartendeck.push(gr5);
    let gr6 = {
        kartenfarbe: "grün",
        kartennummer: 6,
        img: "img/gruen6.jpg"
    };
    Kartendeck.push(gr6);
    let gr7 = {
        kartenfarbe: "grün",
        kartennummer: 7,
        img: "img/gruen7.jpg"
    };
    Kartendeck.push(gr7);
    let gr8 = {
        kartenfarbe: "grün",
        kartennummer: 8,
        img: "img/gruen8.jpg"
    };
    Kartendeck.push(gr8);
    let b1 = {
        kartenfarbe: "blau",
        kartennummer: 1,
        img: "img/bla1.jpg"
    };
    Kartendeck.push(b1);
    let b2 = {
        kartenfarbe: "blau",
        kartennummer: 2,
        img: "img/bla2.jpg"
    };
    Kartendeck.push(b2);
    let b3 = {
        kartenfarbe: "blau",
        kartennummer: 3,
        img: "img/bla3.jpg"
    };
    Kartendeck.push(b3);
    let b4 = {
        kartenfarbe: "blau",
        kartennummer: 4,
        img: "img/bla4.jpg"
    };
    Kartendeck.push(b4);
    let b5 = {
        kartenfarbe: "blau",
        kartennummer: 5,
        img: "img/bla5.jpg"
    };
    Kartendeck.push(b5);
    let b6 = {
        kartenfarbe: "blau",
        kartennummer: 6,
        img: "img/bla6.jpg"
    };
    Kartendeck.push(b6);
    let b7 = {
        kartenfarbe: "blau",
        kartennummer: 7,
        img: "img/bla7.jpg"
    };
    Kartendeck.push(b7);
    let b8 = {
        kartenfarbe: "blau",
        kartennummer: 8,
        img: "img/bla8.jpg"
    };
    Kartendeck.push(b8);
    Kartendeck.sort(function (a, b) { return 0.5 - Math.random(); }); //Kartendeck wird gemischt
    console.log("Kartendeck wird gemischt."); // Konsolenausgabe
}
/////////////////GAME START/////////////////////
function spielStart() {
    for (let i = 0; i < 5; i++) {
        Gegner.push(Kartendeck[0]);
        Kartendeck.splice(0, 1);
        Spieler.push(Kartendeck[0]);
        Kartendeck.splice(0, 1);
    }
    Ablage.push(Kartendeck[0]); // Karte vom Stapel auf Ablage legen
    Kartendeck.splice(0, 1);
}
function karteSpielen(klickKarte) {
    if (Spieler[klickKarte].kartenfarbe == Ablage[Ablage.length - 1].kartenfarbe || Spieler[klickKarte].kartennummer == Ablage[Ablage.length - 1].kartennummer) { //Es wird geschaut ob die Karte legbar ist(von den Spielregeln her: gleiche Farbe o. gleiche Zahl)
        Ablage.push(Spieler[klickKarte]); // Hier wird in die Ablage Array gepusht
        Spieler.splice(klickKarte, 1); // Array: Spieler-> Karte wird aus diesem Array gelöscht
        HTML();
        if (Spieler.length == 0) {
            alert("Yeah du hast den Gegner besiegt und gewonnen!!!"); //Wenn der Spieler gewinnt wird dieses Alert angezeigt, dass er gewonnen hat-       
        }
        if (Gegner.length == 0) {
            alert("Leider verloren. Spiele nochmal!!!"); //Und wenn er verliert kommt , dass er verloren hat
        }
        gegnerspielt();
    }
    console.log("Karte wurde gespielt"); //Text in Konsolenausgabe
}
function HTML() {
    document.getElementById("Spieler").innerHTML = ""; //Die Spielerkarten  wird in Html generiert
    for (let i = 0; i <= Spieler.length - 1; i++) {
        let spielerkarten = document.createElement("img");
        spielerkarten.innerHTML = "";
        spielerkarten.setAttribute("src", Spieler[i].img);
        spielerkarten.addEventListener("click", function () { karteSpielen(i); }, false);
        document.getElementById("Spieler").appendChild(spielerkarten);
    }
    document.getElementById("Kartendeck").innerHTML = ""; //Kartendeck wird Html wird generiert
    let deckKarte = document.createElement("img");
    deckKarte.setAttribute("src", "img/card.jpg");
    document.getElementById("Kartendeck").appendChild(deckKarte);
    document.getElementById("Gegner").innerHTML = ""; //Gegnerkarten HTML generiert
    for (let i = 0; i <= Gegner.length - 1; i++) {
        let gegnerkar = document.createElement("img");
        gegnerkar.innerHTML = "";
        gegnerkar.setAttribute("src", "img/card.jpg");
        document.getElementById("Gegner").appendChild(gegnerkar);
    }
    document.getElementById("Ablage").innerHTML = "";
    let ablageCard = document.createElement("img"); //Ablagestapel HTML generiert
    ablageCard.innerHTML = "";
    ablageCard.setAttribute("src", Ablage[Ablage.length - 1].img);
    document.getElementById("Ablage").appendChild(ablageCard);
}
function ziehe() {
    Spieler.push(Kartendeck[0]);
    Kartendeck.splice(0, 1);
    HTML();
    gegnerspielt();
    console.log("Karte gezogen");
}
function gegnerspielt() {
    //Der Gegner(Computer) schaut im Array der Reihe nach Karten und prüft. Stimmt die Nummer oder  Farbe mit der Karte auf dem Ablagestapel, legt der Computer die Karte ab
    let spieleyn = false;
    for (let i = 0; i < Gegner.length; i++) {
        if (Gegner[i].kartenfarbe == Ablage[Ablage.length - 1].kartenfarbe ||
            Gegner[i].kartennummer == Ablage[Ablage.length - 1].kartennummer) {
            Ablage.push(Gegner[i]);
            Gegner.splice(i, 1);
            HTML();
            spieleyn = true;
            break;
        }
    }
    if (spieleyn == false) { //Bei nicht spielen wird Karte gezogen
        Gegner.push(Kartendeck[0]);
        Kartendeck.splice(0, 1);
        HTML();
    }
} //(ง ° ل͜ °)ง                                                      
//# sourceMappingURL=tmmain.js.map