import { all, fork } from 'redux-saga/effects';
import { CommentsSaga } from './logic/Post/saga';

import { PostsSaga } from './logic/PostsSlider/saga';

export function* rootSaga() {
  yield all([
    fork(PostsSaga),
    fork(CommentsSaga)
  ])
};
