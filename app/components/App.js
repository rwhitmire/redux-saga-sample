import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './App.css'
import img from './icon.png'
import { invalidatePosts } from '../actions'

class App extends Component {
  reload() {
    this.props.invalidatePosts()
  }

  render() {
    return (
      <div className={styles.app}>
        <div>
          <img src={img}/>
        </div>
        <button onClick={() => this.reload()}>reload</button>
        <ul>
          {this.props.posts.map(post =>
            <li key={post.id}>
              <span>{post.score}</span>
              <a href={post.url}>{post.title}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const actionCreators = {
  invalidatePosts
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(mapStateToProps, actionCreators)(App)
