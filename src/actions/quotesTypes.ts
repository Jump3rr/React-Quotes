import {IQuote} from '../entities/IQuote';

export const GET_QUOTES = 'GET_QUOTES';

export interface IQuoteTypes {
    GET_QUOTES: {
        quotesList: IQuote;
    }
}

