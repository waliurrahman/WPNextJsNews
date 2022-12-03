import Link from 'next/link'
import Image from 'next/image'

const NewsItem = ({ post }) => {
    
  return (
    <Link href="/news/[id]" as={`/news/${post.id}`} className='card col-lg-3 col-md-4 col-sm-6 p-2 m-0'>
      <Image className='card-img-top' src={post.yoast_head_json.og_image[0].url} height='200' width='170' alt={post.title.rendered} />
      <div className='card-header p-0 py-2'> 
          <h3 className='card-title'>{post.title.rendered}</h3>
      </div>
      <div className='card-body p-0'>
        <div className='card-text' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
      </div>
    </Link>
  )

}


export default NewsItem