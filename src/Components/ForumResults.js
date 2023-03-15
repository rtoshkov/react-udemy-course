const ForumResults = (props) => {
    if (props.results.length > 0) {
        return (
            <div>
                {props.results.map((item) => <p key={item.id}>{item.username} ({item.age} years old)</p>)}
            </div>
        )
    }

    return <p>No items yet</p>
}
export default ForumResults;
