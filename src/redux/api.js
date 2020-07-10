const baseURL = "http://localhost:8080"
export function fetchBlogDetailURL(id){
    return `${baseURL}/blog/${id}`
}

export function fetchRelativeBlogInfosURL(id){
    return `${baseURL}/same-blog/${id}`
}

export function fetchCategoryURL(){
    return `${baseURL}/category`
}

export function fetchBlogInfosByCategoryURL(categoryId){
    if(parseInt(categoryId) === -1){
        return `${baseURL}/blog`
    }
    return `${baseURL}/category/${categoryId}/blog`
}

