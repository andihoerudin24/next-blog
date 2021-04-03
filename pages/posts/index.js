import Allpost from "../../components/layout/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return <Allpost posts={props.posts} />;
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
