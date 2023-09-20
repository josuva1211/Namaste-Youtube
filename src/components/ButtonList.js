import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const buttonList = ["All", "Music", "Cooking", "Cricket", "Football", "Volleyball", "Badminton", "Politics", "World", "India", "Australia","World Cup", "Movies"];

  return (
    <div className='flex'>
      {buttonList.map((buttonName) => ( 
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  )
}

export default ButtonList;