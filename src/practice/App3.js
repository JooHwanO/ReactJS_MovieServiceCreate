import { useState } from "react";

function App3() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
  };
  
  console.log(toDo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          onChange={onChange}
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App3;
