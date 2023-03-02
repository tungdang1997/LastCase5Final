import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getPlayLists = createAsyncThunk(
    'playlists/getPlaylists',
    async (data) => {
        const res = await customAxios.get('playlists/my-playlist/' + data);
        return res.data
    }
)

export const addPlayList = createAsyncThunk(
    'playlist/addPlaylists',
    async (data)=>{
console.log(data)
        const res = await customAxios.post('playlists', data);
        return data
    }
);

export const removePlayList = createAsyncThunk(
    'playlists/removePlaylists',
    async (data) => {
        const res = await customAxios.delete('play-lists' + data);
        return data
    }
);