import React from "react";

function useLocalStorage(itemName,initialValue){
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
        }catch(error){
          setError(error);
        }
      },3000);
    })
  
   
    
    
    const saveItem = (newItem)=>{
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
  
      }catch(error){
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
  }
  
  }

  export {useLocalStorage}