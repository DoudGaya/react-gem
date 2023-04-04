import foodImg from '../assets/recipe.jpeg'
import { Banner } from "./home/Banner"




const recipe = [
    {
        name: 'Pepperoni Pizza',
        image: foodImg
    },
    
]
export const Home = () => {
    return (
        <>
            <Banner />
            <div className=" w-full">
                <div className="w-[1000px] grid grid-cols-4 -mt-20 mx-auto bg-purple-200">
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}