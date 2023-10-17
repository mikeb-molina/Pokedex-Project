//---!created IIFE for pokemonList
let pokemonRepository = (function () {
    let pokemonList=[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   
        function add(pokemon) {
            pokemonList.push(pokemon);
        }
        function getAll() {
            return pokemonList;
        }

        //---!create buttons for each pokemon in list
        function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            listpokemon.classList.add('list-group-item', 'mx-auto');
            button.innerText = pokemon.name;


            button.classList.add('btn', 'btn-primary', 'btn-lg');
            button.setAttribute("data-target", "#exampleModal");
            button.setAttribute("data-toggle", "modal");
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            button.addEventListener('click', () =>{
                showDetails(pokemon);
            });
        }

        function showModal(item) {
            let modalBody = $(".modal-body");
            let modalTitle = $(".modal-title");
            let modalHeader = $(".modal-header");

            // clear existing content of modal
            modalTitle.empty();
            modalBody.empty();

            // create element for name in modal content
            let nameElement = $("<h1>" + item.name + "</h1>");
            // create img in modal content
            let imageElement = $('<img class="modal-img">');
            imageElement.attr('src', item.imageUrl);
            let heightElement = $('<p>' + 'Height : ' + item.height + "</p>");
            let weightElement = $('<p>' + 'Weight : ' + item.weight + ' Decagrams' + '</p>');
            let typesElement = $('<p>' + 'Types: ' + item.types.join(', ') + '</p>');
            let abilitiesElement = $('<p>' + 'Abilities: ' + item.abilities.join(', ') + '</p>');
        

            modalTitle.append(nameElement);
            modalBody.append(imageElement);
            modalBody.append(heightElement);
            modalBody.append(weightElement);
            modalBody.append(typesElement);
            modalBody.append(abilitiesElement);
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
            });
        }
        function loadDetails(item){
            let url= item.detailsUrl;
            return fetch(url).then(function (response){
                return response.json();
            }).then(function (details){
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
                item.types = details.types.map(function (type) {
                    return type.type.name;
                });
                item.abilities = details.abilities.map(function (ability){
                    return ability.ability.name;
                });
                showModal(item);
            }).catch(function(e){
                console.error(e);
            });
        }

        //---!create function to show modal for pokemon
        function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
            showModal(pokemon);
            
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
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});    
    




    
