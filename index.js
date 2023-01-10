//Filmbewertungen
console.log("Film Bewertungen")

const MaxStarReview = 5
var currentReview = 0
var summe = 0.0
var bewertungen = []
var countReviews = 0
var avg = 0.0

const logger = function(message){
           console.log(message);
           };

function Bewertung(id, name, rating, ratingText) {
this.id = id;
this.name = name;
this.rating = rating;
this.ratingText = ratingText;
};

let b1 = new Bewertung(1, "Avatar 2", 5, "Super Sache");
let b2 = new Bewertung(2, "Top Gun: Maverick", 3, "Mittelmäßig");
bewertungen.push(b1)
bewertungen.push(b2)
var länge = bewertungen.length

function getSumme(){
        for(let i = 0; i < länge; i++){
            summe += bewertungen[i].rating

        }
return summe;
}
getSumme();

function doMaths(länge) {

        for (let i = 0; i < länge; i++){
            countReviews++
            avg = summe/länge;

        }
return avg
}



// Ausgabe auf Konsole
for(i = 0; i < bewertungen.length; i++){
    logger(`Abgegebene Bewertung: ${bewertungen[i].rating} `);
    logger(`Name des Films: ${bewertungen[i].name} `);
    logger(`Bewertungstext: ${bewertungen[i].ratingText} \n`);
}

    logger(`Statistiken: `);
    logger(`Anzahl aller Bewertungen: ${bewertungen.length} `);
    logger(`Durchschnitt: ${doMaths(bewertungen.length)}`);































