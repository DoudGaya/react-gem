import Music from "./Music";
import musics from "../../Musics";


export default function GrooveMusics () {

    let songs = musics.map( song => {
        return (
        <Music
            key={song.id}
            title={song.song}
            artist={song.artist}
            album={song.album}
            release={song.year}
            genre={song.genre}
            length={song.time}
        ></Music>
        )
    } )
    return (
        <div className=" flex flex-col   ">
                {/* the top nav an close and all them shits there */}
                    <div className=" flex justify-end w-full  ">
                    <div className=" flex"> 
                                <button className=" py-1 px-3 hover:backdrop-contrast-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>

                                <button className=" py-1 px-3 hover:backdrop-contrast-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                </button>

                                
                                <button className=" py-1 px-3 hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-1 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </button>
                    </div> 



                    </div>
                {/* end of it */}

                <div className="px-6 pt-8   ">
                   <div className="  w-full   ">
                   <h1 className=" text-4xl font-extralight">My Music</h1>

<div className=" w-full flex space-x-12 border-b border-gray-600 mt-8">

    <a href="#" className=" text-xl text-white border-b-2 border-stone-400">
        Songs
    </a>

    <a href="#" className=" text-xl text-stone-400 ">
        Artists
    </a>

    <a href="#" className=" text-xl text-stone-400 ">
        Albums
    </a>
</div>

<div className=" pt-4 flex space-x-6 pb-2">
    <a href="#" className=" text-sm font-thin hover:text-gray-400">Shuffle all (248)</a>

    <a href="#" className="text-sm font-thin hover:text-gray-400">
        Sort by: <span className=" text-gray-400">Date added</span>
    </a>

    <a href="#" className="text-sm font-thin hover:text-gray-400">
        Genre: <span className=" text-gray-400">All genre</span>
    </a>
</div>
                   </div>


                    <div className=" flex flex-col flex-1 min-h-fit overscroll-auto w-full h-full my-auto">

{/* single music template here... */}
            
                {songs}
           
                
{/* end of music template */}



                    </div>
              </div>
            </div>
            
    );
}