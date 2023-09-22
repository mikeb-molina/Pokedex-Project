// created IIFE for pokemonList
let poekmonRepository = (function () {
    let pokemonList=[];
   
        function add(pokemon) {
            pokemonList.push(pokemon);
        };
        function getAll() {
            return pokemonList;
        };
        return{
            add: add,
            getAll: getAll
        };
})();

// Define information for Pokemon List
poekmonRepository.add({name: 'Bulbasaur', type:['Grass', ' Poison'], height: '0.7 Meters'});
poekmonRepository.add({name: 'Sandshrew', type: 'Ground', height: '0.6 Meters'});
poekmonRepository.add({name: 'Cubone', type: 'Ground', height: '0.4 Meters'});

// Write Pokemon information on DOM
poekmonRepository.getAll().forEach(function(pokemonList){;
    document.write(`${pokemonList.name}: ${pokemonList.type}, ${pokemonList.height} <br>`);

    // Define threshhold height for pokemon
    let thresholdHeight = '0.7';

    // Check for threshhold height among pokemon
    if (pokemonList.height >= thresholdHeight){
        document.write (`- Wow that\s big! <br>`);
    };
});
    
    
