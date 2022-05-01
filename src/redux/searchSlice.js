import { createSlice } from "@reduxjs/toolkit";
import mockData from "../assets/json/mockData.json";

const formatedData = mockData.data.map((item, i) => {
  return {
    id: i + 1,
    name: item[0],
    company: item[1],
    email: item[2],
    date: item[3],
    country: item[4],
    city: item[5]
  };
});

const initialState = {
  data: [],
  isTwoLetters: false,
  searchText: '',
  currentPage: 1
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
    setIsTwoLetters: (state, {payload}) => {
        state.isTwoLetters = payload;
    },
    sortData: (state,{payload}) => {
      const reserved = payload === "asc" ? 1 : -1;
      const sortedData = state.data.sort((a,b) => reserved*a.name.localeCompare(b.name))
      state.data = sortedData;
    },
    setSearchText: (state, {payload}) => {
      state.searchText = payload;
    },
    setCurrentPage: (state, {payload}) => {
        state.currentPage = payload;
    }
  },
});


export const { filterData,setIsTwoLetters,sortData,setSearchText,setCurrentPage } = searchSlice.actions;

export default searchSlice.reducer;
