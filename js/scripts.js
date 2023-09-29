// created IIFE for pokemonList
let poekmonRepository = (function () {
    let pokemonList=[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
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
            loadDetails(pokemon).then(function(){
            console.log(pokemon.name);
        });
    }
        //create event listener for action when pokemon button is clicked
        function buttonListener(button, pokemon){
            button.addEventListener('click',function(){
                showDetails(pokemon);
            })
        }

        function loadList(){
            return fetch(apiUrl).then(function (response){
                return response.json();
            }).then(function(json){
                json.results.forEach(function(item){
                    let pokemon= {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            }).catch(function(e){
                console.error(e);
            })
        }
        function loadDetails(item){
            let url=item.detailsUrl;
            return fetch(url).then(function (response){
                return response.json();
            }).then(function (details){
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function(e){
                console.error(e);
            });
        }
        return{
            add: add,
            getAll: getAll,
            loadList: loadList,
            loadDetails: loadDetails,
            addListItem: addListItem
        };
})();



// Write Pokemon information on DOM
poekmonRepository.loadList().then(function(){
    poekmonRepository.getAll().forEach(function(pokemon){;
        poekmonRepository.addListItem(pokemon);
    });
});    
    
    
