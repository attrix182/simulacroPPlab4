export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    pathFoto:string;


    public constructor(id:number, nombre:string,tipo:string, fechaEstreno:string, cantidadPublico:number,  pathFoto:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaEstreno= fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.pathFoto = pathFoto;

    }
}

