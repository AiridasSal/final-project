import React, { lazy, Suspense } from 'react';

const LazyQuestionDetails = lazy(() => import('./QuestionDetails'));

const QuestionDetails = (props) => (
  <Suspense fallback={null}>
    <LazyQuestionDetails {...props} />
  </Suspense>
);

export default QuestionDetails;
