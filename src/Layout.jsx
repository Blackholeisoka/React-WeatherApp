import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./script/weatherContext";

// eslint-disable-next-line
import { motion } from "framer-motion"; 

import Search from "./components/primary/Search";
import MainDegrees from "./components/primary/MainDegrees";
import RainInfo from "./components/primary/RainInfo";
import Today from "./components/primary/Today/Today";
import NextDay from "./components/primary/NextDay";
import SunTime from "./components/primary/SunTime";
import CitationRandom from "./components/primary/CitationRandom";
import Copyright from "./components/primary/Copyright";
import Loader from "./components/loader/Loader";
import NoFoundCity from "./components/error/NoFoundCity";

import "./style/App.sass";
import Maps from "./components/primary/Maps";

function Layout() {
  const data = useContext(WeatherContext);
  const [show, setShow] = useState(false);

  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  const handleSearch = (inputValue, citiesFound) => {
    if (inputValue.length > 3 && citiesFound.length === 0) {
      setNoFound(true);
    } else {
      setNoFound(false);
    }
  };

  useEffect(() =>{
    if(noFound){
      document.body.style.alignItems = 'flex-start';
    } else{
      document.body.style.alignItems = '';
    }

    return () =>  document.body.style.alignItems = '';

  }, [noFound]);

  return data && show ? (
    <motion.div
      className="global_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header>
        <Search onSearch={handleSearch} />
      </header>

      {noFound ? (
        <NoFoundCity />
      ) : (
        <>
          <main>
            <MainDegrees />
          </main>
          <section className="weather_section">
            <RainInfo />
            <Today />
            <NextDay />
            <SunTime />
          </section>
          <Maps/>
          <section className="citation_section">
            <CitationRandom />
          </section>
          <footer>
            <Copyright />
          </footer>
        </>
        )}

    </motion.div>
  ) : (
    <Loader />
  );
}

export default Layout;