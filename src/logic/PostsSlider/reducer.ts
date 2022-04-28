import { constants } from './actions';
import { AnyAction } from 'redux';


const initState = {
  currentSlide: 0,
  numberOfPosts: 0,
  posts: [],
  currentPostId: 0
}

export function PostsSliderReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case constants.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        numberOfPosts: action.payload.length
      }
    case constants.SET_CURRENT_SLIDE:
      return {
        ...state,
        currentSlide: action.payload,
      }
    case constants.SET_CURRENT_POST_ID:
      return {
        ...state,
        currentPostId: action.payload
      }
    default:
      return state;
  }
}