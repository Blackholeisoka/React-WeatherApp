const weatherBackground = (condition) => {

    const backgrounds = [
  {
    keyword: 'cloud',
    bg: 'linear-gradient(to bottom, #757F9A 0%, #AAB4C8 35%, #D7DDE8 100%)'
  },
  {
    keyword: 'clear',
    bg: 'linear-gradient(to bottom, #2980B9 0%, #49A7E9 35%, #6DD5FA 100%)'
  },
  {
    keyword: 'rain',
    bg: 'linear-gradient(to bottom, #4B79A1 0%, #355C7D 35%, #283E51 100%)'
  },
  {
    keyword: 'thunder',
    bg: 'linear-gradient(to bottom, #1F1C2C 0%, #3A3456 35%, #928DAB 100%)'
  },
  {
    keyword: 'heavy rain',
    bg: 'linear-gradient(to bottom, #08244F 0%, #134CB5 35%, #0B42AB 100%)'
  },
  {
    keyword: 'sunny',
    bg: 'linear-gradient(to bottom, #FDB813 0%, #FDC830 35%, #F37335 100%)'
  }
];


  const conditionLower = condition.toLowerCase();
  const match = backgrounds.find(({ keyword }) => conditionLower.includes(keyword));
  return match ? match.bg : 'linear-gradient(to bottom, #bdc3c7 0%, #2c3e50 100%)'; // par défaut
};

export default weatherBackground;
