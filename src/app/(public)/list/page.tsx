"use client"
import ListTable from "@/app/components/organisms/ListTable"
import { getTravelPlanning } from "@/app/services/travelService"

const List = () => {
    const travelData = getTravelPlanning()
    return (
        <div className="w-[80%] pl-2">
            <ListTable travelData={travelData} emptyMessage="No travel planning found" />
        </div>
    )
}

export default List
