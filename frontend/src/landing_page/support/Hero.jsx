function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
          <div className="container ">

       
        <div className="row p-5 g-6 " id="supportWrapper"> 
         <div className="col-6   "> <h3>Support Portal</h3></div>
           <div className="col-6  "> <a href="">Track Tickets</a>
         </div>  
</div>
        <div className="row  p-5  g-6"  >
  <div className="col-6" >
<h1 className="fs-3">Search for an answer or browse help topics
to create a ticket</h1>
<input placeholder=" how do i activate F&O, why is my order getting rejected.." />
<a href="">Track account opening  </a>&nbsp;
 <a  href="">Track segment activation</a> &nbsp; 
 <a  href=""> Intraday margins </a>  &nbsp;
  <a  href="">TradeX user manual</a>
</div>
  <div className="col-6 " >
<h1 className="fs-3">Featured</h1>
<ol>
<li><a href="">Current Takeovers and Delisting - January 2026</a>
    </li>
 <li><a href="">Latest Intraday leverages - MIS & CO</a>
    </li>
</ol>
   </div>
</div>
</div>
        </section>
      );
}

export default Hero;