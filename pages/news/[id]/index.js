// import { useRouter } from "next/router"
import Image from "next/image"
import Meta from "../../../components/Meta"

const news = ({ post }) => {
  // const router = useRouter()
  // const {id} = router.query

  return (
    <div className='p-2 m-0 clearfix single-news'>
      <Meta title={`${post.title.rendered} | WebDev News`} />

      <div className='card-header p-0 py-2'> 
          <h3 className='card-title'>{post.title.rendered}</h3>
      </div>

      <Image className='float-end mb-3 ms-3' src={post.yoast_head_json.og_image[0].url} alt={post.title.rendered} width='500' height='300' />

      <div className='card-body p-0'>
        <div className='card-text' dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://prothomkotha.com/wp-json/wp/v2/posts/${(context.params.id)}`)

  const post = await res.json()

  return {
    props: {
      post
    }
  }
}

export default news
