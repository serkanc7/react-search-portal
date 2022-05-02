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
    city: item[5],
    formatedDate: item[3].split('/').reverse().join('-')
  };
});

const initialState = {
  data: [],
  isTwoLetters: false,
  searchText: "",
  currentPage: 1,
};


export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterData: (state, { payload }) => {
      const filteredData = formatedData.filter((item) =>
        item.name.toLowerCase().includes(payload.toLowerCase()) || item.company.toLowerCase().includes(payload.toLowerCase())
      );
      state.data = filteredData;
    },
    setIsTwoLetters: (state, { payload }) => {
      state.isTwoLetters = payload;
    },
    sortData: (state, { payload }) => {
      console.log(payload);
      const reserved = payload.order === "asc" ? 1 : -1;
      const field = payload.cate;
      const sortedData = state.data.sort(
        (a, b) => reserved * a[field].localeCompare(b[field])
      );
      state.data = sortedData;
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    addData:(state,{payload}) => {
      state.data = [...state.data,{...payload, id:payload.name}]
    }
  },
});

export const {
  filterData,
  setIsTwoLetters,
  sortData,
  setSearchText,
  setCurrentPage,
  addData
} = searchSlice.actions;

export default searchSlice.reducer;
