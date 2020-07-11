import {fetchBlogDetailURL, fetchRelativeBlogInfosURL} from "../api";

export default class BlogDetailPageAction{

    static BLOG_DETAIL_LOAD = "blog_detail_load"
    static BLOG_DETAIL_LOAD_SUCCESS = "blog_detail_load_success"
    static BLOG_DETAIL_LOAD_FAIL = "blog_detail_load_fail"

    static RELATED_BLOG_LOAD = "related_blog_load"
    static RELATED_BLOG_LOAD_SUCCESS = "related_blog_load_success"
    static RELATED_BLOG_LOAD_FAIL = 'related_blog_load_fail'

    static #pageDetailLoadStart = () => {
        return{
            type: BlogDetailPageAction.BLOG_DETAIL_LOAD
        }
    }

    static #pageDetailLoadSuccess = (blogDetail) => {
        return{
            type: BlogDetailPageAction.BLOG_DETAIL_LOAD_SUCCESS,
            payload:{
                blogDetail: blogDetail
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

        return async (dispatch) => {
            dispatch(this.#pageDetailLoadStart())
            return await fetch(fetchBlogDetailURL(pageId))
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    dispatch(this.#pageDetailLoadSuccess(json))
                })
                .catch(err => dispatch(this.#pageDetailLoadFail(err.message)))
        }
    }

    static #relatedBlogLoad = (pageId) => {
        return async (dispatch) =>{
            dispatch(this.#relatedBlogLoadStart())
            return await fetch(fetchRelativeBlogInfosURL(pageId))
                .then(res => res.json())
                .then(json => {
                    if(json.error){
                        throw new Error(json.message)
                    }else{
                        dispatch(this.#relatedBlogLoadSuccess(json))
                    }
                })
                .catch(error => dispatch(this.#relatedBlogLoadFail()))
        }
    }

    static #relatedBlogLoadStart = () =>{
        return {
            type: this.RELATED_BLOG_LOAD
        }
    }

    static #relatedBlogLoadSuccess = (blogInfos) => {
        return{
            type: this.RELATED_BLOG_LOAD_SUCCESS,
            payload: {
                blogInfos: [...blogInfos]
            }
        }

    }

    static #relatedBlogLoadFail = (message) =>{
        return{
            type: this.RELATED_BLOG_LOAD_FAIL,
            payload:{
                message: message
            }
        }

    }

    static pageLoad(pageId){
        return async(dispatch) => {
            dispatch(this.#pageDetailLoad(pageId))
            dispatch(this.#relatedBlogLoad(pageId))
        }
    }
}
