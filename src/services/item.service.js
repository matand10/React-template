
import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service'

const STORAGE_KEY = 'item'
export const carService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy = {}) {
    try {
        // return await httpService.get('item', { params: { filterBy } })
        return await storageService.query(STORAGE_KEY)
    } catch (err) {
        console.log('err', err)
    }
}

async function getById(itemId) {
    try {
        // return await httpService.get(`item/${itemId}`)
        return await storageService.get(STORAGE_KEY, itemId)
    } catch (err) {
        console.log('err', err)
    }
}


async function remove(itemId) {
    // await httpService.delete(`item/${itemId}`)
    return storageService.remove(STORAGE_KEY, itemId)
}


async function save(item) {
    let savedItem
    try {
        if (item._id) {
            // savedItem = await httpService.put(`item/${item._id}`, item)
            return storageService.put(STORAGE_KEY, item)

        } else {
            // savedItem = await httpService.post('item', item)
            return storageService.post(STORAGE_KEY, item)
        }
        // return savedItem
    } catch (err) {
        console.log('err', err)
    }
}