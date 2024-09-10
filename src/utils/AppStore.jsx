 import {configureStore} from '@reduxjs/toolkit'
import navSlice from './NavSlice';
import searchSlice from './SearchSlice';

const appStore = configureStore({
   reducer :{
    app : navSlice,
    search : searchSlice

   }
})

export default appStore;