import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import axios from "axios";

export const getSongs = createAsyncThunk(
    'songs/getSongs',
    async ()=>{
        const res = await customAxios.get('songs');
        return res.data
    }
);
export const addSong = createAsyncThunk(
    'songs/addSongs',
    async (data)=>{


        const res = await customAxios.post('songs', data);

        console.log(res.data);
        return res.data
    }
);

export const removeSong = createAsyncThunk(
    'blogs/removeBlogs',
    async (data)=>{
        const res = await customAxios.delete('/songs/'+ data);
        return data
    }
)

export const searchSong = (

    async (data)=>{

        console.log(data)
        const res = await axios.get(`/songs/${data}`);
        return res;
    }
)

export const editSong = createAsyncThunk(
    'songs/editSongs',
    async (data)=>{
        console.log(data[0]);
        await customAxios.put(`/songs/${ data[1]}` ,  data[0]);
        const res = await customAxios.get('songs');
        return res.data
    }
)