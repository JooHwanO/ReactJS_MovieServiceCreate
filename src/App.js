import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [counter, setvalue] = useState(0); // react를 사용하고 있기 때문에 React. 을 붙여줄 필요가 없음.
  // 반환은 array로 됨.

  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setvalue((prev) => prev + 1);
  };
  function onChange(event) {
    setKeyword(event.target.value);
  }

  console.log("i run all the time"); // 상태가 변할때마다 출력됨.

  useEffect(() => {
    console.log("only one"); //밑의 useEffect에 넣었기 때문에 최초 한 번만 실행함.
  }, []); // useEffect에는 컴포넌트가 처음 render할 때 실행되고 다시 실행되지 않을 function을 넣는다

  useEffect(() => {
    console.log("i run when 'keyword' changes ", keyword);
  }, [keyword]); //두번째는 keyword가 변화할때 이코드를 실행하라는 뜻

  useEffect(() => {
    console.log("i run when 'counter' changes ", counter);
  }, [counter]); //두번째는 counter가 변화할때 이코드를 실행하라는 뜻

  useEffect(() => {
    console.log("i run when 'counter'& 'keyword' changes ", counter, keyword);
  }, [keyword, counter]); //두번째는 counter와 keyword가 변화할때 이 코드를 실행하라는 뜻

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search for.."
      ></input>
      <h1>{counter}</h1>
      <Button text="click me" />
      <button onClick={onClick}>click me2!!</button>
    </div>
  );
}

export default App;
