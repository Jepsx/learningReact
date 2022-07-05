import React from "react";
import './ChangeAlert.css'
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({sincronize,setOpenModal}){
    
    const {show,toggleShow} = useStorageListener(sincronize,setOpenModal)
    if(show){
        return (
            <div id='refresh-div'>
                <p>Hubó cambios</p>
                <button
                onClick={()=>{toggleShow(false)
                setOpenModal(false)}}
                >
                    Recargar
                </button>
            </div>
        )
    }else{
        return null;
    }
   
}

export {ChangeAlert}