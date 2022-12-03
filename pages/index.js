import Meta from '../components/Meta'
import NewsList from '../components/NewsList'
import { title, keywards, description } from '../config/index'

export default function Home({ posts, cats }) {
  // console.log(posts)
  return (
    <>
      <Meta title={`প্রচ্ছদ ⇿ ${title}`} />
      <div className='row news'>
        <NewsList posts={posts} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const [resPosts, resCats] = await Promise.all([
    fetch('https://prothomkotha.com/wp-json/wp/v2/posts?per_page=50'),
    fetch('https://prothomkotha.com/wp-json/wp/v2/categories?per_page=50')
  ])
  const [posts, cats] = await Promise.all([
    resPosts.json(),
    resCats.json()
  ])
  
  return {
    props: {
      posts,
      cats
    }
  } 
}