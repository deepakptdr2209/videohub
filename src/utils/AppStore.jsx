 import {configureStore} from '@reduxjs/toolkit'
import navSlice from './NavSlice';

const appStore = configureStore({
   reducer :{
    app : navSlice
   }
})

export default appStore;