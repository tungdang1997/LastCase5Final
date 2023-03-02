import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk(
    'users/login',
    async (data)=>{
        const res = await customAxios.post('users/login', data);
        return res
    }
)

export const register = createAsyncThunk(
    'users/register',
    async (data)=>{
        console.log(2)
        const res = await customAxios.post('/users/register',data);
        console.log(1,res.data)
        return res.data
    }
)