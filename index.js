//Objetivo:
// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

let name;
let age;
let atackType;

toAtack("ninja");

// função atacar
function toAtack(type) {

    switch(type) {

        case type = "mago":
            atackType = "magia"
            break
        case type = "guerreiro":
            atackType = "espada"
            break
        case type = "monge":
            atackType = "artes marciais"
            break
        case type = "ninja":
            atackType = "shuriken"
            break
        default:
            atackType = "soco"
    }

    return console.log(`o ${type} atacou usando ${atackType}`)
}


