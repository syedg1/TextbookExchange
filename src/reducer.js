export const initialState = {
    basket: [],
    user: null,
    viewProduct: null,
    latestOrder: [],
    latestTotal: 0
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item] 
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index,1);
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'CONFIRM_ORDER':
            return {
                ...state,
                latestOrder: [...state.basket],
                latestTotal: action.total,
                basket: []
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'VIEW_PRODUCT':
            return {
                ...state, 
                viewProduct: action.item
            }
        default:
            return state;
    }
}

export default reducer;