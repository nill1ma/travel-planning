import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Travel {
    id?: string;
    name: string;
    description: string;
    status: "pending" | "in_progress" | "completed" | "planning";
    startDate: string;
    endDate: string;
}

type TravelState = {
    value: Travel
}

const initialState: TravelState = {
    value: {
        id: "",
        name: "",
        description: "",
        status: "pending",
        startDate: "",
        endDate: ""
    }
}

const travelPanningMutationSlice = createSlice({
    name: "travelPanningMutation",
    initialState,
    reducers: {
        addTravel: (state, action: PayloadAction<Travel>) => {
            state.value = { ...action.payload }
        },
        removeTravel: (state, action: PayloadAction<Travel>) => {
            state.value = { ...state.value, ...action.payload }
        },
        updateTravel: (state, action: PayloadAction<Travel>) => {
            state.value = { ...state.value, ...action.payload }
        }
    }
})

export const { addTravel, removeTravel, updateTravel } = travelPanningMutationSlice.actions
export default travelPanningMutationSlice.reducer