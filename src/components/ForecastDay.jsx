import { describe } from '../codes.js';

export default function ForecastDay({ date, code, max, min }) {
  const info = describe(code);

  return (
    <div className="day">
      <p className="day-icon">{info.icon}</p>
      <p>{date}</p>
      <p>{Math.round(max)}° / {Math.round(min)}°</p>
      <p>{info.text}</p>
    </div>
  );
}
