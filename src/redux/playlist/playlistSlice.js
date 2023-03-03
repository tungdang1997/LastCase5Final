import {createSlice} from "@reduxjs/toolkit";
import {getPlayLists, removePlayList, addPlayList,  editPlayList} from "../../services/playlistService";

const initialState = {
    playLists: [],
    playlist:{}
}
const playListSlice = createSlice({
    name: 'playLists',
    initialState,

    reducers: {},
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
        builder.addCase(editPlayList.fulfilled,(state,action)=>{
            state.playLists = action.payload
        });

    }
})



export default playListSlice.reducer;