import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: []
  };


  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const [posts] = await Promise.all([postsResponse]);
    const postsJson = await posts.json();

    this.setState({ posts: postsJson })
  }

  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <div className='posts'>
          {posts.map(post => (
            <div key={post.id} className='postContent'>
              <h1 >{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
