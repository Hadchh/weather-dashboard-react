import { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const city = text.trim();
    if (!city) {
      setError('Please type a city name first.');
      return;
    }
    onSearch(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city-input">City</label>
      <div className="search-row">
        <input
          id="city-input"
          name="city"
          type="text"
          placeholder="e.g. Beirut"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading} className={loading ? 'busy' : ''}>
          Search
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
