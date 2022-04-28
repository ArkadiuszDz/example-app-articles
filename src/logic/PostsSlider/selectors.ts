import { RootStore } from "../../configureStore";

export const getPostsStore = (state: RootStore) => state.postsList.posts;
export const getCurrentSlide = (state: RootStore) => state.postsList.currentSlide;
export const getNumberOfPosts = (state: RootStore) => state.postsList.numberOfPosts;
export const getCurrentPostId = (state: RootStore) => state.postsList.currentPostId;