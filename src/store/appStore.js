import { configureStore } from "@reduxjs/toolkit";
import portfolioDetails from "./slices/portfolioDetailsSlice";

const appStore = configureStore({
    reducer: {
        "portfolioDetails": portfolioDetails
    }
});

export default appStore;