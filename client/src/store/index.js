import { configureStore } from "@reduxjs/toolkit";
import ListSitesReducer from '../features/ListSitesSlice'

const store = configureStore({
    reducer: {
      sites: ListSitesReducer,
    },
  });
  
  export default store;
  



