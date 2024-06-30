import { useState } from 'react';

import { Card, Comment, SkeletonList, SkeletonText } from './components';
import { useBlog } from './hooks';

function App() {
  const { isLoaded, posts, comments } = useBlog();

  const [postsByPage, setPostsByPage] = useState<number>(10);
  const [commentsByPage, setCommentsByPage] = useState<number>(10);

  const mainHeight = isLoaded ? 'h-screen' : 'h-full';
  const contentHeight = posts.length > 0 ? 'h-auto' : 'h-full';

  return (
    <main
      className={`flex flex-col w-full ${mainHeight} items-center px-5 py-8 bg-zinc-900`}
    >
      {isLoaded ? (
        <p className='font-semibold text-center text-2xl text-zinc-100 mb-8'>
          Bem-vindo ao Blog ✨
        </p>
      ) : (
        <SkeletonText />
      )}

      <div
        className={`flex flex-col w-full ${contentHeight} justify-center items-center gap-5`}
      >
        {isLoaded ? (
          <>
            {posts.length > 0 ? (
              <>
                {posts.slice(0, postsByPage).map(post => (
                  <Card key={post.id} {...post} />
                ))}

                {postsByPage < 100 && (
                  <button
                    type='button'
                    className='mb-8 sm:mb-10 p-1 text-base text-left text-zinc-200 rounded hover:text-zinc-50 transition-colors'
                    onClick={() => setPostsByPage(postsByPage + 10)}
                  >
                    Ver mais postagens
                  </button>
                )}

                <p className='text-xl text-zinc-100 font-medium'>Comentários</p>

                <div className='flex flex-col w-full sm:w-4/5 lg:w-3/4 border-t-[1px] px-3 py-4 border-zinc-800 gap-2 break-words'>
                  {comments.length > 0 ? (
                    <>
                      {comments.slice(0, commentsByPage).map(comment => (
                        <Comment key={comment.id} {...comment} />
                      ))}

                      {commentsByPage < 100 && (
                        <button
                          type='button'
                          className='mx-auto my-5 p-1 text-base text-left text-zinc-200 rounded hover:text-zinc-50 transition-colors'
                          onClick={() => setCommentsByPage(commentsByPage + 10)}
                        >
                          Ver mais comentários
                        </button>
                      )}
                    </>
                  ) : (
                    <p className='my-5 text-base text-center text-zinc-100 font-normal'>
                      Sem comentários
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className='flex flex-col justify-center items-center my-auto'>
                <p className='text-xl text-zinc-100 font-normal'>
                  Não há postagens no momento
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <SkeletonList />

            <SkeletonText variant='text' />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
