import PostContent from "../../components/layout/posts/post-detail/post-content"
import { getPostData, getPostFiles } from "../../lib/posts-util"
import Head from 'next/head'
import { Fragment } from "react"
const PostDetailPage = (props) =>{
     return (
          <Fragment>
          <Head>
               <title>{props.post.title}</title>
               <meta name="" content={props.post.excerpt} />
          </Head>
          <PostContent post={props.post} />
          </Fragment>
     )
}

export const getStaticProps = (context) =>{
     const {params} = context
     const {slug} = params
     const postData = getPostData(slug)
     return {
          props:{
               post:postData
          },
          revalidate:600
     }
}

export const  getStaticPaths = () =>{
     const postfilename = getPostFiles()
     const slugs = postfilename.map(filename => filename.replace(/\.md$/,''))
     return {
          paths:slugs.map(slug => ({
               params:{
                    slug:slug
               }
          })),
          fallback:false
     }
}
export default PostDetailPage