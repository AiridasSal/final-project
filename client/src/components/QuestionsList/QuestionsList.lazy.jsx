import React, { lazy, Suspense } from 'react';

const LazyQuestionsList = lazy(() => import('./QuestionsList'));

const QuestionsList = (props) => (
  <Suspense fallback={null}>
    <LazyQuestionsList {...props} />
  </Suspense>
);

export default QuestionsList;
