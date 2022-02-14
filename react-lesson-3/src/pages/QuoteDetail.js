import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import useHttp from "../hooks/use-http";
import DetailQuote from "../components/quotes/DetailQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {

    const params = useParams();

    const{quoteId} = params;

    const{sendRequest, status, data:loadedQuote, error} = useHttp(
        getSingleQuote,
        true
    )

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId]);

    if(status === 'pending') {
        return(
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        )
    }

    if(error) {
        return <p>{error}</p>
    }

    return(
        <Fragment>
            <DetailQuote text={loadedQuote.text} author={loadedQuote.author}/>
        </Fragment>
    )
}

export default QuoteDetail;