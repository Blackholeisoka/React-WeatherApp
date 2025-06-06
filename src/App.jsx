import WeatherProvider from './script/weatherContext.jsx';

import Layout from "./Layout";

function App() {
  return (
    <WeatherProvider>
      <Layout />
    </WeatherProvider>
  );
}

export default App;