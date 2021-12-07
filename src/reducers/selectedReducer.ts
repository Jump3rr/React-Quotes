import {IQuote} from '../entities/IQuote';
import * as actionTypes from '../actions/selectedTypes';

export interface ISelectedReducer {
  selectedList: IQuote[];
  numberToUndo: number;
  selectedQuote: IQuote;
}

const defaultState = (): ISelectedReducer => ({
  selectedList: [],
  numberToUndo: 2,
  selectedQuote: {
      quote: '',
      author: ''
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_SELECTED_QUOTE: {
        return {
            ...state,
            selectedQuote: state.selectedQuote
        }
    }
    case actionTypes.GET_RANDOM: {
        return {
            ...state,
            selectedQuote: action.payload.quote,
            selectedList: [...state.selectedList, action.payload.quote],
            numberToUndo: 2
        }
    }
    case actionTypes.PREVIOUS_QUOTE: {
        if(state.selectedList.length > state.numberToUndo-1) {
        return {
            ...state,
            selectedQuote: state.selectedList[state.selectedList.length - state.numberToUndo],
            numberToUndo: state.numberToUndo + 1
        }
        }
        else {
            return {
                ...state,
                selectedQuote: state.selectedQuote
            }
        }
    }
    default: {
      return state;
    }
  }
}