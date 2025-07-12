"use client"
import Button from "@/app/components/atoms/Button"
import SelectOption from "@/app/components/atoms/SelectOption"
import FormGroup from "@/app/components/molecules/FormGroup"
import SelectGroup from "@/app/components/molecules/SelectGroup"
import { addTravel, resetTravelPanningMutation } from "@/redux/features/travelPanningMutationSlice"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { postTravelPlanning } from "@/app/services/travelService"
const Create = () => {

    const travelPanningMutation = useSelector((state: RootState) => state.travelPanningMutation)
    const dispatch = useDispatch()

    const statuses = [
        { value: "planning", label: "Planning" },
        { value: "in_progress", label: "In Progress" },
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
    ]


    const handleDispatch = (value: string, field: string) => {
        dispatch(addTravel({
            ...travelPanningMutation.value,
            [field]: value,
        }))
    }

    const handleSave = () => {
        postTravelPlanning({
            ...travelPanningMutation.value,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        })
        dispatch(resetTravelPanningMutation())
    }

    return (
        <div className="w-[80%] flex flex-col gap-2 pl-2">
            <div className="flex justify-between w-[80%] gap-2">
                <FormGroup className="w-[45%] p-2" label="Destiny" inputProps={{ type: "text", placeholder: "Destiny", value: travelPanningMutation.value.destiny, onChange: (e) => handleDispatch(e.target.value, "destiny") }} />
                <FormGroup className="w-[55%] p-2" label="Reason" inputProps={{ type: "text", placeholder: "Reason", value: travelPanningMutation.value.reason || "", onChange: (e) => handleDispatch(e.target.value, "reason") }} />
            </div>
            <div className="flex justify-between w-[80%] gap-2">
                <SelectGroup className="w-[65%] p-2" label="Status" value={travelPanningMutation.value.status} onChange={(e) => handleDispatch(e.target.value, "status")}>
                    {statuses.map((status) => (
                        <SelectOption key={status.value} value={status.value} label={status.label} />
                    ))}
                </SelectGroup>
            </div>
            <div className="flex justify-between w-[80%] gap-2">    
                <FormGroup className="w-[50%] p-2" label="Start Date" inputProps={{ type: "date", placeholder: "Start Date", value: travelPanningMutation.value.startDate || "", onChange: (e) => handleDispatch(e.target.value, "startDate") }} />
                <FormGroup className="w-[50%] p-2" label="End Date" inputProps={{ type: "date", placeholder: "End Date", value: travelPanningMutation.value.endDate || "", onChange: (e) => handleDispatch(e.target.value, "endDate") }} />
            </div>
            <div className="flex justify-end w-[80%] gap-2">
                <Button className="w-[135px] p-2" variant="primary" size="small" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}

export default Create
