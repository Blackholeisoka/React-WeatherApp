import { useEffect, useState } from 'react';
import '../../style/citation.sass';

function CitationRandom() {
  const [citationData, setCitationData] = useState(null);

  useEffect(() => {
    const getCitation = async () => {
      try {
        const url = encodeURIComponent('https://zenquotes.io/api/random');
        const response = await fetch(`https://api.allorigins.win/get?url=${url}`);
        if (!response.ok) throw new Error('Réponse réseau non valide');

        const data = await response.json();
        // 'contents' est une chaîne JSON, il faut la parser
        const result = JSON.parse(data.contents);

        setCitationData({
          body: result[0].q,
          author: result[0].a,
        });
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
          <footer>- <cite style={{ fontStyle: 'normal', fontWeight: 'normal' }}>{citationData.author}</cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default CitationRandom;