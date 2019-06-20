namespace Beispielcode_92 { 

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
        specialNeed: "Elevated Fence"
    
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

            
            if(animals[i].placeOfBirth != "all")


            // Vorlesungs-If-Statements
            console.log("pre-if");
            if(getStatement() || (i < 1 && true)) 
            {
                console.log("if-statement ist wahr!");
            }
            console.log("post-if");
        }
    }
    
    checkForSpecialNeed(zoo);
    
    
    function getStatement() : boolean
    {
        if(Math.random() > 0.5)
        {
            return true;
        } 
        return false;
    }
}