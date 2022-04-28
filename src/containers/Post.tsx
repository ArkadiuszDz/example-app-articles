import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getCurrentSlide } from '../logic/PostsSlider/selectors';
import { getComments } from '../logic/Post/actions';
import { getCommentsStore, getNextComments, getPrevComments } from '../logic/Post/selectors';

import Post from '../components/Post';
import { setCurrentPostId } from '../logic/PostsSlider/actions';

const mapStateToProps = (state: any) => ({
  comments: getCommentsStore(state),
  currentSlide: getCurrentSlide(state),
  prevComments: getPrevComments(state),
  nextComments: getNextComments(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getComments: (postId: number) => dispatch(getComments(postId)),
  setCurrentPostId: (postId: number) => dispatch(setCurrentPostId(postId))
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;