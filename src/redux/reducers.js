const initialState = {
    dataBySymbol: {},
    favorites: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {
                ...state,
                dataBySymbol: {
                    ...state.dataBySymbol,
                    [action.symbol]: action.data,
                },
            };
        case 'CLEAR_TICKER_DATA':
            return {
                ...state,
                dataBySymbol: {},
            };
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.symbolName !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;