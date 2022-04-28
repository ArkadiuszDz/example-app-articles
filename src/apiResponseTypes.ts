export interface PostItem {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface CommentItem {
  body: string;
  email: string;
  id: number
  name: string;
  postId: number
};