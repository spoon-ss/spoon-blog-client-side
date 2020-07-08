import {fetchCategoryURL, fetchBlogInfosByCategoryURL} from "../api";

export class BlogOverviewPageAction{

    static LOAD_BLOG_INFO_SUCCESS= 'load_blog_info_success'
    static LOAD_CATEGORY_SUCCESS = 'load_category_success'
    static CHANGE_CHOSEN_CATEGORY = 'change_chosen_category'
    static CHANGE_CHOSEN_PAGE = 'change_chosen_page'

    static changeChosenCategory(categoryId){
        return async (dispatch)=>{
            console.log("dispatch changeChosenCategory action")
            console.log(categoryId)
            dispatch(this.#changeChosenCategoryNormal(categoryId))
            await dispatch(this.#loadBlogInfoByCategory())
            dispatch(this.#changeChosenCategoryNormal(categoryId))
        }
    }

    static loadPage(){
        return (dispatch) =>{
            dispatch(this.#loadCategory())
            dispatch(this.#loadBlogInfoByCategory())
        }
    }

    static changeChosenPage(page){
        return {
            type: this.CHANGE_CHOSEN_PAGE,
            payload:{
                page: page
            }
        }
    }

    static #changeChosenCategoryNormal = (categoryId) => {
        return{
            type: this.CHANGE_CHOSEN_CATEGORY,
            payload:{
                id: categoryId
            }
        }
    }

    static #loadBlogInfoByCategory = () => {
        return (dispatch, getState) =>{
            const categoryId = getState().blogOverviewPage.ui.chosenCategory
            dispatch(this.#changeChosenCategoryNormal(categoryId))
            return fetch(fetchBlogInfosByCategoryURL(categoryId))
                .then(res => res.json())
                .then(json => {
                    if(json.error){
                        throw new Error(json.message)
                    }else{
                        console.log("fetch blog info action")
                        console.log(json)
                        dispatch(this.#loadBlogInfoSuccess(json))
                    }
                })
        }
    }

    static #loadCategory=()=>{
        return (dispatch)=>{
            return fetch(fetchCategoryURL())
                .then(res => res.json())
                .then(json => {
                    if(json.error){
                        throw new Error(json.message)
                    }else{
                        console.log(json)
                        dispatch(this.#localCategorySuccess(json))
                    }
                })
        }
    }

    static #loadBlogInfoSuccess = (blogInfos) =>{
        return{
            type: BlogOverviewPageAction.LOAD_BLOG_INFO_SUCCESS,
            payload:{
                blogInfo: blogInfos
            }
        }
    }
    static #localCategorySuccess = (categories) =>{
        return{
            type: BlogOverviewPageAction.LOAD_CATEGORY_SUCCESS,
            payload:{
                category: categories
            }
        }
    }
}


