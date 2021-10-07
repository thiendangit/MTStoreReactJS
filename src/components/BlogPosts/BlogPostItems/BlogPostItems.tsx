import React from 'react';
import * as FeedbackPost from 'FeedbackPost';

export const BlogPostItems = ({ data }: { data: FeedbackPost.BlogPostsAuthor[] }) => {
  const BlogPost1 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item?.id} className="blogpost1">
        <h6 className="ellipsis">{item?.title?.rendered ?? ''}</h6>
        <div className="blogpost1__content">
          <div
            dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
            className="block-ellipsis blogpost1__content-title "
          />
          <div className="blogpost1__inf">
            <img
              src={'https://th.bing.com/th/id/R.f31192c0e33f153bdeb00745de7ce6c5?rik=ZaE3qMowg5%2fu5g&pid=ImgRaw&r=0'}
              alt="Blog Posts"
            />
            <p className="para">{item?.author}</p>
            <p className="para">{item?.date}</p>
          </div>
        </div>
      </div>
    );
  };

  const BlogPost2 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item?.id} className="blogpost2">
        <img src={item?.jetpack_featured_media_url} alt="Blog Posts" />
        <h6 className="ellipsis">{item?.title?.rendered ?? ''}</h6>
        <div
          dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
          className="block-ellipsis blogpost2__title"
        />
        <div className="blogpost2__inf">
          <p className="para">{item?.author}</p>
          <p className="para">{item?.date}</p>
        </div>
      </div>
    );
  };
  const BlogPost3 = ({ item }: { item: FeedbackPost.BlogPostsAuthor }) => {
    return (
      <div key={item?.id} className="blogpost3">
        <div className="blogpost3__content">
          <div
            dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
            className="block-ellipsis blogpost3__content-title"
          />
          <div className="blogpost3__inf">
            <p className="para">{item?.author}</p>
            <p className="para">{item?.date}</p>
          </div>
        </div>
        <img src={item?.jetpack_featured_media_url} alt="Blog Posts" />
      </div>
    );
  };

  return (
    <div className="blogpost__items">
      {/* eslint-disable-next-line react/prop-types */}
      {data?.map((item) => <BlogPost1 key={item.id} {...{ item }} />).slice(0, 1)}
      {/* eslint-disable-next-line react/prop-types */}
      {data?.map((item) => <BlogPost2 key={item.id} {...{ item }} />).slice(1, 2)}
      <div className="blogpost__items3">
        {/* eslint-disable-next-line react/prop-types */}
        {data?.map((item) => <BlogPost3 key={item.id} {...{ item }} />).slice(2, 5)}
      </div>
    </div>
  );
};
