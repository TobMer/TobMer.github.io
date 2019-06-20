// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt. 
// Testet also alle Funktionen, jeden Button welchen ihr finden könnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// ------- interfaces --------- //
// INSGESAMT EINGEBAUTE FEHLER beu den interfaces: Keine. (0 / null)

// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen





// Hier ist das Objekt
interface Monster {
    monsterName : string; // Name des Monsters
    monsterHealthPoints : number; // Lebenspunkte
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterItem :string;// String für Monster Items
    Bildpfad : string;
    monsterort: string;
}










// ------- Variablen -------- //

// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)
let saveImageSrc: string;

let monsterHolder : string = "monsterHoldingCell";                // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName : string = "Spielername";                         // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number =0;                                            // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel : number = 500;               // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.

let playerItems: string = "Gabel";//WAffe

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix : string[] = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ", "zahnloses", "lactoseintolerantes", "Sandwichmachendes", "hüpfendes" , "Fettspritzendes"]; // length = 10, da 10 Einträge. Von 0-9.
let monsterName : string[] = ["Farfalle", "Markaki", "Ungeziefer", "Muchacho", "Torbat", "Dr.Chaos"]; // length = 6, da 3 Einträge. Von 0-5.
let suffix : string[] = [" des Verderbens", " mit Rheuma", " der Redundanz", " der Zerberstung", " der Müdigkeit", " der Langeweile", " aus dem Keller", " aus Furtwangen"]; // length = 10, da hier 10 Einträge sind. Von 0-9.

let monsterModifers : string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "checkt nix", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterort : string [] = ["Hyrule", "Kakariko", "Gerudo-Stamm", "Yharnam", "Lothric", "Queelags Sphäre"];
let Items: string[] = ["Stock", "Emmentaler", "Smartphone", "Sangria ", "Zahnstocher", "Handgranate", "Pantoffel", "Börek", "O-saft"];          
//Waffen der Monster


//Bilderquellen
let  Bildquellen: string [] = ["bambi.png", "kaki.png", "taco.png", "nudel.png", "giphy.gif", "image.png"]

let PushArray: number[]=[];//Array für Push



// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.









// ----------- Funktionen ----------- //

// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)      x

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen

window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false); //Ein Event wird erstellt wenn man auf den bUtton klickt.
    updatePlayerLevel("none"); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);                                   
    document.getElementById("Arraypusher").addEventListener("click", pusher)
}





// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.


function generateMonster()
{

let Random : number = getRNGNumber(3)+1;//Diese Schleife lässt Monser bis zu 3 generieren und dann hört er auf

for (let i : number = 0;  i < Random; i++)// FOR Schleife
{

    let newMonsterName : string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterHP : number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterXP : number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier : string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.

    let newMonsterItem: string = generateMonsterItem();
    let newImageSource: string = saveImageSrc;
    let newmonsterort: string = generatemonsterort();
    console.log("MonsterXP" + newMonsterXP);


    let newMonster : Monster = {                                        // Monster wird erstellt.
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
      /*  monsterMoney : 0, Hier wurde keine Variable zugewiesen und kann daher nicht funktionieren*/ 
       monsterItem : newMonsterItem,
      Bildpfad: newImageSource,
monsterort : newmonsterort,

 
   
    };

    monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 

    console.log(monsterArray[monsterArray.length - 1].monsterExperience);                    // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).              

    //monsterGenerateHTML(0);
                     // Triggere die Generierung von updateHTML
}                                     // Triggere die Generierung von HTML
updateHTML();  
}



function monstergenerateHTMLALL()
{

    let Random : Number = monsterArray.length;
    for ( let i : number = 0; i < Random; i++) 
    {
        console.log(i);
         monsterGenerateHTML(i);
    }


}





// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count: number) {
    let holdingDiv: HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" +count);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    let monsterName: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);     
    
    //LEbensraum
    let monsterort: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterort.innerHTML = monsterArray[count].monsterort.toString();                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterort);  

    let monsterexphtml: HTMLElement = document.createElement("p");        // Generiere Erfahrung
    monsterexphtml.innerHTML = "EXP: " + monsterArray[count].monsterExperience.toString();                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterexphtml); 

    let monsterhlth: HTMLElement = document.createElement("p");        // Generiere LEBEN
    monsterhlth.innerHTML = "Health: " + monsterArray[count].monsterHealthPoints.toString();                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterhlth); 
                                        // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterMod: HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count].monsterModifier[0] + " & " + monsterArray[count].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterImg: HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[count].Bildpfad);                 // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg);                                 // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)

    let monsterItem: HTMLElement = document.createElement("p");
    monsterItem.innerHTML = "vorsicht! es/sie hat ein " + monsterArray[count].monsterItem;
    holdingDiv.appendChild(monsterItem);

    let monsterBtn: HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);                                 // Füge den Button zu dem holding-div hinzu.

    let monsterCount: number = count;                    // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function () {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);                                                      // Ignoriert das false.

        

    }




// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber: number): number {
    /*let rngNumber: number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
   // rngNumber = 0;                                                      // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.              
    return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
*/
    return Math.floor(Math.random() * _maxNumber)
}





// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName(): string {
    let generatedMonsterName: string = ""; 

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber: number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.                
    generateNewImageSource(rngNumber);

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}



// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP: number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}




// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP: number = 100 + getRNGNumber(350);
    return tempMonsterXP;
}




// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer(): string[] {
    let tempMonsterMod: string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}


function generateMonsterItem(): string {
    let tempMonsterItem: string;
    tempMonsterItem = Items[getRNGNumber(Items.length)];

    return tempMonsterItem;
}



function generateNewImageSource(MonsterName: number) {
    if (Bildquellen.length >= monsterName.length) {
        saveImageSrc = "imgs/" + Bildquellen[MonsterName];
    } else {
        saveImageSrc = "imgs/error.png";
    }

}

function generatemonsterort(): string {
    let orterstellen: string;
    orterstellen = monsterort[getRNGNumber(monsterort.length)];

    return orterstellen;
}




// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index: number) {
    console.log("Spieler kämpft gegen Monster und gewinnt!");                       // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster und alle Anderen Monster die sehen was passiert verschwinden");                       // Wird nächste Stunde erweitert.
    console.log("Du bekommst des Monsters ITEM! -> " + monsterArray[_index].monsterItem);

    playerXP += monsterArray[_index ].monsterExperience;                 	    // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.

    updatePlayerItems(monsterArray[_index ].monsterItem);
    updatePlayerLevel(monsterArray[_index ].monsterItem);
    removeMonsters(_index);
    updateHTML();

}





// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel(neuesItem: string) {
    let tempLevel: number = Math.floor(playerXP / playerXPperLevel);                                                                           // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel * (tempLevel + 1) + ")     Items: " + playerItems;       // Baue den String für die Spieler-Info zusammen          
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)    außerdem hat er ein(e) " + neuesItem + " bekommen!");        // Spieler-Level in der Konsole.
}





//fügt demn Spieler neue Items hinzu
function updatePlayerItems(neuesItem: string) {
    playerItems += ", " + neuesItem;
}





//Neue Rücken vor nachdem die anderen ausgelöscht sind
function removeMonsters(_index: number) {
    //let tempMonsterArray: Monster[] = [];
    //document.getElementById(monsterHolder).innerHTML = "";
    //monsterArray = tempMonsterArray;
    //console.log("so viel is noch im array" + monsterArray.length);

    

    let tempMonsterArray: Monster[] = [];

    let count: number = 0;

    while(count<_index-1){
        tempMonsterArray[count] = monsterArray[count];
        console.log("das Temporäre Array ist  "+tempMonsterArray[count].monsterName);
        count++;
    }
    while(count<monsterArray.length-1){
        tempMonsterArray[count] = monsterArray[count+1];
        console.log("das Temporäre Array ist  "+tempMonsterArray[count].monsterName);
        count++;
    }

    count = 1;

    monsterArray = [];
    monsterArray = tempMonsterArray;

    //while(count<=monsterArray.length){
        //monsterGenerateHTML(count);
        //count++;
    
    
}


function pusher(){
    PushArray.push(Math.random());
    console.log(PushArray);
}



function updateHTML()
{

    clearMonsterCell();
    monstergenerateHTMLALL();
    console.log(getMonsterCount());
}











function getMonsterCount(){
    //Gibt dem Rückgabewert der Monster Anzahl

return monsterArray.length 
    
}



//CLEAR MONSTER CELL Variable zuweisen




///=?????????

function clearMonsterCell(){
    //
    let monsterHoldingCell :HTMLElement = document.getElementById("monsterHoldingCell");
    
    while(monsterHoldingCell.childElementCount > 0) {
        monsterHoldingCell.removeChild(monsterHoldingCell.firstChild);
  
  }


}
