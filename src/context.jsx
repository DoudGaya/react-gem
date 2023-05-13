import axios from "axios";
import React, {useContext, createContext, useEffect, useState} from "react";



const AppContext = createContext()


export const AppProvider = ({children}) => {

    const mealUrl = 'url1'
    const [meals, setMeals] = useState()
    const allMealUrl = 'url2'

    useEffect(() => {
        function fetching(params) {
            axios.get(params)
            .then((res) => {
                setMeals(res)
            }).catch(error => console.log(error))

        }
        fetching(allMealUrl)
    })


    return <AppContext.Provider value={'hello'}>
        {children}
    </AppContext.Provider>
}


export const useMainContext = () => {
    return useContext(AppContext)
}

