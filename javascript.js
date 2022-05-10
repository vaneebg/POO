// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        return `Eres ${this.nombre}, tu edad es ${this.edad} y tu género ${this.genero}`;
    }
}

let persona1 = new Persona("Pepito", 17, "masculino");
console.log(persona1.obtDetalles())

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;

    }
    registrar() {
        return `Eres ${this.nombre}, tu edad es ${this.edad} y tu género ${this.genero}. Vas al curso ${this.curso} y tu grupo es ${this.grupo}`
    }
};
let estudiante1 = new Estudiante("Maria", 20, "femenino", "2ºESO", "B")
console.log(estudiante1.registrar())

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;

    }
    asignar() {
        return `Eres ${this.nombre}, tu edad es ${this.edad} y tu género ${this.genero}. Eres profesor de ${this.asignatura} y tu nivel es ${this.nivel}`
    }
};
let profesor1 = new Profesor("Marcos", 40, "masculino", "Historia", "Universidad")
console.log(profesor1.asignar())

// EXTRAS
// Construye las siguientes clases:
console.log("EXTRAS")
    // Warrior:
    // constructor(life, power): Establece el valor de las propiedades life y power
    // attack: Devuelve el valor de power del guerrero
    // defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;

    }
    attack() {
        return `Tu poder es ${this.power}`;
    }
    defend(damage) {
        return `Tu vida restante es ${this.life-damage}`;
    }
}

let warrior1 = new Warrior(160, 70);
console.log(warrior1.attack())
console.log(warrior1.defend(100));

// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.
class Maya extends Warrior {
    constructor(life, power, magic) {
        super(life, power)
        this.magic = magic;

    }
    drinkColaCao() {
        return `Tu poder maya es ${this.power+10}`;
    }

}

let maya1 = new Maya(160, 70, "water");
// console.log(maya1.drinkColaCao())


// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.
class Aztec extends Warrior {
    constructor(life, power, shell) {
        super(life, power)
        this.shell = shell;

    }
    drinkNesquik() {
        return `Tu vida azteca es ${this.life+10}`;
    }

}

let aztec1 = new Aztec(160, 70, "steel");
// console.log(aztec1.drinkNesquik())

// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik
console.log(aztec1.drinkNesquik())
    // Maya bebe Cola Cao
console.log(maya1.drinkColaCao())
    // Maya ataca a azteca. Azteca defiende.
console.log("atacando", maya1.attack(aztec1))
console.log("defendiendo", aztec1.defend(aztec1.life - maya1.power))
    // Azteca ataca a maya. Maya defiende.
console.log("atacando", aztec1.attack(maya1))
console.log("defendiendo", maya1.defend(maya1.life - aztec1.power))