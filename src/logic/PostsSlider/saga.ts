import { all, put, takeEvery } from 'redux-saga/effects';

import fetchData from '../../utils/fetchData';
import { setPosts, constants } from './actions';

function* asyncFetchData(): any {
  const data = yield fetchData(process.env.REACT_APP_API_URL + '/posts')
    .then(response => response.data)
    .catch(error => console.log(error))

  yield put(setPosts(data));
};

export function* PostsSaga() {
  yield all([
    takeEvery(constants.GET_POSTS, asyncFetchData)
  ]);
};
