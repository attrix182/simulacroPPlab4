export class Pelicula {
    id:number;
    titulo:string;
    genero:string;
    public constructor(titulo:string,genero:string,id:number)
    {
        this.id=id;
        this.titulo=titulo;
        this.genero=genero;
    }
}

