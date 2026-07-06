function Team() {
    return ( 
              <div className="container ">
        <div className="row border-top  ">
        <h1 className="text-center mt-3" >People</h1>
 </div>

 <div className="row    text-muted " style={{lineHeight:"2.1rem",fontSize:"1,2em" ,margin:"1.5rem"}}>

<div className="col p-5  text-center " >
    
    <img src="images/founder.png " alt="Founder" style={{height:"250px",width:"250px",borderRadius:"100%"}}/>
    <br /> <br /> <h3 >Roohi T. </h3>
    <p>Founder & CEO, TradeX</p>

</div>
<div className="col p-5 ">
            <p>
                I founded <strong>TradeX</strong> with a vision to simplify
                investing and make trading accessible to everyone.
                By combining modern technology with intuitive design,
                TradeX delivers a seamless and secure trading experience.
            </p>
            <p>
                As a full-stack developer with a strong interest in fintech,
                I'm focused on building end-to-end products — from the
                interface traders interact with, to the systems running
                behind the scenes — that empower everyday investors to
                make smarter, more confident financial decisions.
            </p>
            <p>
                When I'm not building TradeX, you'll find me reading
                about market trends or exploring new places.
            </p>
            <div className="links" >
                <a href="https://github.com/ROOHITABASSUM786" style={{textDecoration:"none"}}>GitHub</a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/roohitabassum21/" style={{textDecoration:"none"}}>LinkedIn</a>&nbsp;&nbsp;
              
            
        </div>
    </div>

       
       </div>
 </div>

     );
}

export default Team;