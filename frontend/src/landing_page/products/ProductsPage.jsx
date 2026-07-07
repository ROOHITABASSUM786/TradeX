import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Hero />
        
      <LeftSection
        imageUrl="images/tradeX.png"
        productName="TradeX"
        productDescription=" Our ultra-fast flagship trading platform with streaming market data,
  advanced charts, an elegant UI, and more. Enjoy the TradeX experience
  seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <RightSection imageUrl="images/console.png"
        productName="Hub"
        productDescription=" The central dashboard for your TradeX account. Gain insights into
  your trades and investments with in-depth reports and visualisations."
      
        learnMore=""
       />
      <LeftSection
        imageUrl="images/coin.png"
        productName="Grow"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to
  your Demat account. Enjoy the investment experience on your Android
  and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <RightSection imageUrl="images/tradexconnect.png"
        productName="TradeX Connect API"
        productDescription="  Build powerful trading platforms and experiences with our super
  simple HTTP/JSON APIs. If you are a startup, build your investment
  app and showcase it to our clientbase."
        learnMore="" />
      <LeftSection
        imageUrl="images/varsity.png"
        productName="Learn"
        productDescription="  An easy to grasp, collection of stock market lessons with in-depth
  coverage and illustrations. Content is broken down into bite-size cards
  to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
   
      <Universe />
    </div>
  );
}

export default ProductsPage;
