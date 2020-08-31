const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', function(){

    document.addEventListener('click', function(e){
        let bttn = e.target 
        if(e.target.innerText === "Add Pokemon"){
            let trainer = bttn.dataset.trainerId
                addPokemon(trainer)
        }
        else if (bttn.className === 'release'){
            console.log('release clikced')
            let deleted = bttn.dataset.pokemonId

            console.dir(bttn)
            // let deletedP = bttn.dataset.trainerId
            deletePokemon(deleted)
        }

    }) // end of clicke listener 

    function deletePokemon(pokemon){
    let configObj = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: {}
    }
   

    fetch(`http://localhost:3000/pokemons/${pokemon}`, configObj)
    .then(response => response.json())
    .then(console.log)


    } // end of delete pokemon 

function addPokemon(trainer){
    console.log(trainer)
    
   let configObj = {
       
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({trainer_id: trainer})
   }

    fetch('http://localhost:3000/pokemons', configObj)
    .then(response => response.json())
    .then(console.log)
}


    let cardContainer = document.querySelector('main')

    function renderCards(tData){
        for (let t of tData){
            renderTrainer(t)
        }
    } //end of renderCards

    function renderTrainer(t){
        let newCard = document.createElement('div')
        newCard.setAttribute('id', t.id)
        newCard.innerHTML = `<p>${t.name}</p>
        <button data-trainer-id=${t.id}>Add Pokemon</button>
        <ul></ul>`
        cardContainer.append(newCard)
        let card = document.getElementById(`${t.id}`).lastChild 
        addTeam(card, t.pokemons)
    } //end of renderCard

    function addTeam(card, array){   
        for (let p of array){
            let li = document.createElement('li')
           
        li.innerHTML=`${p.nickname} (${p.species}) <button class="release" data-pokemon-id=${p.id}>Release</button>`
        card.append(li)
        }
    } // end of pokemon iteration 

    function pullTrainers(){
        fetch('http://localhost:3000/trainers')
        .then(response => response.json())
        .then(data => renderCards(data))
    } // end of pullTrainers GET fetch

    
   








pullTrainers()
})// end of COM Content Loaded