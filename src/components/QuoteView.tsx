import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IQuotesReducer } from '../reducers/quotesReducer';
import { IState } from '../reducers';
import { randomQuote } from '../actions/selectedActions';
import { previuosQuote } from '../actions/selectedActions';
import { useDispatch } from 'react-redux';
import { ISelectedReducer } from '../reducers/selectedReducer';

export const QuoteView: FC = () => {
    const { quotesList, selectedQuote } = useSelector<IState, IQuotesReducer & ISelectedReducer>(globalState => ({
        ...globalState.quotes,
        ...globalState.selected
    }));
    const dispatch = useDispatch();
    type GetRandomQuote = ReturnType<typeof randomQuote>;
    type PreviousQuote = ReturnType<typeof previuosQuote>;

    const Losuj = () => {
        let random_number = Math.floor(Math.random() * quotesList.length);
        dispatch<GetRandomQuote>(randomQuote(quotesList[random_number]));
    };

    const Wstecz = () => {
        dispatch<PreviousQuote>(previuosQuote());
    };

    useEffect(() => {
        if(quotesList?.length > 0) {
            Losuj();
        }
    }, [quotesList]);

    return (
        <div>
            <button onClick={Losuj}>abc</button>
            <button onClick={Wstecz}>Wstecz</button>
            {quotesList?.length > 0 && (
                <div>
                    {selectedQuote.quote}
                </div>
            )}
        </div>
    );
};