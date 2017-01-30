import React from 'react'
import { createStore } from 'redux'
import renderer from 'react-test-renderer'
import App from '../App'
import rootReducer from '../../reducers'

const testStore = createStore(rootReducer)

test('App should render', () => {
  const tree = renderer.create(<App store={testStore} />).toJSON()
  expect(tree).toMatchSnapshot()
})
