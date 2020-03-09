import React, { useState } from 'react';
import './MemeForm.css';

const MemeForm = ({ addMeme }) => {
  const initialData = {
    imgUrl: "",
    topText: "",
    bottomText: ""
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addMeme(formData);
    setFormData(initialData);
  }

  return (
    <div className="MemeForm">
      <form className="MemeForm-form" onSubmit={handleSubmit}>
        <label htmlFor="imgUrl">Image Url for Meme</label>
        <input
          className="MemeForm-field"
          onChange={handleChange} name="imgUrl"
          id="imgUrl"
          value={formData.imgUrl} />
        <label htmlFor="topText">Text for top of meme</label>
        <input
          className="MemeForm-field"
          onChange={handleChange}
          name="topText"
          id="topText"
          value={formData.topText} />
        <label htmlFor="bottomText">Text for bottom of meme</label>
        <input
          className="MemeForm-field"
          onChange={handleChange}
          name="bottomText"
          id="bottomText"
          value={formData.bottomText} />
        <button className="MemeForm-btn">Add Meme!</button>
      </form>
    </div>
  );
}


export default MemeForm;