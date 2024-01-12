import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg mx-5 mt-3 sticky-top">
            <div class="container-fluid d-flex space-around">
                <span>
                    <a class="navbar-brand" href="#">XDCX</a>
                </span>
                <div class="" id="navbarSupportedContent">
                    <form class="d-flex flex-row">
                        <button class="btn btn-primary" type="submit">Connect to Wallet </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar