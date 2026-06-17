// Fetch - Function used for making HTTP requests to fetch resources
// (JSON style data , images , files)
// Simplifies asynchronous data fetching in JS and used for interacting with API's to retrieve 
// and send data asynchronous over the weeb
// fetch(url , {options})
// options -> methods : GET , DELETE , POST , PUT

// Direct Fetch method

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
        
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Async await method


async function fetchData() {
    try{

        const pokemonName = document.getElementById(`pokemonName`).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite`);

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const h1Element = document.getElementById(`pokeName`);
        h1Element.textContent = pokemonName.toUpperCase();
    }

    catch(error){
        console.error(error);
    }
}