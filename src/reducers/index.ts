import {combineReducers} from 'redux';

import quotes, { IQuotesReducer } from './quotesReducer';

export default combineReducers({
  quotes,
});

export interface IState {
  quotes: IQuotesReducer;
}

