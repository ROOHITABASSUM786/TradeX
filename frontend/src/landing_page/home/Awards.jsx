import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 ">
                    <img src="images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million TradeX clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className="row ">
                        <div className="col-6">
                            <ul><li className='mb-3'>Futures and Options</li >
                            <li className='mb-3'>Commodity derivatives</li>
                            <li className='mb-3' >Currency derivatives</li></ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li className='mb-3'>Stocks & IPOs</li>
                        <li className='mb-3'>Direct mutual funds</li>
                        <li className='mb-3'>Bonds and Govt. Securities</li>
                    </ul>
                        </div>
                    </div>
                        
                   <img src="images/pressLogos.png" style={{width:"99%"}} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Awards;