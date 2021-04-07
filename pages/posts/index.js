import Allpost from "../../components/layout/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from 'next/head'
import { Fragment } from "react";

const AllPostsPage = (props) => {
  console.log('props',props)
  return (
        <Fragment>
          <Head>
            <title>All Post</title>
            <meta name="description" content="a list of all programming-related tutorial post" />
          </Head>
           <Allpost posts={props.posts} />
       </Fragment>
      );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};
export default AllPostsPage;
