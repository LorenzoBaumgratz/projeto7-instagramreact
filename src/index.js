import ReactDOM from "react-dom";
import Corpo from "./components/corpo";
import NavBar from "./components/navbar";

function Load() {
    return (
        <div class="root">
            <NavBar />
            <Corpo />
        </div>
    )
}

ReactDOM.render(Load(), document.querySelector("body"));