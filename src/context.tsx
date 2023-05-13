import React, {useContext, createContext, useState, useEffect} from "react";
import axios from "axios";
const MainContext = createContext([])
export const MainProvider=({children}: any) => {
const [data, setData] = useState([])
const allMeansUrl: string = 'https://themealdb.com/api/json/v1/1/search.php?f=b'

const randomMealsUrl: string = 'https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
useEffect(() => {
    const fetchingData = async ( params: string ) => {
        try {
            const data = await fetch(params)
            const response = await data.json()
            setData(response.meals)
        } catch (error) { 
            console.log(error)  
        }
    }
    fetchingData(allMeansUrl)
}, [])
 return <MainContext.Provider value={data}>{children}</MainContext.Provider>

}
export const useGlobalContext = () => useContext(MainContext)