import {createSelector} from "reselect";

export const getBlogId = state => state.blogDetailPage.blogDetail.blogInfo.id
export const getBlogTitle= state =>  state.blogDetailPage.blogDetail.blogInfo.title
export const getBlogIntroduction = state =>  state.blogDetailPage.blogDetail.blogInfo.introduction
export const getBlogIntroductionImgURL = state =>  state.blogDetailPage.blogDetail.blogInfo.introductionImgURL
export const getBlogContent= state =>  state.blogDetailPage.blogDetail.blogContent === null ? "" : state.blogDetailPage.blogDetail.blogContent

