import React, { Component } from 'react';
import { WallPosts, PostDetail, AddPostForm } from '.';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalStatusChange } from '../store/reducers/posts/actions';
import Button from '@material-ui/core/Button'; 
import Icon from '@material-ui/core/Icon';

class MainWindow extends Component {

  render() {
    let activForm;
    if (Object.keys(this.props.post) < 1) {
      activForm = <WallPosts />
    } else {
      activForm = <PostDetail />
    }

    return (
      <div className='main-window' >
        <div className='outside-container'>
          <Button
            variant='text'
            color='primary'
            size='large'
            onClick={() => { this.props.modalStatusChange() }}>
            <Icon color="primary" style={{ fontSize: 80 }}>add_circle</Icon>
        </Button>
        </div>

        <AddPostForm />
        {activForm}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    post: state.selectedPost
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    modalStatusChange: modalStatusChange,
  }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(MainWindow);

