import { useState, useEffect } from 'react';
import { loadWeather } from './api.js';
import { friendly } from './messages.js';
import SearchBar from './components/SearchBar.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import WeatherCard from './components/WeatherCard.jsx';

export default function App() {
  const [city, setCity] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;
    let ignore = false;

    async function load() {
      setStatus('loading');
      try {
        const data = await loadWeather(city);
        if (!ignore) {
          setWeather(data);
          setStatus('success');
        }
      } catch (err) {
        if (!ignore) {
          setError(friendly(err));
          setStatus('error');
        }
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [city, searchCount]);

  function handleSearch(newCity) {
    setCity(newCity);
    setSearchCount(c => c + 1);
  }

  function handleRetry() {
    setSearchCount(c => c + 1);
  }

  return (
    <>
      <header>
        <h1>Weather Dashboard</h1>
      </header>

      <main>
        <SearchBar onSearch={handleSearch} loading={status === 'loading'} />

        {status === 'idle' && (
          <div className="status-row">
            <p className="idle">Search for a city</p>
          </div>
        )}

        {status === 'loading' && <LoadingSpinner city={city} />}

        {status === 'error' && <ErrorMessage message={error} onRetry={handleRetry} />}

        {status === 'success' && (
          <>
            <div className="status-row">
              <p className="success">Showing weather for {weather.name}</p>
            </div>
            <WeatherCard weather={weather} />
          </>
        )}
      </main>

      <footer>
        <p>Data from Open-Meteo (open-meteo.com)</p>
      </footer>
    </>
  );
}
