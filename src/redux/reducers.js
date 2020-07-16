import { combineReducers } from 'redux'
import {blogDetailPageReducer} from "./blog-detail-page/reducer";
import {blogOverviewPageReducer} from "./blog-overview-page/reducer";
import {entityReducer} from "./entity/reducer";



const appReducer = combineReducers({
    blogDetailPage: blogDetailPageReducer,
    blogOverviewPage: blogOverviewPageReducer,
    entity: entityReducer
})
export default appReducer
