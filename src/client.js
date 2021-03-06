require('es6-promise').polyfill()
require('isomorphic-fetch')

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr')

import createStore from 'store'

import App from 'components/App'

import 'styles/main.scss'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      {Component(store, ConnectedRouter, { history })}
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextApp = require('components/App')
    render(nextApp)
  })
}
