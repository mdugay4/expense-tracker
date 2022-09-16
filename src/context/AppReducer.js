export default (state, action) => {
    switch (action.type) {
        default:
            return state;
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
    }
};
