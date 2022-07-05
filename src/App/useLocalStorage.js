import React from "react";

function useLocalStorage(itemName,initialValue){
    const [sincronizedItem,setSincronizedItem]= React.useState(true);
    const [error,setError]= React.useState(false);
    const [loading,setLoading]= React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
  
          const localStorageItem = localStorage.getItem(itemName);
          let paserItem;
          
          
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            paserItem=initialValue;
          }else{
            paserItem=JSON.parse(localStorageItem);
          }
    
          saveItem(paserItem);
          setLoading(false);
          setSincronizedItem(true);
        }catch(error){
          setError(error);
        }
      },3000);
    }, [sincronizedItem]);
  
   
    
    
    const saveItem = (newItem)=>{
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
  
      }catch(error){
        setError(error);
      }
    }

    const sincronizeItem=()=>{
      setLoading(true);
      setSincronizedItem(false);
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
  }
  
  }

  export {useLocalStorage}