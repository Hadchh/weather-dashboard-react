const GEO = 'https://geocoding-api.open-meteo.com/v1/search';
const WX = 'https://api.open-meteo.com/v1/forecast';

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function loadWeather(city) {
  const q = new URLSearchParams({ name: city, count: 1 });
  const geo = await getJSON(`${GEO}?${q}`);
  if (!geo.results?.length) throw new Error('not-found');

  const { latitude, longitude, name, country } = geo.results[0];
  const p = new URLSearchParams({
    latitude, longitude, forecast_days: 3,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code',
  });
  return { name, country, ...(await getJSON(`${WX}?${p}`)) };
}
