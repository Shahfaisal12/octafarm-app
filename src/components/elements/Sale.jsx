import React from 'react'

const Sale = () => {
    return (
        <div className="sale-section py-5">
            <div class="container sale">
                <div class="row d-flex justify-content-around">
                    <div class="col-lg-12">
                        <div class="row ">
                            <div class="col-lg-4 box">
                                <div className="card">
                                    <span class="coming">completed</span>
                                    <div className="card-body">
                                        <p class="text-center lh-1"><span className='color-6fffe9c7 fw-bold'>Private Sale</span>
                                            <span className='d-block'>13th Jan, 2022</span>
                                        </p>
                                        <h5 className="lh-1 text-center fw-bold my-5 fs-1">
                                            <span className="upto fs-5 d-block color-6fffe9c7">Bonus</span>7%
                                            <span className="percent fs-3 fw-bold">%</span>
                                        </h5>
                                        <p className="card-ft text-center"><b>Allocation:</b> 1.5% Tokens <br /> <b>Price:</b> 1 BNB ≈ 691.93 OCTF</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1 box">
                                <span class="coming">completed</span>
                                <p class="mb-0 pb-0 m-auto">
                                    <span class="title mb-2">Pre Sale</span>
                                    <span class="date mb-3">15th Jan, 2022 @ PinkSale</span>
                                    <span class="one">
                                        <span class="upto">Bonus</span>3%</span>
                                    <p class="desc"><b>Allocation:</b> 10% Tokens<br /><b>Price:</b> 1 BNB ≈ 666.66 OCTF</p></p>
                            </div>
                            <div class="col-lg-3 offset-lg-1 box">
                                <span class="coming aleer">Live Now</span>
                                <p class="mb-0 pb-0 m-auto">
                                    <span class="title mb-2">Listing</span>
                                    <span class="date mb-3">PancakeSwap</span>
                                    <span class="one"><span class="upto">Listing Price</span>$0.75</span>
                                    <p class="desc"><b>Allocation:</b> 5% Tokens<br /><b>Price:</b> 1 BNB ≈ 646.66 OCTF</p>
                                    <a href="/" class="mt-4 w-100 button btn btn-primary">Buy OCTF</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sale