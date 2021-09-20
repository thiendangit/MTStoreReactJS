import React from 'react';
import * as FeedbackPost from 'FeedbackPost';
import { blogPosts } from '../../Data_Info/DataInfo';

export const BlogPostItems: React.FC = () => {
  const BlogPost1 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item.id} className="blogpost1">
        <h6>{item.title}</h6>
        <div className="blogpost1__content">
          <h2>{item.content}</h2>
          <div className="blogpost1__inf">
            <img src={item.avatar} alt="Blog Posts" />
            <p>{item.author}</p>
            <p>{item.date}</p>
          </div>
        </div>
      </div>
    );
  };

  const BlogPost2 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item.id} className="blogpost2">
        <img src={item.img} alt="Blog Posts" />
        <h6>{item.title}</h6>
        <h3>{item.content}</h3>
        <div className="blogpost2__inf">
          <p>{item.author}</p>
          <p>{item.date}</p>
        </div>
      </div>
    );
  };
  const BlogPost3 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item.id} className="blogpost3">
        <div className="blogpost3__content">
          <h4>{item.content}</h4>
          <div className="blogpost3__inf">
            <p>{item.author}</p>
            <p>{item.date}</p>
          </div>
        </div>
        <img src={item.img} alt="Blog Posts" />
      </div>
    );
  };

  return (
    <div className="blogpost__items">
      {blogPosts
        .map((item) => <BlogPost1 key={item.id} {...{ item }} />)
        .slice(0, 1)}
      {blogPosts
        .map((item) => <BlogPost2 key={item.id} {...{ item }} />)
        .slice(1, 2)}
      <div className="blogpost__items3">
        {blogPosts
          .map((item) => <BlogPost3 key={item.id} {...{ item }} />)
          .slice(2, 5)}
      </div>
    </div>
  );
};
