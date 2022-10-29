import "./App.css";
import "antd/dist/antd.css";
import Home from "./comps/home/Home";
import Carousel from "./comps/carousel/Carousel";

function App() {
  // https://github.com/codebuddyinterview/react/blob/main/Set3.md
  return (
    <div className="App d-flex flex-column justify-content-between overflow-hidden">
      <div>
        <Home />
      </div>
      <Carousel />
    </div>
  );
}

export default App;
