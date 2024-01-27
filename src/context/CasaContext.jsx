import { createContext, useState, useContext, useEffect } from "react";
import casas from "../data/casas"


const CasaContext = createContext();

export function CasaProvider({children}){
  const [data, setData] = useState([])
  useEffect(() => {
    const reversed = [...casas].reverse()
    setData(reversed)
  }, [])


  return (
    <CasaContext.Provider value={{ data, setData }}>
      {children}
    </CasaContext.Provider>
  );
};

export function useCasa(){
   return useContext(CasaContext);
}