import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ArticleContainer } from '../components';
import { unselectedPost } from '../store/reducers/posts/actions';

class PostDetail extends Component {

    render() {
        const { post } = this.props;

        if (Object.keys(post).length < 1) {
            return null;
        }

        return <ArticleContainer {...post} closeForm={() => {
            this.props.unselectedPost();
        }} />
    }
};

function mapStateToProps(state) {
    return {
        post: state.selectedPost
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        unselectedPost: unselectedPost,
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(PostDetail);
