const INITIAL_STATE = { memes: [] }

const memeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MEME":
      const newMeme = action.payload;
      return { ...state, memes: [...state.memes, newMeme] }

    case "DELETE_MEME":
      const memeIdToDelete = action.payload
      const memes = state.memes.filter(meme => meme.id !== memeIdToDelete);
      return { ...state, memes }

    default:
      console.warn('No type found', action.type)
      return state;
  }
}

export default memeReducer;