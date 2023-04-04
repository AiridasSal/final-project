import React, { useState } from 'react';
import { SearchBarStyled, Select, Button } from './SearchBar.style';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('title');
  const [sort, setSort] = useState('Latest');
  const [limit, setLimit] = useState(10);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSortChange(e) {
    setSort(e.target.value);
  }

  function handleLimitChange(e) {
    setLimit(e.target.value);
  }

  function handleSearch() {
    // Call the onSearch function with the search options
    onSearch(query, category, sort, limit);
  }

  return (
    <div>
      <Select value={category} onChange={handleCategoryChange}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="body">Body</option>
      </Select>
      <SearchBarStyled type="text" value={query} onChange={handleQueryChange} />
      <Select value={sort} onChange={handleSortChange}>
        <option value="Latest">Latest</option>
        <option value="Oldest">Oldest</option>
        <option value="Most Answers">Most Answers</option>
        <option value="Least Answers">Least Answers</option>
      </Select>
      <Select value={limit} onChange={handleLimitChange}>
        <option value="10">10 results</option>
        <option value="20">20 results</option>
        <option value="50">50 results</option>
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default SearchBar;
