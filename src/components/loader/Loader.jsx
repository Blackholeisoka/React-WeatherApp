import LoaderImg from '../../img/Loader.png';
import '../../style/loader.css';

function Loader() {

  return (
    <div className='fade-in-up' style={{textAlign : 'center', color : '#fff'}}>
      <img style={{width: '100%'}} src={LoaderImg} alt="" />
      <h1 className='loader_title' style={{fontSize : '40px', transform : 'translateY(-100px)', marginBottom : '10px'}}>Loading Weather</h1>
      <p style={{transform : 'translateY(-100px)'}}>Please wait while we fetch the latest forecast.</p>
    </div>
  )
}

export default Loader
