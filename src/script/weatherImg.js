import one from '../img/1.png';
import two from '../img/2.png';
import three from '../img/3.png';
import four from '../img/4.png';
import five from '../img/5.png';
import six from '../img/6.png';


const imageVerif = (s = '') =>{

    const keywordsToImages = [
    { keyword: 'cloud', img: one }, 
    { keyword: 'clear', img: two },
    { keyword: 'rain', img: three },
    { keyword: 'thunder', img: four },
    { keyword: 'heavy rain', img: five },
    { keyword: 'sunny', img: six },
  ];

  s = s.toLowerCase();

  for(const entry of keywordsToImages){
    if(s.includes(entry.keyword)){
        return entry.img;
    }
  }

  return keywordsToImages[5].img;

}

export default imageVerif;