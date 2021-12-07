import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuotes } from '../actions/quotesActions';
import {QuoteView} from './QuoteView';

type GetQuotes = ReturnType<typeof getQuotes>;

export const MainPage: FC = () => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch<GetQuotes>(getQuotes());
        }, []);

    return (
        <div>
            <QuoteView />
        </div>
    );
};