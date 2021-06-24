const keynoteReducer = (state = {keynotes: [], loading: false}, action) => {
  switch(action.type) {
    case "KEYNOTES_RECEIVED":
      return {keynotes: action.payload}
    case "KEYNOTE_RECEIVED":
        return {keynote: action.payload}
    case "LOADING":
      return {...state, loading:true}
    case 'CREATE_KEYNOTE':
      return {...state, keynotes: action.payload}
    default:
      return state
  }
}

export default keynoteReducer