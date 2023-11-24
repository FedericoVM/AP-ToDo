type Estados  = "Por hacer" | "En producción" | "Por testear" | "Completada"

export interface Tarea  {
    id?:number;
    descripcion:string;
    imagen:string;
    responsable:string;
    titulo:string;
    tiempo:number;
    estado:Estados;
}