function RightSection(
    {imageUrl
    ,productName
    ,productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}) {
    return (  
      <div className="container">
  <div className="row" style={{ alignItems: "center", gap: "40px" }}>
     <div className="col-5 p-5">
      <h1>{productName}</h1>
      <p>{productDescription}</p>
      <div style={{ marginBottom: "20px" }}>
        <a href={learnMore}>Learn More →</a>
      </div>
      
    </div>
    <div className="col-6 p-5" style={{ display: "flex", justifyContent: "center" }}>
      <img src={imageUrl} style={{ maxWidth: "600px", height: "auto" ,  filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15))"}} />
    </div>
   
  </div>
</div>
     );
}

export default RightSection;