import NoFoundImg from '../../img/NoFound.png';

// eslint-disable-next-line
import { motion } from 'framer-motion';

function NoFoundCity() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    style={{textAlign : 'center', color : '#fff'}} id='nofoundcity'>
      <img style={{width: '100%'}} src={NoFoundImg} alt="" />
      <h1 style={{fontSize : '40px', marginBottom : '10px'}}>City Not Found</h1>
      <p>Sorry, we couldn't find the city you were looking for. Please check the spelling or try another location.</p>
    </motion.div>
  )
}

export default NoFoundCity
