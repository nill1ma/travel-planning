import { Travel } from "@/app/types/travel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TravelState = {
    value: Travel
}

const initialState: TravelState = {
    value: {
        id: "",
        destiny: "",
        reason: "",
        status: "planning",
        startDate: "",
        endDate: ""
    }
}

const travelPanningMutationSlice = createSlice({
    name: "travelPanningMutation",
    initialState,
    reducers: {
        resetTravelPanningMutation: (state) => {
            state.value = { ...initialState.value }
        },
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

export const { addTravel, removeTravel, updateTravel, resetTravelPanningMutation } = travelPanningMutationSlice.actions
export default travelPanningMutationSlice.reducer