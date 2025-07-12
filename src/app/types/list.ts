export interface List {
    id: string;
    destiny: string;
    startDate?: string;
    endDate?: string;
    status: "pending" | "in_progress" | "completed";
    createdAt: string;
    updatedAt: string;
}

export enum Statuses {
    "pending" = "Pending",
    "in_progress" = "In Progress",
    "completed" = "Completed"
}

export enum ColorStatuses {
    "pending" = "secondary",
    "in_progress" = "primary",
    "completed" = "success"
}

export type TravelItinerary = Omit<List, "destiny"> & {name: string, description: string};