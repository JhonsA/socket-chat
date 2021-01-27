
class Usuarios {

    constructor(){

        this.personas  = []; // Personas que estan conectadas al chat

    }

    agregarPersona( id, nombre, sala ) {

        let persona = {
            id,
            nombre,
            sala
        };

        this.personas.push(persona);

        return this.personas;

    }

    getPersona( id ) {

        let persona = this.personas.filter( persona => {
            return persona.id === id
        })[0]; // Devuelve un arreglo por lo cual yo quiero el primer argumento

        return persona;

    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala( sala ) {
        let personasEnSala = this.personas.filter( persona => {
            return persona.sala === sala
        });

        return personasEnSala;
    }

    borrarPersona( id ) {

        let personaBorrada = this.getPersona( id );

        this.personas = this.personas.filter( persona => {
            return persona.id != id;
        });

        return personaBorrada;

    }


}

module.exports = {
    Usuarios
}