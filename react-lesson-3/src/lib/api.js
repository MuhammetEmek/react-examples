const FIREBASE_DOMAIN = 'https://mkk-react-services-default-rtdb.europe-west1.firebasedatabase.app';

export async function getAllQuotes() {

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Servisten veri cekilemedi!');
    }

    const transformedList = [];

    for (const key in data) {
        const obj = {
            id: key,
            ...data[key],
        };

        transformedList.push(obj);
    }

    return transformedList;

}

export async function getSingleQuote(quoteId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Servisten veri cekilemedi!');
    }

    const loadedQuote = {
        id: quoteId,
        ...data
    }

    return loadedQuote;
}

export async function addQuote(quoteData) {

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Veri eklenemedi!')
    }

    return null;
}

export async function addComment(requestData) {
    debugger
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Yorum eklenemedi!')
    }

    return { commentId: data.name };
}

export async function getAllComments(quoteId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Yorumlar cekilemedi!');
    }

    const transformedList = [];

    for (const key in data) {
        const obj = {
            id: key,
            ...data[key],
        };

        transformedList.push(obj);
    }

    return transformedList;
}
