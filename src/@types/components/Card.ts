import { BlogPostProps } from '../';

export type CardProps = Omit<BlogPostProps, 'id' | 'userId'>;
