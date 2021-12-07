import { Dispatch } from 'redux';
import * as actionTypes from './quotesTypes';
import { IQuote } from '../entities/IQuote';

export const getQuotes = (): Promise<any> => ((dispath: Dispatch) => {

    return (
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json') 
        .then(response => response.json())
        .then((quotesList: IQuote) => {
            dispath({
                type: actionTypes.GET_QUOTES,
                quotesList
            })
        })
    )
}) as any;