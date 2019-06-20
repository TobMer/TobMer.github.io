namespace Beispielcode_96 { 

     // Objekt
    interface Animal {
        
        name: string;
        age: number;
        food: string [];
        placeOfBirth: string;
        currentLocation: string;
        specialNeed: string;   // neue Eigenschaft
        
    }
    
    // Objekte  initialisieren
    var penguin: Animal = {
        
        name: "Pingu",
        age: 2,
        food: ["Seelachs","Dorade","Red Snapper"],
        placeOfBirth: "Südpol",
        currentLocation: "Hamburg",
        specialNeed: "Iced Pool"
        
    
    }
    
    var lion: Animal = {
            
        name: "Leon",
        age: 14,
        food: ["Antilopen", "Gazellen", "Zebras", "Gnus"],
        placeOfBirth: "Afrika",
        currentLocation: "Stuttgart",
        specialNeed: ""
    
    }
    
    var elephant: Animal = {
            
        name: "Ele",
        age: 28,
        food: ["Gras", "Früchte", "Zweige", "Rinde"],
        placeOfBirth: "Afrika",
        currentLocation: "München",
        specialNeed: ""        
    
    }
    
    
    // Objekte in ein Array schreiben
    var zoo: Animal [] = [penguin,lion,elephant]; 
    
    function checkForSpecialNeed(animals:Animal[]){
        
        // Durchlauf des Arrays
        for (var i: number = 0; i < animals.length; i++){ 
        
            // Konditionale Abfrage – falls erfüllt, wird der Codeblock ausgeführt
            if (animals[i].specialNeed == "Iced Pool"){ 
            
                console.log(animals[i].name + " benötigt dringend eine gekühlten Pool");
                               
            } else { // Alternative für alle anderen Fälle
                
                console.log(animals[i].name + " hat keine besonderen Ansprüche.");    
                
            }
        
        }
    }
    
    checkForSpecialNeed(zoo);
    
    
    
}