// Base Imports
import React, { FC } from 'react';
import { ActivityCard } from '../interfaces/index';
// Icons/Images
import iconWork from '../assets/icon-work.svg';
import iconPlay from '../assets/icon-play.svg';
import iconStudy from '../assets/icon-study.svg';
import iconExercise from '../assets/icon-exercise.svg';
import iconSocial from '../assets/icon-social.svg';
import iconSelfCare from '../assets/icon-self-care.svg';

const Card: FC<ActivityCard> = ({ title, timeframes, currentTimeframe }) => {
    const getActivityIcon = (title: string) => {
        switch (title) {
            case 'Work':
                return iconWork;
                return
            case 'Play':
                return iconPlay;
            case 'Study':
                return iconStudy;
            case 'Exercise':
                return iconExercise;
            case 'Social':
                return iconSocial;
            case 'Self Care':
                return iconSelfCare;
            default:
                return iconWork;
        }
    };

    const getBackgroundColor = (title: string) => {
        switch (title) {
            case 'Work':
                return '#FF8B64';
                return
            case 'Play':
                return '#55C2E6';
            case 'Study':
                return '#FF5E7D';
            case 'Exercise':
                return '#4BCF82';
            case 'Social':
                return '#7335D2';
            case 'Self Care':
                return '#F1C75B';
            default:
                return '#FF8B64';
        }
    };

    const changeMargin = (title: string) => {
        if (title === 'Self Care') {
            return -1;
        }
    };

    const getCurrentTimeframe = () => {
        if (currentTimeframe === 'weekly') {
            return timeframes.weekly.current;
        } else if (currentTimeframe === 'monthly') {
            return timeframes.monthly.current;
        } else {
            return timeframes.daily.current;
        }
    };

    const getPreviousTimeframe = () => {
        if (currentTimeframe === 'weekly') {
            return timeframes.weekly.previous;
        } else if (currentTimeframe === 'monthly') {
            return timeframes.monthly.previous;
        } else {
            return timeframes.daily.previous;
        }
    };

    return (
        <div className='card' style={{ backgroundColor: getBackgroundColor(title) }}>
            <img style={{ marginRight: changeMargin(title) }} src={getActivityIcon(title)} alt='activity-icon' />
            <div className='card-container'>
                <div className='card-container-heading'>
                    <div>{title}</div>
                    <div>&#8230;</div>
                </div>

                <div className='card-container-current'>
                    {getCurrentTimeframe()}hrs
                </div>

                <div className='card-container-previous'>
                    Last Week - {getPreviousTimeframe()}hrs
                </div>
            </div>
        </div>
    )
};

export default Card;