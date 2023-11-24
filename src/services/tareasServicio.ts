import { Tarea } from "../types/Tareas";

const BASE_URL: string = "http://localhost:3000";

export const traerTareas = async (): Promise<Tarea[]> => {
    const resp = await fetch(`${BASE_URL}/tasks`);
    const data = await resp.json();
    return data;
};

export const traerTarea = async (id: string): Promise<Tarea> => {
    const resp = await fetch(`${BASE_URL}/tasks/${id}`);
    const data = await resp.json();
    return data;
};

export const eliminarTarea = async (id: string): Promise<void> => {
    await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
};

export const agregarTarea = async (nuevaTarea: Tarea): Promise<Tarea> => {
    const resp = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify(nuevaTarea)

    });

    const data = await resp.json();

    return data;
};


export const editarTarea = async (id:string,tareaAct :Tarea) => {
    const resp = await fetch(`${BASE_URL}/tasks/${id}`, {
        method:"PUT",
        headers: {
            "content-type":"application/JSON"
        },
        body:JSON.stringify(tareaAct)

    })
    const data = await resp.json();
    return data;
}