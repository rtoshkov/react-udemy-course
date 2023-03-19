import logo from './logo.svg';
import './App.css';
import ForumInput from "./Components/ForumInput";
import ForumResults from "./Components/ForumResults";
import {useState} from "react";
import ErrorHandler from "./Components/ErrorHandler";


function App() {
    const [records, setRecords] = useState([]);
    const [errors, setErrors] = useState([]);

    return (
        <>
            <ErrorHandler errors={errors} setErrors={setErrors} />
            <ForumInput record={setRecords} setErrors={setErrors} />
            <ForumResults results={records}/>
        </>
    );
}

export default App;
