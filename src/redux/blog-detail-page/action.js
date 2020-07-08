import {fetchBlogDetailURL, fetchRelativeBlogInfosURL} from "../api";

export default class BlogDetailPageAction{

    static BLOG_DETAIL_LOAD = "blog_detail_load"
    static BLOG_DETAIL_LOAD_SUCCESS = "blog_detail_load_success"
    static BLOG_DETAIL_LOAD_FAIL = "blog_detail_load_fail"

    static RELATIVE_BLOG_LOAD = "relative_blog_load"
    static RELATIVE_BLOG_LOAD_SUCCESS = "relative_blog_load_success"
    static RELATIVE_BLOG_LOAD_FAIL = 'relative_blog_load_fail'

    static #pageLoadStart = () => {
        return{
            type: BlogDetailPageAction.BLOG_DETAIL_LOAD
        }
    }

    static #pageDetailLoadSuccess = (blogDetail) => {
        return{
            type: BlogDetailPageAction.BLOG_DETAIL_LOAD_SUCCESS,
            payload:{
                ...blogDetail
            }
        }

    }

    static #pageDetailLoadFail = (errorMessage) => {
        return{
            type: BlogDetailPageAction.BLOG_DETAIL_LOAD_FAIL,
            payload:{
                message: errorMessage
            }
        }

    }

    static #pageDetailLoad = (pageId) =>{
        const jsonParser = (json) =>({
            id: json.blogInfo.id,
            title: json.blogInfo.title,
            introduction: json.blogInfo.introduction,
            introductionImgURL: json.blogInfo.introductionImgURL,
            categoryIds: json.blogInfo.categories,
            content: json.content
        })
        return async (dispatch) => {
            dispatch(this.#pageLoadStart())
            return await fetch(fetchBlogDetailURL(pageId))
                .then(res => res.json())
                .then(json => dispatch(this.#pageDetailLoadSuccess(jsonParser(json))))
                .catch(err => dispatch(this.#pageDetailLoadFail(err.message)))
        }
    }

    static #relativeBlogLoad = (pageId) => {
        return async (dispatch) =>{
            dispatch(this.#relativeBlogLoad())
            return await fetch(fetchRelativeBlogInfosURL(pageId))
                .then(res => res.json())
                .then(json => {
                    if(json.error){
                        throw new Error(json.message)
                    }else{
                        dispatch(this.#relativeBlogLoadSuccess(json))
                    }
                })
                .catch(error => dispatch(this.#relativeBlogLoadFail()))
        }
    }

    static #relativeBlogLoadStart = () =>{
        return {
            type: this.RELATIVE_BLOG_LOAD
        }
    }

    static #relativeBlogLoadSuccess = (blogInfos) => {
        return{
            type: this.RELATIVE_BLOG_LOAD_SUCCESS,
            payload: {
                blogInfos: [...blogInfos]
            }
        }

    }

    static #relativeBlogLoadFail = (message) =>{
        return{
            type: this.RELATIVE_BLOG_LOAD_FAIL,
            payload:{
                message: message
            }
        }

    }

    static pageLoad(pageId){
        return async(dispatch) => {
            dispatch(this.#pageDetailLoad(pageId))
            dispatch(this.#relativeBlogLoad(pageId))
        }
    }
}
