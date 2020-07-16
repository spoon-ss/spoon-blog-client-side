import {fetchAllBlogInfo} from "../api";

export class BlogInfoEntityAction{
    static LOAD_BLOG_INFO_ENTITY_START = "load_blog_info_entity"
    static LOAD_BLOG_INFO_ENTITY_SUCCESS = "load_blog_info_entity_success"
    static LOAD_BLOG_INFO_ENTITY_FAIL = "load_blog_info_entity_fail"



    static #loadBlogInfoSuccess = (data) =>{
        return{
            type: BlogInfoEntityAction.LOAD_BLOG_INFO_ENTITY_SUCCESS,
            payload: {
                blogInfo: data
            }
        }
    }

    static loadBlogInfoEntity(){
        return (dispatch) => {
            return fetchAllBlogInfo()
                .then(res => res.json())
                .then(json => dispatch(this.#loadBlogInfoSuccess(json)))
        }
    }
}
