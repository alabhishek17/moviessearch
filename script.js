const searchInput=document.getElementById("search");
const moveContainer=document.getElementById("move-container");

let API_key=`ac582417`;
let BASE_URL=`http://www.omdbapi.com/?i=tt3896198&apikey=${API_key}`



const debounce=(fn, delay)=>{
    let timer; //closure variable is undefind
    return function (){
        timer && clearTimeout(timer);
        // if time is not defind set it run the function after delay
    
        timer=setTimeout(()=>{
            fn();
        },delay);
    }

};

async function featchMovies(){
    let response=await fetch(`${BASE_URL}&s=${searchInput.value}`)
    let movies=await response.json();
    // console.log(movies);

    const { Response,Search}=movies;     //movies are passing in array method through search
    Response==="False" ? responseIsFalse() : displayMoviesContainer(Search);   //responseIsFalse is function and this mathod is ternery operation
    // const card=document.createElement("div");
    // card.className="movie-card";
    // card.innerHTML=`
    // <img src="Poster" alt="img">
    

    // `
    // return card;
    // moveContainer.append(card);
console.log(movies);
}

// featchMovies();

const debounceFunction=debounce(featchMovies,1000);

searchInput.addEventListener("input",debounceFunction);

//helper function
function displayMoviesContainer(Search){
moveContainer.innerHTML="";
Search.forEach((element) => {
    const card=document.createElement("div");
    card.className="movie-card";
    card.innerHTML=`
    <img src="${element.Poster}" alt="${element.Title}"/>
    <p>${element.Title}</p>
    <p>${element.Year}</p>
    `;
    
    moveContainer.append(card);

})
}
function responseIsFalse(){
    moveContainer.innerHTML=`<h1>no movies found for this name"${searchInput.value}"</h1>`;
}