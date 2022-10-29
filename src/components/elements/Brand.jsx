import React from 'react'

const Brand = () => {
    return (
        <div className="brand-section">
            <div className="container">
                <div className="row">
                    <div className="zIndex d-flex flex-wrap justify-content-around align-items-center">
                        <a href="/"> <img src="assets/brand1.png" alt='' width={200} /></a> &nbsp;
                        <a href="/"> <img src="assets/brand2.png" alt='' width={200} /></a> &nbsp;
                        <a href="/"><img src="assets/brand3.svg" alt='' width={200} /></a>
                    </div>
                </div>
            </div>

            <svg xmlns="/" width="2840" height="2" viewBox="0 0 2840 2" fill="none"><path d="M-15 1H2855" stroke="white" stroke-opacity="0.15" stroke-linejoin="round" stroke-dasharray="1 5"></path><path d="M0 1H33" stroke="url(#footer_grad)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shoot-right"></path><defs><linearGradient id="footer_grad" x1="0" y1="2" x2="33" y2="2" gradientUnits="userSpaceOnUse"><stop offset="5%" stop-color="#61CDEF" stop-opacity="0"></stop><stop offset="95%" stop-color="#61CDEF"></stop></linearGradient></defs></svg>

            <div className='container'>
                <div className="row">
                    <div className="zIndex d-flex flex-wrap justify-content-around align-items-center">
                        <a href="/"><img src="assets/brand4.png" alt='' width={200} /></a>&nbsp;
                        <a href="/"><img src="assets/brand5.png" alt='' width={200} /></a>&nbsp;
                        <a href="/"><img src="assets/brand6.png" alt='' width={200} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand