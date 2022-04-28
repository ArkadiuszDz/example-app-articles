import React from 'react';
import { CommentItem } from '../../apiResponseTypes';
import * as Styled from './styles';

interface Props {
  comments: CommentItem[];
  prevComments: CommentItem[];
  nextComments: CommentItem[];
  postId: number;
}

const Comments: React.FC<Props> = ({ comments, postId, nextComments, prevComments }) => {

  return (
    <Styled.Comments>
      <h3>Comments:</h3>
      {
        comments && [...comments, ...(prevComments || []), ...(nextComments || [])].map((comment: any) => {
          if (postId === comment.postId) {
            return (
              <li key={comment.body}>
                <div>{comment.body}</div>
                <div className="author-info">
                  <i>{comment.email}</i>
                </div>
              </li>
            )
          } else {
            return null;
          }
          
        })
      }
    </Styled.Comments>
  );
};

export default Comments;