import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlantsAsync = createAsyncThunk("plants/fetchAll", async () => {
    const { data } = await axios.get("http://localhost:3001/api/plants");
    console.log("fetchPlants data:", data)
    return data;
});

export const addPlantAsync = createAsyncThunk('plants/addPlant',

)