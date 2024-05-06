import {Link} from 'react-router-dom'
import './index.css'

const BlogList = props => {
  const {item} = props
  const {author, imageUrl, title, avatarUrl, topic, id} = item
  return (
    <Link className="link-item" to={`/blogs/${id}`}>
      <li className="li">
        <img src={imageUrl} className="blog-img" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avtar-section">
            <img src={avatarUrl} className="avatar" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogList
