import {BlogInfoEntityAction} from "./action";
import {getBlogIntroductionImgURL} from "../blog-detail-page/selector";
import {combineReducers} from "redux";

const initialState = {
    blogInfo: {
        state:{
            loading: false,
            loadSuccess: null,
            message: null
        },
        content:{

        }
    }
}

const blogInfoStateReducer = (state = initialState.blogInfo.state, action) =>{
    const payload = action.payload
    switch (action.type) {
        case BlogInfoEntityAction.LOAD_BLOG_INFO_ENTITY_START:
            return{
                loading: true,
                loadSuccess: null,
                message: null
        }
        case BlogInfoEntityAction.LOAD_BLOG_INFO_ENTITY_SUCCESS:
            return{
                loading: false,
                loadSuccess: true,
                message: null
            }
        case BlogInfoEntityAction.LOAD_BLOG_INFO_ENTITY_FAIL:
            return{
                loading: false,
                loadSuccess: false,
                message: payload.message

        }
        default:
            return state
    }
}

const blogInfoContentReducer = (state = initialState.blogInfo.content, action) =>{
    const payload = action.payload
    switch (action.type) {
        case BlogInfoEntityAction.LOAD_BLOG_INFO_ENTITY_SUCCESS:
            const entity = payload.blogInfo.reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {})
            return entity
        default:
            return state
    }
}
const blogInfoEntityReducer = combineReducers({
    state: blogInfoStateReducer,
    content: blogInfoContentReducer,
})

export const entityReducer = combineReducers({
    blogInfo: blogInfoEntityReducer
})

