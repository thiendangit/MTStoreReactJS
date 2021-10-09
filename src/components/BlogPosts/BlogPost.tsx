import React, { memo, useEffect } from 'react';
import './BlogPost.css';
import { BlogPostItems } from './BlogPostItems/BlogPostItems';
import { ChevronRight } from '@material-ui/icons';
import { ButtonBase } from '@material-ui/core';
import { fetchPostList } from '../../logic/post';
import clientRequestNormal from '@utils/clientRequestNormal';

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
      <div className="blogpost__title">
        <h2>Read our Blog posts</h2>
        <ButtonBase className="blogpost__title-btn">
          Go to Blog
          <ChevronRight fontSize={'medium'} />
        </ButtonBase>
      </div>
      <BlogPostItems data={postList} />
    </div>
  );
};

export const BlogPost = memo(BlogPostComponent);
