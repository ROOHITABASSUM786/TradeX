function LeftSection({imageUrl
    ,productName
    ,productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore}) {
    return (  
      <div className="container">
  <div className="row" style={{ alignItems: "center", gap: "40px" }}>
    <div className="col-6 p-5" style={{ display: "flex", justifyContent: "center" }}>
      <img src={imageUrl} style={{ maxWidth: "600px", height: "auto" ,  filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15))"}} />
    </div>
    <div className="col-5 p-5">
      <h1>{productName}</h1>
      <p>{productDescription}</p>
      <div style={{ marginBottom: "20px" }}>
        <a href={tryDemo} style={{ marginRight: "20px" }}>Try Demo →</a>
        <a href={learnMore}>Learn More →</a>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <a href={googlePlay}>
          <img src="/images/googlePlayBadge.svg" style={{ height: "48px" }} />
        </a>
        <a href={appStore}>
          <img src="/images/appstoreBadge.svg" style={{ height: "48px" }} />
        </a>
      </div>
    </div>
  </div>
</div>
    );
}

export default LeftSection;