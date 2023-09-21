
export const fetchSymbols = async (setSymbols) => {
    try {
        const options = { headers: { accept: 'application/json', } };
        const symbolsResponse = await fetch(`/v1/symbols`, options);
        if (!symbolsResponse.ok) {
            throw new Error('Error fetching symbols');
        }
        const data = await symbolsResponse.json();
        const slicedData = data.slice(0, 5);
        const upperCasedSymbols = slicedData.map(el => el.toUpperCase());
        setSymbols(upperCasedSymbols)
    } catch (error) {
        console.error('Error fetching symbols:', error);
        throw error;
    }
};
