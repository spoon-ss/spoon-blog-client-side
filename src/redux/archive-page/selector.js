import {getBlogInfoEntity} from "../entity/selector";

export const selectSortedBlogInfo = (store) =>{
    return Object.values(getBlogInfoEntity(store))
        .sort((b1, b2) => b2.publishDate.localeCompare(b1.publishDate))
}
