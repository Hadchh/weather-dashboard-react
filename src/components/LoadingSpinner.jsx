export default function LoadingSpinner({ city }) {
  return (
    <div className="status-row">
      <p className="loading">Loading {city}…</p>
      <div className="dot"></div>
    </div>
  );
}
