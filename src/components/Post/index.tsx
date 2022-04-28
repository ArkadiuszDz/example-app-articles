import React, { useEffect, useState } from 'react';
import { CommentItem, PostItem } from '../../apiResponseTypes';
import Comments from '../Comments';
import * as Styled from './styles';


interface Props {
  post: PostItem;
  slideNo: number;
  currentSlide: number;
  getComments: (id: number) => void;
  setCurrentPostId: (postId: number) => void;
  comments: CommentItem[];
  prevComments: CommentItem[];
  nextComments: CommentItem[];
}

const Post: React.FC<Props> = ({
  post,
  slideNo,
  currentSlide,
  getComments,
  setCurrentPostId,
  comments,
  prevComments,
  nextComments
}) => {

  const [postComments, setPostComments] = useState<any>([]);

  useEffect(() => {
    if (slideNo === undefined || currentSlide === undefined) {
      return;
    }
    if (slideNo === currentSlide) {
      getComments(post.id);
      setCurrentPostId(post.id);
    }
  }, [currentSlide]);

  useEffect(() => {
    setPostComments(comments);
  }, [comments]);

  return (
    <Styled.Post>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Comments comments={postComments} prevComments={prevComments} nextComments={nextComments} postId={post.id}/>
    </Styled.Post>
  );
};

export default Post;
