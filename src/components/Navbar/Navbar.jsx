import React from 'react'
import CustomButton from '../Custom/CustomButton'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-5 pt-5">
            <a className="navbar-brand head-text m-0" href="#">XDCX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-center stroke" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-around">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">LINK</a>
                    </li>
                </ul>
            </div>
                <CustomButton
                    className="btn btn-green"
                    type="submit"
                    style={{ width: "180px" }}
                >
                    Connect to Wallet
                </CustomButton>
            <div>

            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg mx-5 mt-3 sticky-top">
        //     <div className="container-fluid d-flex space-around">
        //         <span>
        //             <a className="navbar-brand head-text" href="#">XDCX</a>
        //         </span>
        //         <div>
        //             <ul className='d-flex justify-content-around'>
        //                 <li>HOME</li>
        //                 <li>HOME</li>
        //                 <li>HOME</li>
        //             </ul>
        //         </div>
        //         <div id="navbarSupportedContent">
        //             <CustomButton 
        //                 className="btn btn-green"
        //                 type="submit"
        //                 style={{width: "180px"}}
        //             >
        //                 Connect to Wallet
        //             </CustomButton>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar