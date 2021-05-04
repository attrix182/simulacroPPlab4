import { Actor } from './actor';

export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    pathFoto:string;
    actores?:Array<Actor>;

}

