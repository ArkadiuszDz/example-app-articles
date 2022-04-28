import { CommentItem } from "../../apiResponseTypes";

export const constants = {
  GET_COMMENTS: "GET_COMMENTS",
  GET_PRELOAD_COMMENTS: "GET_PRELOAD_COMMENTS",
  SET_COMMENTS: "SET_COMMENTS",
  SET_PREV_COMMENTS: "SET_PREV_COMMENTS",
  SET_NEXT_COMMENTS: "SET_NEXT_COMMENTS"
};

export const getComments = (postId: number) => ({
  type: constants.GET_COMMENTS,
  payload: postId
});

export const getPreloadComments = () => ({
  type: constants.GET_PRELOAD_COMMENTS
})

export const setComments = (comments: CommentItem[]) => ({
  type: constants.SET_COMMENTS,
  payload: comments
});

export const setPrevComments = (prevComments: CommentItem[]) => ({
  type: constants.SET_PREV_COMMENTS,
  payload: prevComments
});

export const setNextComments = (nextComments: CommentItem[]) => ({
  type: constants.SET_NEXT_COMMENTS,
  payload: nextComments
})