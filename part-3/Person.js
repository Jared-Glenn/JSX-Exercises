const Person = (props) => {
    let canVote = true
    if (props.age < 18) {
        canVote = false;
    }

    let nameUpdate = props.name;
    if (props.name.length > 8) {
        nameUpdate = props.name.substring(0,6);
    }
    
    return (<div>
        <p>Learn some information about this person</p>
        <h1>{nameUpdate}</h1>
        <h1>{props.age}</h1>
        <h3>{canVote ?  "Please go vote!" : "You must be 18"}</h3>
        <br/>
        <h2>Hobbies</h2>
        <ul>{props.hobbies.map(h => <li>{h}</li>)}</ul>
    </div>)
};