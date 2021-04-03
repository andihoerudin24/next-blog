import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-util";
 
const HomePage = (props) => {
  console.log(props.posts)
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};
 
export const getStaticProps  = () =>{
  const featuredPosts = getFeaturedPost()
  return {
    props:{
      posts:featuredPosts
    }
  }
}
 
export default HomePage;