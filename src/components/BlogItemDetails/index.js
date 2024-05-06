import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}
  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, avatarUrl, imageUrl, title, topic, content} = blogItemDetails
    return (
        <div className="blog-details">
        <h1 className="blog-title">{title}</h1>
        <div className="details">
          <div className="blog-avtar">
            <img src={avatarUrl} className="blog-avatar-img" alt={author} />
            <p className="blog-author">{author}</p>
          </div>
          <img src={imageUrl} className="img" alt={title} />
          <p className="content">{content}</p>
        </div>
      </div>
      
    )
  }
}

export default BlogItemDetails
