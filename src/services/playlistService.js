import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getPlayLists = createAsyncThunk(
    'playlists/getPlaylists',
    async (data) => {
        console.log(data);
        const res = await customAxios.get('playlists/my-playlist/' + data);
        return res.data
    }
)

export const addPlayList = createAsyncThunk(
    'playlist/addPlaylists',
    async (data)=>{

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


export const findByIdPlayList = createAsyncThunk(
    'playlists/findByIdPlayList',
    async (data)=>{
        const res = await customAxios.get('playlists/'+data);
        return res.data;
    }
);

export const editPlayList = createAsyncThunk(
    'playlists/editPlayLists',
    async (data)=>{
        await customAxios.put('playlists/' + data[1], data[0]);
        const res = await customAxios.get('playlists');
        return res.data

    }
)