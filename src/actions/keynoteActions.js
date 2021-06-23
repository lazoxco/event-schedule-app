const url = "http://localhost:8000/keynotes"

export const createKeynote = (keynote) => {
  return (dispatch, getState) => {
    // make async call to DB
    dispatch({type: 'CREATE_KEYNOTE', keynote})
  }
}

export const setKeynotes = (keynotes) => ({type: "GOT_KEYNOTES", payload: keynotes})

export const fetchKeynotes =  () => {
  return(dispatch) => {
    dispatch({type: "LOADING"})
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      const keynotes = data
      dispatch(setKeynotes(keynotes))
    })
  }
}


    