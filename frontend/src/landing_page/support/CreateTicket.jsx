function CreateTicket() {
  const sections = [
    {
      title: "Account Opening",
      icon: "fas fa-plus-circle",
      links: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Charges at TradeX", "Getting Started"]
    },
    {
      title: "Your TradeX Account",
      icon: "fas fa-user",
      links: ["Login Credentials", "Account Modification and Segment Addition", "DP ID and bank details", "Your Profile", "Transfer and conversion of shares"]
    },
    {
      title: "Your TradeX Account",
      icon: "fas fa-chart-bar",
      links: ["Margin/leverage, Product and Order types", "TradeX Web and Mobile", "Trading FAQs", "Corporate Actions", "Sentinel", "TradeX Connect API", "Pulse and other platforms", "Stockreports+", "GTT"]
    },
    {
      title: "Funds",
      icon: "fas fa-wallet",
      links: ["Adding Funds", "Fund Withdrawal", "eMandates"]
    },
    {
      title: "Hub",
      icon: "fas fa-circle-notch",
      links: ["Reports", "Ledger", "Portfolio"]
    },
    {
      title: "Grow",
      icon: "fas fa-seedling",
      links: ["Understanding Mutual Funds", "About Grow", "Buying and Selling through Grow"]
    }
  ];

  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-3">To create a ticket select a relevant topic</h1>
        {sections.map((section, i) => (
          <div className="col-4 p-4" key={i}>
            <h5><i className={section.icon} style={{ marginRight: "8px" }}></i>{section.title}</h5>
            {section.links.map((link, j) => (
              <a href="" style={{ display: "block", textDecoration: "none", lineHeight: "2.5" }} key={j}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;