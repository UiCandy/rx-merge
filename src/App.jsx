import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { zip } from 'rxjs';

import { data$ } from 'api';
import User from './components/user';
import Article from './components/article';
import './styles/main';

const article$ = 'https://jsonplaceholder.typicode.com/posts?userId=1';
const user$ = 'https://jsonplaceholder.typicode.com/users/1';

const profile$ = zip(data$(user$), data$(article$));
class App extends Component {
  state = {
    user: {},
    articles: [],
  };

  componentDidMount() {
    profile$.subscribe(([user, articles]) => {
      this.setState({ user, articles });
    });
  }

  render() {
    const { user, articles } = this.state;
    return (
      <div className="profile">
        {user && <User {...user} />}
        <div className="posts">
          {articles && articles.map(x => <Article key={x.id} {...x} />)}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
