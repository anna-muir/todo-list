import './index.css';
import { useState } from 'react'


let id = 0
const OG_TASKS = [
  { id: id++, label: 'Walk the dog' },
  { id: id++, label: 'Water the plants' },
  { id: id++, label: 'Wash the dishes' },
]

const App = () => {

  const [taskList, setTaskList] = useState(OG_TASKS)
  const [task, setTask] = useState('')

  const changeHandler = (event) => {
    event.preventDefault()
    setTask(event.target.value)
  }

  const submitHandler = () => {
    if (task.length === 0) {
      alert('Please enter a task.')
    } else {
      setTaskList([...taskList, { "id": id++, "label": task }])
      // setTaskList(...taskList, taskList)
      console.log(taskList)
      setTask('')
    }

  }


  const onDelete = (id) => {

    const newList = taskList.filter((item) => item.id !== id)
    setTaskList(newList)
    console.log(newList)


  }









  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={task} type="text" placeholder="Add your task" onChange={changeHandler} />
        <div>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
      <ul>
        {taskList.map(({ id, label }) => (
          <li key={id}>{label}  <button

            onClick={() => onDelete(id)}
          >Delete</button></li>
        ))}

      </ul>
    </div>
  );
}

export default App;
