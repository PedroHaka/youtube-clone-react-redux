import React, { useState } from 'react'
import './_categoriesbar.scss'

const keywords = [
    'All',
    'HTML',
    'CSS',
    'Javascript',
    'Bootstrap',
    'JQuery',
    'Sass',
    'React.js',
    'Redux',
    'Firebase',
    'API',
    'Angular',
    'React Native',
    'Music',
    'Guitar',
    'Hip Hop',
    'Worship',
    'Gospel',
    'Football',
    'Soccer',
    'Real Madrid',
    'Neymar Jr'
]

const Categoriesbar = () => {

    const [activeElement, setActiveElement] = useState('All');


    const handleClick = (value) => {
        setActiveElement(value);
    }

    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => (
                <span 
                    onClick={() => handleClick(value)}  
                    className={activeElement === value ? 'active' : ''}  
                    key={i}>
                    {value}
                </span>
            ))}
        </div>
    )
}

export default Categoriesbar
