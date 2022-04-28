import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import fetchData from '../../utils/fetchData';

import { setComments, setPrevComments, setNextComments, getPreloadComments, constants } from './actions';
import { getNumberOfPosts, getPostsStore, getCurrentPostId } from '../PostsSlider/selectors';

function* getCurrentComments(action: AnyAction): any {

  const data = yield fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`)
    .then(response => response.data)
    .catch(error => console.log(error))

  yield put(setComments(data));
  yield put(getPreloadComments())
}

function* preloadComments(): any {

  yield put(setPrevComments([]));
  yield put(setNextComments([]));

  const numOfPosts = yield select(getNumberOfPosts);
  const currentPostId = yield select(getCurrentPostId);
  const posts = yield select(getPostsStore);

  const currentPostIndex = posts.findIndex((post: any) => post.id === currentPostId);

  const nextPostIndex = (currentPostIndex + 1) % numOfPosts;
  const prevPostIndex = (currentPostIndex - 1 + numOfPosts) % numOfPosts;

  const prevCommentId = posts[prevPostIndex].id;
  const nextCommentId = posts[nextPostIndex].id;

  const [prevComments, nextComments] = yield all([
    call(fetchData, `${process.env.REACT_APP_API_URL}/comments?postId=${prevCommentId}`),
    call(fetchData, `${process.env.REACT_APP_API_URL}/comments?postId=${nextCommentId}`)
  ]);

  yield put(setPrevComments(prevComments.data));
  yield put(setNextComments(nextComments.data));
}

export function* CommentsSaga() {
  yield all([
    takeEvery(constants.GET_COMMENTS, getCurrentComments),
    takeEvery(constants.GET_PRELOAD_COMMENTS, preloadComments)
  ]);
}