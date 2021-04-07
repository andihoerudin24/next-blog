import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-util";
import Head from 'next/head'

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>ANDI Blog</title>
        <meta name="description" content="I Post about programming and web development"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};
 
export const getStaticProps  = () => {
  const featuredPosts = getFeaturedPost()
  return {
    props:{
      posts:featuredPosts
    }
  }
}
 
export default HomePage;