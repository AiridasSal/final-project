import React, { lazy, Suspense } from 'react';

const LazyQuestionForm = lazy(() => import('./QuestionForm'));

const QuestionForm = (props) => (
  <Suspense fallback={null}>
    <LazyQuestionForm {...props} />
  </Suspense>
);

export default QuestionForm;
