import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { CommentItem, PostItem } from './apiResponseTypes';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface RootStore {
  commentsList: {
    comments: CommentItem[];
    prevComments: CommentItem[];
    nextComments: CommentItem[];
  },
  postsList: {
    currentSlide: number,
    numberOfPosts: number,
    currentPostId: number;
    posts: PostItem[];
  },
}

export const initState = {
  commentsList: {
    comments: [],
    prevComments: [],
    nextComments: []
  },
  postsList: {
    currentSlide: 0,
    numberOfPosts: 0,
    currentPostId: 0,
    posts: []
  },
}

export default function configureStore(initialState: RootStore = initState) {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  let enhancer: any;

  if (process.env.REACT_APP_NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  } else {
    enhancer = compose(...enhancers)
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
