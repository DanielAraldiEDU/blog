import { useEffect, useState } from 'react';

import { BlogHookProps, BlogPostProps, Comment } from '../@types';
import { getComments, getPhotos, getPosts } from '../services';

export function useBlog(): BlogHookProps {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  async function fetchData(): Promise<void> {
    const [allPosts, allComments, allPhotos] = await Promise.all([
      getPosts(),
      getComments(),
      getPhotos(),
    ]);

    const allPostsFormatted: BlogPostProps[] = allPosts.map((post, index) => ({
      ...post,
      url: allPhotos[index].url,
    }));

    setPosts(allPostsFormatted);
    setComments(allComments);

    setIsLoaded(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoaded, posts, comments };
}
