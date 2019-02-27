/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        name: 'Davi fonseca',
        time: 'Hoje às 11:00h',
        imgUrl:
          'https://scontent.ffor8-2.fna.fbcdn.net/v/t1.0-1/p160x160/1908478_754956347927014_1255744414040212045_n.jpg?_nc_cat=104&_nc_ht=scontent.ffor8-2.fna&oh=19c14c9133ef9c9999f84ae225d6a1bb&oe=5CE0ECE5',
        postText: 'Envelope aberto, Game iniciado, em busca dos objetivos. Go!!!',
      },
      {
        name: 'Maria Joana',
        time: 'Ontem',
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrHDiRauhQSu7qR8vJShK15n9zgXws9iZw9cbPlIeJMkmC2Z9',
        postText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: 'Davi Fonseca',
        time: 'Há 2 dias',
        imgUrl:
          'https://scontent.ffor8-2.fna.fbcdn.net/v/t1.0-1/p160x160/1908478_754956347927014_1255744414040212045_n.jpg?_nc_cat=104&_nc_ht=scontent.ffor8-2.fna&oh=19c14c9133ef9c9999f84ae225d6a1bb&oe=5CE0ECE5',
        postText: 'GoStack ai vamos nós. Rocketseat',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />

        {posts.map(post => (
          <Post name={post.name} time={post.time} imgUrl={post.imgUrl}>
            {post.postText}
          </Post>
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
