import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPost } from '../store/reducers/posts/actions';
import { PostList, Post } from '../components';

class WallPosts extends Component {

    render() {
        const { posts } = this.props;

        if (!posts) {
            return null;
        }

        return <section className='wall-posts'>
            <h1 className='title'>Популярные посты</h1>
            <PostList list={posts}>
                <Post onClick={(id) => {
                    this.props.selectPost(id);
                }} />
            </PostList>
        </section>
    }
};

function mapStateToProps(state) {
    return {
        posts: state.postList
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPost: selectPost,
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(WallPosts);
