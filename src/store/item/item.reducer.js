const initialState = {
    items: [],
}

export function itemReducer(state = initialState, action) {
    let items

    switch (action.type) {
        case 'SET_ITEMS':
            return { ...state, items: action.items }
        case 'REMOVE_ITEM':
            items = state.items.filter(item => item._id !== action.itemId)
            return { ...state, items }
        case 'ADD_ITEM':
            items = [action.item, ...state.items]
            return { ...state, items }
        case 'UPDATE_ITEM':
            items = state.items.map(currItem =>
                (currItem._id === action.item._id) ? action.item : currItem)
            return { ...state, items }
        default:
            return state
    }
}
