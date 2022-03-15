export default function Product ({ name, image, volume, price, grade}) {
    // console.log(props)
    return (
        <div className=" dark:text-white bg-white text-black drop-shadow-md dark:bg-slate-600 rounded-xl">
            <div className=" flex flex-col">
               <div className=" px-3 py-4 ">
                    <p>{name}</p>
               </div>
                <img src={image} alt="" />
                <div className="px-3 py-4 relative">
                    <button className="bg-white transform hover:scale-90  absolute -top-6 rounded-full drop-shadow-xl right-6 px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    </button>
                    <div className=" w-full my-2 ">
                        {name} ({volume}ml) {grade}
                        <p className="text-sm">Price: <span className=" font-mono">{ price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}