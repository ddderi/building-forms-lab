export default function manageBand(state = {
  bands: [],
}, action) {

  console.log('this action is going to the reducer', action)

  switch(action.type){
    case "ADD_BAND":
      console.log(action.payload)
      return { bands: state.bands.concat(action.payload) }
  }

  return state
};
