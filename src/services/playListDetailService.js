import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const addPlayListDetails = createAsyncThunk(
    'playlists/getPlaylists',
    async (data) => {
        console.log(1, data);
        const res = await customAxios.post('playlistDetails',data);
        return res.data
    }
)