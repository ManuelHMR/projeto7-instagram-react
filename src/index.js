import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body/Body";
import MobileBackground from "./components/MobileBackground";

function App(){
    return (
        <div>    
            <NavBar/>
            <Body/>
            <MobileBackground/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"));
