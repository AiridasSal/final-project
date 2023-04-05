import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.lazy';
import QuestionForm from '../QuestionForm/QuestionForm.lazy';
import QuestionDetails from '../QuestionDetails/QuestionDetails.lazy';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import Header from '../Header/Header';
import { MainContentContainer } from '../../MainContentContainer.style';

// const PageTitle = () => {
//   const location = useLocation();
//   const path = location.pathname;

//   let title = 'QUESTIONS';

//   if (path === '/questions/new') {
//     title = 'NEW QUESTION';
//   } else if (path.startsWith('/questions/')) {
//     title = 'QUESTION DETAILS';
//   } else if (path === '/login') {
//     title = '';
//   } else if (path === '/register') {
//     title = '';
//   }

//   return <h1>{title}</h1>;
// };

const AppRouter = () => (
  <Router>
    <Header />
    <MainContentContainer>
      {/* <PageTitle /> */}
      <Routes>
        <Route path="/questions/new" element={<QuestionForm />} />
        <Route path="/questions/:id" element={<QuestionDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Home showHeroSectionComponent={true} />} />
      </Routes>
    </MainContentContainer>
  </Router>
);

export default AppRouter;
