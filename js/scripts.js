let pokemonList=[
    {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        height: '0.7',
        hp: '45'

    },
    {
        name: 'Sandshrew',
        type: 'Ground',
        height: '0.6',
        hp: '50'
    },
    {
        name: 'Cubone',
        type: 'Ground',
        height: '0.4',
        hp: '50'
    }
];


// Iterate each pokemon in array
for (let i = 0; i < pokemonList.length; i++){
    //grab name and height of each pokemon in array
    console.log (pokemonName = pokemonList[i].name);
    console.log (pokemonHeight = pokemonList[i].height);
    
    //define threshhold height for pokemon
    let threshholdHeight = '0.7';

    //check for threshhold height among pokemon
    if (pokemonList.height[i] === threshholdHeight){
        console.log (pokemonHeight[i] + '- Wow that\'s big!');
    }
    //write pokemon name and height on DOM
    document.write(`${pokemonName} (height: ${pokemonHeight})<br>`);
}