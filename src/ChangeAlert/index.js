import React from "react";
import './ChangeAlert.css'
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show,toggleShow,setOpenModal}){
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}