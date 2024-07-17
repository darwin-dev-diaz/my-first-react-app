import { useState } from "react";

function NameInput({title, onChange}){
    return(
        <input 
            type="text"
            placeholder={title}
            onChange={onChange}
         />
    )
}
export default function Person() {
    const [person, setPerson] = useState({ firstName: "John", lastName: "Diaz", age: 100 });
    function handleFirstNameChange (e){
        setPerson({...person, firstName: e.target.value})
    }
    function handleLastNameChange (e){
        setPerson({...person, lastName: e.target.value})
    }
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      setPerson({ ...person, age: person.age + 1 });
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };
  
    console.log("during render: ", person);
  
    return (
      <>
        <NameInput 
            title="First"
            onChange={handleFirstNameChange}/>
        <NameInput 
            title="Last"
            onChange={handleLastNameChange}/>

        <h1>{"Welcome,  " + person.firstName + " " + person.lastName}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }
  