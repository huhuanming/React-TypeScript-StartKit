
import { routerReducer as routing } from "react-router-redux"
import { combineReducers } from "redux"
import loading from "./loadingReducer"

export default combineReducers({
  routing,
  loading,
})
