'use client';
import { useEffect, useState } from 'react'; // Импортируйте useEffect и useState
import scss from './Time.module.scss';

const Time = () => {
  const [currentTime, setCurrentTime] = useState({});
  const upDateTime = () => {
    const now = new Date();
    setCurrentTime({
      day: now.getDate(),
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    });
  };
  useEffect(() => {
    const interTime = setInterval(upDateTime, 1000);
    upDateTime();
    return clearInterval(() => interTime);
  }, []);
  return (
    <div className={scss.Time}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.flex}>
            <div className={scss.today}></div>
            <h1 className={scss.textToday}>Today’s</h1>
          </div>
          <div className={scss.allTime}>
            <h3 className={scss.flash}>Flash Sales</h3>
            <div className={scss.time}>
              <div className={scss.day}>
                <h3 className={scss.text}>Days</h3>
                <h3 className={scss.currentTime}>{currentTime.day}</h3>
              </div>
              <div className={scss.span}>
                <span></span>
                <span></span>
              </div>
              <div className={scss.hours}>
                <h3 className={scss.text}>Hours</h3>
                <h3 className={scss.currentTime}>{currentTime.hours}</h3>
              </div>
              <div className={scss.span}>
                <span></span>
                <span></span>
              </div>
              <div className={scss.minutes}>
                <h3 className={scss.text}>Minutes</h3>
                <h3 className={scss.currentTime}>{currentTime.minutes}</h3>
              </div>
              <div className={scss.span}>
                <span></span>
                <span></span>
              </div>
              <div className={scss.seconds}>
                <h3 className={scss.text}>Seconds</h3>
                <h3 className={scss.currentTime}>{currentTime.seconds}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
