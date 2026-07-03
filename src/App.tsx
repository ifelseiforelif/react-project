import Test from "./components/Test.tsx";
import {useState} from "react";

function App() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            <button onClick={() => setIsVisible(!isVisible)}>Click</button>
            {isVisible && <Test />}
        </>

    );
}

export default App;