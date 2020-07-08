import {
    RECEIVE_CATEGORY_LIST,
    RECEIVE_BLOG_INFO_LIST,
    CHANGE_CURRENT_PAGE,
    CHANGE_CURRENT_CATEGORY, CHANGE_TOTAL_PAGE, RECEIVE_BLOG_DETAIL
} from './actions'

import { combineReducers } from 'redux'
import {blogDetailPageReducer} from "./blog-detail-page/reducer";
import {blogOverviewPageReducer} from "./blog-overview-page/reducer";


function changBlogInfo(state =
                           {metadata: {}, content:[], category:{}}, action){
    switch (action.type) {
        case(RECEIVE_CATEGORY_LIST):
            return {...state, category: changeCategoryList(state.category, action)}
        case(RECEIVE_BLOG_INFO_LIST):
            return {...state, content:changeBlogInfoContent(state.content, action)}
        case(CHANGE_CURRENT_PAGE):
        case(CHANGE_CURRENT_CATEGORY):
        case(CHANGE_TOTAL_PAGE):
            return {...state, metadata: changeBlogInfoMetadata(state.metadata, action)}
        default:
            return state
    }
}
function changeBlogInfoMetadata(state=
                                    {current_page: 1, total_page: 1, current_category: "All"}, action){
    switch(action.type){
        case(CHANGE_CURRENT_PAGE):
            return {...state, current_page: action.payload.current_page}
        case(CHANGE_CURRENT_CATEGORY):
            return {...state, current_category: action.payload.current_category}
        case(CHANGE_TOTAL_PAGE):
            return {...state, total_page: action.payload.total_page}
        default:
            return state
    }
}
function changeBlogInfoContent(state=[], action){
    switch(action.type){
        case(RECEIVE_BLOG_INFO_LIST):
            return [...action.payload.content]
        default:
            return state
    }
}

function changeCategoryList(state=
                                {content: [], metadata: {}}, action){
    switch(action.type){
        case(RECEIVE_CATEGORY_LIST):
            return {...state, content: action.payload.category.content}
        default:
            return state
    }
}
function changeBlogDetail(state={metadata: {}, content: {}}, action){
    switch (action.type) {
        case(RECEIVE_BLOG_DETAIL):
            console.log(action.payload)
            return {...state, content: action.payload.content, metadata: action.payload.metadata}
        default:
            return state
    }
}

const appReducer = combineReducers({
    blogDetailPage: blogDetailPageReducer,
    blogOverviewPage: blogOverviewPageReducer
})
export default appReducer
