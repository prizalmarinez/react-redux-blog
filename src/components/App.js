import React, { Component } from 'react';
import PostList from './PostList'
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PostList />
            </div>
        );
    }
}

export default App;