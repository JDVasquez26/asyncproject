import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSitesAsync = createAsyncThunk("sites/fetchAll", async () => {
    try{
    const { data } = await axios.get("http://localhost:3001/api/sites");
    console.log("fetchSites data:", data)
    return data;
    } catch(err){
        console.log(err)
    }
});

export const addSiteAsync = createAsyncThunk('sites/addSite',
async ({ name}) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/api/sites`, {
        name
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const ListSitesSlice = createSlice({
    name:'sites',
    initialState: [],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchSitesAsync.fulfilled, (state, action) => {
            return action.payload;
          });

          builder.addCase(addSiteAsync.fulfilled, (state, action) => {
            state.push(action.payload);
          });


    }
})

export const selectSites = (state) => {
    return state.sites;
  };
  
  export default ListSitesSlice.reducer;