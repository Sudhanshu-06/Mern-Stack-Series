import "./index.css";
// import Button from "./components/Button/Button";
// import TextInput from "./TextInput/TextInput";
import TextInputForm from "./TextInputForm/TextInputForm";
import TextInputFormContainer from "./TextInputForm/TextInputFormContainer";

function App() {
  return (

    <div>
         {/* <TextInputForm/> */}
         <TextInputFormContainer/>

    </div>

    /* 
  
    <Button text="click me" styleType="error" onClickHandler = {()=>
        console.log("click me")}/>
        <Button text="click me 2" styleType="warning" onClickHandler = {()=>
        console.log("click me 2")} />
        <Button text="click me 3" styleType="success" onClickHandler = {()=>
        console.log("click me 3")} />



        <TextInput 
        label = {"Enter some text"}
        placeholder = {"Enter some text here"}
        onChangeHandler = {(e)=> console.log(e.target.value) }
        />
  */
  

        

    
  );
}

export default App;
