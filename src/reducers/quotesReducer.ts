import {IQuote} from '../entities/IQuote';
import * as actionTypes from '../actions/quotesTypes';

export interface IQuotesReducer {
  quotesList: IQuote[];
}

const defaultState = (): IQuotesReducer => ({
  quotesList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_QUOTES: {
      const paylod: actionTypes.IQuoteTypes["GET_QUOTES"] = action;
      return {
        ...state,
        quotesList: paylod.quotesList,
      };
    }
    default: {
      return state;
    }
  }
}