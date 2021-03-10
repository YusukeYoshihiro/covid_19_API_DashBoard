import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import dataDaily from "./apiDataDaily.json";
const apiUrl = "https://api.covid19api.com/total/country";


// Generics 
type DATADAILY = typeof dataDaily;


// Generics 
type covidState = {
  daily: DATADAILY;
  country: string;
};

// Initial State
const  initialState:covidState = {
  daily: dataDaily,
  country: "Japan",
}

// Getting covid19 API data from apiUrl with Generics.
export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async(country: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
)

// Slice of Store
const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers :(builder) => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
    return {
      ...state,
      daily: action.payload.data,
      country: action.payload.country,
    };
    
  });
  },
});

export const selectDaily = (state: RootState) => state.covid.daily;
export const selectCountry = (state: RootState) => state.covid.country;

export default covidSlice.reducer;