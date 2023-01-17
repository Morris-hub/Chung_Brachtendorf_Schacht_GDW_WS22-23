
const readline = require('readline');
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function request(titel=searchfor()){

const https = require('node:https');

const HOSTNAME = 'https://api.themoviedb.org/3/search/multi?'
const API_KEY = 'api_key=75838512c16c0a58994621ef0e821d86&query=';
const SEARCH = titel;
const QUERY = '&language=en-US&page=1&include_adult=false'
const REQUEST = HOSTNAME+API_KEY+SEARCH+QUERY;

https.get(REQUEST, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    console.log('d');
console.log(d);
    return d;//Json


  });

}).on('error', (e) => {
  console.error(e);
});

}

function searchfor(){
    rline.question('What movie do you want ?', answer => {
    console.log("answer");
    console.log(answer); //Druck eingabe aus

        var data = request(answer);  //Daten als Json gespeichert
       console.log(data.results[0]);
      // Filter(data);

    });
}


function Filter(data)
{
//Das zum Beispiel nur Film Titel rauskommen


}
searchfor();




