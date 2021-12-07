import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IQuotesReducer } from '../reducers/quotesReducer';
import { IState } from '../reducers';

export const QuoteView: FC = () => {
    const { quotesList } = useSelector<IState, IQuotesReducer>(globalState => ({
        ...globalState.quotes,
    }));

    return (
        <div>
            {quotesList.length > 0 && (
                <div>{quotesList[0].quote}</div>
            )}
        </div>
    );
};