import axios from "axios";
import { ITarea } from "../types/ITarea";

//La idea es implementar axios en diferentes funciones las cuales consuman el json server
const API_URL="http://localhost:3000/tareas";

export const getAllTareas=async()=>{
    try{
        const response=await axios.get<ITarea[]>(API_URL)
        return response.data;
    }catch(error){
        console.log(error);
        
    }
}

export const postNuevaTarea=async(nuevaTarea:ITarea)=>{
    try{
        const response=await axios.post<ITarea[]>(API_URL,{
            ...nuevaTarea,
        })
        return response.data;
    }catch(error){
        console.log(error);
        
    }
}

export const editarTarea=async(tareaActualizada:ITarea)=>{
    try{
        const response=await axios.put<ITarea>(
            `${API_URL}/${tareaActualizada.id}`,
            {
            ...tareaActualizada,
            }
        )
        return response.data;
    }catch(error){
        console.log(error);
        
    }
}

export const eliminarTareaPorID=async(idTarea:string)=>{
    try{
        const response=await axios.delete<ITarea>(`${API_URL}/${idTarea}`,)
        return response.data;
    }catch(error){
        console.log(error);
        
    }
}