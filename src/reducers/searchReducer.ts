import { createSlice } from "@reduxjs/toolkit";

export interface ISearchState {
  type: 'all' | 'movie' | 'episode' | 'series'
  year: string,
  search: string,
  page: number,
  maxPage: number
}

const initialState : ISearchState = {
  year: "all",
  type: "all",
  search: "Pokemon",
  page: 1,
  maxPage: 0
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
      state.page = 1;
    },
    setType: (state, action) => {
      state.type = action.payload;
      state.page = 1;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setMaxPage: (state, action) => {
      state.maxPage = action.payload;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    previewPage: (state) => {
      state.page -= 1;
    },
    jumpToPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setYear,
  setType,
  setSearch,
  nextPage,
  previewPage,
  jumpToPage,
  setMaxPage
} = searchSlice.actions;

export default searchSlice.reducer;
