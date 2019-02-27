/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';

const PostHeader = props => (
  <Fragment>
    <div className="flex-item">
      <img className="img" src={props.imgUrl} alt="Foto" />
      <div className="infoPost">
        <strong>{props.name}</strong>
        <br />
        <span>{props.time}</span>
      </div>
    </div>
    <div className="divider" />
  </Fragment>
);

export default PostHeader;
