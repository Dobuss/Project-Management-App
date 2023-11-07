import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick(){
    onAdd(enteredTask);
    setEnteredTask('');

  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-2 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button onClick={handleClick} 
      className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}
