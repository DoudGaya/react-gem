

export default function Music (props) {
    return (
        <div className=" flex odd:bg-stone-700 even:bg-black group w-full">
                        <div className=" w-4/12 ">
                        <div className="flex justify-between  ">

                                <div className=" flex items-center">
                                <input type="checkbox" className=" invisible group-hover:visible appearance-none border checked:bg-blue-700 w-5  border-gray-200 h-5 mx-3 my-2 " />
                                <p className="font-thin py-2">{ props.title}</p>
                                </div>

                                <div className=" flex items-center invisible group-hover:visible text-gray-200 ">
                                    <button className=" hover:flex items-center text-center p-2 hover:backdrop-contrast-0  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 self-center stroke-1 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                            <path  stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path  stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>

                                    <button className=" hover:flex items-center text-center p-2 hover:backdrop-contrast-0  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 self-center stroke-1 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path  stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    </button>
                                </div>

                        </div>
                        </div>
                        <div className=" w-2/12  flex items-center font-thin px-2 cursor-pointer">
                            <button className=" font-thin hover:opacity-50">
                                {props.artist}
                            </button> 
                            </div>
                        <div className=" w-2/12  flex items-center font-thin px-2 cursor-pointer">
                            <button className=" font-thin hover:opacity-50">
                                {props.album}
                            </button> 
                            </div>
                        <div className=" w-1/12  flex items-center font-thin px-2 cursor-pointer">
                            <button className=" font-thin hover:opacity-50">
                                {props.release}
                            </button> 
                            </div>
                        <div className=" w-2/12 flex items-center font-thin px-2 cursor-pointer">
                            <button className=" font-thin hover:opacity-50">
                                {props.genre}
                            </button> 
                            </div>
                        <div className=" w-1/12 flex items-center font-thin px-2 cursor-pointer">
                            <button className=" font-thin hover:opacity-50">
                                {props.length}
                            </button> 
                            </div>
                       
                    </div>
    )
}