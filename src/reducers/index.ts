import {combineReducers} from 'redux';

import quotes, { IQuotesReducer } from './quotesReducer';
import selected, {ISelectedReducer} from './selectedReducer';

export default combineReducers({
  quotes,
  selected
});

export interface IState {
  quotes: IQuotesReducer;
  selected: ISelectedReducer;
}

