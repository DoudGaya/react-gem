export const Search = () => {
    return (
    <div className=" flex flex-col items-center justify-center h-full space-y-6 w-[1000px] ">
        <h1 className=' text-4xl font-banner text-white'>Welcome to <span className=' text-5xl font-bold px-4 bg-black rounded-lg'> The Many Chef</span> recipes</h1>  
        <input type="search" className="w-1/2 py-3 px-4 outline-none rounded-full mx-auto" /> 
    </div>
    )
}