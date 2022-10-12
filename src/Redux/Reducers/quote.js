
import { createSlice } from '@reduxjs/toolkit'

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        allQuotes: [{content: 'FAUT PAS RESPIRER LA COMPOTE CA FAIT TOUSSER', author: 'KADOC'}, {content: 'HOLA QUETAL', author: 'uKi'}],
    loadedQuote: {content:'Click on the button to get a quote', author: 'Just click on the button'}

    },
    reducers: {
        getAllQuote: (state, action) => {
            state.allQuotes = [...action.payload];
        },
        getRandomQuote: (state) => {
            const rdmIndex = Math.floor(Math.random()*state.allQuotes.length);
            state.loadedQuote = state.allQuotes[rdmIndex]
        },

        loadingQuote: (state) => {
            state.loadedQuote = {content:'Loading Quote', author: 'The Server'}
        }
    },
})


export const {getRandomQuote, loadingQuote, getAllQuote} = quoteSlice.actions
export default quoteSlice.reducer



