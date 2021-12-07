import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuotes } from '../actions/quotesActions';
import {QuoteView} from './QuoteView';
import styled from 'styled-components';

type GetQuotes = ReturnType<typeof getQuotes>;

const MainWrapper = styled.div`
    width: 100%;
    padding-top: 30vh;
`;

export const MainPage: FC = () => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch<GetQuotes>(getQuotes());
        }, []);

    return (
        <MainWrapper>
            <QuoteView />
        </MainWrapper>
    );
};