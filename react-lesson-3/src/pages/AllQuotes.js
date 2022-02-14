import { useEffect } from "react";
import NotQuotesFound from "../components/quotes/NotQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";


const AllQuotes = (props) => {

    const{sendRequest, status, data:loadedQuotes, error} = useHttp(
        getAllQuotes,
        true
    )

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

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

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length ===0)){
        return <NotQuotesFound />
    }

    return <QuoteList></QuoteList>
}

export default AllQuotes;