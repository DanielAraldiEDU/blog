import { Comment, Photo, Post } from '../services';

export type BlogPostProps = Post & Pick<Photo, 'url'>;

export interface BlogHookProps {
  isLoaded: boolean;
  posts: BlogPostProps[];
  comments: Comment[];
}
