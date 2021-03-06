const baseURL = "http://localhost:8080"
export function fetchBlogDetailURL(id){
    return `${baseURL}/blog/${id}`
}

export function fetchRelativeBlogInfosURL(id){
    return `${baseURL}/blog/${id}/related-blog`
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

export function fetchAllBlogInfo(){
    return fetch(`${baseURL}/blog`)
}

export function fetchSearchResult(keyword){
    let url = new URL(`${baseURL}/blog/search`)
    url.searchParams.append("keyword", keyword)
    return fetch(url.toString())
}
