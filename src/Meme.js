import React, { useState } from 'react';
import './Meme.css'

const Meme = ({ meme, deleteMeme }) => {

  const { imgUrl, topText, bottomText } = meme;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = evt => {
    deleteMeme(meme.id);
  }

  const handleMouseOver = evt => {
    setIsHovered(true);
  }

  const handleMouseOut = evt => {
    setIsHovered(false);
  }

  return (
    <div className='Meme' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img className='Meme-img' src={imgUrl} alt='meme' />
      {isHovered ?
        <div className='Meme-remove-text'>X</div> :
        null
      }
      <div className='Meme-top-text'>{topText}</div>
      <div className='Meme-bottom-text'>{bottomText}</div>
    </div>
  );
}

export default Meme;