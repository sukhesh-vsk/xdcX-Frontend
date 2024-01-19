import React from 'react'
import CustomButton from '../Custom/CustomButton'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg mx-5 mt-3 sticky-top">
            <div class="container-fluid d-flex space-around">
                <span>
                    <a class="navbar-brand head-text" href="#">XDCX</a>
                </span>
                <div id="navbarSupportedContent">
                    <CustomButton 
                        className="btn btn-green"
                        type="submit"
                        style={{width: "180px"}}
                    >
                        Connect to Wallet
                    </CustomButton>
                </div>
            </div>
        </nav>
    )
}

export default Navbar