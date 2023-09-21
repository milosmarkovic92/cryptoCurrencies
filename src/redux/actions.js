export const updateData = (symbol, data) => ({
    type: 'UPDATE_DATA',
    symbol,
    data,
});

export const clearData = () => {
    return {
        type: 'CLEAR_TICKER_DATA',
    };
};

export const addToFavorites = (data) => ({
    type: 'ADD_TO_FAVORITES',
    payload: data,
  });
  
  export const removeFromFavorites = (symbol) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: symbol,
  });