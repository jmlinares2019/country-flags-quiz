function Home(props){

    const totalQuestions = props.totalQuestions;

    return (
        <>
        <div className="row">
            <div className="col">
                <h1>Welcome to my Flags Quiz!</h1>
                <p>We'll show you {totalQuestions} flags and you need to guess which countries are they from. In case of doubt, you can have some help by getting a hint, but if you guess that flag, you will only score 0.5 points for it. Ready?</p>
                <button className="btn start-btn">
                    <a href="/quiz">Start</a>
                </button>
            </div>
        </div>
            
        </>
    )
}

export default Home