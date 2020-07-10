import BlogDetailPageAction from "./action";
import {combineReducers} from "redux";
import {blogInfoSelector} from "../blog-overview-page/selector";

const initialState = {
    definiteState: {
        detailLoading: false,
        detailLoadSuccess: null,
        detailLoadMessage: null,
        relativeBlogInfoLoading: false,
        relativeBlogInfoLoadSuccess: null,
        relativeBlogInfoLoadMessage: null,
    },
    blogDetail: {
        blogInfo: {
            id: null,
            title: null,
            introduction: null,
            introductionImgURL: null,
            publishDate: null,
            modifiedDate: null,
            categories: [],
            images: []
        },
        blogContent: null
    },
    relativeBlogInfo: [],
}

function definiteStateReducer(state = initialState.definiteState, action) {
    switch (action.type) {
        case(BlogDetailPageAction.BLOG_DETAIL_LOAD):
            return{
                ...state,
                detailLoading: true,
                detailLoadSuccess: null,
                detailLoadMessage: null
            }
        case(BlogDetailPageAction.BLOG_DETAIL_LOAD_SUCCESS):
            return{
                ...state,
                detailLoading: false,
                detailLoadSuccess: true,
                detailLoadMessage: null
            }
        case(BlogDetailPageAction.BLOG_DETAIL_LOAD_FAIL):
            return{
                ...state,
                detailLoading: false,
                detailLoadSuccess: false,
                detailLoadMessage: action.payload.message
            }
        case(BlogDetailPageAction.RELATIVE_BLOG_LOAD):
            return{
                ...state,
                relativeBlogInfoLoading: true,
                relativeBlogInfoLoadSuccess: null,
                relativeBlogInfoLoadMessage: null
            }
        case(BlogDetailPageAction.RELATIVE_BLOG_LOAD_SUCCESS):
            return{
                ...state,
                relativeBlogInfoLoading: false,
                relativeBlogInfoLoadSuccess: true,
                relativeBlogInfoLoadMessage: null
            }
        case(BlogDetailPageAction.RELATIVE_BLOG_LOAD_FAIL):
            return{
                ...state,
                relativeBlogInfoLoading: false,
                relativeBlogInfoLoadSuccess: false,
                relativeBlogInfoLoadMessage: action.payload.message
            }
        default:
            return state
    }
}
function blogDetailReducer(state = initialState.blogDetail, action) {
    const payload = action.payload
    console.log("blog detail reducer")
    console.log(payload)
    switch (action.type) {
        case (BlogDetailPageAction.BLOG_DETAIL_LOAD_SUCCESS):
            return{
                ...payload.blogDetail
            }
        default:
            return state
    }

}

function relativeBlogInfoReducer(state = initialState.relativeBlogInfo, action){
    const payload = action.payload
    switch (action.type) {
        case(BlogDetailPageAction.RELATIVE_BLOG_LOAD_SUCCESS):
            return [...payload.blogInfos]
        default:
            return state
    }
}
export const blogDetailPageReducer = combineReducers({
    definiteState: definiteStateReducer,
    blogDetail: blogDetailReducer,
    relativeBlogInfo: relativeBlogInfoReducer,
})
