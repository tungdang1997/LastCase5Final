import {createSlice} from "@reduxjs/toolkit";
import {addPlayListDetails, getPlayListDetails} from "../../services/playListDetailService";



const initialState = {
    playListDetails: []
}
const playListDetailSlice = createSlice({
    name: 'playListDetails',
    initialState,
    extraReducers: builder => {

        builder.addCase(addPlayListDetails.fulfilled, (state, action) => {
            state.playListDetails = action.payload;
        })

        builder.addCase(getPlayListDetails.fulfilled, (state, action) => {
            console.log(action.payload)
            state.playListDetails = action.payload;
        })

    }
})

export default playListDetailSlice.reducer;