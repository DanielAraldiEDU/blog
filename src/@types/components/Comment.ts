import { Comment } from '../services';

export type CommentProps = Omit<Comment, 'id' | 'postId'>;
