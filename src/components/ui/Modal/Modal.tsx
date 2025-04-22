import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { tareaStore } from "../../../store/tareaStore"
import styles from "./Modal.module.css"
import { ITarea } from "../../../types/ITarea";
import { useTareas } from "../../../hooks/useTareas";


type IModal={
    handleCloseModal:VoidFunction;
}
const inicialState:ITarea={
    titulo:"",
    descripcion:"",
    fechaLimite:"",
}

export const Modal : FC<IModal>= ({handleCloseModal}) => {
    const tareaActiva=tareaStore((state)=> state.tareaActiva);
    const setTareaActiva=tareaStore((state)=>state.setTareaActiva )
    const {crearTarea,putTareaEditar}=useTareas();
    const [formValues,setFormValues]=useState<ITarea>(inicialState);

    useEffect(()=>{
        if(tareaActiva) setFormValues(tareaActiva);
    },[])
    
    const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const {name,value}=e.target;
        setFormValues((prev)=>({...prev,[`${name}`]:value}))
    }
    
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        if(tareaActiva){
            putTareaEditar(formValues)
        }else{
            crearTarea({...formValues, id:new Date().toDateString()})
        }
        setTareaActiva(null);
        handleCloseModal();

        
    }

    return (
    <div className={styles.containerPrincipalModal
    }>
        <div className={styles.contentPopUp}>
        <div>
            <h3>{tareaActiva? "Editar tarea" : "Crear Tarea"}</h3>
        </div>

        <form onSubmit={handleSubmit} className={styles.formContent}>
            <input 
                placeholder="Ingrese titulo" type="text" 
                required 
                onChange={handleChange}
                value={formValues.titulo}
                autoComplete="off" 
                name="titulo"
            />
            <textarea 
                placeholder="Ingrese una descripción" 
                required 
                onChange={handleChange}
                value={formValues.descripcion}
                name="descripcion">
            </textarea>
            <input 
                type="date" 
                required 
                onChange={handleChange}
                value={formValues.fechaLimite}
                autoComplete="off" name="fechaLimite"
            />
        <div className={styles.buttonCard}>
            <button onClick={handleCloseModal} style={{backgroundColor:'#e74c3c'}}>Cancelar</button>
            <button type="submit" style={{backgroundColor:'#60A5FA'}}>
                {tareaActiva ? "Editar tarea" : "Crear Tarea"}
            </button>
        </div>
        </form>

        </div>
    </div>

    )
}
