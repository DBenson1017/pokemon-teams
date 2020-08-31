const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', function(){

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
            console.log(array)
        card.innerHTML=`<li>${p.nickname} (${p.species}) <button class="release" data-pokemon-id=${p.id}>Release</button></li>`
        }
    } // end of pokemon iteration 

    function pullTrainers(){
        fetch('http://localhost:3000/trainers')
        .then(response => response.json())
        .then(data => renderCards(data))
    } // end of pullTrainers GET fetch

    
    fetch('http://localhost:3000/trainers')
        .then(response => response.json())
        .then(console.log())




// GET fetch for pokemon     
// fetch('http://localhost:3000/pokemons')
//     .then(response => response.json())
//     .then(console.log)



pullTrainers()
})// end of COM Content Loaded