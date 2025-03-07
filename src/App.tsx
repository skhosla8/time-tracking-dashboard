// Base Imports
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ActivityCard } from './interfaces';
// components 
import Card from './components/Card';
// Images/Icons
import JeremyImage from './assets/image-jeremy.png'

function App() {
  const data = require('./data.json');

  const [currentTimeframe, setCurrentTimeframe] = useState<string>('weekly');

  const dailyTimeframeRef = useRef<HTMLDivElement | null>(null);
  const weeklyTimeframeRef = useRef<HTMLDivElement | null>(null);
  const monthlyTimeframeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    weeklyTimeframeRef.current!.style.color = '#FFFFFF';
  }, []);

  const handleDailyTimeframe = () => {
    setCurrentTimeframe('daily');
    dailyTimeframeRef.current!.style.color = '#FFFFFF';
    weeklyTimeframeRef.current!.style.color = '#7078C9';
    monthlyTimeframeRef.current!.style.color = '#7078C9';
  };

  const handleWeeklyTimeframe = () => {
    setCurrentTimeframe('weekly');
    weeklyTimeframeRef.current!.style.color = '#FFFFFF';
    dailyTimeframeRef.current!.style.color = '#7078C9';
    monthlyTimeframeRef.current!.style.color = '#7078C9';
  };

  const handleMonthlyTimeframe = () => {
    setCurrentTimeframe('monthly');
    monthlyTimeframeRef.current!.style.color = '#FFFFFF';
    dailyTimeframeRef.current!.style.color = '#7078C9';
    weeklyTimeframeRef.current!.style.color = '#7078C9';
  };

  return (
    <div className="App">
      <div className='outer-container'>
        <div className='container-1'>
          <div className='profile-card'>
            <div className='profile-img-container'>
              <img src={JeremyImage} alt='profile-img' />
            </div>

            <div className='profile-text-container'>
              <div>Report for</div>
              <div>Jeremy <br></br> Robson</div>
            </div>
          </div>

          <div className='occurrence-card'>
            <div ref={dailyTimeframeRef} onClick={handleDailyTimeframe}>Daily</div>
            <div ref={weeklyTimeframeRef} onClick={handleWeeklyTimeframe}>Weekly</div>
            <div ref={monthlyTimeframeRef} onClick={handleMonthlyTimeframe}>Monthly</div>
          </div>

        </div>

        <div className='container-2'>
          {data.map((card: ActivityCard) =>
            <Card
              title={card.title}
              timeframes={card.timeframes}
              currentTimeframe={currentTimeframe}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
