import { Photo } from '../@types';
import { api } from '../config';

export async function getPhotos(): Promise<Photo[]> {
  try {
    const { data } = await api.get<Photo[]>('/photos');
    return data.slice(0, 100) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
