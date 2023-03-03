import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const addPlayListDetails = createAsyncThunk(
    'playlists/getPlaylists',
    async (data) => {

        const res = await customAxios.post('playlistDetails',data);
        return res.data
    }
)



export const getPlayListDetails = createAsyncThunk(
    'playlistDetails/getPlaylistDetails',
    async (data) => {
        console.log(data)
        const res = await customAxios.get(`playlistDetails/my-playlist-detail/${data}`);

        return res.data
    }
)