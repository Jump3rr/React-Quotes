import * as actionTypes from './selectedTypes';
import { IQuote } from '../entities/IQuote';

export const previuosQuote = () => ({
    type: actionTypes.PREVIOUS_QUOTE
});

export const randomQuote = (quote: IQuote) => ({
    type: actionTypes.GET_RANDOM,
    payload: {quote}
})

export const getSelectedQuote = () => ({
    type: actionTypes.GET_SELECTED_QUOTE
})