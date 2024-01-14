
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count , setCount] = useState(0);
  return (
    <div>
        <p>Button clicked {count} times</p>
        <Button onClick={setCount(prevCount => prevCount + 1)}> click me </Button>
    </div>
  )
}

export default App
