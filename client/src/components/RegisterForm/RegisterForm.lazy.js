import React, { lazy, Suspense } from 'react';

const LazyRegisterForm = lazy(() => import('./RegisterForm'));

const RegisterForm = (props) => (
  <Suspense fallback={null}>
    <LazyRegisterForm {...props} />
  </Suspense>
);

export default RegisterForm;
