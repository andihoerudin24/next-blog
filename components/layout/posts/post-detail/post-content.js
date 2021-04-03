import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReacMarkDown from "react-markdown";

const PostContent = (props) => {
  const {post} = props
  const ImagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={ImagePath} />
      <ReacMarkDown>{post.content}</ReacMarkDown>
    </article>
  );
};
export default PostContent;
