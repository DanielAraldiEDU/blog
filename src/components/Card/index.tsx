import { memo } from 'react';

import { CardProps } from '../../@types';

function Card(props: CardProps) {
  const { body, title, url } = props;

  return (
    <div className='flex flex-col sm:flex-row w-full md:w-11/12 lg:w-4/5 xl:w-3/5 h-auto sm:h-96 p-3 gap-4 bg-zinc-800 rounded'>
      <img src={url} alt={title} className='w-full sm:w-1/2 h-full rounded' />

      <div className='flex flex-col w-full sm:w-1/2 h-full justify-center gap-6'>
        <p className='font-bold text-xl text-left text-zinc-50'>{title}</p>

        <div className='flex flex-col gap-1'>
          <p className='font-medium text-base text-left text-zinc-200'>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
