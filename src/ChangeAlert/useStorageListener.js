import React from "react";

function useStorageListener(sincronize,setOpenModal){
    const[storageChange,setStorageChange]=React.useState(false);

    window.addEventListener('storage',(change)=>{
        if(change.key==='TODOS_V1'){
            setStorageChange(true);
                setOpenModal(true);
        }
    })
        
    const toggleShow=()=>{
        sincronize()
        setStorageChange(false);
    }

    return {
        show:storageChange,
        toggleShow,
    }
    }

export {useStorageListener}