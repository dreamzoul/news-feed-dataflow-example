import * as types from './actionTypes';
import postList from '../../../services';

const initialState = {
  postList: postList(),
  selectedPost: {},
  isModalShow: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.POST_SELECTED:
      const selectedPost = state.postList.filter(el => el.id === action.id)[0];
      return { ...state, selectedPost };

    case types.POST_ADDED:
      const newPost = action.post,
        postList = [...state.postList, newPost];
      return { ...state, postList };

    case types.POST_UNSELECT:
      return { ...state, selectedPost: {} };

    case types.MODAL_STATUS_CHANGE:
      return { ...state, isModalShow: !state.isModalShow };

    default:
      return state;
  }
}
