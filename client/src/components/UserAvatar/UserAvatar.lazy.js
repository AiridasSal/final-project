import React, { lazy, Suspense } from 'react';

const LazyUserAvatar = lazy(() => import('./UserAvatar'));

const UserAvatar = (props) => (
  <Suspense fallback={null}>
    <LazyUserAvatar {...props} />
  </Suspense>
);

export default UserAvatar;
