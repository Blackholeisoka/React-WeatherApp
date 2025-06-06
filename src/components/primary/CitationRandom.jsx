import { useEffect, useState } from 'react';
import '../../style/citation.css';

function CitationRandom() {
  const [citationData, setCitationData] = useState(null);

  useEffect(() => {
    const getCitation = async () => {
      try {
        const url = 'http://api.quotable.io/random?maxLength=70';
        const response = await fetch(url);
        const result = await response.json();
        setCitationData({ body: result.content, author: result.author });
      } catch (error) {
        console.error('Erreur lors du fetch:', error);
      }
    };

    getCitation();
  }, []);


  if (!citationData) {
    return <div>Chargement de la citation...</div>;
  }

  return (
    <div className='citation'>
      <div className="citation_title">
        <h2>Citation</h2>
        <i className="fa-solid fa-feather"></i>
      </div>
      <div className="citation_text">
        <blockquote>
          "{citationData.body}"
          <footer>- <cite style={{fontStyle : 'normal', fontWeight : 'normal'}}>{citationData.author}</cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default CitationRandom;