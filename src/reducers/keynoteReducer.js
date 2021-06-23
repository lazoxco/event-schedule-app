// const initState = {
//   keynotes: [
//     {
//       "id": "1",
//       "title": "What is Ruby?",
//       "speaker": "Captain America",
//       "description": "Learn OO Ruby",
//       "date_time": "06/12/2022 1:00 PM"
//     },
//     {
//       "id": "2",
//       "title": "What is React?",
//       "speaker": "Black Widow",
//       "description": "Learn React Routers",
//       "date_time": "06/12/2022 2:00 PM"
//     },
//     {
//       "id": "3",
//       "title": "What is Redux?",
//       "speaker": "Tony Stark",
//       "description": "Intro to Redux",
//       "date_time": "06/12/2022 3:00 PM"
//     }
//   ]
// }


const keynoteReducer = (state = {keynotes: []}, action) => {
  switch(action.type) {
    case "GOT_KEYNOTES":
      return {keynotes: action.payload}
    case 'CREATE_KEYNOTE':
      console.log("created keynote")
      console.log(action.keynote)
      break;
    default:
      return state
  }
}

export default keynoteReducer