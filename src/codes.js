const WEATHER_CODES = {
  0:  { text: 'Clear sky',              icon: '☀️' },
  1:  { text: 'Mainly clear',           icon: '🌤️' },
  2:  { text: 'Partly cloudy',          icon: '⛅' },
  3:  { text: 'Overcast',               icon: '☁️' },
  45: { text: 'Fog',                    icon: '🌫️' },
  48: { text: 'Freezing fog',           icon: '🌫️' },
  51: { text: 'Light drizzle',          icon: '🌦️' },
  53: { text: 'Drizzle',                icon: '🌦️' },
  55: { text: 'Heavy drizzle',          icon: '🌦️' },
  56: { text: 'Freezing drizzle',       icon: '🌧️' },
  57: { text: 'Freezing drizzle',       icon: '🌧️' },
  61: { text: 'Light rain',             icon: '🌧️' },
  63: { text: 'Rain',                   icon: '🌧️' },
  65: { text: 'Heavy rain',             icon: '🌧️' },
  66: { text: 'Freezing rain',          icon: '🌧️' },
  67: { text: 'Freezing rain',          icon: '🌧️' },
  71: { text: 'Light snow',             icon: '🌨️' },
  73: { text: 'Snow',                   icon: '❄️' },
  75: { text: 'Heavy snow',             icon: '❄️' },
  77: { text: 'Snow grains',            icon: '🌨️' },
  80: { text: 'Light rain showers',     icon: '🌦️' },
  81: { text: 'Rain showers',           icon: '🌧️' },
  82: { text: 'Violent rain showers',   icon: '⛈️' },
  85: { text: 'Snow showers',           icon: '🌨️' },
  86: { text: 'Heavy snow showers',     icon: '🌨️' },
  95: { text: 'Thunderstorm',           icon: '⛈️' },
  96: { text: 'Thunderstorm with hail', icon: '⛈️' },
  99: { text: 'Thunderstorm with hail', icon: '⛈️' },
};

export function describe(code) {
  return WEATHER_CODES[code] || { text: 'Unknown', icon: '🌡️' };
}
