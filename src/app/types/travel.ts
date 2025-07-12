export interface List {
    travel: Travel[]
}

export enum Statuses {
    "pending" = "Pending",
    "in_progress" = "In Progress",
    "completed" = "Completed",
    "planning" = "Planning"
}


export interface Travel {
    id: string;
    destiny: string;
    reason: string;
    startDate?: string;
    endDate?: string;
    status: "pending" | "in_progress" | "completed" | "planning";
    createdAt?: string;
    updatedAt?: string;
}
export enum ColorStatuses {
    "pending" = "secondary",
    "in_progress" = "primary",
    "completed" = "success",
    "planning" = "warning"
}

export type TravelItinerary = Omit<List, "travel"> & {name: string, description: string};