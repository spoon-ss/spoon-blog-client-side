import {fetchSearchResult} from "../api";

export default class SearchBoxAction{
    static SEARCH_BOX_LOAD_START = "search_box_load_start"
    static SEARCH_BOX_LOAD_FAIL = "search_box_load_fail"
    static SEARCH_BOX_LOAD_SUCCESS = "search_box_load_fail"

    static SEARCH_BOX_CHANGE = "search_box_change"

    static SEARCH_BOX_EXIT = "search_box_exit"

    static #searchBoxLoadStart = () => {
        return{
            type: SearchBoxAction.SEARCH_BOX_LOAD_START,
        }
    }

    static #searchBoxLoadSuccess = (data) =>{
        return{
            type: SearchBoxAction.SEARCH_BOX_LOAD_SUCCESS,
            payload:{
                blogInfo: data
            }
        }
    }

    static #searchBoxLoadFail = (errorMassage) =>{
        return{
            type: SearchBoxAction.SEARCH_BOX_LOAD_FAIL,
            payload: {
                message: errorMassage
            }
        }
    }

    static #searchBoxKeywordChange = (keyword) =>{
        return {
            type: SearchBoxAction.SEARCH_BOX_CHANGE,
            payload:{
                keyword: keyword
            }
        }
    }

    static #searchBoxFetchResult = (keywords) =>{
        return (dispatch) => {
            dispatch(this.#searchBoxLoadStart())
            return fetchSearchResult(keywords)
                .then(res => res.json())
                .then(json => dispatch(this.#searchBoxLoadSuccess(json)))
                .catch(e => dispatch(this.#searchBoxLoadFail(e.message)))
        }
    }

    static searchBoxChange(newKeyword){
        return (dispatch) =>{
            dispatch(this.#searchBoxKeywordChange(newKeyword))
            return dispatch(this.#searchBoxFetchResult(newKeyword))
        }
    }

    static searchBoxExit(){
        return{
            type: SearchBoxAction.SEARCH_BOX_EXIT
        }
    }


}
