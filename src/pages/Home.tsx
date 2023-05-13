import { JSXElementConstructor, useEffect } from 'react'
import foodImg from '../assets/recipe.jpeg'
import { Banner } from "./home/Banner"
import { useGlobalContext } from '../context'
import { useState } from 'react'
import { Recipe } from './Recipe'



const Meal = () => {
    return (
        <>
        <div className="">

        </div>
        </>
    )
}


export const Home = () => {

    const data = useGlobalContext()


    const meal = data.map( single => {
        const {idMeal, strMeal: title, strMealThumb: img } = single;
        return <Recipe key={idMeal} title={title} img={img} />
    })

    return (
        <>
        <Banner />
       <div className=" w-[1200px]  mx-auto">
        <div className=" grid grid-cols-4 gap-6 py-10">
                {meal}
            </div>
       </div>
        </>
    )
}