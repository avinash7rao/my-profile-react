import Navbar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";

function App() {
  return (
    <div className="App">
      <div>
        <div class="container">
          <Navbar />
        </div>
        <div class="container">
          <Main />
        </div>
        <div class="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
