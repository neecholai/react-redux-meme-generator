import React from 'react';
import './MemeContainer.css'
import Meme from './Meme';
import MemeForm from './MemeForm';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

const MemeContainer = () => {

  const memes = useSelector(state => state.memes);
  const dispatch = useDispatch();

  const addMeme = formData => {
    const newMeme = { ...formData, id: uuid() }
    dispatch({ type: 'ADD_MEME', payload: newMeme })
  }

  const deleteMeme = memeId => {
    dispatch({ type: 'DELETE_MEME', payload: memeId })
  }

  return (
    <div>
      <MemeForm addMeme={addMeme} />
      <div className='MemeContainer-field'>
        {
          memes.map(meme => <Meme key={meme.id} meme={meme} deleteMeme={deleteMeme} />)
        }
      </div>
    </div>
  );
}

export default MemeContainer;