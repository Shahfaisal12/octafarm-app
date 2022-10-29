import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="https://octafarm.fi/_next/static/image/src/assets/images/logo.ff661cf0d78098e5bb309437cceeb044.png" width={150} className='img-fluid' alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item py-2 mx-3">
                  <Link className="nav-link text-white fw-bold active" aria-current="page" to="/">Overview</Link>
                </li>
                <li className="nav-item py-2 mx-3">
                  <Link className="nav-link text-white fw-bold" to="/">Traction</Link>
                </li>
                <li className="nav-item py-2 mx-3">
                  <Link className="nav-link text-white fw-bold" to="/">Tokenomics</Link>
                </li>
                <li className="nav-item py-2 mx-3">
                  <Link className="nav-link text-white fw-bold" to="/">Roadmap</Link>
                </li>
                <li className="nav-item py-2 mx-3">
                  <Link className="nav-link text-white fw-bold" to="/">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header