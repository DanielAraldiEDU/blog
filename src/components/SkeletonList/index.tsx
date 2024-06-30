import { memo } from 'react';

function SkeletonList() {
  return (
    <>
      {new Array(10).fill(0).map((_, index) => (
        <div
          key={index}
          className='flex flex-col sm:flex-row w-full md:w-11/12 lg:w-4/5 xl:w-3/5 h-auto sm:h-96 p-3 gap-4 bg-zinc-800 rounded'
        >
          <div className='skeleton skeleton-image w-full sm:w-1/2 h-96 sm:h-full rounded' />

          <div className='flex flex-col w-full sm:w-1/2 h-full justify-center gap-6'>
            <p className='skeleton skeleton-title w-4/5 sm:w-3/4' />

            <div className='flex flex-col gap-1'>
              <p className='skeleton skeleton-text w-full' />

              <p className='skeleton skeleton-text w-11/12 sm:w-4/5' />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(SkeletonList);
