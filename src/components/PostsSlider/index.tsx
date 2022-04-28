import React, { useEffect, useRef } from 'react';
import * as Styled from './styles';
import Slider from 'react-slick';
import Post from '../../containers/Post';
import settings from '../../utils/settings';
import { PostItem } from '../../apiResponseTypes';

interface Props {
  getPosts: () => void;
  setCurrentSlide: (slideNo: number) => void;
  posts: PostItem[];
}

const PostsSlider: React.FC<Props> = ({ getPosts, posts, setCurrentSlide }) => {

  const sliderRef = useRef<any>(null);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    sliderRef.current && setCurrentSlide(sliderRef.current.innerSlider.state.currentSlide);
  }, [sliderRef]);

  return (
    <Styled.SliderContainer>
      <Slider {...settings}
        ref={el => sliderRef.current = el}
        afterChange={() => setCurrentSlide(sliderRef?.current?.innerSlider.state.currentSlide)}
      >
        {
          posts.length && posts.map((post: PostItem, index: number) => <Post key={post.title} post={post} slideNo={settings.initialSlide + index} />)
        }
      </Slider>
    </Styled.SliderContainer>
  );
};

export default PostsSlider;
