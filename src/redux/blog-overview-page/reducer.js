import {BlogOverviewPageAction} from "./action";
import {combineReducers} from "redux";

const initialState = {
    definiteState:{
    },
    ui: {
        chosenCategory: -1,
        chosenPage: 1,
    },
    blogInfo:[],
    category: {},
}

function definiteStateReducer(state = initialState.definiteState, action){
    switch (action.type) {
        default:
            return state
    }
}

function uiReducer(state = initialState.ui, action){
    const payload = action.payload
    switch (action.type) {
        case(BlogOverviewPageAction.CHANGE_CHOSEN_CATEGORY):
            return{
                ...state,
                chosenCategory: payload.id
            }
        case(BlogOverviewPageAction.CHANGE_CHOSEN_PAGE):
            return {
                ...state,
                chosenPage: payload.page
            }
        default:
            return state
    }
}

function blogInfoReducer(state = initialState.blogInfo, action){
    const payload = action.payload
    switch(action.type){
        case(BlogOverviewPageAction.LOAD_BLOG_INFO_SUCCESS):
            return [...payload.blogInfo]
        default:
            return state
    }
}
function categoryReducer(state = initialState.category, action){
    const payload = action.payload
    switch(action.type){
        case(BlogOverviewPageAction.LOAD_CATEGORY_SUCCESS):
            const entity = payload.category.reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {})
            console.log(entity)
            return entity
        default:
            return state
    }
}

export const blogOverviewPageReducer = combineReducers({
    definiteState: definiteStateReducer,
    ui: uiReducer,
    blogInfo: blogInfoReducer,
    category: categoryReducer
})
