import SearchBoxAction from "./actions";
import {combineReducers} from "redux";

const initialState = {
    state:{
        loading: false,
        loadSuccess: null,
        message: null
    },
    content:{
        keyword: "",
        result: [],
    }
}
function stateReducer (state = initialState.state, action){
    switch (action.type) {
        case SearchBoxAction.SEARCH_BOX_LOAD_START:
            return {
                loading: true,
                loadSuccess: null,
                message: null
            }
        case SearchBoxAction.SEARCH_BOX_LOAD_SUCCESS:
            return{
                loading: false,
                loadSuccess: true,
                message: null
        }
        case SearchBoxAction.SEARCH_BOX_LOAD_FAIL:
            return {
                loading: false,
                loadSuccess: false,
                message: action.payload.message
            }
        case SearchBoxAction.SEARCH_BOX_EXIT:
            return initialState.state
        default:
            return state
    }
}
function contentReducer (state = initialState.content, action) {
    const payload = action.payload
    switch (action.type) {
        case SearchBoxAction.SEARCH_BOX_LOAD_START:{
            return {...state, result:[]}
        }
        case SearchBoxAction.SEARCH_BOX_LOAD_SUCCESS:{
            return {...state, result: [...(payload.blogInfo== null ? [] : payload.blogInfo)]}
        }
        case SearchBoxAction.SEARCH_BOX_LOAD_FAIL:{
            return {...state, result: []}
        }
        case SearchBoxAction.SEARCH_BOX_CHANGE:{
            return {...state, keyword: payload.keyword}
        }
        case SearchBoxAction.SEARCH_BOX_EXIT:{
            return initialState.content
        }
        default: {
            return state
        }
    }
}

export const searchBoxReducer = combineReducers({
    state: stateReducer,
    content: contentReducer
})
