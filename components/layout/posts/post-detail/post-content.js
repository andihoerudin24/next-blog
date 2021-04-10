import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReacMarkDown from "react-markdown";
import Image from "next/image";
import {PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js',js)
SyntaxHighlighter.registerLanguage('css',css)

const PostContent = (props) => {
  const { post } = props;
  const ImagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenders = {
    // image(image){
    //   console.log(image.src)
    //   return (<Image src={image.src} alt={image.alt} height={300} width={600}/>)
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image src={image.url} alt={image.alt} height={300} width={600} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },

    code(code){
      const {language,value} = code
      return <SyntaxHighlighter style={atomDark} language={language} children={value} />
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={ImagePath} />
      <ReacMarkDown renderers={customRenders}>{post.content}</ReacMarkDown>
    </article>
  );
};
export default PostContent;
