//---!created IIFE for pokemonList
let poekmonRepository = (function () {
    let pokemonList=[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
        function add(pokemon) {
            pokemonList.push(pokemon);
        };
        function getAll() {
            return pokemonList;
        };
        //---!create buttons for each pokemon in list
        function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon)
            button.addEventListener('click', () =>{
                showDetails(pokemon);
            });
        }
        //---!create function to show modal for pokemon
        function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
            console.log(pokemon.name);

            });

         function showModal(title, text) {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.innerHTML = '';
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';

            let titleElement = document.createElement('h1');
            titleElement.innerText = title;

            let contentElement = document.createElement('p');
            contentElement.innerText = text;

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');
            }
              
            document.querySelector('#show-modal').addEventListener('click', () => {
                showModal();
              });    


          
        
    }
        //---!create event listener for action when pokemon button is clicked
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
    
    
