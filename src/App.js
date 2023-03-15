import logo from './logo.svg';
import './App.css';
import ForumInput from "./Components/ForumInput";
import {useState} from "react";

function App() {
    const [records, setRecords] = useState([]);

    return (
        <>
            <h1>Test</h1>
            <ForumInput record={setRecords}/>
            <button onClick={() => console.log(records)}>View Records</button>
        </>
    );
}

export default App;
