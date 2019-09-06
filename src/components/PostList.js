import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

//components
import UserHeader from './UserHeader'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    renderList() {
        const { posts } = this.props;
        return posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui centered grid">
                    <div className="eight wide column">
                        <div className='ui relaxed divided list'>{this.renderList()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);