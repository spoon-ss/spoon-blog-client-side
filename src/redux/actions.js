import {templateURL} from '../assets/api'

export const RECEIVE_BLOG_INFO_LIST = 'receive_blog_info_list'
export const RECEIVE_CATEGORY_LIST = 'receive_category_list'
export const RECEIVE_BLOG_CONTENT = 'receive_blog_content'
export const CHANGE_CURRENT_CATEGORY = 'change_current_category'
export const CHANGE_CURRENT_PAGE = 'change_current_page'


export function changeChosenCategory(categoryId) {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        payload: {
            category: categoryId
        }
    }
}

export function receiveBlogInfoList(blog) {
    return {
        type: RECEIVE_BLOG_INFO_LIST,
        payload: {
            blog: blog,
            receiveDate: Date.now()
        }
    }
}

export function receiveCategoryList(category) {
    return {
        type: RECEIVE_CATEGORY_LIST,
        payload: {
            category: category,
            receiveDate: Date.now(),
        }
    }
}

export function receiveBlogContent(content) {
    return {
        type: RECEIVE_BLOG_CONTENT,
        payload: {
            content: content,
            receiveDate: Date.now(),
        }
    }
}

export function changeCurrentPage(page) {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            page: page
        }
    }
}

export function pullBlogInfoList(category, page) {
    return (dispatch) => {
        fetch(templateURL(category, page))
            .then((response) => response.json())
            .then(json => dispatch(receiveBlogInfoList(json.blog)))
            .catch(error => console.error("Error:", error))
    }

}

export function pullBlogContentById(blogId) {
    return (dispatch) => {
        fetch(templateURL(blogId))
            .then(response => response.json())
            .then(json => dispatch(receiveBlogContent(json.content)))
            .catch(error => console.error("Error:", error))
    }
}

export function pullCategory() {
    return (dispatch) => {
        return fetch(templateURL("category"))
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            })
            .then(json => dispatch(receiveCategoryList(json)))
            .catch(error => console.error("Error:", error))
    }
}

export function chooseCategory(category) {
    return (dispatch, getState) => {
        /*return fetch(templateURL(category, getState().ui.page))
            .then((response) => response.json())
            .then(json => dispatch(receiveBlogInfoList(json.blog)))
            .catch(error => console.error("Error:", error))
            .then(dispatch(changeChosenCategory(category)))*/
        dispatch(changeChosenCategory(category))
    }

}

export function changePage(page) {
    return (dispatch, getState) => {
        dispatch(pullBlogInfoList(getState().ui.category, page))
            .then(dispatch(changeCurrentPage(page)))
    }
}

