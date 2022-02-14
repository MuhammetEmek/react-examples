import { useReducer, useCallback } from 'react'

function httpReducer(state, action) {
    if (action.type === 'SEND') {
        return {
            date: null,
            error: null,
            status: 'pending',

        }
    }

    if (action.type === 'SUCCESS') {
        return {
            date: action.responseData,
            error: null,
            status: 'completed',

        }
    }

    if (action.type === 'ERROR') {
        return {
            date: null,
            error: action.errorMessage,
            status: 'error',

        }
    }

    return state;
}

function useHttp(requestFunction, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null
    });

    const sendRequest = useCallback(
        async function (requestData) {
            dispatch({ type: 'SEND' });
            try {
                const responseData = await requestFunction(requestData);
                dispatch({ type: 'SUCCESS', responseData });

            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    errorMessage: error.message || 'Bir hata oluştu'
                });
            }
        },
        [requestFunction]
    );

    return {
        sendRequest,
        ...httpState,
    }
}

export default useHttp;