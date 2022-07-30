//siempre va el document o puede ir otro ejm divNd.createElement("div") - line 27
let numPokemon = 1;
const pokemons__divNd = document.querySelector('[class="main"]');

create__pokemons();

async function create__pokemons(){
   while(numPokemon<152) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}/`);
      const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${numPokemon}/`); // const res2, se puede añadir otro fetch dentro del async para hacer la 2nd ruta y añadirlo como otro parámetro más en tu función
      const pokemon = await res.json();
      const descripcion = await res2.json();
      mostrarPokemons(pokemon,descripcion);
      numPokemon++;
   }
}

const mostrarPokemons = (pokemon, descripcion) =>{
   // console.log(pokemon); Llamar el console antes de usarla para ver que pasa
   // Crear variables y elementos
   const h1Nd = document.createElement("h1");
   const imgNd = document.createElement("img");
   const pNd = document.createElement("p");
   const tNd = document.createElement("h2");
   
   const divNd__flip_card = document.createElement("div");
   const divNd__flip__card__inner = document.createElement("div");
   const divNd__flip__card__front = document.createElement("div");
   const divNd__flip__card__back = document.createElement("div");

   // Front - contenido
   h1Nd.innerHTML = `${pokemon.name}`;
   imgNd.src = pokemon.sprites.other[`official-artwork`].front_default;
   imgNd.setAttribute("width","200px");
   // Back - contenido
   tNd.textContent = `Descripción`;
   pNd.textContent = `${descripcion.flavor_text_entries[26].flavor_text}`;

   //Crear las clases para llamarlas en css
   divNd__flip__card__front.classList.add("flip-card-front");
   divNd__flip__card__back.classList.add("flip-card-back");
   divNd__flip__card__inner.classList.add("flip-card-inner");
   divNd__flip_card.classList.add("flip-card");
   pNd.classList.add("pNd");

   //Añadirlas donde correspondan
   divNd__flip__card__front.appendChild(h1Nd);
   divNd__flip__card__front.appendChild(imgNd);
   divNd__flip__card__back.appendChild(tNd);
   divNd__flip__card__back.appendChild(pNd);

   divNd__flip__card__inner.appendChild(divNd__flip__card__front);
   divNd__flip__card__inner.appendChild(divNd__flip__card__back);
   divNd__flip_card.appendChild(divNd__flip__card__inner);

   pokemons__divNd.appendChild(divNd__flip_card);
}