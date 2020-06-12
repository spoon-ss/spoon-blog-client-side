import {
    queryBlogInfoByCategoryURL,
    pullCategoryURL,
    pullBlogURL
} from '../assets/api'

export const RECEIVE_BLOG_INFO_LIST = 'receive_blog_info_list'
export const RECEIVE_CATEGORY_LIST = 'receive_category_list'
export const RECEIVE_BLOG_DETAIL = 'receive_blog_detail'
export const CHANGE_CURRENT_CATEGORY = 'change_current_category'
export const CHANGE_CURRENT_PAGE = 'change_current_page'
export const CHANGE_TOTAL_PAGE = 'change_total_page'


function changeChosenCategory(category) {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        payload: {
            current_category: category
        }
    }
}

function changeCurrentPage(page) {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            current_page: page
        }
    }
}

function changeTotalPage(total_page) {
    return {
        type: CHANGE_TOTAL_PAGE,
        payload: {
            total_page: total_page
        }
    }
}

function receiveBlogInfoList(blog_list) {
    return {
        type: RECEIVE_BLOG_INFO_LIST,
        payload: {
            content: blog_list.map((item) => (
                {
                    id: item.id,
                    title: item.title,
                    date: item.date,
                    introduction: item.introduction,
                    introImgHref: item.intro_img_href,
                    selfHref: item.self_href,
                }
            )),
            receiveDate: Date.now()
        }
    }
}

function receiveCategoryList(category) {
    return {
        type: RECEIVE_CATEGORY_LIST,
        payload: {
            category: category,
            receiveDate: Date.now(),
        }
    }
}

function receiveBlogDetail(blog) {
    const content = blog.content
    return {
        type: RECEIVE_BLOG_DETAIL,
        payload: {
            content: {
                id: content.id,
                title: content.title,
                date: content.date,
                content: content.content,
                category: content.category,
            },
            metadata: blog.metadata,
            receiveDate: Date.now()
        }
    }
}


export function pullBlogInfoList(category, page) {
    return (dispatch) => {
        dispatch(changeCurrentPage(page))
        fetch(queryBlogInfoByCategoryURL(category, page))
            .then((response) => response.json())
            .then(json => {
                dispatch(receiveBlogInfoList(json.content))
                dispatch(changeChosenCategory(category))
                console.log(json)
                dispatch(changeTotalPage(json.metadata.total_page))
                dispatch(changeCurrentPage(json.metadata.current_page))
            })
            .catch(error => console.error("Error:", error))
    }

}

export function pullCategory() {
    return (dispatch, getState) => {
        return fetch(pullCategoryURL())
            .then(response => response.json())
            .then(json => dispatch(receiveCategoryList(json)))
            .catch(error => console.error("Error:", error))
    }
}

export function pullBlogById(id) {
    return (dispatch) => {
        return fetch(pullBlogURL(id))
            .then(response => response.json())
            .then(json => dispatch(receiveBlogDetail(json)))
            .catch(error => console.error("Error:", error))
    }
}



