// created IIFE for pokemonList
let poekmonRepository = (function () {
    let pokemonList=[];
   
        function add(pokemon) {
            pokemonList.push(pokemon);
        };
        function getAll() {
            return pokemonList;
        };
        //create buttons for each pokemon in list
        function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon)
            buttonListener(button, pokemon);
        }
        //create function to show more detail for pokemon
        function showDetails(pokemon){
            console.log(pokemon.name);
        }
        //create event listener for action when pokemon button is clicked
        function buttonListener(button, pokemon){
            button.addEventListener('click',function(){
                showDetails(pokemon);
            })
        }
        return{
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };
})();

// Define information for Pokemon List
poekmonRepository.add({name: 'Bulbasaur', type:['Grass', ' Poison'], height: '0.7 Meters'});
poekmonRepository.add({name: 'Sandshrew', type: 'Ground', height: '0.6 Meters'});
poekmonRepository.add({name: 'Cubone', type: 'Ground', height: '0.4 Meters'});

// Write Pokemon information on DOM
poekmonRepository.getAll().forEach(function(pokemon){;
    poekmonRepository.addListItem(pokemon);
});
    
    
