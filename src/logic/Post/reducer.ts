import { constants } from './actions';
import { AnyAction } from 'redux';

const initState = {
  comments: []
}

export function CommentsReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case constants.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case constants.SET_PREV_COMMENTS:
      return {
        ...state,
        prevComments: action.payload
      }
    case constants.SET_NEXT_COMMENTS:
      return {
        ...state,
        nextComments: action.payload
      }
    default:
      return state
  }
};