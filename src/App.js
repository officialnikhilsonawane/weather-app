import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const KEY = "60334686372a4c1dbb2153019230610"
const DataContext = createContext()

function App() {

  const [data, setData] = useState(null)
  const [query, setQuery] = useState("")

  useEffect(function(){

    const controller = new AbortController()
    async function getData(){

      if(query < 2) setData([])

      try{
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`, {signal: controller.signal})
        const data = await res.json()
        if(!res.ok){
          throw new Error(data.error.message)
        }
        setData(data)
        console.log(data)
      }catch(error){
        console.log(error.message)

        if(error.name !== "AbortError") console.log(error.message)
      }
    }

    getData()

    return function(){
      controller.abort()
    }

  },[query])

  return (
      <DataContext.Provider value={{ setQuery, data, query }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}>Home</Route>
            <Route exact path="*" element={<p>Page Not Found.</p>}/>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>  
  );
}

export function useContextData(){
  const context = useContext(DataContext)
  if(context === undefined) throw new Error("DataContext is used outside of the Provider")
  else return context
}

export default App;
