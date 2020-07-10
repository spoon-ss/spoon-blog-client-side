import * as uft from 'un-flatten-tree'
import {createSelector} from 'reselect'

export const getCategory = state =>  state.blogOverviewPage.category
export const unFlattenCategoryTreeSelector = createSelector(
    [getCategory],
    (category) => {
        console.log("select category")
        let tree = uft.unflatten(Object.values(category),
            (node, parentNode) => (node.parent === parentNode.id),
            (node, parentNode)=> parentNode.content.push(node),
            node => ({id: node.id, label: node.name, content: []}));
        console.log(tree)
        return tree;
    }
)

export const getBlogInfos = state => state.blogOverviewPage.blogInfo
export const totalPageSelector = createSelector(
    [getBlogInfos],
    (blogInfo) =>{
        let totalPage = Math.ceil(blogInfo.length / 8)
        return totalPage === 0 ? 1 : totalPage;
    }
)

export const getPage = state => state.blogOverviewPage.ui.chosenPage
export const blogInfoSelector = createSelector(
    [getPage, getBlogInfos],
    (page, blogInfo) => {
        // calculate page
        console.log("select blog info")
        console.log(blogInfo)
        console.log(page)
        const blogs = blogInfo.filter((item, i) =>
            (i >= (page - 1) * 8 && i < page * 8  ))
        // select data field to show
        console.log(blogs)
        return blogs.map((item) => ({
            id: item.id,
            title: item.title,
            introduction: item.introduction,
            introductionImgURL: item.introductionImgURL,
            }))
    }
)

export const getChosenTag = state => state.blogOverviewPage.ui.chosenCategory
