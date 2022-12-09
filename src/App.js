import Navbar from "./components/Navbar";

import "./App.css";

//links arr
const linksArr = ["Products", "Services", "About us", "Contact us"];
function App() {
  return (
    <div>
      <Navbar links={linksArr} />
    </div>
  );
}

export default App;
