import {useState} from "react";

const ForumInput = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const sanitizeValues = () => {
        let errors = [];
        if (username.length < 3) {
            errors.push(
                {
                    message: 'Username should be at least 3 characters',
                    id: 1
                }
            );
        }
        if (
            !Number.isInteger(Number(age))
            || age < 1
            || age > 100
        ) {
            errors.push({message: 'Please select a valid age', id: 2})
        }
        return errors;
    }

    const forumHandler = (e) => {
        e.preventDefault();

        let errors = sanitizeValues();
        if (errors.length > 0) {
            props.setErrors(errors);
            return;
        } else {
            props.setErrors([]);
        }


        props.record((old) => {
            let newItem = [...old];
            newItem.push({
                username,
                age,
                id: 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16))
            });
            return newItem;
        })
        setAge('');
        setUsername('');
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value.trim())
    }
    const ageHandler = (e) => {
        setAge(e.target.value.trim())
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

            <input type="submit" value="Add User"/>
        </form>
    )
}

export default ForumInput;