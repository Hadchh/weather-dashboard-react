import { describe } from '../codes.js';
import DetailBox from './DetailBox.jsx';
import ForecastDay from './ForecastDay.jsx';

export default function WeatherCard({ weather }) {
  const { current, daily } = weather;
  const now = describe(current.weather_code);
  const place = weather.country ? `${weather.name}, ${weather.country}` : weather.name;

  return (
    <div className="card">
      <h2>{place}</h2>

      <div className="current">
        <p className="icon">{now.icon}</p>
        <div>
          <p className="temp">{Math.round(current.temperature_2m)}°C</p>
          <p className="conditions">{now.text}</p>
        </div>
      </div>

      <div className="details">
        <DetailBox label="Feels like" value={`${Math.round(current.apparent_temperature)}°C`} />
        <DetailBox label="Humidity" value={`${current.relative_humidity_2m}%`} />
        <DetailBox label="Wind" value={`${current.wind_speed_10m} km/h`} />
      </div>

      <h3>3-day forecast</h3>
      <div className="forecast">
        {daily.time.map((day, i) => (
          <ForecastDay
            key={day}
            date={day}
            code={daily.weather_code[i]}
            max={daily.temperature_2m_max[i]}
            min={daily.temperature_2m_min[i]}
          />
        ))}
      </div>
    </div>
  );
}
