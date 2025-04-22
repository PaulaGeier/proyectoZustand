// import { useEffect } from "react"
// import { getAllTareas } from "../../http/tarea"

import {Header} from "../ui/Header/Header"
import { ListTareas } from "../ui/ListTareas/ListTareas"

export const TareasScreen=()=>
{
    // VERIFICACION QUE ESTE FUNCIONANDO CORRECTAMENTE
    // const getTareas=async()=>{
    //     const result=await getAllTareas()
    //     console.log(result);
        
    //     return result 
    // }
    // useEffect(()=>{
    //     getTareas();
    // },[])
    return(
        <div>
            <Header />
            <ListTareas/>
            
        </div>
    ) 
}