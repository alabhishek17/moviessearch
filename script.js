const search=document.getElementById("search");
const moveContainer=document.getElementById("move-container");

let BASE_URL=`http://www.omdbapi.com/?i=tt3896198&apikey=ac582417`
let API_key=" ac582417"
async function featchMovies(){
    let response=await fetch(`${BASE_URL}&s=${search.value}`)
    let movies=await response.json();
    console.log(movies);

    const card=document.createElement("div");
    card.className="movie-card";
    card.innerHTML=`
    <img src="Poster" alt="img">
    

    `
    return card;
    moveContainer.innerHTML=card;

}

featchMovies();
search.addEventListener("input",featchMovies);