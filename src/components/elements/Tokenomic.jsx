import React from 'react'
import Chart from "react-apexcharts";

const Tokenomic = () => {

    const matchesMobile = false;

    const options = {
        labels: ["Private Sale", "Initial Liquidity (will be lock)", "Protocol Mining Rewards", "Presale", 'Team & Advisors', 'Airdrop', 'Marketing', 'CEX & DEX Listing'],
        colors: ["#7CCFC3", "#7CCFC3", "#7CCFC3", "#7CCFC3"],

        plotOptions: {
            pie: {
                customScale: matchesMobile ? 1 : 0.9,
                donut: {
                    size: "65%"
                }
            }
        },

    };


    return (
        <div className="allocation container-fluid">
            <div className="container jumbotron">
                <div className="row headings">
                    <div className="col-lg-12">
                        <h1 className='fw-bold'>Token Allocation</h1>
                    </div>
                </div>
                <div className="row text-center mb-5">
                    <div className="col lh-sm">Ticker<span className='d-block fs-1 fw-bold color-6fffe9c7'>OCTF</span>
                    </div>
                    <div className="col lh-sm">Network<span className='d-block fs-1 fw-bold color-6fffe9c7'>BSC</span>
                    </div>
                    <div className="col lh-sm">Total Fixed Supply<span className='d-block fs-1 fw-bold color-6fffe9c7'>10 Million</span>
                    </div>
                    <div className="col lh-sm">Emission<span className='d-block fs-1 fw-bold color-6fffe9c7'>2 Years</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 my-auto">
                          <Chart series={[10, 5, 1, 4, 10, 1, 5, 62]} options={options} type="donut" />
                    </div>
                    <div className="col-lg-6">
                        <div className="platform">
                            <img src="https://octafarm.fi/_next/static/image/src/assets/images/app.1f3ceabb9d78067a636459d5a154fca6.png" className="img-fluid zInd" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomic