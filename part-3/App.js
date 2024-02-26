const App = () => {
    return <div>
            <Person name="Jared" age={38} hobbies={['Gaming', 'Coding', 'Reading']}/>
            <Person name="Genevieve" age={4} hobbies={['Playing', 'Watching', 'Drawing']}/>
            <Person name="Ethan" age={11} hobbies={['Gaming', 'Playing']}/>
        </div>
};

ReactDOM.render(<App/>, document.getElementById("root"));