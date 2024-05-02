// This is Parent Compenent

import { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (<>
        <button onClick={handleClick}>parent count {count}</button>
        <ChildComponent value={count} />
        <ChildComponent value={count} />
        <br />
    </>)
}

export default ParentComponent;


// ---------------------------------------------------------------------------------
// This is child component

function ChildComponent(props) {
    return <button>child count {props.value}</button>;
}

export default ChildComponent;
// Using props with destructuring concept
    function ChildComponet({Value}){
        return <button>Childcount{value}</button>
    }
export default ChildComponent;


-----------------------------------------------------------------------------------------
   // props another method
    function ChildComponent({ value }) {
    return (
        < form >
            <fieldset>
                <legend>{value.name}</legend>
                <p>{value.desc}</p>
            </fieldset>
        </form >
    );
}
function ParentComponent() {
    let movies = [
        { name: "gilli", desc: "vijay and tirisha" },
        { name: 'ayan', desc: 'surya and tamana' },
        { name: 'I', desc: 'vikram and Amy Jackson' },
    ];
    return (<>
        {
            movies.map((value, index) => {
                return <ChildComponent key={index} value={value} />
            })
        }
        <br />
    </>)
}

export default ParentComponent;
