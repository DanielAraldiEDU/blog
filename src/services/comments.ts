import { Comment } from '../@types';
import { api } from '../config';

export async function getComments(): Promise<Comment[]> {
  try {
    const { data } = await api.get<Comment[]>('/comments');
    return data.slice(0, 100) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
