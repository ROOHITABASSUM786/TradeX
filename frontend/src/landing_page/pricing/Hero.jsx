function Hero() {
    return ( 
        <div className="container">
        <div className="row p-5 border-bottom text-center mt-5">
        <h1>Pricing </h1>
        <h4 className="text-muted fs-5 mt-3">Free equity investment and flat ₹20 Intraday and F&O</h4>
</div>
 <div className="row p-5 mt-5">
    <div className="col-4" p-5>
        <img src="images/pricingEquity.svg" alt="" />
      
<h3>Free equity delivery</h3><br />
<p  className="text-muted ">
  All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
</p>
    </div>
    <div className="col-4" p-5>
        <img src="images/intradayTrades.svg" alt="" />
      
<h3>Intraday and F&O trades</h3><br />
<p className="text-muted">
  Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
  trades across equity, currency, and commodity trades.
</p></div> 
    <div className="col-4" p-5>
              <img src="images/pricingEquity.svg" alt="" />

       
<h3>Free direct MF</h3><br />
<p  className="text-muted">
  All direct mutual fund investments are absolutely free — ₹0 commission.
</p>
    </div>
 </div>
 </div>
     );
}

export default Hero;