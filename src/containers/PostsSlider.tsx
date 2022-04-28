import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getPostsStore } from '../logic/PostsSlider/selectors';
import { getPosts, setCurrentSlide } from '../logic/PostsSlider/actions';

import PostsSlider from '../components/PostsSlider';

const mapStateToProps = (state: any) => ({
  posts: getPostsStore(state)
});

const mapDispatchToProps= (dispatch: Dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  setCurrentSlide: (slideNo: number) => dispatch(setCurrentSlide(slideNo))
});

const PostsSliderContainer = connect(mapStateToProps, mapDispatchToProps)(PostsSlider);

export default PostsSliderContainer;
