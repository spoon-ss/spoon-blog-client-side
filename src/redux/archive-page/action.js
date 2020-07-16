import {BlogInfoEntityAction} from "../entity/action";

export class ArchiveAction{
    static ARCHIVE_LOAD_START = "archive_load_start"
    static ARCHIVE_LOAD_SUCCESS = "archive_load_success"
    static ARCHIVE_LOAD_FAIL = "archive_load_fail"

    static #loadStart = () =>{
        return{
            type: ArchiveAction.ARCHIVE_LOAD_START,
        }
    }

    static #loadSuccess = () =>{
        return{
            type: ArchiveAction.ARCHIVE_LOAD_SUCCESS,
        }
    }

    static #loadFail = (message) =>{
        return{
            type: ArchiveAction.ARCHIVE_LOAD_FAIL,
            payload:{
                message: message
            }
        }
    }

    static loadArchive(){
        return (dispatch) =>{
            dispatch(this.#loadStart())
            return dispatch(BlogInfoEntityAction.loadBlogInfoEntity())
                .then(() => dispatch(this.#loadSuccess()))
                .catch(error => dispatch(this.#loadFail(error.message)))
        }
    }
}
