import {ArchiveAction} from "./action";
import {combineReducers} from "redux";

const initialState = {
    state:{
        loading: false,
        loadSuccess: null,
        message: null
    },
}


const stateReducer = (store = initialState.state, action) =>{
    const payload = action.payload
    switch (action.type) {
        case ArchiveAction.ARCHIVE_LOAD_START:
            return{
                loading: true,
                loadSuccess: null,
                message: null
            }
        case ArchiveAction.ARCHIVE_LOAD_SUCCESS:
            return{
                loading: false,
                loadSuccess: true,
                message: null
            }
        case ArchiveAction.ARCHIVE_LOAD_FAIL:
            return{
                loading: false,
                loadSuccess: false,
                message: payload.message
            }
        default:
            return store
    }
}

export const ArchivePageReducer = combineReducers({
    state: stateReducer
})
