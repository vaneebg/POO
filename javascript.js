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