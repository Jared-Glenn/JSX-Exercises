const Tweet = (props) => (
    <div class="tweet-box">
        <h3 class="tweet username">{props.username}</h3>
        <h1 class="tweet message">{props.message}</h1>
        <p class="tweet tweet-info">{props.user} - {props.date}</p>
    </div>
);