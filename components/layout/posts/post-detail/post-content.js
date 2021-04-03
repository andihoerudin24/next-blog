import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReacMarkDown from "react-markdown";
const DUMMY_POST = {
  slug: "getting-started-nextjs",
  title: "getting-started-nextj1",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first Post",
};
const PostContent = () => {
  const ImagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={ImagePath} />
      <ReacMarkDown>{DUMMY_POST.content}</ReacMarkDown>
    </article>
  );
};
export default PostContent;
