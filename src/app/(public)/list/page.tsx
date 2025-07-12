"use client"
import { List as TList } from "@/app/types/list"
import ListTable from "@/app/components/organisms/ListTable"

const List = () => {
    const list:TList[] = [
        {
            id: "1",
            destiny: "London",
            startDate: "2025-07-01",
            endDate: "2025-07-10",
            status: "completed",
            createdAt: "2025-07-01",
            updatedAt: "2025-07-01"
        },
        {
            id: "2",
            destiny: "Vancouver",
            startDate: "2025-07-01",
            endDate: "2025-07-10",
            status: "pending",
            createdAt: "2025-07-01",
            updatedAt: "2025-07-01"
        },
        {
            id: "3",
            destiny: "Barcelona",
            startDate: "2025-07-01",
            endDate: "2025-07-10",
            status: "in_progress",
            createdAt: "2025-07-01",
            updatedAt: "2025-07-01"
        }
    ]
    return (
        <div className="w-[80%] pl-2">
            <ListTable travelData={list} />
        </div>
    )
}

export default List
