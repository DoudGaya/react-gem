

export default function GrooveNavigation () {
    return (
        <div className=" flex w-full flex-col  justify-between bg-slate-900 h-full px-0 py-0 mx-0 my-0">
            {/* the top section  */}

            <div className=" flex flex-col">
                <p className=" text-sm text-white px-2 py-1">Groove Music</p>

                <div className=" ">
                    <button className=" px-2 py-3 hover:backdrop-contrast-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-white hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className=" text-white justify-center items-center  flex group px-2 py-1">
                    <input type="text" placeholder="Search Groove" className="w-full peer px-3 py-1 focus-within:text-black outline-none bg-black focus:bg-white" />

                    <button className="bg-black py-1 px-2 peer-focus-within:bg-gray-100 group peer-focus-within:stroke-black" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 px-1 w-6 group-focus-within:stroke-gray-900 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </button>
                </div>


                <div className=" flex flex-col my-1">

                    
                    <a className=" flex space-x-3 items-center border-l-2 border-white px-2 py-3 hover:backdrop-contrast-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <p className=" font-light self-center">Music</p>
                    </a>

                    <a className=" flex space-x-3  items-center px-2 py-3 hover:backdrop-contrast-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <p className=" font-light self-center">Recent Plays </p>

                        
                    </a>

                    <a className=" flex space-x-3  items-center px-2 py-3 hover:backdrop-contrast-0 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <p className=" font-light self-center">Now Playing</p> 
                    </a>


                    <div className=" border-t border-gray-600 mx-3"></div>
                    <div className=" flex">

                        <a className=" flex space-x-3 w-full  items-center px-2 py-3 hover:backdrop-contrast-0 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-1 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                                <p className=" font-light self-center">Playlist</p> 
                        </a>

                        <button className="px-3 hover:backdrop-contrast-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 stroke-1 py w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>


                    </div>

                   

                </div>

               
                

            </div>

            {/* the lasy section */}

            <div className="">
                <div className=" border-t border-gray-600 mx-3"></div>
                <div className=" flex">

                    <a className=" flex space-x-3 w-full  items-center px-2 py-3 hover:backdrop-contrast-0 cursor-pointer">
                        <div className=" bg-gray-500 backdrop-opacity-50 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 stroke-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        </div>
                            <p className=" font-light self-center">Abdulrahman Dauda</p> 
                    </a>

                    <button className="px-3 hover:backdrop-contrast-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 stroke-1 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </button>

                </div>


            <div className=" flex">

                <a className=" flex space-x-3 w-full  items-center px-2 py-3 bg-slate-900 hover:backdrop-contrast-0 cursor-pointer">
                    <div className=" bg-gray-500 backdrop-opacity-50 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    </div>
                        <p className=" font-light self-center">Spotify</p> 
                </a>

            </div>
        
        </div>
    </div>
    )
}