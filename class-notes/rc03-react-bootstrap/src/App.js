import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";
import MyCard from "./components/MyCard";
import dataa from "./data"  // dataa(osman) istediğimizi yazabiliriz diye yazdık

function App() {
  return (
    <div>
      <MyNavbar/>

      <Slider/>

      <MyCard veri={dataa}/>


    </div>
  );
}

export default App;
