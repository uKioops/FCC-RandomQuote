import { configureStore } from '@reduxjs/toolkit'
import quoteSlice from './Reducers/quote'

export default configureStore({
  reducer: {
    quote: quoteSlice,
  }
})