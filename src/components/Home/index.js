import {Component} from 'react'

import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {blogsList: [], isLoading: true}
  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }
  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        <div className="profile-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
            className="profile-img"
            alt="profile"
          />
          <h1 className="name">Wade Warren</h1>
          <p className="profile-txt">Software Developer at UK</p>
        </div>
        <ul>
            {blogsList.map(eachItem => (
              <BlogList item={eachItem} key={eachItem.id} />
            ))}
          </ul>
      </div>
    )
  }
}

export default Home
