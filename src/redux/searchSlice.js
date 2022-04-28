import { createSlice } from "@reduxjs/toolkit";
import mockData from "../assets/json/mockData.json";

const formatedData = mockData.data.map((item, i) => {
  return {
    id: i + 1,
    name: item[0],
    company: item[1],
    email: item[2],
    date: item[3],
    city: item[4],
  };
});

const initialState = {
  data: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      const filteredData = formatedData.filter((item) =>
        item.name.toLowerCase().includes(payload.toLowerCase())
      );
      state.data = filteredData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterData } = searchSlice.actions;

export default searchSlice.reducer;
