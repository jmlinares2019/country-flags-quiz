function Navbar(props){
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Countries app</a>
            <form 
                className="form-inline d-flex"
                onSubmit={props.handleSearch}>
                <input 
                    className="form-control mr-sm-2" type="search" 
                    placeholder="Search for a country" 
                    aria-label="Search" 
                    onChange={props.handleChange}    
                />
                <button 
                    className="btn btn-primary my-2 my-sm-0" 
                    type="submit">
                    Search
                </button>
            </form>
        </nav>
    )
}

export default Navbar