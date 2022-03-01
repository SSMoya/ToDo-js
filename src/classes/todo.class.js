export class Todo { // Objetos a meter en el array

    constructor (tarea) {

        this.tarea          = tarea;
        this.id             = new Date().getTime();
        this.completado     = false;
        this.creado         = new Date();

    }

}