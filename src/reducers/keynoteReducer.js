const keynoteReducer = (state = {keynotes: [], loading: false}, action) => {
  switch(action.type) {
    case "GOT_KEYNOTES":
      return {keynotes: action.payload}
    case "LOADING":
      return {...state, loading:true}
    case 'CREATE_KEYNOTE':
      console.log("created keynote")
      console.log(action.keynote)
      break;
    default:
      return state
  }
}

export default keynoteReducer