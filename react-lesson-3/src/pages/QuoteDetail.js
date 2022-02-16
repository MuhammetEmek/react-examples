import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import useHttp from "../hooks/use-http";
import DetailQuote from "../components/quotes/DetailQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    debugger
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(
        getSingleQuote,
        true
    )

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        )
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <Fragment>
            <DetailQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <div>
                    <Link to={`${match.url}/comments`}>
                        Yorum Yükle
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;