import { combineReducers } from 'redux'
import {blogDetailPageReducer} from "./blog-detail-page/reducer";
import {blogOverviewPageReducer} from "./blog-overview-page/reducer";
import {entityReducer} from "./entity/reducer";
import {searchBoxReducer} from "./search-box/reducers";



const appReducer = combineReducers({
    blogDetailPage: blogDetailPageReducer,
    blogOverviewPage: blogOverviewPageReducer,
    searchBoxPage: searchBoxReducer,
    entity: entityReducer
})
export default appReducer
