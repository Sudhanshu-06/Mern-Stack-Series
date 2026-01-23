import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div>
        <Button text="click me" onClickHandler = {()=>
        console.log("click me")}/>
        <Button text="click me 2" onClickHandler = {()=>
        console.log("click me 2")} />
      </div>
    </>
  );
}

export default App;
