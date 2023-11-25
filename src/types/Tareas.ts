type Estado  = "Por hacer" | "En producción" | "Por testear" | "Completada"

export interface Tarea  {
    id:number | undefined;
    descripcion:string;
    imagen:string;
    responsable:string;
    titulo:string;
    tiempo:number;
    estado:Estado;
}