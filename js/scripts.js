//---!created IIFE for pokemonList
let pokemonRepository = (function () {
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
            listpokemon.classList.add('list-group-item', 'mx-auto');
            button.innerText = pokemon.name;


            button.classList.add('btn', 'btn-primary', 'btn-lg');
            button.setAttribute("data-target", "#exampleModal");
            button.setAttribute("data-toggle", "modal");
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon)
            button.addEventListener('click', () =>{
                showDetails(pokemon);
            });
        }

        function showModal(item){
            let modalBody = $(".modal-body");
            let modalTitle = $(".modal-title");
            // let modalHeader = $(".modal-header");

            // clear existing content of modal
            modalTitle.empty();
            modalBody.empty();

            // create element for name in modal content
            let nameElement = $("<h1>" + item.name + "</h1>");
            // create img in modal content
            let imageElement = $('<img class="modal-img" style="width:50%">');
            imageElement.attr("src", item.imageURL);
            let heightElement = $("<p>" + "height : " + item.height + "</p>");


            modalTitle.append(nameElement);
            modalBody.append(imageElement);
            modalBody.append(heightElement);
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
                item.types = details.types;
                showModal(item);
            }).catch(function(e){
                console.error(e);
            });
        }

        //---!create function to show modal for pokemon
        function showDetails(pokemon){
            loadDetails(pokemon).then(function(){
            showModal(pokemon.name);
            
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
    pokemonRepository.getAll().forEach(function(pokemon){;
        pokemonRepository.addListItem(pokemon);
    });
});    
    




    
//     
        //---!create event listener for action when pokemon button is clicked
        // function buttonListener(button, pokemon){
        //     button.addEventListener('click',function(){
        //         showDetails(pokemon);
        //     })
        // }



//  old code for modal
// function showModal(title, text) {
    //         let modalContainer = document.querySelector('#modal-container');
    //         modalContainer.innerHTML = '';
    //         let modal = document.createElement('div');
    //         modal.classList.add('modal');

    //         let closeButtonElement = document.createElement('button');
    //         closeButtonElement.classList.add('modal-close');
    //         closeButtonElement.innerText = 'Close';
    //         closeButtonElement.addEventListener('click', hideModal);

    //         let titleElement = document.createElement('h1');
    //         titleElement.innerText = pokemon.name;

    //         let contentElement = document.createElement('p');
    //         contentElement.innerText = pokemon.height + 'm';


    //         let imageElement = document.createElement('img');
    //         imageElement.classList.add('modal-img');
    //         imageElement.src = pokemon.imageUrl;


    //         modal.appendChild(closeButtonElement);
    //         modal.appendChild(titleElement);
    //         modal.appendChild(contentElement);
    //         modal.appendChild(imageElement);
    //         modalContainer.appendChild(modal);

    //         modalContainer.classList.add('is-visible');
    //         }

    //     function hideModal() {
    //         let modalContainer = document.querySelector('#modal-container');
    //         modalContainer.classList.remove('is-visible');
    //         }
              
    //     window.addEventListener('keydown', (e) => {
    //         let modalContainer = document.querySelector('#modal-container');
    //         if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    //             hideModal();  
    //         }
    //         });
    //     let modalContainer = document.querySelector('#modal-container');
    //     modalContainer.addEventListener('click', (e) => {
    //         // Since this is also triggered when clicking INSIDE the modal
    //         // We only want to close if the user clicks directly on the overlay
    //         let target = e.target;
    //         if (target === modalContainer) {
    //             hideModal();
    //         }
    //         });
                  

    //         document.querySelector('#show-modal').addEventListener('click', () => {
    //             showModal();
    //           });    


          
        
    // }
