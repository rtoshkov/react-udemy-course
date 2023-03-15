import {useState} from "react";

const ForumInput = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const forumHandler = (e) =>{
        e.preventDefault();
        props.record((old) => {
            old.push(`${username} (${age} years old)`);
            return old;
        })
        setAge('');
        setUsername('');
    }

    const usernameHandler = (e) => {
        {setUsername(e.target.value)}
    }

    const ageHandler = (e) => {
        {setAge(e.target.value)}
    }

    return (
        <form onSubmit={forumHandler} className="formForUsernameAndAge">

            <div className="formUsername">
            <label htmlFor="username">Username</label>
            <input type="text" id={username} value={username} onChange={usernameHandler}/>
            </div>

            <div className="formAge">
                <label htmlFor="age">Age</label>
                <input type="number" id={age} value={age} onChange={ageHandler}/>
            </div>

            <input type="submit" value="Subnmit Me"/>
        </form>
    )
}

export default ForumInput;