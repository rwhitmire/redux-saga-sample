export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS'

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function invalidatePosts() {
  return {
    type: INVALIDATE_POSTS
  }
}
