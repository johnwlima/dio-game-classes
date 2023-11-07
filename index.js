class Hero {
    // propriedades
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    // métodos
    toAttack() {
        let attackType = ""; // Inicializa a variável attackType

        switch (this.type) {
            case "mago":
                attackType = "magia";
                break;
            case "guerreiro":
                attackType = "espada";
                break;
            case "monge":
                attackType = "artes marciais";
                break;
            case "ninja":
                attackType = "shuriken";
                break;
            default:
                attackType = "soco";
        }

        console.log(`O ${this.type} ${this.name} atacou usando ${attackType}`);
    }
}

let hero = new Hero("Alef", 23, "ninja");
hero.toAttack();
