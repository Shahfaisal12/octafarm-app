import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section py-3 py-md-5 my-0 my-md-5">
      <div id="octopus-rotate" className="hero-bg-image bg_img_index">
        <img className="bg_img_front" src="assets/big-img.png" alt="" />
        <img className="bg_img_middle" src="assets/big-oct-back.png" alt="" />
        <img className="bg_img_back" src="assets/big-oct-middle.png" alt="" />

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Maximize Staking Returns <br />with Auto-Compounding</h1>
            <h3 className='color-6fffe9c7'>Automate your DeFi reinvestment with Octafarm to compound your returns even when you sleep!</h3>
            <div className="row">
              <div className="col-md-8">
                <a href="/" className="mt-4 w-100 btn btn-primary">Buy on Pancakeswap</a>
                <p className="mt-4 mb-0 pb-0">
                  <code>Official Contract: 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e</code>
                </p>
              </div>
                <div class="row m-auto">
                  <div class="col col-lg-auto">
                    <a href="/" class="mt-4 btn w-100 btn-outline-primary">Launch App</a>
                  </div>
                  <div class="col col-lg-auto">
                    <a href="/" class="mt-4 w-100 btn btn-outline-primary">Documentation</a>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="embed-video">
              <iframe width="546" height="358" src="https://www.youtube.com/embed/2MBH3qpOgPI" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero