export const basicURL = `https://87d397d9-b2a5-40b5-bb5b-e6bb033cc99c.mock.pstmn.io`

export const queryBlogInfoByCategoryURL = (category, page)=>{
    let result = basicURL + "/category"
    result = result + `/${category.toLowerCase()}`

    result += "/blog/?"
    result += new URLSearchParams({page: page})
    return result
}

export const pullCategoryURL = ()=>{
    return `${basicURL}/category`
}

export const pullBlogURL = (id) =>{
    return `${basicURL}/blog/${id}`
}

