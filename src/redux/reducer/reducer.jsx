let initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log('action은 뭘까?? ', action)
  // {type: 'INCREMENT', payload: {…}}
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload.num}
    case 'DECREASE':
      return { ...state, count: state.count - action.payload.num}
    default :
      return {...state}
  }
}

export default reducer