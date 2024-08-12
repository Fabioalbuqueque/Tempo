"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

import React, { useEffect, useState } from "react";
import styles from "./Wearth.module.css";





const Wearth = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  
  
  

  const api_key = "0690b74a5911ddf1f6efe3def6d244d4";
   

  useEffect(() => {
    const fetchwindos = async () => {
      const defaultLocation = "portugal";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const defaultData = await res.json();
      setData(defaultData);
    };
    fetchwindos();
  }, []);

  const handleiInput = (e) => {
    setLocation(e.target.value);
  };

  

  const searcht = async () => {
    if (location.trim() !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const searchData = await res.json();
      console.log(searchData);

      if(!searchData == 200 ){
        setData({NotFound : true})
        
      } 
      
      setData(searchData);
      setLocation([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searcht();
    }
  };
  const currentDate = new Date()

   const daysOfWeek =[
     'Saturday',
     'Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday'
   ]
   const months = [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
     'Jun',
     'Jul',
     'Aug',
     'Sep',
     'Oct',
     'Nov',
     'Dec'
   ]

   const dayOfWeek = daysOfWeek[currentDate.getDay()]
   const month = months[currentDate.getMonth()]
   const dayOfMonth  = currentDate.getDate()
   const formattedDate = `${dayOfWeek}, ${dayOfMonth}, ${month}`

  //const backgroundImagens = {
  //  Clear: 'linear-gradient(to top,#8c9eff.#ff8a65)',
  //  Clouds: 'linear-gradient(to top, #455a64, #79869c)',
  //  Rain: 'linear-gradient(to top, #81d4fa, #80deea)',
  //  Snow: 'linear-gradient(to top, #f3e5f5, #e1bee7)',
  //  Drizzle: 'linear-gradient(to top, #8c9eff, #e0ff)',
  //  Thunderstorm: 'linear-gradient(to top, #ff8a65, #ffca28)',
  //  Mist: 'linear-gradient(to top, #d3d3d3, #f9f9f9)',
  //  Haze: 'linear-gradient(to top, #f5f5f5, #e0e0e0)',
  //  Fog: 'linear-gradient(to top, #f5f5f5, #ffff)'
 //}

  //const backgroundImage = data.weather ? backgroundImagens [data.weather[0].main] 
  // :'linear-gradient(to top,#8c9eff.#ff8a65)'


  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.weatherapp}>
            <div className={styles.search}>
              <div className={styles.searchtop}>
                <i>
                  <FaLocationDot />
                </i>
                <div className={styles.location}>{data.name}</div>
              </div>
              <div className={styles.searchbar}>
                <input
                  type="text"
                  placeholder="Search for a city"
                  onChange={handleiInput}
                  onKeyDown={handleKeyDown}
                />
                <i>
                  <FaSearch onClick={searcht} />
                </i>
              </div>
            </div>
           
            <div className={styles.weather}>
              <div className={styles.weathertype}>
                {data.weather ? data.weather[0].main : null}
              </div>
              <div className={styles.temp}>
                {data.main ? `${Math.floor(data.main.temp)}°C` : null}
              </div>
            </div>
            <div className={styles.weatherdate}>
              <p>{formattedDate}</p>
            </div>
            <div className={styles.weatherdata}>
              <div className={styles.humidity}>
                <div className={styles.datename}>Humidity</div>
                <i>
                  <WiHumidity />
                </i>
                <div className={styles.data}>
                  {data.main ? data.main.humidity : null}%
                </div>
              </div>

              <div className={styles.wind}>
                <div className={styles.datename}>Wind</div>
                <i>
                  <FaWind />
                </i>
                <div className={styles.data}>
                  {data.wind ? data.wind.speed : null} km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Wearth;
