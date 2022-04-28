import { PostItem } from "../../apiResponseTypes";

export const constants = {
  GET_POSTS: "GET_POSTS",
  SET_POSTS: "SET_POSTS",
  SET_CURRENT_SLIDE: "SET_CURRENT_SLIDE",
  SET_CURRENT_POST_ID: "SET_CURRENT_POST_ID"
};

export const getPosts = () => ({
  type: constants.GET_POSTS,
});

export const setPosts = (data: PostItem[]) => ({
  type: constants.SET_POSTS,
  payload: data
});

export const setCurrentSlide = (slideNo: number) => ({
  type: constants.SET_CURRENT_SLIDE,
  payload: slideNo
});

export const setCurrentPostId = (postId: number) => ({
  type: constants.SET_CURRENT_POST_ID,
  payload: postId
})
