import FlexandResponsive from "./components/FlexandResponsive";
import HoverandFocus from "./components/HoverandFocus";
import Navbar from "./components/Navbar";
import SpacingandSizing from "./components/SpacingandSizing";
import Typography from "./components/Typography";

function App() {
  return (
    // <div className="bg-slate-600 h-screen">
    <div>
      <Navbar/>
      <h1>TailwindCss</h1>
      {/* <Typography/> */}
      {/* <SpacingandSizing/> */}
      {/* <HoverandFocus/> */}
      <FlexandResponsive/>
    </div>
  );
}

export default App;
