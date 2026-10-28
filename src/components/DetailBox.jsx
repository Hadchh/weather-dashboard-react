export default function DetailBox({ label, value }) {
  return (
    <div className="detail">
      {label}
      <p className="value">{value}</p>
    </div>
  );
}
