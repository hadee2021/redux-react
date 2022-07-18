import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Box from './components/Box'
function App() {

  const count = useSelector(state => state.count) // 가져오기

  const dispatch = useDispatch() //요청하여 바꾸기
  const increase = () => {
    dispatch({type: "INCREMENT", payload:{num: 5} })
  }
  const decrease = () => {
    dispatch({type: "DECREASE", payload:{num: 5} })
  }

  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button><br />
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  )
}

export default App
