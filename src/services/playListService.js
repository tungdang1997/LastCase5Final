import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getPlayLists = createAsyncThunk(
    'playlists/getPlaylists',
    async () => {
        const res = await customAxios.get('play-lists');
        return res.data
    }
)

export const addPlayList = createAsyncThunk(
    'playlist/addPlaylists',
    async (data)=>{
        console.log(data, 'playlistsService')
        const res = await customAxios.post('play-lists', data);
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