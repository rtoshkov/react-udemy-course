const ForumResults = (props) => {
    if (props.results.length > 0) {
        return (
            <div className="forumResults">
                {props.results.map((item) => <p key={item.id}>{item.username} ({item.age} years old)</p>)}
            </div>
        )
    }

    return (<div className="forumResults"><p>No items yet</p></div>)
}
export default ForumResults;
