import {
    RECEIVE_BLOG_CONTENT,
    RECEIVE_CATEGORY_LIST,
    RECEIVE_BLOG_INFO_LIST,
    CHANGE_CURRENT_PAGE,
    CHANGE_CURRENT_CATEGORY
} from './actions'

import { combineReducers } from 'redux'

function changeUI(state = {}, action) {

    switch (action.type) {
        case CHANGE_CURRENT_CATEGORY:
            return {...state, chosenCategory: changeChosenCategory(state.chosenCategory, action)}
        case CHANGE_CURRENT_PAGE:
            return {...state, pagination: changeChosenPagination(state.pagination, action)}
        default:
            return {
                chosenCategory: changeChosenCategory(state.chosenCategory, action),
                pagination: changeChosenPagination(state.pagination, action)
            }
    }
}

function changeChosenCategory(state = -1, action) {
    switch (action.type) {
        case(CHANGE_CURRENT_CATEGORY):
            return action.payload.category;
        default:
            return state;
    }
}

function changeChosenPagination(state = 1, action) {
    switch (action.type) {
        case(CHANGE_CURRENT_PAGE):
            return action.payload.page;
        default:
            return state;
    }
}

function changeEntity(state = {}, action) {
    switch (action.type) {
        case(RECEIVE_BLOG_INFO_LIST):
            return {...state, blogInfo: changeBlogInfo(state.blogInfo, action)}
        case(RECEIVE_CATEGORY_LIST):
            return {...state, category: changeCategory(state.category, action)}
        case(RECEIVE_BLOG_CONTENT):
            return {...state, blogContent: changeBlogContent(state.blogContent, action)}
        default:
            return {
                ...state,
                blogContent: changeBlogContent(state.blogContent, action),
                category: changeCategory(state.category, action),
                blogInfo: changeBlogInfo(state.blogInfo, action)
            }
    }
}

function changeBlogContent(state = {id: undefined, title: undefined, content: undefined}, action) {
    switch (action.type) {
        case(RECEIVE_BLOG_CONTENT):
            return {...state, id: action.payload.id, title: action.payload.title, content: action.payload.content}
        default:
            return state
    }
}

function changeCategory(state = {title: {}, subTitle: {}}, action) {
    switch (action.type) {
        case(RECEIVE_CATEGORY_LIST):
            return {...state, title: action.payload.title, subTitle: action.payload.subTitle};
        default:
            return state
    }
}

function changeBlogInfo(state = {byId: {}, allId: []}, action) {
    switch (action.type) {
        case(RECEIVE_BLOG_INFO_LIST):
            return {...state, byId: action.payload.byId, allId: action.payload.category.allId};
        default:
            return state;
    }
}

const appReducer = combineReducers({ui: changeUI, entity: changeEntity})
export default appReducer
