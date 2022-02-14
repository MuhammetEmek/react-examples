import { Fragment } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from ''./QuoteItem';
import classes from ''

const QuoteList = (props) => {

    const sortQuotes = (quotes, ascending) => {
        return quotes.sort((qA, qB) => {
            if (ascending) {
                return qA.id > qB.id ? 1 : -1;
            } else {
                return qA.id < qB.id ? 1 : -1;
            }
        })
    }

    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';
    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    const changeSortingHandler = () => [
        history.push({
            pathName: location.pathname,
            search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
        })
    ]

    return (
        <Fragment>
            <div>
                <button>Sırala</button>
            </div>
            <ul>
                {
                    sortedQuotes.map((quote) => (
                        <QuoteItem
                            key={quote.id}
                            id={quote.id}
                            author={quote.author}
                            text={quote.text}>
                        </QuoteItem>
                    ))
                }

            </ul>
        </Fragment>
    )

}

export default QuoteList;