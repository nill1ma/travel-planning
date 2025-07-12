"use client"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
const Create = () => {

    // const dispatch = useDispatch()
    const travelPanningMutation = useSelector((state: RootState) => state.travelPanningMutation.value)
    
    return (
        <div>
            {JSON.stringify(travelPanningMutation)}
            <h1>Crear lista</h1>
        </div>
    )
}

export default Create
