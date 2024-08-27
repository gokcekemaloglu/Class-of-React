import { combineReducers, legacy_createStore as createStore } from "redux"
import counterReducer from "./reducers/counterReducer"
import todoReducer from "./reducers/todoReducer"

const topluReducer = combineReducers({
    // sağ taraf kullanacağımız şeye taktığımız şeyin ismi, sol taraf sayfaların ismi
    counterReducer: counterReducer,
    todoReducer: todoReducer
})

export const store = createStore(topluReducer)

