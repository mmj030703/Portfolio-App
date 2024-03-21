import { createSlice } from "@reduxjs/toolkit";

const portfolioDetails = createSlice({
    name: 'Portfolio Details',
    initialState: {
        portfolioDetails: null
    },
    reducers: {
        updatePortfolioDetails: (state, action) => {
            state.portfolioDetails = action.payload;
        }
    }
});

export const { updatePortfolioDetails } = portfolioDetails.actions;

export default portfolioDetails.reducer;