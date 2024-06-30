import { memo } from 'react';

import { CommentProps } from '../../@types';

function Comment(props: CommentProps) {
  const { body, email, name } = props;

  return (
    <div className='flex flex-col w-full h-auto p-3 gap-4 bg-zinc-800 rounded'>
      <div className='flex flex-col w-full'>
        <p className='text-xl text-zinc-100 font-medium capitalize'>{name}</p>

        <p className='text-base text-zinc-600 font-normal'>
          {email.toLowerCase()}
        </p>
      </div>

      <p className='text-base text-zinc-100 font-normal'>{body}</p>
    </div>
  );
}

export default memo(Comment);
