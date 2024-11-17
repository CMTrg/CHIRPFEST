import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Lineup from "./Components/LineUpPage";
import TicketPage from "./Components/TicketPage";
import StagePage from "./Components/StagePage";
import ShopPage from "./Components/ShopPage";
import LocationPage from "./Components/LocationPage";
import ContactPage from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>  
      <div className="container">
      <LandingPage></LandingPage>
      <Lineup></Lineup>
      <TicketPage></TicketPage>
      <StagePage></StagePage>
      <ShopPage></ShopPage>
      <LocationPage></LocationPage>
      <ContactPage></ContactPage>
      </div>
    </>

    
  );
}

export default App;
