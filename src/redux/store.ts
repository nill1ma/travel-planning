import { configureStore } from "@reduxjs/toolkit";
import travelPanningMutation from "./features/travelPanningMutationSlice";

export const store = configureStore({
    reducer: {
        travelPanningMutation
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
