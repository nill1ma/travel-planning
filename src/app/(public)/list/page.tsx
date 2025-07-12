"use client"
import { List as TList } from "@/app/types/list"
import ListTable from "@/app/components/organisms/ListTable"

const List = () => {
    const list:TList[] = [
        {
            id: "1",
            destiny: "New York",
            startDate: "2025-07-01",
            endDate: "2025-07-10",
            status: "in_progress",
            createdAt: "2025-07-01",
            updatedAt: "2025-07-01"
        }
    ]
    return (
        <ListTable travelData={list} />
    )
}

export default List
