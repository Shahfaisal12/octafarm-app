import React from 'react'

const GateWay = () => {
    return (
        <div className="gateway-section py-3 py-5 d-none d-md-block">
            <div className="container mt-0 mt-md-5">
                <div className="row text-center d-flex justify-content-around align-items-center">
                    <div className="col-lg-10">
                        <h5 className="fw-bold color-6fffe9c7">EASIEST GATEWAY TO</h5>
                        <h1 className='fw-bold display-5'>Cross-Chain Yield Farming For All</h1>
                        <h6 className=" col-lg-10 lh-1 m-auto">Octafarm will be deployed on various blockchain networks so anyone can access supercharged yields seamlessly cross-chain, thereby maximizing opportunities to access the highest yields.</h6>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 networks">
                        <div className="d-flex align-items-center flex-column">
                            <div className="network-child"><span>Binance</span> &nbsp;
                                <img src="assets/binance.svg" width="50" alt='' />
                            </div>
                            <div className="network-child">
                                <span>Polygon</span> &nbsp;
                                <img src="assets/polygon.svg" width="50" alt='' />
                            </div>
                            <div className="network-child"
                            ><span>Moonbeam</span> &nbsp;
                                <img src="assets/monobeam.svg" width="50" alt='' />
                            </div>
                            <div className="network-child">
                                <span>Avalanche</span> &nbsp;
                                <img src="assets/avalach.svg" width="50" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <div className="octopas-image position-relative">
                            <div className="cotopus-foot">
                                <img src="assets/octopus.svg" width="300" className='position-relative' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 step-4 position-relative">
                        <ul className="list-group">
                            <li className="list-group-item">PancakeSwap Vaults</li>
                            <li className="list-group-item">QuickSwap Vaults</li>
                            <li className="list-group-item">SolarBeam Vaults</li>
                            <li className="list-group-item">Trader Joe Vaults</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 step-5 ml-5">
                        <ul className="list-group">
                            <li className="list-group-item">Auto-Comp. Pools</li>
                            <li className="list-group-item">Multi-Dex Strategy</li>
                            <li className="list-group-item">Maximizer Pools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GateWay