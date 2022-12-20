
//strings template
const numero = num1 => `${5+ num1}`

const resultado = numero(20);
console.log(resultado)

//objetos

const web = {
    nombre: 'bluuweb',
    links:{
        enlace: 'www.bluuweb.cl'
    },
    redes:{
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'

        }
    }

}

const enlaceYT = (web.redes.youtube.enlace)
console.log(enlaceYT)

//DESTRUCTURING se puede crear variables de forma rapida y al mismo tiempo const{enlace, nombre}

const {enlace, nombre} = (web.redes.youtube)

console.log(enlace)
console.log(nombre)

fetch ('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    }
        )

        //FETCH
fetch ('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        // console.log(data.results)
        let arrayNames = []
        data.results.forEach(element => {
            // console.log(element.name);
            arrayNames.push(element.name)
        });
        // console.log(arrayNames);
    })
    .catch(error => console.log(error))


//ASYNC AWAIT(funciona siempre y cuando este dentro de funcion async)

const obtenerPokemons = async() => {
    try{
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()

        const arrayNombres = data.results.map(pokemon => pokemon.name)
        console.log(arrayNombres)
    }catch(error){
        console.log(error)
    }
}
obtenerPokemons()

//ARRAY PROTOTYPE MAP

// 

const numeros  = [20, 10, 5, 3]

numeros.forEach(numero => console.log(numero))