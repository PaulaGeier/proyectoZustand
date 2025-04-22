import { FC } from "react"
import { ITarea } from "../../../types/ITarea"
import styles from "./CardList.module.css"
import { useTareas } from "../../../hooks/useTareas";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

type ICardList={
    tarea:ITarea;
    handleOpenModalEdit:(tarea:ITarea)=>void;
}
export const CardList:FC<ICardList>  = ({tarea,handleOpenModalEdit}) => {

    const {eliminarTarea}=useTareas()
    const eliminarTareaById=()=>{
        eliminarTarea(tarea.id!);
    };
    const editarTarea=()=>{
        handleOpenModalEdit(tarea);
    };

    return (
    <div className={styles.containerCardList}>
        <div>
        <h3 style={{color:'#1F2937'}}>Titulo:{tarea.titulo}</h3>
        <p style={{color:'	#6B7280'}}>Descripcion:{tarea.descripcion}</p>
        <p>
            <b style={{color:'	#6B7280'}}>Fecha Limite:{tarea.fechaLimite}</b>
        </p>
        </div>
        <div className={styles.actionCard}>  
            <button onClick={eliminarTareaById} style={{backgroundColor:'#e74c3c'}}><MdDelete /></button>
            <button onClick={editarTarea} ><FaPen />
            </button>
        </div>
    </div>
)
}

