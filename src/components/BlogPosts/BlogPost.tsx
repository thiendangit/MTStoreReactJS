import React, { memo, useEffect } from 'react';
import './BlogPost.css';
import { BlogPostItems } from './BlogPostItems/BlogPostItems';
import clientRequestNormal from '@utils/clientRequestNormal';
import { TitleComponent } from '../TitleComponent/TitleComponent';

const BlogPostComponent: React.FC = () => {
  const [postList, setPostList] = React.useState([]);

  const getPostList = async () => {
    try {
      console.log('Hello');
      const result = await clientRequestNormal.get('posts?per_page=10&context=embed');
      setPostList(result.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="blogpost">
      <TitleComponent title={'Read our Blog posts'} textBtn={'Go to Blog'} path={'blog-post'} />
      <BlogPostItems data={postList} />
    </div>
  );
};

export const BlogPost = memo(BlogPostComponent);
