
export const Recipe = ({ img, title,  }: any ) => {
    return (
        <>
        <div className=" px-6 py-6 rounded-lg drop-shadow-xl bg-slate-100 border-[1px] border-red-400 flex flex-col ">
            <img src={img} alt="" className=" transform hover:scale-105 ease-in-out transition-all  duration-150 rounded-xl" />
            <div className=" flex flex-col space-y-4 ">
                <p className=" font-banner">{title}</p>
                <button className="  py-1 bg-black text-white rounded-lg">
                    View Recipe
                </button>
            </div>

        </div>
        </>
    )
}