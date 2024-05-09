// --------Call Back function task-----------
// Mainpage----file name 
import { useState } from "react";
import Switchpage from "./Switchpage";
import Navbar from "./Navbar";



function Mainpage() {
    const[tab,setTab]=useState("Libary");
    return ( 
        <>
        <Navbar  tab={tab} setTab={setTab}/>
        <Switchpage tab={tab}></Switchpage>
        </>
    );

}
export default Mainpage;
--------------------------------------------------------------------------------
// Aboutpage--jsx file name
function  Aboutpage() {
    return ( 
        <p>welcome to About page </p>
     );
}

export default  Aboutpage;
--------------------------------------------------------------------------------
// Home page---jsx file name 
function Homepage() {
    return ( 
        <p>welcome t Homepage</p>
     );
}

export default Homepage;
--------------------------------------------------------------------------------
// Switchpage jsx file
import Aboutpage from "./Aboutpage";
import Homepage from "./Homepage";
import Librarypage from "./Librarypage";

function Switchpage({ tab }) {
    switch (tab) {
        case "Home":
            return <Homepage />;
        case "Library":
            return <Librarypage />;
        case "About":
            return <Aboutpage />;

        default:
            return <Homepage />
    }
}

export default Switchpage;
-----------
// Page1-----file name
function Page1() {
    return (  
        <p>This page name "page1"</p>
    );
}

export default Page1;
---------
// Page2 ----file name 
function Page2() {
    return (  
        <p>This page name "page1"</p>
    );
}

export default Page2;
// Page3 ----file name
function Page3() {
    return (  
        <p>This page name "page1"</p>
    );
}

export default Page3;

--------------------------------------------------------------------------------
// Navbar jsx file 
function Navbar({ tab, setTab }) {
    return (
        <>
            <button disabled={tab === "Home"} onClick={() => setTab("Home")}>Home</button>
            <button disabled={tab === "Library"} onClick={() => setTab("Library")}>Library</button>
            <button disabled={tab === "About"} onClick={() => setTab("About")}>About</button>
        </>
    );
}

export default Navbar;  
--------------------------------------------------------------------------------























