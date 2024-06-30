import { memo } from 'react';

import { SkeletonTextProps, SkeletonTextVariant } from '../../@types';

function SkeletonText(props: SkeletonTextProps) {
  const { variant = 'title' } = props;

  const marginBottom: Record<SkeletonTextVariant, string> = {
    text: 'mb-0',
    title: 'mb-8',
  };

  const skeletonType: Record<SkeletonTextVariant, string> = {
    text: 'skeleton-text w-40',
    title: 'skeleton-greeting w-64 sm:w-72',
  };

  return (
    <div className={`${marginBottom[variant]} bg-zinc-800 rounded`}>
      <p className={`skeleton ${skeletonType[variant]}`} />
    </div>
  );
}

export default memo(SkeletonText);
