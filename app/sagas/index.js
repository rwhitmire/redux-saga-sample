import { delay } from 'redux-saga'
import { fork, put, call, take } from 'redux-saga/effects'
import * as api from '../api'
import * as actions from '../actions'

export function* fetchPosts() {
  const posts = yield call(api.fetchPosts)
  yield put(actions.receivePosts(posts))
}

export function* invalidatePosts() {
  while(true) {
    yield take(actions.INVALIDATE_POSTS)
    yield call(fetchPosts)
  }
}

export function* pollPosts() {
  while(true) {
    yield call(delay, 15000)
    yield call(fetchPosts)
  }
}

export default function* root() {
  yield fork(fetchPosts)
  yield fork(invalidatePosts)
  yield fork(pollPosts)
}
