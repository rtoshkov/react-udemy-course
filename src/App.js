import logo from './logo.svg';
import './App.css';
import ForumInput from "./Components/ForumInput";
import ForumResults from "./Components/ForumResults";
import {useState} from "react";


function App() {
    const [records, setRecords] = useState([]);

    return (
        <>
            <h1>Test</h1>
            <ForumInput record={setRecords}/>
            <ForumResults results={records}/>
        </>
    );
}

export default App;
