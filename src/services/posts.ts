import { Post } from '../@types';
import { api } from '../config';

export async function getPosts(): Promise<Post[]> {
  try {
    const { data } = await api.get<Post[]>('/posts');
    return data.slice(0, 100) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
