import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeLastTodo } from './store/userSlice'
import '../src/App.css'


function App() {
  const [value, setValue] = useState('')
  
  const state = useSelector(state => state.users)
  console.log(state);
  const logMe = () => {
    dispatch(removeLastTodo())
  }
  const handleChangeInput = (e) => {
    setValue(e.target.value)
  }
  const addUsers = () => {
    if(value == '') {
      
    }else {
      dispatch(addUser(value[0].toUpperCase()+ value))
      setValue('')
    }
  }
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <div className="div">
      <input value={value} onChange={handleChangeInput} type="text" />
      <button onClick={addUsers}>Добавить</button>
      <button onClick={logMe} >Удалить последний</button>
      <div>
        {state.map(user => (
          <p>{user}</p>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
