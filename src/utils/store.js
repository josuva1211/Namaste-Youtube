import { createStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = createStore({
    reducer: {
        app: appSlice
    }
});

export default store;