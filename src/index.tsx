import * as React from "react"
import * as ReactDOM from "react-dom"

import { Provider } from "react-redux"
import {
  browserHistory,
  Route,
  Router,
} from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import "./styles/index.scss"

import App from "./app"
import createStore from "./middlewares"

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  ),
  document.getElementById("root"),
)
