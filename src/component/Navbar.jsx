import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">
                        Latest News
                    </a>
                </div>
            </nav>
        </div>
    );
    
}

export default Navbar;
//https://newsapi.org/v2/top-headlines?country=us&apiKey=9e2908d9bef945d6b21d9924bbaae0bd
