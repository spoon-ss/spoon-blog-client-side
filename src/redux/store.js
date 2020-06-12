import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducers'

export default function configureStore() {
    return createStore(
        appReducer,initial_store,
        applyMiddleware(thunkMiddleware)
    )
}
const initial_store = {
    blog_info: {
        metadata: {
            current_page: 1,
            total_page: 1,
            current_category: "All"
        },
        content: [

        ],

        category: {
            content: [
            ],
            metadata: {}
        }
    },
    blog_detail:{
        metadata:{
        },
        content:{
            id: null,
            title: "",
            date: "",
            content: "",
            category: "",
        }
    }
}
