import { combineReducers } from 'redux';
import { CommentsReducer } from './logic/Post/reducer';

import { PostsSliderReducer } from './logic/PostsSlider/reducer';

export const rootReducer = combineReducers({
  postsList: PostsSliderReducer,
  commentsList: CommentsReducer
});
