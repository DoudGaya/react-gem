import GrooveMusics from "./groove/Index";
import GrooveNavigation from "./groove/Navigarion";

export default function Groove () {
    return (
       
<div className=" flex flex-col h-screen w-full">
    {/* the top goes here */}
            <div className=" flex h-full w-full m-0 p-0 text-gary-900 dark:text-white">
                        <div className=" w-1/5">
                            <GrooveNavigation></GrooveNavigation>
                        </div>

                        <div className=" w-4/5">
                        <GrooveMusics></GrooveMusics>
                        </div>
                    
                    </div>

                    {/* the bottom goes here... */}

                <div className=" w-full bg-yellow-400">
            Something else here...
        </div>
</div>
        
    )

}