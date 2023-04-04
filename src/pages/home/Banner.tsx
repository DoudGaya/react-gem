import banner from '../../assets/banner.jpg'

export const Banner = () => {
    return ( 
        <div className=" h-[70vh] bg-center bg-fixed bg-cover bg-no-repeat flex bg-blue-400 justify-center flex-col items-center" style={{backgroundImage: `url(${banner})`}}>
        <div className=" bg-cyan-950/30 w-full h-full flex flex-col items-center ">
            <div className="">hello davel</div>
            <div className=" flex flex-col items-center justify-center h-full space-y-6 w-3/4 ">
                <h1 className=' text-4xl font-banner text-white'>Welcome to <span className=' text-5xl font-bold'>ManyChef</span> recipes</h1>  
                <input type="search" className=" w-1/2 py-3 px-4 outline-none rounded-full mx-auto" /> 
            </div>
        </div>
        </div>
    )
}