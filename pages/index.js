import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

export const DUMMY_POST = [
  {
    slug:'getting-started-nextjs',
    title:'getting-started-nextj1',
    image:'getting-started-nextjs.png',
    excerpt:'next js is react framework for production it makes building a fullstack React appps and sites a breezz and ships with built-is ssr',
    date:'2022-02-10'
  },
  {
    slug:'getting-started-nextj2',
    title:'getting-started-nextj2',
    image:'getting-started-nextjs.png',
    excerpt:'next js is react framework for production it makes building a fullstack React appps and sites a breezz and ships with built-is ssr',
    date:'2022-02-10'
  },
  {
    slug:'getting-started-nextj3',
    title:'getting-started-nextj3',
    image:'getting-started-nextjs.png',
    excerpt:'next js is react framework for production it makes building a fullstack React appps and sites a breezz and ships with built-is ssr',
    date:'2022-02-10'
  },
  {
    slug:'getting-started-nextj4',
    title:'getting-started-nextj4',
    image:'getting-started-nextjs.png',
    excerpt:'next js is react framework for production it makes building a fullstack React appps and sites a breezz and ships with built-is ssr',
    date:'2022-02-10'
  },
  {
    slug:'getting-started-nextjs5',
    title:'getting-started-nextjs5',
    image:'getting-started-nextjs.png',
    excerpt:'next js is react framework for production it makes building a fullstack React appps and sites a breezz and ships with built-is ssr',
    date:'2022-02-10'
  },
]

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </Fragment>
  );
};

export default HomePage;
