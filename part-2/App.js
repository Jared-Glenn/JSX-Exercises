const App = () => {
    return <div>
        <Tweet username="Dreadman" user="Jared" message="First Tweet!" date="2/26/2024"/>
        <Tweet username="FreedomDude" user="Jason" message="Murica!" date="2/26/2024"/>
        <Tweet username="AnimeGal" user="Yuri" message="I'll take a chip ... and EAT IT!" date="2/26/2024"/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById("root"));