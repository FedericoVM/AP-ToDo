import { Tarea } from "../types/Tareas";

const BASE_URL: string = "http://localhost:3000";

export const serviceApi = {
  traerTareas: async (): Promise<Tarea[]> => {
    const resp = await fetch(`${BASE_URL}/tasks`);
    const data = await resp.json();
    return data;
  },

  traerTarea: async (id: number): Promise<Tarea> => {
    const resp = await fetch(`${BASE_URL}/tasks/${id}`);
    const data = await resp.json();
    return data;
  },

  eliminarTarea: async (id: number ): Promise<void> => {
    await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
  },

  agregarTarea: async (nuevaTarea: Tarea): Promise<Tarea> => {
    const resp = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTarea),
    });

    const data = await resp.json();

    return data;
  },

  editarTarea: async (id:number, nuevoEstado: string): Promise<Tarea> => {
    const resp = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado:nuevoEstado
      }),
    });
    const data = await resp.json();
    return data;
  },
};
