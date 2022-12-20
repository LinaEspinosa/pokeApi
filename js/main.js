console.log('mensaje') 

document.addEventListener('DOMContentLoaded', () => {
    const  random = getRandomInt(1, 151)
    obtenerPokemons(random)
})

    const getRandomInt = (min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
    }

const obtenerPokemons = async(id) => {
    try{
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        console.log(data);
        
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat
        }
        pintarCard(pokemon)
    }catch (error){
        console.log(error)
    }
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-img').setAttribute('src', pokemon.img)
    clone.querySelector('.name').innerHTML = `${pokemon.nombre} <span>${pokemon.hp} hp</span>`
    clone.querySelector('.card-body-text').textContent = `${pokemon.experiencia} Exp`
    clone.querySelectorAll('.followers h3')[0].textContent = pokemon.ataque
    clone.querySelectorAll('.followers h3')[1].innerHTML = pokemon.defensa
    clone.querySelectorAll('.followers h3')[2].textContent = pokemon.especial

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}
