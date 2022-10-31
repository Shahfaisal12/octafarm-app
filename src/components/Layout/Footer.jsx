import React from 'react'

const Footer = () => {
  return (
    <div className="footer-section pt-5">
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-3">
            <h5>Company</h5>
            <ul className="">
              <li><a href="/">Bug Bounty</a></li>
              <li><a href="/">Jobs / Career</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Developer</h5>
            <ul className="">
              <li><a href="/">Octa Farm Documentation</a></li>
              <li><a href="/">Explore Github</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Community</h5>
            <ul className="">
              <li><a href="/" >Telegram</a></li>
              <li><a href="/" >Blog</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Legal</h5>
            <ul className="">
              <li><a href="/">Privacy &amp; Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="row footer-border-top d-flex justify-content-between align-items-center">
          <div className="col-md-4 col-12">
           <div classNameName="d-flex justify-content-center justify-content-md-start mt-3 mt-md-0">
           <img src="https://octafarm.fi/_next/static/image/src/assets/images/logo.ff661cf0d78098e5bb309437cceeb044.png
" width="150" alt='' />
           </div>
          </div>
          <div className="col-md-4 col-12 text-center">
           <div classNameName="d-flex justify-content-center justify-content-md-start mt-3 mt-md-0">
            <p className="pt-3 color-6d8bb0">© 2021-22 Octa Farm. All rights reserved.</p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <ul className="p-0 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0
 mt-3 mt-md-0">
               <li>
                <a href="/">
                  <img src="assets/social-icon/github.svg" width={30} alt='' />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="assets/social-icon/twitter.svg" width={30} alt='' />
                </a>
              </li>
              <li>
                <a
                  href="/i">
                  <img src="assets/social-icon/send.svg" width={30} alt='' />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="assets/social-icon/instagram.svg" width={30} alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer