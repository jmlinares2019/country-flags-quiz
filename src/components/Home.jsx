function Home(){
    return (
        <>
        <div className="row">
            <div className="col">
                <h1>Welcome to my Flags Quiz!</h1>
                <p>Try to guess which country is every flag from. In case of doubt, you can have some help by getting a hint, but if you guess that flag, you will only score 0.5 points for it. Ready?</p>
                <button className="btn start-btn">
                    <a href="/quiz">Start</a>
                </button>
            </div>
        </div>
            
        </>
    )
}

export default Home