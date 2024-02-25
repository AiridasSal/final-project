import React, { useState, useEffect } from 'react';
import QuestionForm from '../QuestionForm/QuestionFormEmpty';
import fetchData from '../fetchdata';
import Pagination from './PageBar';
import { useLocation } from 'react-router-dom';
StyledModal.setAppElement('#root');
import AuthorBadge from './AuthorBadge';
import { Button } from '../Button/Button.Styled';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

import {
  QuestionsListWrapper,
  QuestionList,
  QuestionListItem,
  QuestionTitle,
  StyledInput,
  StyledSelect,
  FlexContainer,
  StyledModal,
  UpdatedBadge,
  Link,
  QuestionCreatedAt,
  QuestionAnswerCount,
} from './QuestionsList.styled';

const QuestionsList = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [filterOption, setFilterOption] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const { pathname } = location;
  const questionsPerPage = 10;

  const handleSubmitEdit = async (updatedQuestion) => {
    try {
      const response = await fetchData(
        `/questions/${editingQuestion._id}`,
        updatedQuestion,
        'PATCH'
      );
      const updatedQuestions = questions.map((question) => {
        return question._id === editingQuestion._id ? response : question;
      });
      setQuestions(updatedQuestions);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleEditClick = (question) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      try {

        const reqURL = (await url) ? url : `${SERVER_URL}/questions`;

        const response = await fetch(reqURL);
        const data = await response.json();
        setQuestions(data);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [url]);

  useEffect(() => {
    const sortQuestions = (questions, option) => {
      return [...questions].sort((a, b) => {
        if (option === 'newest') {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (option === 'oldest') {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (option === 'mostAnswers') {
          return b.answerCount - a.answerCount;
        } else {
          return a.answerCount - b.answerCount;
        }
      });
    };

    const filterQuestionsBySearch = (questions, query) => {
      return questions.filter((question) =>
        question.title.toLowerCase().includes(query.toLowerCase())
      );
    };

    const sortedQuestions = sortQuestions(questions, filterOption);
    const filteredBySearch = filterQuestionsBySearch(
      sortedQuestions,
      searchQuery
    );

    setFilteredQuestions(filteredBySearch);
  }, [questions, filterOption, searchQuery]);

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  return (
    <QuestionsListWrapper>
      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={handleCancelEdit}
        contentLabel="Edit Question"
      >
        {editingQuestion && (
          <div>
            <FlexContainer>
              <h2>Editing question</h2>
            </FlexContainer>
            <Button onClick={handleCancelEdit}>Cancel</Button>
            <QuestionForm
              title={editingQuestion.title}
              body={editingQuestion.body}
              onSubmit={handleSubmitEdit}
              onClick={handleCancelEdit}
            />
          </div>
        )}
      </StyledModal>
      {pathname !== '/' && (
        <FlexContainer>
          <StyledInput
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <StyledSelect value={filterOption} onChange={handleFilterChange}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="mostAnswers">Most Answers</option>
            <option value="leastAnswers">Least Answers</option>
          </StyledSelect>
        </FlexContainer>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <QuestionList>
        {currentQuestions.map((question) => (
          <QuestionListItem key={question._id}>
            {question.updated && <UpdatedBadge>Updated</UpdatedBadge>}
            <QuestionTitle>
              <Link
                to={{
                  pathname: `/questions/${question._id}`,
                  state: { question: question },
                }}
              >
                <QuestionTitle>{question.title}</QuestionTitle>
              </Link>
            </QuestionTitle>
            <AuthorBadge author={question.author}>Author: </AuthorBadge>
            <QuestionCreatedAt>Posted: {new Date(question.createdAt).toLocaleString()}</QuestionCreatedAt>
            <QuestionAnswerCount>
              Answers: {question.answerCount}
            </QuestionAnswerCount>

            <Button onClick={() => handleEditClick(question)}>Edit</Button>
          </QuestionListItem>
        ))}
      </QuestionList>
    </QuestionsListWrapper>
  );
};

export default QuestionsList;
