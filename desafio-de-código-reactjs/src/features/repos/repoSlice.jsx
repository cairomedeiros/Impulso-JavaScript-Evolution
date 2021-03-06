import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api/api';

export const fetchAsyncRepos = createAsyncThunk('repos/fetchAsyncRepos', async (term) => {
    
    const response = await api.get(`/users/${term}/repos?per_page=20`);
      
    return response.data;
});
export const fetchAsyncReposStarred = createAsyncThunk('repos/fetchAsyncReposStarred', async (term) => {
    
    const response = await api.get(`/users/${term}/starred?per_page=20`);
      
    return response.data;
});
export const fetchAsyncUser = createAsyncThunk('repos/fetchAsyncUser', async (term) => {
    const response = await api.get(`/users/${term}`);
      
    return response.data;
});


const initialState = {
    repos: [],
    starred: [],
    user: [],
}

const repoSlice = createSlice({
    name: "repos",
    initialState,
    reducers:{
        addRepos: (state, { payload }) => {
            state.repos = payload;
        }
    },
    extraReducers: {
        [fetchAsyncRepos.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncRepos.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!")
            return {...state, repos: payload}
        },
        [fetchAsyncRepos.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncReposStarred.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfuly!");
            return {...state, starred: payload };
        },
        [fetchAsyncUser.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfuly!");
            return {...state, user: payload };
        },
    }
});

export const { addRepos } = repoSlice.actions;
export const getAllRepos = (state) => state.repos.repos;
export const getAllReposStarred = (state) => state.repos.starred;
export const getUserInfo = (state) => state.repos.user;
export default repoSlice.reducer;