/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="flex-container">
    <div className="row">
      <section className="post">
        <PostHeader name={props.name} time={props.time} imgUrl={props.imgUrl} />
        <div className="postBody">{props.children}</div>
      </section>
    </div>
  </div>
);

Post.defaultProps = {
  children: 'Texto postagem',
  name: 'Usuário',
  time: '...',
  imgUrl: '#',
};

Post.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default Post;
