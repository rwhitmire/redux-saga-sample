import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import store from './store'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', render)
}
