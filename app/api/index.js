export function fetchPosts() {
  return fetch('https://www.reddit.com/r/programming.json')
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data))
}
