import React from 'react'
import { CPopover, CButton } from '@coreui/react'

import CustomButton from '../Custom/CustomButton'
import qtn from '../../assets/img/question.png'
import './Navbar.css'

const Navbar = () => {
    const walletInfo = "TVL: 1100.12424 XDC\nAPY: 8-10%\nExchange Rate: \n1 XDC = 0.892473118279 XDCX";
    return (
        <nav className="navbar navbar-expand-lg px-5 pt-5 sticky-top" style={{ backdropFilter: 'blur(2px)' }}>
            <a className="navbar-brand head-text m-0" href="#banner">XDCX</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-center stroke" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex justify-content-around">
                    <li className="nav-item active">
                        <a className="nav-link" href="#banner">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#ptp">P2P</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#stake">Stake</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex align-items-center'>
                <div>
                    <CPopover
                        content={<div style={{ whiteSpace: 'pre-line' }}>{walletInfo}</div>}
                        placement="left"
                        trigger={['hover', 'focus']}
                    >
                        <img src={qtn} alt="wallet info" className='me-3 info' />
                    </CPopover>
                </div>
                <CustomButton
                    className="btn btn-green"
                    type="submit"
                    style={{ width: "180px" }}
                >
                    Connect to Wallet
                </CustomButton>
            </div>
            <div>

            </div>
        </nav>
    )
}

export default Navbar