
let pokemonId = Number(window.prompt("Introduce el ID de un Pokemon"));
const url1 = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId;

//Este fetch es solo para la imagen
fetch(url1)
.then(response => response.json())
.then(pokemon1 => {
  let element = document.getElementById('imagenPokemon')
  element.innerHTML = 
  `<img src='${pokemon1.sprites.front_default}'>`;
})
.catch(err=>console.log(err))
//Este fetch es solo para los datos
fetch(url1)
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('datosPokemon')
  element2.innerHTML = `<h4>Name :${pokemon2.name}<br>
  Number: ${pokemon2.id}<br>
  Kind: ${pokemon2.types[0].type.name}<br>
   Nature: ${pokemon2.types[1].type.name}<br>
  `;
  console.log(pokemon2)
})
.catch(err=>console.log(err))



// fetch(url3)
// .then(response => response.json())
// .then(pokemon2 => {
//   let element2 = document.getElementById('elemento3')
//   element2.innerHTML = `<p>${pokemon2.name}<p>
//   <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
//   console.log(pokemon2)
// })
// .catch(err=>console.log(err))


