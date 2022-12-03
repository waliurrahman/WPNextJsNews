import NewsItem from './NewsItem'

const NewsList = ({ posts }) => {
  return (
    <div className='row'>
        {posts.map(post => (
            <NewsItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default NewsList
