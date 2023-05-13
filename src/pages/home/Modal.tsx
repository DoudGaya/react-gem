import { useGlobalContext } from "../../context"
export const Modal = () => {


    const ctx = useGlobalContext()

    console.log(ctx)
    return (
        <>
        <div className="">
            The MODAL
        </div>
        </>
    )
}