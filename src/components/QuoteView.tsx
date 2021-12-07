import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IQuotesReducer } from '../reducers/quotesReducer';
import { IState } from '../reducers';
import { randomQuote } from '../actions/selectedActions';
import { previuosQuote } from '../actions/selectedActions';
import { useDispatch } from 'react-redux';
import { ISelectedReducer } from '../reducers/selectedReducer';
import styled from 'styled-components';

const QuoteSection = styled.section`
    height: 30vh;
    color: #fff;
`;

const QuoteDiv = styled.div`
    font-size: 2vw;
    font-style: italic;
`;

const AuthorDiv = styled.div`
    font-size: 1.4vw;
    padding: 5vh 0 0 35vw;
`;

const ButtonsDiv = styled.div`
    margin: auto;
    padding-top: 15vh;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Button = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #60a3bc;
    padding: 20px;
    border-radius: 50px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    cursor: pointer;

    :hover{
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
        -webkit-box-shadow: 0px 5px 40px -10px rgba(255,255,255,0.7);
        -moz-box-shadow: 0px 5px 40px -10px rgba(255,255,255,0.7);
        transition: all 0.4s ease 0s;
    }
    :active {
        text-shadow: 0px 0px 0px rgba(255, 255, 255, 1);
        -webkit-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.7);
        -moz-box-shadow: 0px 0px 0px 0px rgba(255,255,255,0.7);
        transition: all 0.1s ease 0s;
    }
    
`;


export const QuoteView: FC = () => {
    const { quotesList, selectedQuote } = useSelector<IState, IQuotesReducer & ISelectedReducer>(globalState => ({
        ...globalState.quotes,
        ...globalState.selected
    }));
    const dispatch = useDispatch();
    type GetRandomQuote = ReturnType<typeof randomQuote>;
    type PreviousQuote = ReturnType<typeof previuosQuote>;

    const DrawQuote = () => {
        let random_number = Math.floor(Math.random() * quotesList.length);
        dispatch<GetRandomQuote>(randomQuote(quotesList[random_number]));
    };

    const Backward = () => {
        dispatch<PreviousQuote>(previuosQuote());
    };

    useEffect(() => {
        if (quotesList?.length > 0) {
            DrawQuote();
        }
    }, [quotesList]);

    return (
        <div>
            <QuoteSection>
                <QuoteDiv>
                    {selectedQuote.quote}
                </QuoteDiv>
                <AuthorDiv>
                    ~ {selectedQuote.author}
                </AuthorDiv>
            </QuoteSection>
            <ButtonsDiv>
                <Button onClick={DrawQuote}>Losuj</Button>
                <Button onClick={Backward}>Wstecz</Button>
            </ButtonsDiv>
        </div>
    );
};