import banner from '../../assets/banner.jpg'
import { Search } from './Seacrch'
import { useGlobalContext } from '../../context'


export const Banner = () => {


    return (
        <div className=" h-[70vh] bg-center bg-fixed bg-cover bg-no-repeat flex bg-blue-400 justify-center flex-col items-center" style={{backgroundImage: `url(${banner})`}}>
            <div className=" bg-cyan-950/30 w-full h-full flex flex-col items-center ">
                <div className=" flex w-[1000px] mx-auto justify-between">
                </div>
                    <Search />
                </div>
        </div>
    )
}