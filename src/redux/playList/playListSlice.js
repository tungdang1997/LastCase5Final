import {createSlice} from "@reduxjs/toolkit";
import {getPlayLists,removePlayList,addPlayList} from "../../services/playListService";

const initialState = {
    playLists: []
}
const playListSlice = createSlice({
    name: 'playLists',
    initialState,
    extraReducers: builder => {
        builder.addCase(getPlayLists.fulfilled, (state, action) => {
            state.playLists = action.payload;
        })
        builder.addCase(addPlayList.fulfilled, (state, action) => {
            state.playLists.push(action.payload);
        })
        builder.addCase(removePlayList.fulfilled, (state, action) => {
            state.playLists = action.payload;
        })

    }
})

export default playListSlice.reducer;