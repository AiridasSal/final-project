import React, { lazy, Suspense } from 'react';

const LazyUserBadge = lazy(() => import('./UserBadge'));

const UserBadge = (props) => (
  <Suspense fallback={null}>
    <LazyUserBadge {...props} />
  </Suspense>
);

export default UserBadge;
