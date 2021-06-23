const url = "http://localhost:8000/keynotes"

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

export const setKeynotes = (keynotes) => ({type: "KEYNOTES_RECEIVED", payload: keynotes})

export const addKeynote = (keynote) => ({type: "CREATE_KEYNOTE", payload: keynote})

export const createKeynote = (keynote) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(keynote)
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      const newKeynote = data
      dispatch(addKeynote(newKeynote))
    })
  }
}