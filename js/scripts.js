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

//define speacial height for pokemon
    specialHeight = 0.7;

// Iterate each pokemon in array
for (let i = 0; i < pokemonList.length; i++){
    //grab name and height of each pokemon in array
    console.log (pokemonName = pokemonList[i].name);
    console.log (pokemonHeight = pokemonList[i].height);

    //create variable to store label
    let label= ' ';

    //check for special height among pokemon
    if (pokemonHeight > specialHeight) {
        label = "- Wow that's a big pokemon!"
    }

    document.write(`$pokemonName} (height: ${pokemonHeight}${label})<br>`);
}