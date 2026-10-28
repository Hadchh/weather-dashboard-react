export function friendly(err) {
  if (err.message === 'not-found') {
    return 'City not found. Check the spelling and try again.';
  }
  if (err.status === 429) {
    return 'Too many requests right now. Wait a minute, then try again.';
  }
  if (err.status >= 500) {
    return 'The weather service is having problems. Try again in a moment.';
  }
  if (err.status) {
    return `The weather service returned an error (${err.message}). Try again.`;
  }
  return "Couldn't reach the server. Check your connection and try again.";
}
