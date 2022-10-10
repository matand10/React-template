import { itemService } from '../../services/item.service.js'

export function loadItems() {
    return async dispatch => {
        try {
            const items = await itemService.query()
            dispatch({ type: 'SET_ITEMS', items })
        } catch (err) {
            console.log(err)
        }
    }
}

export function removeItem(itemId) {
    return async dispatch => {
        try {
            await itemService.remove(itemId)
            dispatch({ type: 'REMOVE_ITEM', itemId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveItem(item) {
    return async dispatch => {
        try {
            const actionType = (item._id) ? 'UPDATE_ITEM' : 'ADD_ITEM'
            let savedItem = await itemService.save(item)
            dispatch({ type: actionType, item: savedItem })
        } catch (err) {
            console.log(err)
        }
    }
}

