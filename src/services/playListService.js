import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getPlayLists = createAsyncThunk(
    'playlists/getPlaylists',
    async () => {
        const res = await customAxios.get('playlists');
        return res.data
    }
)

export const addPlayList = createAsyncThunk(
    'playlist/addPlaylists',
    async (data)=>{
        console.log(data, 'playlistsService')
        const res = await customAxios.post('playlists', data);
        return data
    }
);

export const removePlayList = createAsyncThunk(
    'playlists/removePlaylists',
    async (data) => {
        const res = await customAxios.delete('playlists' + data);
        return data
    }
);

export const findByIdPlaylist = createAsyncThunk(
    'playlists/findByIdPlaylist',
    async (data)=>{
        const res = await customAxios.get('playlists/'+data);
        return res.data;
    }
);

export const editPlaylist = createAsyncThunk(
    'playlists/editPlaylists',
    async (data)=>{
        await customAxios.put('playlists/' + data[1], data[0]);
        const res = await customAxios.get('playlists');
        return res.data

    }
)