async function getCurrencies() {
    try {
        return getCachedCurrencies();
    } catch (e) {
        const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
        const data = await response.json();
        localStorage.setItem('currencies', JSON.stringify(data));

        return data;
    }
}

function getCachedCurrencies() {
    let cachedData = localStorage.getItem('currencies');
    
    if (!cachedData) throw new Error('No cached data');

    let parsedData = JSON.parse(cachedData);
    let cachedDate = new Date(parsedData[0].Date).toLocaleDateString();
    let DateNow = new Date().toLocaleDateString();

    if (cachedDate !== DateNow) throw new Error('Not actual data');

    return parsedData;
}

export default { getCurrencies }