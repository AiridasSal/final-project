import { useState, useEffect } from 'react';
import SearchBar from './parcials/SearchBar';
import QuestionsList from '../QuestionsList/QuestionsList';
import HeroSectionComponent from '../Header/HeroSection';
function Home() {
  const [url, setUrl] = useState('');

  const handleSearch = async (query, category, sort, limit) => {
    const response = await fetch(
      `http://localhost:3000/questions/questions/?query=${query}&category=${category}&sort=${sort}&limit=${limit}`
    );
    localStorage.setItem(
      'searchOptions',
      JSON.stringify(`${query}, ${category}, ${sort}, ${limit}`)
    );
    const newUrl = response.url;
    setUrl(newUrl);
  };

  useEffect(() => {}, [url]);

  function handleEdit(id) {}

  useEffect(() => {
    async function fetchLatestAnswers() {
      let query = '';
      let category = 'title';
      let sort = 'Most Answers';
      let limit = 10;

      if (localStorage.getItem('searchOptions')) {
        console.log(localStorage.getItem('searchOptions'));
        [query, category, sort, limit] = JSON.parse(
          localStorage.getItem('searchOptions')
        ).split(', ');
      }

      const response = await fetch(
        `http://localhost:3000/questions/questions/?query=${query}&category=${category}&sort=${sort}&limit=${limit}`
      );
      setUrl(response.url);
    }

    fetchLatestAnswers();
  }, []);

  useEffect(() => {
    console.log(url);
  }, [url]);

  return (
    <>
   
    
    <div>
      <SearchBar onSearch={handleSearch} />

      {url && <QuestionsList url={url} setCurrentPage={1} />}
    </div>
    </>
  );
}

export default Home;
