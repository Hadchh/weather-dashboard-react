export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="status-row">
      <p className="error">{message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}
