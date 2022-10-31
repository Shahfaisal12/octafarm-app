import React from 'react'

const Sale = () => {
    return (
        <div className="sale-section py-5">
            <div className="container sale">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-12">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 mb-3 mb-md-0">
                                <div className="card">
                                    <span class="badge coming">COMPLETED</span>
                                    <div className="card-body">
                                        <p class="text-center lh-1 mb-3"><span className='color-6fffe9c7 title1'>PRIVATE SALE</span>
                                            <span className='d-block'>13th Jan, 2022</span>
                                        </p>
                                        <h5 className="lh-1 text-center">
                                            <span className="d-block color-6fffe9c7 bonous">Bonus</span><span className=' fw-bold display-4'>7%</span>
                                        </h5>
                                        <p className="card-ft text-center"><b>Allocation:</b> 1.5% Tokens <br /> <b>Price:</b> 1 BNB ≈ 691.93 OCTF</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-3 mb-md-0">
                                <div className="card">
                                    <span class="badge coming">COMPLETED</span>
                                    <div className="card-body">
                                        <p class="text-center lh-1 mb-3"><span className='color-6fffe9c7 title1'>PARE SALE</span>
                                            <span className='d-block'>15th Jan, 2022 @ PinkSale</span>
                                        </p>
                                        <h5 className="lh-1 text-center">
                                            <span className="d-block color-6fffe9c7 bonous">Bonus</span><span className=' fw-bold display-4'>3%</span>
                                        </h5>
                                        <p className="card-ft text-center"><b>Allocation:</b> 10% Tokens <br /> <b>Price:</b> 1 BNB ≈ 666.66 OCTF</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-3 mb-md-0">
                                <div className="card">
                                    <span class="badge coming bg-danger text-white">LIVE NOW</span>
                                    <div className="card-body">
                                        <p className="text-center lh-1 mb-3"><span className='color-6fffe9c7 title1'>Listing</span>
                                            <span className='d-block'>PancakeSwap</span>
                                        </p>
                                        <h5 className="lh-1 text-center">
                                            <span className="d-block color-6fffe9c7 bonous">Listing Price</span><span className=' fw-bold display-4'>$0.75</span>
                                        </h5>
                                        <p className="card-ft text-center"><b>Allocation:</b>5% Tokens <br /> <b>Price:</b> 1 BNB ≈ 646.66 OCTF</p>
                                        <a href="/" className="mt-4 w-100 button btn btn-primary">Buy OCTF</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sale

