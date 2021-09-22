import React, { memo } from 'react';
import './BlogPost.css';
import { BlogPostItems } from './BlogPostItems/BlogPostItems';
import { ChevronRight } from '@material-ui/icons';
import { ButtonBase } from '@material-ui/core';

const BlogPostComponent: React.FC = () => {
  return (
    <div className="blogpost">
      <div className="blogpost__title">
        <h2>Read our Blog posts</h2>
        <ButtonBase className="blogpost__title-btn">
          Go to Blog
          <ChevronRight fontSize={'medium'} />
        </ButtonBase>
      </div>
      <BlogPostItems />
    </div>
  );
};

export const BlogPost = memo(BlogPostComponent);
